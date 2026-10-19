/** @format */

import React, { useEffect, useRef } from "react";
import "./halloween.css";

// Halloween hero decor, ported from NailsByClemi (minus the scarecrow and its
// sounds): bats, cobwebs, a pumpkin, and glossy spiders that wander the hero,
// plus one that now and then lowers itself on a thread. Shown instead of the
// serum drops while isHalloween() (season.js) is true. See HALLOWEEN.md.

const BAT =
  '<path class="wing" d="M20 14c-3-6-9-9-18-8 4 2 5 5 5 8-2 0-4 1-5 3 4-1 7 0 9 3 1-3 4-4 9-4z"/>' +
  '<path class="wing" d="M20 14c3-6 9-9 18-8-4 2-5 5-5 8 2 0 4 1 5 3-4-1-7 0-9 3-1-3-4-4-9-4z"/>' +
  '<ellipse cx="20" cy="16" rx="3.2" ry="5"/><path d="M17.5 11.5l1-4 1.5 2 1.5-2 1 4z"/>';

const WEB_PATHS = (
  <>
    <path d="M0 0L120 0M0 0L105 60M0 0L60 105M0 0L0 120M0 0L100 100" />
    <path d="M30 0Q26 26 0 30M60 0Q52 52 0 60M90 0Q78 78 0 90M118 0Q104 104 0 118" />
  </>
);

// Left legs: joint, control point, tip. Right legs are mirrored around x = 50.
const LEGS = [
  [[45, 38], [28, 22], [12, 12]],
  [[44, 43], [24, 34], [6, 34]],
  [[44, 49], [24, 54], [8, 62]],
  [[45, 55], [28, 68], [16, 90]],
];

function legs() {
  let out = "";
  [1, -1].forEach((side) => {
    LEGS.forEach((l, i) => {
      const p = l.map((pt) => [side === 1 ? pt[0] : 100 - pt[0], pt[1]]);
      const d = "M" + p[0] + " Q" + p[1] + " " + p[2];
      const phase = (i + (side === 1 ? 0 : 1)) % 2 ? "b" : "a";
      out +=
        '<g class="hw-leg ' + phase + '" style="transform-origin:' + p[0][0] + "px " + p[0][1] + 'px">' +
        '<path d="' + d + '" stroke="#5a5348" stroke-width="3.8" fill="none" stroke-linecap="round"/>' +
        '<path d="' + d + '" stroke="#dcc389" stroke-width="1.2" fill="none" stroke-linecap="round" opacity=".75" transform="translate(-.7 -.7)"/></g>';
    });
  });
  return out;
}

const SPIDER =
  '<svg viewBox="0 0 100 100" aria-hidden="true">' + legs() +
  '<ellipse cx="50" cy="62" rx="14" ry="18" fill="url(#hw-body)"/>' +
  '<ellipse cx="50" cy="40" rx="9" ry="9.5" fill="url(#hw-body)"/>' +
  '<path d="M50 54l4 8-4 8-4-8z" fill="#c9a961" opacity=".9"/>' +
  '<ellipse cx="44" cy="55" rx="4" ry="7" fill="#fff" opacity=".16" transform="rotate(-12 44 55)"/>' +
  '<circle cx="46.5" cy="34" r="2" fill="#ff3d3d"/><circle cx="53.5" cy="34" r="2" fill="#ff3d3d"/>' +
  '<circle cx="46" cy="33.4" r=".7" fill="#fff"/><circle cx="53" cy="33.4" r=".7" fill="#fff"/></svg>';

const Halloween = () => {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const size = () => ({ w: layer.clientWidth, h: layer.clientHeight });
    let { w, h } = size();
    const els = [];

    const make = (cls = "") => {
      const el = document.createElement("div");
      el.className = "hw-spider " + cls;
      el.innerHTML = SPIDER;
      layer.appendChild(el);
      els.push(el);
      return el;
    };

    const pick = (s) => {
      const m = 40;
      s.tx = m + Math.random() * (w - 2 * m);
      s.ty = m + Math.random() * (h - 2 * m);
      s.top = 55 + Math.random() * 55;
    };

    const spiders = [];
    const count = w < 768 ? 2 : 3;
    for (let i = 0; i < count; i++) {
      const s = {
        el: make(),
        x: Math.random() * w,
        y: Math.random() * h,
        a: Math.random() * Math.PI * 2, // heading, 0 = up
        speed: 0,
        top: 55,
        pause: Math.random() * 2,
        tx: 0,
        ty: 0,
      };
      pick(s);
      spiders.push(s);
    }

    let raf = 0;
    let prev = performance.now();
    const frame = (now) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      spiders.forEach((s) => {
        if (s.pause > 0) {
          s.pause -= dt;
          s.speed = 0;
          s.el.classList.remove("walking");
        } else {
          const dx = s.tx - s.x;
          const dy = s.ty - s.y;
          if (Math.hypot(dx, dy) < 12) {
            s.pause = 0.6 + Math.random() * 2.4;
            pick(s);
          } else {
            let diff = Math.atan2(dx, -dy) - s.a;
            diff = Math.atan2(Math.sin(diff), Math.cos(diff));
            s.a += Math.max(-4 * dt, Math.min(4 * dt, diff));
            // slow down while turning sharply, so it pivots like a real one
            const target = Math.abs(diff) > 0.9 ? 12 : s.top;
            s.speed += (target - s.speed) * Math.min(1, dt * 5);
            s.x += Math.sin(s.a) * s.speed * dt;
            s.y -= Math.cos(s.a) * s.speed * dt;
            s.el.classList.add("walking");
          }
        }
        s.el.style.transform =
          "translate(" + s.x.toFixed(1) + "px," + s.y.toFixed(1) + "px) rotate(" + s.a.toFixed(3) + "rad)";
      });
      raf = requestAnimationFrame(frame);
    };

    let visible = true;
    const play = () => {
      if (!raf && visible && !document.hidden) {
        prev = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    const pause = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => (document.hidden ? pause() : play());
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    const ro = new ResizeObserver(() => ({ w, h } = size()));

    // The one on a thread: drops in from the top every so often, dangles,
    // then climbs back out.
    const dangler = document.createElement("div");
    dangler.className = "hw-dangler";
    dangler.innerHTML = '<span class="hw-thread"></span><div class="hw-spider walking">' + SPIDER + "</div>";
    layer.appendChild(dangler);
    els.push(dangler);
    let dropTimer = 0;
    let anim = null;
    const drop = () => {
      const depth = 160 + Math.random() * Math.min(240, h * 0.35);
      dangler.style.left = 30 + Math.random() * (w - 90) + "px";
      const down = "translateY(" + depth + "px)";
      anim = dangler.animate(
        [
          { transform: "translateY(0)", offset: 0 },
          { transform: down, offset: 0.3 },
          { transform: "translateY(" + (depth - 22) + "px)", offset: 0.45 },
          { transform: down, offset: 0.6 },
          { transform: "translateY(" + (depth - 14) + "px)", offset: 0.75 },
          { transform: down, offset: 0.85 },
          { transform: "translateY(0)", offset: 1 },
        ],
        { duration: 9000, easing: "ease-in-out" },
      );
      anim.onfinish = () => {
        dropTimer = setTimeout(drop, 15000 + Math.random() * 20000);
      };
    };
    dropTimer = setTimeout(drop, 4000);

    io.observe(layer);
    ro.observe(layer);
    document.addEventListener("visibilitychange", onVisibility);
    play();

    return () => {
      pause();
      io.disconnect();
      ro.disconnect();
      clearTimeout(dropTimer);
      anim?.cancel();
      document.removeEventListener("visibilitychange", onVisibility);
      els.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div ref={layerRef} className="hw-layer" aria-hidden="true">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <radialGradient id="hw-body" cx=".35" cy=".3" r=".8">
            <stop offset="0" stopColor="#dcc389" />
            <stop offset=".45" stopColor="#5a5348" />
            <stop offset="1" stopColor="#0e0d0c" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="hw-web" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
        {WEB_PATHS}
      </svg>
      <svg className="hw-web right" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
        {WEB_PATHS}
      </svg>
      <div className="absolute inset-0">
        {[0, 1, 2].map((i) => (
          <svg key={i} className="hw-bat" viewBox="0 0 40 28" dangerouslySetInnerHTML={{ __html: BAT }} />
        ))}
      </div>
      <svg className="hw-pumpkin" viewBox="0 0 80 70">
        <path d="M38 12c0-5 2-8 6-9" stroke="#6bbf59" strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="22" cy="40" rx="18" ry="24" fill="#e8620c" />
        <ellipse cx="58" cy="40" rx="18" ry="24" fill="#e8620c" />
        <ellipse cx="40" cy="40" rx="20" ry="26" fill="#ff7a1a" />
        <path d="M26 34l7 10-14 0zM54 34l7 10-14 0z" fill="#1c1b19" />
        <path d="M24 52q16 14 32 0l-4-2-4 4-4-4-4 4-4-4-4 4-4-4z" fill="#1c1b19" />
      </svg>
    </div>
  );
};

export default Halloween;

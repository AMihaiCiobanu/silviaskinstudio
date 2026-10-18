/** @format */

import React, { useEffect, useRef } from "react";

// Liquid-gold "serum" drops behind the hero title: a few spheres raymarched in
// a fragment shader and blended with a smooth union, so they merge and part as
// they drift. Raw WebGL instead of three.js keeps this to a few KB.

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;
uniform vec2 uSpread;

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float map(vec3 p) {
  float t = uTime * 0.22;
  vec3 s = vec3(uSpread, 1.0);
  float d = length(p - s * vec3(sin(t) * 1.1, cos(t * 1.3) * 0.55, sin(t * 0.7) * 0.4)) - 0.5;
  d = smin(d, length(p - s * vec3(cos(t * 0.8) * 1.5, sin(t * 1.1) * 0.8, cos(t * 0.5) * 0.5)) - 0.38, 0.6);
  d = smin(d, length(p - s * vec3(sin(t * 0.6 + 2.0) * 1.7, cos(t * 0.9 + 1.0) * 0.9, 0.2)) - 0.32, 0.6);
  d = smin(d, length(p - s * vec3(cos(t * 1.2 + 4.0) * 1.2, sin(t * 0.7 + 3.0) * 1.0, -0.3)) - 0.26, 0.6);
  d = smin(d, length(p - vec3(uPointer * uSpread * vec2(1.8, 1.1), 0.4)) - 0.22, 0.7);
  return d;
}

vec3 normalAt(vec3 p) {
  vec2 e = vec2(0.002, -0.002);
  return normalize(
    e.xyy * map(p + e.xyy) + e.yyx * map(p + e.yyx) +
    e.yxy * map(p + e.yxy) + e.xxx * map(p + e.xxx));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
  vec3 ro = vec3(0.0, 0.0, 4.0);
  vec3 rd = normalize(vec3(uv, -1.6));

  // March, remembering where the ray came closest to a drop: rays that just
  // miss the silhouette still get partial coverage, which anti-aliases the
  // edge instead of a hard hit/miss step.
  float t = 0.0;
  float minD = 10.0;
  float tMin = 0.0;
  bool hit = false;
  for (int i = 0; i < 64; i++) {
    float d = map(ro + rd * t);
    if (d < minD) { minD = d; tMin = t; }
    if (d < 0.001) { hit = true; break; }
    t += d;
    if (t > 8.0) break;
  }

  vec3 gold = vec3(0.79, 0.66, 0.38);
  float g = exp(-minD * 5.0) * 0.18;
  vec4 col = vec4(gold * g * g, g);

  // World-space size of one pixel at the closest-approach distance.
  float px = tMin / (1.6 * min(uRes.x, uRes.y));
  float cover = hit ? 1.0 : 1.0 - smoothstep(0.0, px * 1.5, minD);

  if (cover > 0.0) {
    vec3 p = ro + rd * (hit ? t : tMin);
    vec3 n = normalAt(p);
    vec3 v = -rd;
    vec3 l = normalize(vec3(-0.5, 0.8, 0.6));
    float diff = max(dot(n, l), 0.0);
    float spec = pow(max(dot(reflect(-l, n), v), 0.0), 40.0);
    float fres = pow(1.0 - max(dot(n, v), 0.0), 2.5);
    vec3 r = reflect(rd, n);
    vec3 env = mix(vec3(0.11, 0.1, 0.09), vec3(1.0, 0.92, 0.75), smoothstep(-0.2, 0.9, r.y));
    vec3 c = gold * (0.12 + 0.5 * diff) + env * gold * 0.45 + spec * vec3(1.0, 0.96, 0.88) + fres * gold * 0.8;
    col = mix(col, vec4(min(c, vec3(1.0)), 1.0), cover);
  }

  // Dim whatever drifts behind the title so the text always reads first.
  float centre = mix(0.4, 1.0, smoothstep(0.12, 0.7, length(uv * vec2(0.75, 1.3))));
  gl_FragColor = vec4(col.rgb * centre * centre, col.a * centre);
}
`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

const SerumDrops = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uPointer = gl.getUniformLocation(prog, "uPointer");
    const uSpread = gl.getUniformLocation(prog, "uSpread");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0.6, y: -0.4, tx: 0.6, ty: -0.4 };

    // Render below device resolution: the drops are soft, and raymarching
    // every pixel of a retina phone screen costs far more than it shows.
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.75;
      const k = Math.min(scale, Math.sqrt(1100000 / Math.max(w * h, 1)));
      canvas.width = Math.round(w * k);
      canvas.height = Math.round(h * k);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      // Landscape: spread the drops sideways. Portrait (uv is then normalised
      // by width): keep them narrow and let them fill the height instead.
      const aspect = w / Math.max(h, 1);
      if (aspect >= 1) gl.uniform2f(uSpread, Math.min(aspect, 1.8), 1);
      else gl.uniform2f(uSpread, 0.6, Math.min(1 / aspect, 2.4) * 0.8);
    };

    let raf = 0;
    let visible = true;
    let last = 0;
    const start = performance.now();

    const draw = (now) => {
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;
      gl.uniform1f(uTime, (now - start) / 1000 + 12);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return; // ~30fps is plenty for a slow drift
      last = now;
      draw(now);
    };

    const play = () => {
      if (!raf && visible && !document.hidden && !reduceMotion) raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onPointer = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.ty = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    const onVisibility = () => (document.hidden ? pause() : play());

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(start);
    });

    resize();
    draw(start);
    canvas.style.opacity = "1";
    ro.observe(canvas);
    io.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    play();

    return () => {
      pause();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`opacity-0 transition-opacity duration-[2000ms] ease-out ${className}`}
    />
  );
};

export default SerumDrops;

/** @format */

import React, { lazy, Suspense, useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import SerumDrops from "../ui/SerumDrops";
// HALLOWEEN:start
import { isHalloween } from "../seasonal/season";
const Halloween = lazy(() => import("../seasonal/Halloween"));
// HALLOWEEN:end

// Start the WebGL drops only once the page has loaded and gone idle, so the
// shader never competes with the title for first paint.
const useAfterLoadIdle = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let idleId;
    let timer;
    const go = () => {
      timer = setTimeout(() => {
        idleId = (window.requestIdleCallback || ((cb) => setTimeout(cb, 1)))(
          () => setReady(true),
          { timeout: 2000 },
        );
      }, 600);
    };
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
    return () => {
      window.removeEventListener("load", go);
      clearTimeout(timer);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
    };
  }, []);
  return ready;
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const showDrops = useAfterLoadIdle();

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] },
        };

  // The title and tagline are the largest paint on the page: they slide in but
  // stay opaque, so the browser counts them as painted on the first frame
  // (an opacity-0 start would push Largest Contentful Paint past the fade).
  const rise = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { y: 24 },
          animate: { y: 0 },
          transition: { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="home"
      className="scroll-mt-16 relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Warm pool of light behind the title — replaces the old gold blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 40%, rgba(201,169,97,0.16) 0%, rgba(201,169,97,0.05) 35%, transparent 70%)",
        }}
      />

      {/* Liquid-gold serum drops (WebGL), with a dark scrim keeping the title legible */}
      {/* HALLOWEEN:start */}
      {showDrops && isHalloween() ? (
        <Suspense fallback={null}>
          <Halloween />
        </Suspense>
      ) : (
        /* HALLOWEEN:end */
        showDrops && (
          <SerumDrops className="absolute inset-0 w-full h-full pointer-events-none" />
        )
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 50%, rgba(28,27,25,0.55) 0%, rgba(28,27,25,0.25) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-8 py-28 max-w-4xl mx-auto">
        <m.p {...reveal(0.1)} className="eyebrow text-gold/90">
          Langham &middot; Colchester
        </m.p>

        <m.h1
          {...rise(0.25)}
          className="mt-8 font-serif font-light text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em]"
        >
          Silvia Skin Studio
        </m.h1>

        <m.div {...reveal(0.4)} className="rule-ornament mt-10 opacity-70">
          <span />
        </m.div>

        <m.p
          {...rise(0.5)}
          className="mt-10 font-serif font-light italic text-white/75 text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl mx-auto"
        >
          Advanced skincare and massage therapy in Colchester — where clinical
          results meet deep quiet.
        </m.p>

        <m.p
          {...reveal(0.6)}
          className="mt-8 eyebrow text-white/55 text-[10px]"
        >
          Level 5 Qualified Aesthetician
        </m.p>

        <m.div
          {...reveal(0.75)}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = "tel:+447427619245")}
            data-analytics="hero-book"
            className="w-full sm:w-auto min-w-[220px]"
          >
            Book Appointment
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto min-w-[220px] text-white/80 border-white/25 hover:text-charcoal hover:border-white"
          >
            View Treatments
          </Button>
        </m.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <m.div
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { delay: 1.4, duration: 1.2 }}
        className="hidden md:block absolute bottom-14 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
        <span className="eyebrow text-white/50 text-[9px] mt-3 block">
          Scroll
        </span>
      </m.div>
    </section>
  );
};

export default Hero;

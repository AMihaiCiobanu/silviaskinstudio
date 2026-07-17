/** @format */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const SectionTitle = ({ title, subtitle, centered = true, isDark = false }) => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div className={`mb-16 md:mb-20 ${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <motion.span {...reveal()} className="eyebrow block text-gold mb-5">
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        {...reveal(0.1)}
        className={`font-serif font-light text-4xl md:text-5xl lg:text-6xl leading-[1.1] ${
          isDark ? "text-white" : "text-charcoal"
        } ${centered ? "max-w-3xl mx-auto" : "max-w-2xl"}`}
      >
        {title}
      </motion.h2>

      <motion.div
        {...reveal(0.2)}
        className={`mt-8 ${centered ? "rule-ornament" : ""}`}
      >
        {centered ? (
          <span />
        ) : (
          <span className="block h-px w-16 bg-gold/40" />
        )}
      </motion.div>
    </div>
  );
};

export default SectionTitle;

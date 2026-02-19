/** @format */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const SectionTitle = ({ title, subtitle, centered = true, isDark = false }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <motion.span
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          className={`block text-gold text-sm font-medium tracking-widest uppercase mb-2 font-sans`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={
          shouldReduceMotion ? undefined : { duration: 0.5, delay: 0.1 }
        }
        className={`text-3xl md:text-4xl font-serif ${isDark ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </motion.h2>
      <div
        className={`mt-4 h-1 w-24 bg-gold/30 rounded-full ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
};

export default SectionTitle;

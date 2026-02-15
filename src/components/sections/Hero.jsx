/** @format */

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-charcoal/95 to-gold/20"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-sans font-medium">
            Welcome to Your Sanctuary
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
            Silvia Skin Studio
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto tracking-wide">
            Expert Skin Specialist & Massage Therapy in the UK.
            <br className="hidden md:block" />
            Where advanced aesthetics meet deep relaxation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="min-w-[180px]">
              Book Appointment
            </Button>
            <Button
              variant="outline"
              className="min-w-[180px] text-white border-white hover:bg-white hover:text-charcoal hover:border-white"
            >
              View Treatments
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto" />
        <span className="text-white/60 text-[10px] uppercase tracking-widest mt-2 block">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;

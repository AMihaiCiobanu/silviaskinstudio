/** @format */

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-charcoal/95 to-gold/20"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 py-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <span className="block text-gold text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase font-sans font-medium">
            Welcome to Your Sanctuary
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight px-4">
            Silvia Skin Studio
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed px-4">
            Expert Skin Specialist & Massage Therapy in the UK.
            <br className="hidden sm:block" />
            Where advanced aesthetics meet deep relaxation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 px-4">
            <Button
              variant="primary"
              className="w-full sm:w-auto min-w-[200px] py-4 text-base"
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto min-w-[200px] py-4 text-base text-white border-white hover:bg-white hover:text-charcoal hover:border-white"
            >
              View Treatments
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
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

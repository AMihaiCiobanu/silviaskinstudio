/** @format */

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { servicesData } from "../../data/services";
import * as analytics from "../../utils/analytics";

const categories = [
  { id: "facials", label: "Facials" },
  { id: "skinBoosters", label: "Skin Boosters" },
  { id: "massage", label: "Massage" },
  { id: "browsLashes", label: "Brows & Lashes" },
  { id: "nails", label: "Nails" },
  { id: "packages", label: "Packages" },
];

const categoryDescriptions = {
  facials:
    "We use premium Dermalogica products, globally trusted for their science-backed formulations that deliver visible results for all skin types.",
  skinBoosters:
    "Our treatments feature advanced products including Profhilo, Nucleofill, and Sunekos for enhanced skin hydration and rejuvenation.",
  massage:
    "Relax with therapeutic massages using Bellabacci Balm and pure grapeseed oil to nourish your skin and soothe your muscles.",
  browsLashes:
    "We exclusively use Nouveau Lashes products, renowned for their quality and long-lasting, natural-looking results.",
  nails:
    "Professional nail care using The Gel Bottle and OPI, industry-leading brands known for their durability and stunning color range.",
  packages:
    "Curated treatment combinations designed to give you the ultimate pampering experience at exceptional value.",
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-16 py-28 md:py-40 bg-charcoal relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <SectionTitle
          title="Curated Treatments"
          subtitle="Our Menu"
          centered={true}
          isDark={true}
        />

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Treatment categories"
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 mb-12 pb-6 border-b border-white/10"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  analytics.event({
                    action: "click",
                    category: "Service Category",
                    label: category.label,
                  });
                  setActiveCategory(category.id);
                }}
                className={`eyebrow relative pb-2 transition-colors duration-500 ease-luxe cursor-pointer ${
                  isActive
                    ? "text-gold"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                {category.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-px bg-gold transition-transform duration-500 ease-luxe ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${activeCategory}`}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.3 }}
            className="mb-14 text-center"
          >
            <p className="font-serif italic text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              {categoryDescriptions[activeCategory]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Services Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -16 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
              }
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {servicesData[activeCategory]?.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  fullService={service}
                  onBook={() => (window.location.href = "tel:+447427619245")}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;

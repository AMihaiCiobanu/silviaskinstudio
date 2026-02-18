/** @format */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <section
      id="services"
      className="scroll-mt-16 py-16 md:py-20 lg:py-24 bg-charcoal relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gold/5 rounded-r-full pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Curated Treatments"
          subtitle="Our Menu"
          centered={true}
          isDark={true}
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                analytics.event({
                  action: "click",
                  category: "Service Category",
                  label: category.label,
                });
                setActiveCategory(category.id);
              }}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer border border-transparent ${
                activeCategory === category.id
                  ? "bg-gold text-charcoal shadow-lg scale-105 font-semibold"
                  : "bg-butter/80 text-charcoal hover:bg-butter hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${activeCategory}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mb-8 md:mb-10 text-center"
          >
            <p className="text-butter/90 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              {categoryDescriptions[activeCategory]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Services Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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

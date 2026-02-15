import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { servicesData } from '../../data/services';

const categories = [
  { id: 'facials', label: 'Facials' },
  { id: 'skinBoosters', label: 'Skin Boosters' },
  { id: 'massage', label: 'Massage' },
  { id: 'browsLashes', label: 'Brows & Lashes' },
  { id: 'nails', label: 'Nails' },
  { id: 'packages', label: 'Packages' },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Curated Treatments" 
          subtitle="Our Menu"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gold text-white shadow-lg scale-105' 
                  : 'bg-butter text-charcoal/70 hover:bg-gold/10 hover:text-gold'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesData[activeCategory]?.map((service, index) => (
                <ServiceCard 
                  key={index}
                  {...service}
                  onBook={() => window.location.href = 'tel:+447427619245'}
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

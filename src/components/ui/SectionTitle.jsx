import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-gold text-sm font-medium tracking-widest uppercase mb-2 font-sans"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-serif text-charcoal"
      >
        {title}
      </motion.h2>
      <div className={`mt-4 h-1 w-24 bg-gold/30 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;

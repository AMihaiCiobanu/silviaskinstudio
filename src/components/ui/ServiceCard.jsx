import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Button from './Button';

const ServiceCard = ({ title, description, benefits, price, duration, onBook }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-butter p-6 rounded-2xl shadow-md border border-gold/20 hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="mb-4">
        <h3 className="text-xl font-serif text-charcoal mb-2">{title}</h3>
        {duration && (
          <div className="flex items-center text-charcoal/60 text-sm mb-3">
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{duration}</span>
          </div>
        )}
        <p className="text-charcoal/80 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
      </div>

      {benefits && benefits.length > 0 && (
        <ul className="mb-6 space-y-2 flex-grow">
          {benefits.slice(0, 3).map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-charcoal/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xl font-serif text-gold font-medium">{price}</span>
        <Button variant="outline" size="sm" onClick={onBook} className="px-4 py-2 text-xs">
          Book Now
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

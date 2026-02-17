/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Info } from "lucide-react";
import Button from "./Button";
import ServiceModal from "./ServiceModal";

const ServiceCard = ({
  title,
  description,
  benefits,
  price,
  duration,
  onBook,
  fullService,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if service has extended information
  const hasExtendedInfo =
    fullService?.fullDescription ||
    fullService?.detailedBenefits ||
    fullService?.recommendedFor ||
    fullService?.treatmentFrequency;

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-butter p-6 rounded-2xl shadow-md border border-gold/20 hover:shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col h-full group"
      >
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-serif text-charcoal">{title}</h3>
            {hasExtendedInfo && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="p-1.5 rounded-full bg-gold/10 hover:bg-gold/20 transition-colors flex-shrink-0 cursor-pointer"
                aria-label="View details"
                title="View full details"
              >
                <Info className="w-4 h-4 text-gold" />
              </button>
            )}
          </div>
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
              <li
                key={index}
                className="flex items-start text-sm text-charcoal/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto space-y-3">
          {hasExtendedInfo && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full text-sm text-gold hover:text-gold/80 font-medium flex items-center justify-start gap-2 transition-colors group/link cursor-pointer"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </button>
          )}

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between gap-4">
              <span
                className="text-xl font-serif text-charcoal font-medium flex-shrink-0"
                style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
              >
                {price}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={onBook}
                className="px-4 py-2 text-xs whitespace-nowrap"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Details Modal */}
      {fullService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={fullService}
          onBook={onBook}
        />
      )}
    </>
  );
};

export default ServiceCard;

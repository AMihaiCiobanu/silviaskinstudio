/** @format */

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Star, Calendar } from "lucide-react";
import Button from "./Button";

const ServiceModal = ({ isOpen, onClose, service, onBook }) => {
  // Close modal on ESC key press and hide navbar on mobile
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  const hasExtendedInfo =
    service.fullDescription ||
    service.detailedBenefits ||
    service.recommendedFor ||
    service.treatmentFrequency;

  // If no extended info, don't show modal
  if (!hasExtendedInfo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-butter rounded-3xl shadow-2xl max-w-2xl w-full mx-auto my-8 relative border border-gold/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-colors z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>

              {/* Content */}
              <div className="p-8 max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-serif text-charcoal mb-3">
                    {service.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal/70">
                    {service.duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                    {service.price && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className="font-medium"
                          style={{ fontVariantNumeric: "lining-nums" }}
                        >
                          {service.price}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Full Description */}
                {service.fullDescription && (
                  <div className="mb-6">
                    <p className="text-charcoal/80 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>
                )}

                {/* Detailed Benefits */}
                {service.detailedBenefits &&
                  service.detailedBenefits.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-serif text-charcoal mb-3 flex items-center gap-2">
                        <span className="w-6 h-px bg-gold"></span>
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.detailedBenefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start text-charcoal/80"
                          >
                            <span className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Recommended For */}
                {service.recommendedFor && (
                  <div className="mb-6">
                    <h3 className="text-xl font-serif text-charcoal mb-3 flex items-center gap-2">
                      <span className="w-6 h-px bg-gold"></span>
                      Recommended For
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed pl-5">
                      {service.recommendedFor}
                    </p>
                  </div>
                )}

                {/* Treatment Frequency */}
                {service.treatmentFrequency && (
                  <div className="mb-8">
                    <h3 className="text-xl font-serif text-charcoal mb-3 flex items-center gap-2">
                      <span className="w-6 h-px bg-gold"></span>
                      Treatment Frequency
                    </h3>
                    <div className="flex items-start gap-3 pl-5">
                      <Calendar className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <p className="text-charcoal/80 leading-relaxed">
                        {service.treatmentFrequency}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="flex pt-6 border-t border-charcoal/10">
                  <Button
                    onClick={() => {
                      onBook();
                      onClose();
                    }}
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;

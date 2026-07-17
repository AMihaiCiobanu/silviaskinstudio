/** @format */

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar } from "lucide-react";
import Button from "./Button";
import { useModalState } from "../ModalProvider";

const ServiceModal = ({ isOpen, onClose, service, onBook }) => {
  const { setHasModalOpen } = useModalState();
  // Close modal on ESC key press and hide navbar on mobile
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
      setHasModalOpen(true);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
      setHasModalOpen(false);
    };
  }, [isOpen, onClose, setHasModalOpen]);

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
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-butter rounded-soft max-w-2xl w-full mx-auto my-8 relative border border-gold/25 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 text-charcoal/40 hover:text-gold transition-colors duration-500 z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="mb-10">
                  <h2 className="font-serif font-light text-3xl md:text-4xl text-charcoal leading-tight mb-5 pr-10">
                    {service.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-6 numerals">
                    {service.duration && (
                      <div className="flex items-center gap-2 text-charcoal/50 text-xs">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                    {service.price && (
                      <span className="font-serif text-xl text-charcoal">
                        {service.price}
                      </span>
                    )}
                  </div>
                  <div className="mt-8 h-px w-full bg-gold/20" />
                </div>

                {/* Full Description */}
                {service.fullDescription && (
                  <div className="mb-10">
                    <p className="text-charcoal/70 font-light leading-[1.9]">
                      {service.fullDescription}
                    </p>
                  </div>
                )}

                {/* Detailed Benefits */}
                {service.detailedBenefits &&
                  service.detailedBenefits.length > 0 && (
                    <div className="mb-10">
                      <h3 className="eyebrow text-charcoal/45 mb-5 flex items-center gap-4">
                        <span className="w-6 h-px bg-gold" aria-hidden="true"></span>
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.detailedBenefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start text-charcoal/70 font-light"
                          >
                            <span className="w-1 h-1 rotate-45 bg-gold mt-2.5 mr-4 flex-shrink-0" aria-hidden="true" />
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Recommended For */}
                {service.recommendedFor && (
                  <div className="mb-10">
                    <h3 className="eyebrow text-charcoal/45 mb-5 flex items-center gap-4">
                      <span className="w-6 h-px bg-gold" aria-hidden="true"></span>
                      Recommended For
                    </h3>
                    <p className="text-charcoal/70 font-light leading-[1.9] pl-10">
                      {service.recommendedFor}
                    </p>
                  </div>
                )}

                {/* Treatment Frequency */}
                {service.treatmentFrequency && (
                  <div className="mb-12">
                    <h3 className="eyebrow text-charcoal/45 mb-5 flex items-center gap-4">
                      <span className="w-6 h-px bg-gold" aria-hidden="true"></span>
                      Treatment Frequency
                    </h3>
                    <div className="flex items-start gap-3 pl-10">
                      <Calendar className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <p className="text-charcoal/70 font-light leading-[1.9]">
                        {service.treatmentFrequency}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="flex pt-8 border-t border-charcoal/10">
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

/** @format */

import React, { useState } from "react";
import { ArrowRight, Clock, Info } from "lucide-react";
import Button from "./Button";
import ServiceModal from "./ServiceModal";
import * as analytics from "../../utils/analytics";

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
      <div className="bg-butter rounded-soft border border-gold/15 hover:border-gold/45 transition-colors duration-500 ease-luxe p-8 flex flex-col h-full">
        <div className="mb-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-serif font-normal text-2xl leading-snug text-charcoal">
              {title}
            </h3>
            {hasExtendedInfo && (
              <button
                onClick={() => {
                  analytics.event({
                    action: "click",
                    category: "Service",
                    label: `View More - ${title} (Info Icon)`,
                  });
                  setIsModalOpen(true);
                }}
                className="p-1.5 text-gold/60 hover:text-gold transition-colors flex-shrink-0 cursor-pointer"
                aria-label={`View details for ${title}`}
                title="View full details"
              >
                <Info className="w-4 h-4" />
              </button>
            )}
          </div>
          {duration && (
            <div className="flex items-center text-charcoal/45 text-xs mb-4 numerals">
              <Clock className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
              <span>{duration}</span>
            </div>
          )}
          <p className="text-charcoal/65 text-sm leading-relaxed font-light line-clamp-3">
            {description}
          </p>
        </div>

        {benefits && benefits.length > 0 && (
          <ul className="mb-8 space-y-2.5 flex-grow">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li
                key={index}
                className="flex items-start text-sm font-light text-charcoal/60"
              >
                <span
                  className="w-1 h-1 rotate-45 bg-gold mt-2 mr-3 flex-shrink-0"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto space-y-5">
          {hasExtendedInfo && (
            <button
              onClick={() => {
                analytics.event({
                  action: "click",
                  category: "Service",
                  label: `View More - ${title} (Read More)`,
                });
                setIsModalOpen(true);
              }}
              className="eyebrow text-gold hover:text-gold-dark flex items-center gap-2 transition-colors group/link cursor-pointer"
            >
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-500 ease-luxe" />
            </button>
          )}

          <div className="border-t border-charcoal/10 pt-5 flex items-center justify-between gap-4">
            <span className="numerals font-serif text-xl text-charcoal flex-shrink-0">
              {price}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={onBook}
              data-analytics={`service-card-${title}`}
              className="whitespace-nowrap"
            >
              Book
            </Button>
          </div>
        </div>
      </div>

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

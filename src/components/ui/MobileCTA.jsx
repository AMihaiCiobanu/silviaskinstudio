/** @format */

import React, { useEffect, useState } from "react";
import { Phone, Instagram } from "lucide-react";
import { useModalState } from "../ModalProvider";
import { studio } from "../../data/studio";

const MobileCTA = () => {
  const { hasModalOpen } = useModalState();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const threshold = 200;
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (hasModalOpen) {
    return null;
  }

  return (
    <div className="md:hidden fixed inset-x-4 bottom-4 z-40 pointer-events-none">
      <div
        className={`bg-charcoal text-white rounded-soft border border-gold/30 px-5 py-4 flex items-center justify-between gap-3 transform transition-all duration-700 ease-luxe ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col leading-none">
          <span className="eyebrow text-[9px] text-gold/70">
            Silvia Skin Studio
          </span>
          <span className="font-serif font-light text-lg text-white mt-1.5">
            Book your next treatment
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${studio.phone}`}
            className="inline-flex items-center justify-center w-11 h-11 rounded-soft bg-gold text-charcoal active:scale-95 transition-transform"
            aria-label="Call Silvia Skin Studio"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 rounded-soft text-white/70 border border-white/25 active:scale-95 transition-transform"
            aria-label="Open Silvia Skin Studio Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;


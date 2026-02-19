/** @format */

import React from "react";
import { Phone, Instagram } from "lucide-react";
import { useModalState } from "../ModalProvider";

const MobileCTA = () => {
  const { hasModalOpen } = useModalState();

  if (hasModalOpen) {
    return null;
  }

  return (
    <div className="md:hidden fixed inset-x-4 bottom-4 z-40">
      <div className="bg-charcoal text-white rounded-2xl shadow-2xl border border-gold/40 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.18em] text-white/60">
            Silvia Skin Studio
          </span>
          <span className="text-sm font-medium text-white">
            Book your next treatment
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+447427619245"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-white shadow-md active:scale-95 transition-transform"
            aria-label="Call Silvia Skin Studio"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/silviaskinstudio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white border border-white/30 active:scale-95 transition-transform"
            aria-label="Open Silvia Skin Studio Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;


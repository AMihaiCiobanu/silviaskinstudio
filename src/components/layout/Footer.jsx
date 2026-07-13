/** @format */

import React from "react";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-charcoal text-white pt-16 md:pt-20 pb-25 md:pb-10"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Info */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold">
                SILVIA
              </h3>
              <p className="text-xs tracking-[0.3em] uppercase opacity-70">
                Skin Studio
              </p>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Experience the art of skin transformation and relaxation with
              bespoke treatments tailored to your unique needs.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="https://instagram.com/silviaskinstudio"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all active:scale-95"
              >
                <Instagram size={20} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a
                href="tel:+447427619245"
                className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all active:scale-95"
              >
                <Phone size={20} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a
                href="mailto:silvia.skinstudio@gmail.com"
                className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-all active:scale-95"
              >
                <Mail size={20} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-base md:text-lg mb-4 md:mb-6">
              Explore
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/#${item.toLowerCase()}`}
                      className="text-white/70 hover:text-gold transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-gold font-serif text-base md:text-lg mb-4 md:mb-6">
              Visit Us
            </h4>
            <div className="space-y-3 md:space-y-4 text-sm text-white/70">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <span>
                  Park Ln, Langham, Colchester CO4 5WR, United Kingdom
                  <br />
                  <a
                    href="https://maps.app.goo.gl/hJs143jucsFxBwwg6"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold underline decoration-gold/30 underline-offset-4"
                  >
                    View on Google Maps
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <a href="tel:+447427619245" className="hover:text-gold">
                  +44 7427 619245
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-gold flex-shrink-0" />
                <a
                  href="mailto:silvia.skinstudio@gmail.com"
                  className="hover:text-gold"
                >
                  silvia.skinstudio@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
              <h5 className="text-gold font-serif text-sm md:text-base mb-2 md:mb-3">
                Opening Hours
              </h5>
              <div className="space-y-1">
                <p className="text-white/60 text-sm">
                  Mon - Thu: 09:30 - 19:00
                </p>
                <p className="text-white/60 text-sm">
                  Fri - Sat: 09:00 - 17:00
                </p>
                <p className="text-white/60 text-sm">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-xs text-white/40">
          <p className="text-center md:text-left">
            © 2026 Silvia Skin Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/privacy"
              className="hover:text-white transition-colors active:text-gold"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors active:text-gold"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-8 flex justify-center">
          <a
            href="https://softsapps.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Made by SoftApps"
            className="inline-flex items-center gap-2 text-xs text-white/50 opacity-90 hover:opacity-100 transition-opacity"
          >
            <span>Made by</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 380 100"
              role="img"
              aria-label="SoftApps"
              className="h-6 w-auto"
            >
              <defs>
                <linearGradient id="saLogo" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#22d3ee" />
                  <stop offset="0.5" stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <rect
                x="6"
                y="14"
                width="72"
                height="72"
                rx="20"
                fill="#0a0e1a"
              />
              <rect
                x="6"
                y="14"
                width="72"
                height="72"
                rx="20"
                fill="none"
                stroke="url(#saLogo)"
                strokeWidth="2.5"
              />
              <path
                d="M56 38 C56 31 49 29 42 29 C34 29 28 32 28 39 C28 47 37 49 42 51 C47 53 56 55 56 63 C56 70 48 72 42 72 C35 72 28 70 28 62"
                fill="none"
                stroke="url(#saLogo)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <text
                x="96"
                y="62"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontSize="42"
                fontWeight="700"
                fill="#f4f7ff"
              >
                Soft<tspan fill="url(#saLogo)">Apps</tspan>
              </text>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

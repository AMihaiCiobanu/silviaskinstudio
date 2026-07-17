/** @format */

import React from "react";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { studio } from "../../data/studio";

const socials = [
  { icon: Instagram, href: studio.instagram, label: "Instagram", external: true },
  { icon: Phone, href: `tel:${studio.phone}`, label: "Call the studio" },
  { icon: Mail, href: `mailto:${studio.email}`, label: "Email the studio" },
];

const Footer = () => {
  return (
    <footer
      className="bg-charcoal text-white pt-24 md:pt-28 pb-28 md:pb-12"
      role="contentinfo"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="leading-none">
              <h3 className="font-serif font-light text-3xl tracking-[0.12em] text-white">
                SILVIA
              </h3>
              <p className="eyebrow text-[9px] text-gold mt-2">Skin Studio</p>
            </div>
            <p className="font-serif font-light italic text-white/50 text-lg leading-relaxed max-w-sm">
              The art of skin transformation and relaxation, tailored to you.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="w-11 h-11 rounded-soft border border-white/15 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors duration-500 ease-luxe"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="eyebrow text-gold mb-8">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/#${item.toLowerCase()}`}
                      className="font-serif font-light text-lg text-white/60 hover:text-gold transition-colors duration-500 ease-luxe"
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
            <h4 className="eyebrow text-gold mb-8">Visit Us</h4>
            <address className="not-italic space-y-4 text-sm text-white/60 font-light">
              <div className="flex items-start">
                <MapPin
                  className="w-4 h-4 mr-4 mt-0.5 text-gold/70 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">
                  {studio.addressLine}
                  <br />
                  <a
                    href={studio.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold/80 hover:text-gold transition-colors underline decoration-gold/25 underline-offset-4"
                  >
                    View on Google Maps
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <Phone
                  className="w-4 h-4 mr-4 mt-0.5 text-gold/70 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${studio.phone}`}
                  className="numerals hover:text-gold transition-colors"
                >
                  {studio.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start">
                <Mail
                  className="w-4 h-4 mr-4 mt-0.5 text-gold/70 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${studio.email}`}
                  className="hover:text-gold transition-colors break-all"
                >
                  {studio.email}
                </a>
              </div>
            </address>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h5 className="eyebrow text-[10px] text-white/40 mb-4">
                Opening Hours
              </h5>
              <dl className="space-y-2 text-sm font-light">
                {studio.hours.map(({ days, opens, closes, closed }) => (
                  <div key={days} className="flex justify-between gap-4">
                    <dt className="text-white/50">{days}</dt>
                    <dd
                      className={`numerals ${closed ? "text-white/30" : "text-white/60"}`}
                    >
                      {closed ? "Closed" : `${opens} – ${closes}`}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-xs text-white/35">
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

/** @format */

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { studio } from "../../data/studio";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: studio.addressLine,
    action: { href: studio.mapsUrl, text: "Get Directions", external: true },
  },
  {
    icon: Phone,
    label: "Phone",
    value: studio.phoneDisplay,
    href: `tel:${studio.phone}`,
    note: "Available for bookings",
  },
  {
    icon: Mail,
    label: "Email",
    value: studio.email,
    href: `mailto:${studio.email}`,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-16 py-28 md:py-40 bg-butter">
      <div className="container mx-auto px-6 md:px-8">
        <SectionTitle
          title="Visit The Studio"
          subtitle="Get In Touch"
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-soft border border-gold/20 p-8 md:p-10">
              <h3 className="eyebrow text-charcoal/50 mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {details.map(({ icon: Icon, label, value, href, note, action }) => (
                  <div key={label} className="flex items-start">
                    <Icon
                      size={16}
                      className="text-gold mr-5 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="eyebrow text-charcoal/40 text-[10px] mb-2">
                        {label}
                      </p>
                      <p className="font-serif text-lg text-charcoal/90 leading-snug">
                        {href ? (
                          <a
                            href={href}
                            className="hover:text-gold transition-colors duration-500 ease-luxe"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </p>
                      {note && (
                        <p className="text-xs text-charcoal/40 mt-1.5 font-light">
                          {note}
                        </p>
                      )}
                      {action && (
                        <a
                          href={action.href}
                          {...(action.external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                          className="eyebrow text-gold text-[10px] mt-3 inline-block hover:text-gold-dark transition-colors"
                        >
                          {action.text}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-charcoal rounded-soft p-8 md:p-10">
              <h3 className="eyebrow text-gold mb-8">Opening Hours</h3>
              <dl className="space-y-4 text-sm">
                {studio.hours.map(({ days, opens, closes, closed }) => (
                  <div
                    key={days}
                    className={`flex justify-between items-baseline gap-6 pb-3 border-b border-white/10 last:border-0 last:pb-0 ${
                      closed ? "text-white/35" : "text-white/80"
                    }`}
                  >
                    <dt className="font-light">{days}</dt>
                    <dd className="numerals font-serif text-base">
                      {closed ? "Closed" : `${opens} – ${closes}`}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Map */}
          <div className="h-[420px] lg:h-full min-h-[420px] w-full bg-charcoal rounded-soft overflow-hidden relative border border-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.5636346846404!2d0.9399152999999999!3d51.9419125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d907cdbb15f535%3A0xd8de30bdd1eca755!2sSilvia%20Skin%20Studio!5e0!3m2!1sen!2sro!4v1771188094227!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Silvia Skin Studio location on Google Maps"
              className="absolute inset-0 grayscale-[0.4] contrast-[1.05]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

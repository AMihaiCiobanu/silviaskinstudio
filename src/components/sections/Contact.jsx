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

const policies = [
  {
    title: "Reservations",
    text: "My services are available by appointment. I recommend booking in advance to secure your preferred time and date.",
  },
  {
    title: "First-Time Clients",
    text: "Please arrive 15 minutes early to allow time for paperwork and to ensure you begin your treatment in a relaxed state.",
  },
  {
    title: "Cancellations",
    text: "Your appointment time is reserved especially for you. A minimum of 24 hours' notice is required for cancellations or rescheduling. Cancellations made within 24 hours may be subject to a 50% treatment fee.",
  },
  {
    title: "Gift Certificates",
    text: "Give the gift of beauty and relaxation. Gift certificates are available for any treatment, service, or product, and can be tailored to your recipient's needs.",
  },
  {
    title: "Payment",
    text: "I accept all major credit cards.",
  },
  {
    title: "General",
    text: "We reserve the right to refuse service to anyone. Prices and services are subject to change without notice.",
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
              <h3 className="eyebrow text-charcoal/65 mb-8">
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
                      <p className="eyebrow text-charcoal/65 text-[10px] mb-2">
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
                        <p className="text-xs text-charcoal/65 mt-1.5 font-light">
                          {note}
                        </p>
                      )}
                      {action && (
                        <a
                          href={action.href}
                          {...(action.external
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                          className="eyebrow text-gold-ink text-[10px] mt-3 inline-block hover:text-charcoal transition-colors"
                        >
                          {action.text}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-soft border border-gold/20 p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8">
              <img
                src="/assets/booking-qr.svg"
                width={144}
                height={144}
                alt="QR code linking to Silvia Skin Studio online booking on Fresha"
                loading="lazy"
                className="w-36 h-36 rounded-soft flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="eyebrow text-charcoal/65 mb-4">
                  Book Your Appointment
                </h3>
                <p className="font-serif text-lg text-charcoal/90 leading-snug mb-5">
                  Scan to book or discover more.
                </p>
                <a
                  href={studio.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-soft border border-charcoal/25 text-charcoal eyebrow text-[11px] fill-sweep hover:border-gold transition-colors duration-500 ease-luxe"
                >
                  Book Online
                </a>
              </div>
            </div>

            <div className="bg-charcoal rounded-soft p-8 md:p-10">
              <h3 className="eyebrow text-gold mb-8">Opening Hours</h3>
              <dl className="space-y-4 text-sm">
                {studio.hours.map(({ days, opens, closes, closed }) => (
                  <div
                    key={days}
                    className={`flex justify-between items-baseline gap-6 pb-3 border-b border-white/10 last:border-0 last:pb-0 ${
                      closed ? "text-white/50" : "text-white/80"
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

        <div className="mt-16 md:mt-20">
          <h3 className="eyebrow text-charcoal/65 mb-8 flex items-center">
            <span className="w-8 h-px bg-gold mr-4" aria-hidden="true" />
            Studio Policies
          </h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {policies.map(({ title, text }) => (
              <div key={title}>
                <dt className="font-serif text-lg text-charcoal/90 mb-2">
                  {title}
                </dt>
                <dd className="text-sm text-charcoal/70 font-light leading-relaxed">
                  {text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Contact;

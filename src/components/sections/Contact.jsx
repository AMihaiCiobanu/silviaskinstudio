/** @format */

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-butter to-charcoal/5">
      <div className="container mx-auto px-6">
        <SectionTitle title="Visit The Studio" subtitle="Get In Touch" centered={false} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-butter p-8 rounded-2xl border-2 border-gold/30 shadow-md">
              <h3 className="text-xl font-serif text-charcoal mb-6 flex items-center">
                <span className="w-1 h-6 bg-gold rounded-full mr-3"></span>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-4 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Address</p>
                    <p className="text-charcoal/70 text-sm mt-1">
                      Park Ln, Langham, Colchester CO4 5WR, United Kingdom
                    </p>
                    <a
                      href="https://maps.app.goo.gl/hJs143jucsFxBwwg6"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gold text-xs mt-2 inline-block hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-4 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <p className="text-charcoal/70 text-sm mt-1">
                      <a
                        href="tel:+447427619245"
                        className="hover:text-gold transition-colors"
                      >
                        +44 7427 619245
                      </a>
                    </p>
                    <p className="text-xs text-charcoal/50 mt-1">
                      Available for bookings
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <p className="text-charcoal/70 text-sm mt-1">
                      <a
                        href="mailto:silvia.skinstudio@gmail.com"
                        className="hover:text-gold transition-colors"
                      >
                        silvia.skinstudio@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal text-white p-8 rounded-2xl border border-gold/30 shadow-md">
              <h3 className="text-xl font-serif text-gold mb-6 flex items-center">
                <Clock className="mr-3" /> Opening Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Monday - Thursday</span>
                  <span>09:30 - 19:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Friday</span>
                  <span>09:30 - 17:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span>09:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-white/50">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full bg-charcoal rounded-2xl overflow-hidden shadow-lg relative border border-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.5636346846404!2d0.9399152999999999!3d51.9419125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d907cdbb15f535%3A0xd8de30bdd1eca755!2sSilvia%20Skin%20Studio!5e0!3m2!1sen!2sro!4v1771188094227!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Silvia Skin Studio Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

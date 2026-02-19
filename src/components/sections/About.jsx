/** @format */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Download, X } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { useModalState } from "../ModalProvider";
import { event as analyticsEvent } from "../../utils/analytics";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const { setHasModalOpen } = useModalState();

  useEffect(() => {
    if (selectedImage) {
      setHasModalOpen(true);
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      setHasModalOpen(false);
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }
  }, [selectedImage, setHasModalOpen]);
  return (
    <section
      id="about"
      className="scroll-mt-16 py-16 md:py-24 lg:py-32 bg-butter relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -50 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/assets/silvia-about.webp"
                alt="Silvia - Skin Specialist"
                loading="lazy"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-[200px]">
              <p className="text-4xl font-serif text-gold mb-1">10+</p>
              <p className="text-charcoal text-sm uppercase tracking-wider font-light">
                Years of Experience
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 50 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
          >
            <SectionTitle
              title="Welcome to Your Beauty & Wellness Experience"
              subtitle="About Silvia"
              centered={false}
            />

            <div className="space-y-6 text-charcoal/80 leading-relaxed font-light">
              <p>
                As a fully qualified{" "}
                <span className="font-medium text-gold">
                  Level 5 Aesthetician and Massage Therapist
                </span>
                , I offer professional, customised beauty and wellness
                treatments designed to enhance your natural beauty.
              </p>
              <p>
                Having spent over a decade honing my craft in premier salons, I
                founded Silvia Skin Studio to bring a higher level of
                personalised care to my clients. Specialising in advanced
                facials, therapeutic massages, manicures, and pedicures, each
                treatment is tailored to meet your individual needs and promote
                overall wellbeing.
              </p>
              <p>
                Experience the convenience and excellence of a personalised spa
                service in the comfort of our environment, designed to enhance
                your natural beauty and support your relaxation.
              </p>
            </div>

            <div className="mt-10 p-6 bg-white border border-gold/20 rounded-lg">
              <h4 className="font-serif text-lg text-charcoal mb-4">
                My Philosophy
              </h4>
              <p className="text-sm italic text-charcoal/70">
                "Great skin starts with understanding it. I believe in a
                holistic approach that combines advanced technologies with
                therapeutic touch to deliver visible results and deep
                relaxation."
              </p>
            </div>

            {/* Certifications Placeholder */}
            <div className="mt-12">
              <h4 className="font-serif text-lg text-charcoal mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-gold mr-3"></span>
                Certifications & Qualifications
              </h4>

              {/* Certificate Images Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[1, 2, 3, 4].map((i, index) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => {
                      const imageData = {
                        id: i,
                        src: `/assets/certificates/cert${String(i).padStart(5, "0")}.webp`,
                        alt: `Certificate ${i}`,
                      };

                      setSelectedImage(imageData);
                      analyticsEvent({
                        action: "open",
                        category: "Certificate",
                        label: `about-grid-cert-${i}`,
                      });
                    }}
                    className={`group relative overflow-hidden rounded-lg shadow-md h-[180px] md:h-[200px] cursor-pointer ${
                      index > 1 ? "hidden md:block" : ""
                    }`}
                  >
                    <img
                      src={`/assets/certificates/cert${String(i).padStart(5, "0")}.webp`}
                      alt={`Certificate ${i}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* CTA and PDF Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                <Link
                  to="/certificates"
                  className="w-full sm:w-auto bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-medium transition-all text-center"
                >
                  See All Certificates
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors z-10"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;

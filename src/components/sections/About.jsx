/** @format */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
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
      className="scroll-mt-16 py-28 md:py-40 bg-butter relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 32 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
            }
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-soft overflow-hidden">
              <img
                src="/assets/silvia-about.webp"
                alt="Silvia, Level 5 qualified aesthetician and massage therapist at Silvia Skin Studio, Colchester"
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-charcoal rounded-soft px-8 py-7 max-w-[210px]">
              <p className="numerals font-serif font-light text-5xl text-gold leading-none mb-3">
                10+
              </p>
              <p className="eyebrow text-white/50 text-[10px] leading-relaxed">
                Years of Experience
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 32 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <SectionTitle
              title="Welcome to Your Beauty & Wellness Experience"
              subtitle="About Silvia"
              centered={false}
            />

            <div className="space-y-6 text-charcoal/70 leading-[1.9] font-light">
              <p>
                As a fully qualified{" "}
                <span className="text-charcoal font-normal">
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

            <figure className="mt-12 border-l-2 border-gold/50 bg-gold/[0.06] rounded-r-soft pl-8 pr-7 py-7">
              <p className="eyebrow text-gold text-[10px] mb-4">
                My Philosophy
              </p>
              <blockquote className="font-serif italic text-xl md:text-2xl text-charcoal/90 leading-[1.7]">
                Great skin starts with understanding it. I believe in a holistic
                approach that combines advanced technologies with therapeutic
                touch to deliver visible results and deep relaxation.
              </blockquote>
            </figure>

            {/* Certifications */}
            <div className="mt-16">
              <h3 className="eyebrow text-charcoal/50 mb-8 flex items-center">
                <span className="w-8 h-px bg-gold mr-4" aria-hidden="true" />
                Certifications &amp; Qualifications
              </h3>

              {/* Certificate Images Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                {[1, 2, 3, 4].map((i, index) => (
                  <motion.button
                    key={i}
                    type="button"
                    aria-label={`View certificate ${i} full size`}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
                    }
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
                    className={`group relative rounded-soft overflow-hidden h-[180px] md:h-[200px] cursor-pointer ${
                      index > 1 ? "hidden md:block" : ""
                    }`}
                  >
                    <img
                      src={`/assets/certificates/cert${String(i).padStart(5, "0")}.webp`}
                      alt={`Professional qualification certificate ${i} held by Silvia, Silvia Skin Studio`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[900ms] ease-luxe"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-500" />
                  </motion.button>
                ))}
              </div>

              <Link
                to="/certificates"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-soft border border-charcoal/25 text-charcoal eyebrow text-[11px] fill-sweep hover:border-gold transition-colors duration-500 ease-luxe"
              >
                See All Certificates
              </Link>
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
            className="fixed inset-0 bg-charcoal/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
                aria-label="Close certificate viewer"
                className="absolute -top-12 right-0 text-white/70 hover:text-gold transition-colors duration-500 z-10"
              >
                <X size={28} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-soft"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;

/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-butter relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Silvia - Skin Specialist"
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group overflow-hidden rounded-lg shadow-md h-[200px] cursor-pointer"
                  >
                    <img
                      src={`/certificates/cert${String(i).padStart(5, "0")}.jpeg`}
                      alt={`Certificate ${i}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              {/* CTA and PDF Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/certificates"
                  className="bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  See All Certificates
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

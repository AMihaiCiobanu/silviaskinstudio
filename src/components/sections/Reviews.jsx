/** @format */

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const reviews = [
  {
    path: "M. S.",
    text: "Silvia is simply amazing! Her facials are so relaxing and my skin has never looked better. Highly recommend!",
    rating: 5,
  },
  {
    path: "A. R.",
    text: "The best massage I've ever had. Silvia is professional, kind, and truly skilled. A wonderful experience.",
    rating: 5,
  },
  {
    path: "K. L.",
    text: "I love the new studio! It's so beautiful and calming. Silvia's treatments are top-notch.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-butter border-t border-gold/20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Client Love" subtitle="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gold/20 hover:shadow-xl hover:bg-white hover:border-gold/50 transition-all duration-300 flex flex-col items-center text-center relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-6 text-6xl text-gold/10 font-serif leading-none">
                “
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>

              <p className="text-charcoal/80 italic mb-6 leading-relaxed flex-grow">
                "{review.text}"
              </p>

              <div className="mt-auto">
                <span className="font-serif font-medium text-charcoal block">
                  {review.path}
                </span>
                <span className="text-xs text-charcoal/50 uppercase tracking-wider">
                  Client
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

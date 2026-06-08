/** @format */

import React from "react";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const reviews = [
   {
    path: "Natalie F.",
    text: "Wonderful Therapist full of knowledge and a perfect touch. Silvia is a well educated professional, each treatment with her leaves you feeling invigorating and well relaxed. Easy to chat and get along with. Silvia gives you the tailored treatments you deserve and need. A true spa experience xx",
    rating: 5,
  },
  {
    path: "Elaine C.",
    text: "Silvia is in a class of her own with all her treatments. I am 64 and have never experienced a therapist like her.  I have always described her as having the hands of an 'angel' and her knowledge is off the richter scale.  I could go on and on but the above says it all.  All you need to do is book in for a treatment otherwise you will be missing out on an incredible experience.",
    rating: 5,
  },
  {
    path: "Ionela P.",
    text: "Absolutely loved the Veste massage and facial! So relaxing and professional, and my skin felt fresh, smooth, and glowing afterwards. Highly recommend! ✨",
    rating: 5,
  },
  {
    path: "Jemma F.",
    text: "I’ve struggled for years with back issues and have had many masseuses, Silvia comes very highly recommended!",
    rating: 5,
  },
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="py-16 md:py-20 lg:py-24 bg-butter border-t border-gold/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Client Love" subtitle="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion ? undefined : { delay: index * 0.1, duration: 0.5 }
              }
              className="bg-white/50 backdrop-blur-sm p-1 pt-8 md:p-2 md:pt-8 rounded-2xl shadow-sm border border-gold/20 hover:shadow-xl hover:bg-white hover:border-gold/50 transition-all duration-300 flex flex-col items-center text-center relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-6 text-6xl text-gold/10 font-serif leading-none">
                “
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="font-serif font-medium text-charcoal">
                  {review.path}
                </span>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-charcoal/80 italic leading-relaxed flex-grow">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

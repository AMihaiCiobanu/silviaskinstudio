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
      className="py-28 md:py-40 bg-butter border-t border-gold/15"
    >
      <div className="container mx-auto px-6 md:px-8">
        <SectionTitle title="In their words" subtitle="Testimonials" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 md:gap-y-20">
          {reviews.map((review, index) => (
            <motion.figure
              key={index}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      delay: (index % 2) * 0.12,
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              className="flex flex-col items-start"
            >
              <div className="flex gap-1 mb-6" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold fill-current" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="font-serif font-light italic text-charcoal/85 text-xl md:text-2xl leading-[1.6]">
                {review.text}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4">
                <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
                <span className="eyebrow text-charcoal/50">{review.path}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

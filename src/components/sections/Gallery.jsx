/** @format */

import React from "react";
import SectionTitle from "../ui/SectionTitle";

// Gallery items - can be images or videos.
// Alt text is per-item: it is what Google Images and screen readers read.
// The two stock photos below are illustrative, not the studio — their alt text
// says so rather than presenting them as Silvia's own space.
const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Skincare products, towels and tulips — spa treatment atmosphere",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "A clay mask being applied during a facial treatment",
  },
  {
    type: "image",
    src: "/assets/gallery/image1.webp",
    alt: "Silvia performing an advanced facial treatment at Silvia Skin Studio in Colchester",
  },
  {
    type: "image",
    src: "/assets/gallery/image2.webp",
    alt: "Treatment room prepared for a facial at Silvia Skin Studio",
  },
  {
    type: "image",
    src: "/assets/gallery/image3.webp",
    alt: "Interior of the treatment room at Silvia Skin Studio, Langham",
  },
  {
    type: "image",
    src: "/assets/gallery/image4products.webp",
    alt: "Dermalogica professional skincare products used at Silvia Skin Studio",
  },
  {
    type: "image",
    src: "/assets/gallery/image5products.webp",
    alt: "Professional skincare retail range available at Silvia Skin Studio",
  },
  { type: "video", src: "/assets/gallery/video1.mp4", alt: "Treatment in progress at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video2.mp4", alt: "Facial treatment at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video3.mp4", alt: "Massage therapy at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video4.mp4", alt: "Skin treatment at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video5.mp4", alt: "Inside Silvia Skin Studio, Colchester" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="scroll-mt-16 py-28 md:py-40 bg-butter">
      <div className="container mx-auto px-6 md:px-8">
        <SectionTitle title="Sanctuary Views" subtitle="Gallery" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square relative rounded-soft overflow-hidden group bg-charcoal/5"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-[900ms] ease-luxe group-hover:scale-[1.06]"
                />
              ) : (
                <video
                  src={`${item.src}#t=0.1`}
                  className="object-cover w-full h-full"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

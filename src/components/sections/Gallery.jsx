/** @format */

import React, { useState } from "react";
import { Play } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

// Gallery items - can be images or videos.
// Alt text is per-item: it is what Google Images and screen readers read.
// The two stock photos below are illustrative, not the studio — their alt text
// says so rather than presenting them as Silvia's own space.
const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    width: 800,
    height: 533,
    alt: "Skincare products, towels and tulips — spa treatment atmosphere",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    width: 800,
    height: 533,
    alt: "A clay mask being applied during a facial treatment",
  },
  {
    type: "image",
    src: "/assets/gallery/image1.webp",
    width: 1440,
    height: 1920,
    alt: "Silvia performing an advanced facial treatment at Silvia Skin Studio in Colchester",
  },
  {
    type: "image",
    src: "/assets/gallery/image2.webp",
    width: 1440,
    height: 1920,
    alt: "Treatment room prepared for a facial at Silvia Skin Studio",
  },
  {
    type: "image",
    src: "/assets/gallery/image3.webp",
    width: 1440,
    height: 1920,
    alt: "Interior of the treatment room at Silvia Skin Studio, Langham",
  },
  {
    type: "image",
    src: "/assets/gallery/image4products.webp",
    width: 1920,
    height: 1440,
    alt: "Dermalogica professional skincare products used at Silvia Skin Studio",
  },
  {
    type: "image",
    src: "/assets/gallery/image5products.webp",
    width: 1920,
    height: 1440,
    alt: "Professional skincare retail range available at Silvia Skin Studio",
  },
  { type: "video", src: "/assets/gallery/video1.mp4", width: 540, height: 720, alt: "Treatment in progress at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video2.mp4", width: 540, height: 720, alt: "Facial treatment at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video3.mp4", width: 408, height: 720, alt: "Massage therapy at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video4.mp4", width: 720, height: 514, alt: "Skin treatment at Silvia Skin Studio" },
  { type: "video", src: "/assets/gallery/video5.mp4", width: 408, height: 720, alt: "Inside Silvia Skin Studio, Colchester" },
];

// Video tiles start as a lazy-loaded poster (the clip's frame at 0.1 s, made
// from the clip itself) with a play button. The clip (0.7–10 MB) is only
// requested once the visitor presses play.
const GalleryVideo = ({ item }) => {
  const [playing, setPlaying] = useState(false);
  const poster = item.src.replace(".mp4", "-poster.webp");

  if (playing) {
    return (
      <video
        src={item.src}
        poster={poster}
        className="object-cover w-full h-full"
        controls
        autoPlay
        muted
        playsInline
        aria-label={item.alt}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${item.alt}`}
      className="block w-full h-full relative"
    >
      <img
        src={poster}
        alt=""
        width={item.width}
        height={item.height}
        loading="lazy"
        decoding="async"
        className="object-cover w-full h-full transition-transform duration-[900ms] ease-luxe group-hover:scale-[1.06]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-charcoal/60 text-white flex items-center justify-center transition-colors duration-500 ease-luxe group-hover:bg-charcoal/80"
      >
        <Play size={18} className="ml-0.5" fill="currentColor" />
      </span>
    </button>
  );
};

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
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full transition-transform duration-[900ms] ease-luxe group-hover:scale-[1.06]"
                />
              ) : (
                <GalleryVideo item={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

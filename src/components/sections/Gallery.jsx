/** @format */

import React from "react";
import SectionTitle from "../ui/SectionTitle";

// Gallery items - can be images or videos
const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  { type: "image", src: "/assets/gallery/image1.webp" },
  { type: "image", src: "/assets/gallery/image2.webp" },
  { type: "image", src: "/assets/gallery/image3.webp" },
  { type: "image", src: "/assets/gallery/image4products.webp" },
  { type: "image", src: "/assets/gallery/image5products.webp" },
  { type: "video", src: "/assets/gallery/video1.mp4" },
  { type: "video", src: "/assets/gallery/video2.mp4" },
  { type: "video", src: "/assets/gallery/video3.mp4" },
  { type: "video", src: "/assets/gallery/video4.mp4" },
  { type: "video", src: "/assets/gallery/video5.mp4" },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="scroll-mt-16 py-16 md:py-20 lg:py-24 bg-butter"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Sanctuary Views" subtitle="Gallery" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Studio interior ${index + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <video
                  src={`${item.src}#t=0.1`}
                  poster={item.poster}
                  className="object-cover w-full h-full"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

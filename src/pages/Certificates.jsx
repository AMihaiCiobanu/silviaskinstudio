/** @format */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import SEO from "../components/SEO";
import { useModalState } from "../components/ModalProvider";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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

  // Generate certificate array from cert00001.webp to cert00014.webp
  const certificates = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    src: `/assets/certificates/cert${String(i + 1).padStart(5, "0")}.webp`,
    alt: `Certificate ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Silvia Skin Studio | Professional Certifications"
        description="View Silvia Skin Studio's professional certifications in skincare, aesthetics, and massage therapy, showcasing advanced qualifications and continuous education."
      />
      {/* Header */}
      <section className="bg-charcoal text-white pt-32 md:pt-40 pb-12 md:pb-16 lg:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-4">
              Certifications
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl">
              Professional qualifications and certifications in skincare,
              aesthetics, and massage therapy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(cert)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px]">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    loading={index < 6 ? "eager" : "lazy"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      <p className="font-medium">Click to view</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
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
    </div>
  );
};

export default Certificates;

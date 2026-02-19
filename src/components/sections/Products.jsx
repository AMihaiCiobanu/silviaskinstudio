/** @format */

import React from "react";
import SectionTitle from "../ui/SectionTitle";

const products = [
  {
    name: "Special Cleansing Gel",
    description:
      "Dermalogica's #1 selling cleanser globally. Soap-free foaming gel cleanses all skin conditions.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/special-cleansing-gel-pdp.jpg",
  },
  {
    name: "Circular Hydration Serum",
    description:
      "Long-lasting serum with Hyaluronic Acid that floods skin with hydration and replenishes from within.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/circular-hydration-serum-pdp.jpg",
  },
  {
    name: "Daily Microfoliant",
    description:
      "Iconic exfoliating powder that activates with water to polish skin to perfection for brighter, smoother results.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/Daily_Microfoliant_-_2.6oz_FRONT_1.jpg",
  },
  {
    name: "Intensive Moisture Balance",
    description:
      "Ultra-nourishing moisturiser that restores lipid balance to dry skin for optimal barrier performance.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/IntensiveMoistureBalance_Bottle_1.7oz.jpg",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-16 md:py-20 lg:py-24 bg-charcoal border-t border-gold/40"
    >
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center space-y-3">
          <p className="text-gold text-xs md:text-sm uppercase tracking-widest font-medium">
            Extend Your Glow
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">
            Retail Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-2xl text-center group hover:shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300 border-2 border-gold/30 hover:border-gold"
            >
              <div className="aspect-[3/4] bg-butter/30 rounded-lg mb-4 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-serif text-base md:text-lg text-charcoal mb-2">
                {product.name}
              </h4>
              <p className="text-xs md:text-sm text-charcoal/80">
                {product.description}
              </p>
              <span className="inline-block mt-3 md:mt-4 text-xs font-bold text-gold uppercase tracking-widest border-b-2 border-gold/50 pb-1">
                Available In-Store
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/products"
          className="inline-block bg-gold text-white px-8 py-3 rounded-full hover:bg-gold/90 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-gold/50"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default Products;

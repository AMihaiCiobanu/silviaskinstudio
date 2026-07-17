/** @format */

import React from "react";
import { Link } from "react-router-dom";

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
      className="py-28 md:py-40 bg-charcoal border-t border-gold/15"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow text-gold mb-5">Extend Your Glow</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
            Retail Collection
          </h2>
          <div className="rule-ornament mt-8">
            <span />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <article
              key={index}
              className="group rounded-soft border border-white/10 hover:border-gold/40 transition-colors duration-500 ease-luxe p-6 flex flex-col"
            >
              <div className="aspect-[3/4] bg-butter rounded-soft mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} — Dermalogica skincare available at Silvia Skin Studio`}
                  loading="lazy"
                  className="object-cover w-full h-full mix-blend-multiply group-hover:scale-[1.04] transition-transform duration-[900ms] ease-luxe"
                />
              </div>
              <h3 className="font-serif font-normal text-lg md:text-xl text-white mb-3 leading-snug">
                {product.name}
              </h3>
              <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed flex-grow">
                {product.description}
              </p>
              <span className="eyebrow text-gold/70 text-[9px] mt-6">
                Available In-Store
              </span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-10 py-4 rounded-soft border border-white/25 text-white/80 eyebrow text-xs hover:border-gold hover:text-gold transition-colors duration-500 ease-luxe"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;

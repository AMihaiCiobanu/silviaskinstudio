/** @format */

import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import { event as analyticsEvent } from "../utils/analytics";

const allProducts = [
  {
    name: "PreCleanse Cleansing Oil",
    size: "150ml",
    description:
      "Deep-cleansing oil that melts away make-up, impurities, and waterproof products. Perfect first step in the Double Cleanse routine.",
    image: "https://www.dermalogica.co.uk/cdn/shop/files/Precleanse_5.jpg",
    category: "Cleanser",
  },
  {
    name: "Special Cleansing Gel",
    size: "250ml",
    description:
      "Dermalogica's #1 selling cleanser globally. Soap-free foaming gel cleanses all skin conditions without disturbing natural moisture balance.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/special-cleansing-gel-pdp.jpg",
    category: "Cleanser",
  },
  {
    name: "Daily Microfoliant",
    size: "74g",
    description:
      "Iconic exfoliating powder activates with water to polish skin to perfection. Contains Rice Enzymes and Salicylic Acid for brighter, smoother skin.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/Daily_Microfoliant_-_2.6oz_FRONT_1.jpg",
    category: "Exfoliant",
  },
  {
    name: "Circular Hydration Serum",
    size: "30ml",
    description:
      "Long-lasting serum with enhanced Hyaluronic Acid floods skin with hydration, replenishes from within, and helps prevent future moisture loss.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/circular-hydration-serum-pdp.jpg",
    category: "Serum",
  },
  {
    name: "Phyto Nature Firming Serum",
    size: "40ml",
    description:
      "Dual-phase serum restores younger-looking skin by reducing premature ageing signs. Features Sapphire-bound peptides and Phyto-Nature technology.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/Phyto_Nature_Firming_Serum_pdp.jpg",
    category: "Serum",
  },
  {
    name: "Intensive Moisture Balance",
    size: "50ml",
    description:
      "Ultra-nourishing moisturiser restores lipid balance to dry, depleted skin. Contains BioReplenish Complex for optimal barrier performance.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/IntensiveMoistureBalance_Bottle_1.7oz.jpg",
    category: "Moisturiser",
  },
  {
    name: "Phyto Nature Oxygen Cream",
    size: "50ml",
    description:
      "Daily firming and lifting liquid moisturiser with oxygen-optimising phytoactives. Clinically proven to give 4 years back in appearance.",
    image:
      "https://www.dermalogica.co.uk/cdn/shop/files/phyto-nature-oxygen-cream-pdp.jpg",
    category: "Moisturiser",
  },
];

const AllProducts = () => {
  return (
    <div className="min-h-screen bg-butter">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-gold/10 to-transparent border-b border-gold/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Complete Product Collection"
            subtitle="Professional Skincare"
          />
          <p className="text-center text-charcoal/70 max-w-2xl mx-auto mt-6">
            Discover our complete range of Dermalogica professional skincare
            products. Each product is carefully selected to deliver exceptional
            results for your skin.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {allProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-4 md:p-6 rounded-2xl text-center group hover:shadow-xl hover:bg-white transition-all duration-300 border border-gold/20 cursor-pointer"
                onClick={() =>
                  analyticsEvent({
                    action: "click",
                    category: "Product",
                    label: product.name,
                    value: index,
                  })
                }
              >
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                </div>
                <h4 className="font-serif text-base md:text-lg text-charcoal mb-1">
                  {product.name}
                </h4>
                <p className="text-xs text-gold font-medium mb-2">
                  {product.size}
                </p>
                <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                  {product.description}
                </p>
                <span className="inline-block mt-3 md:mt-4 text-xs font-bold text-gold uppercase tracking-widest border-b border-gold/30 pb-1">
                  Available In-Store
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold/5 border-t border-gold/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Book a consultation and let our skincare experts recommend the
            perfect products for your unique skin needs.
          </p>
          <a
            href="tel:+447427619245"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full hover:bg-gold/90 transition-colors duration-300 font-medium"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;

import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const products = [
  {
    name: 'Dermalogica Daily Microfoliant',
    description: 'Iconic exfoliating powder for brighter, smoother skin.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'BioLumin-C Serum',
    description: 'High-performance Vitamin C serum for brighter, firmer skin.',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Skin Smoothing Cream',
    description: 'Next-generation moisturiser with Active HydraMesh Technology.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-butter/50 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Retail Collection" 
          subtitle="Extend Your Glow"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] bg-gray-100 rounded mb-6 overflow-hidden relative">
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              <h4 className="font-serif text-lg text-charcoal mb-2">{product.name}</h4>
              <p className="text-sm text-charcoal/70">{product.description}</p>
              <span className="inline-block mt-4 text-xs font-bold text-gold uppercase tracking-widest border-b border-gold/30 pb-1">
                Available In-Store
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import Gallery from '../components/sections/Gallery';
import Reviews from '../components/sections/Reviews';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Products />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;

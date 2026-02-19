/** @format */

import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Products from "../components/sections/Products";
import Gallery from "../components/sections/Gallery";
import Reviews from "../components/sections/Reviews";
import Contact from "../components/sections/Contact";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Silvia Skin Studio | Advanced Facials & Massage Therapy in Colchester"
        description="Silvia Skin Studio offers expert facials, skin treatments, and massage therapy in Colchester, UK. Level 5 Aesthetician providing personalised, results-driven treatments."
      />
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

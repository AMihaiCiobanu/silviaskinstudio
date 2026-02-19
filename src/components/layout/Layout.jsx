import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "../ui/CookieBanner";
import MobileCTA from "../ui/MobileCTA";
import { ModalProvider } from "../ModalProvider";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Silvia Skin Studio",
  telephone: "+44 7427 619245",
  url: "https://silviaskinstudio.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Park Ln",
    addressLocality: "Langham",
    addressRegion: "Colchester",
    postalCode: "CO4 5WR",
    addressCountry: "GB",
  },
  sameAs: ["https://instagram.com/silviaskinstudio"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

const Layout = () => {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-butter font-sans text-charcoal selection:bg-gold/20 flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-charcoal focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:outline-none focus:ring-2 focus:ring-gold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow" role="main">
          <Outlet />
        </main>
        <MobileCTA />
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </div>
    </ModalProvider>
  );
};

export default Layout;

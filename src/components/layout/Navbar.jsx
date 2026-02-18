/** @format */

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Check if it's an anchor link
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2); // Remove '/#'

      if (isHomePage) {
        // We're on home page, scroll to section
        // Increased timeout to ensure DOM is ready after menu closes
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      } else {
        // We're on a different page, navigate to home with anchor
        window.location.href = href;
      }
    } else {
      // Non-anchor link, navigate normally
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHomePage || isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col z-50 flex-shrink-0">
          <span
            className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              !isHomePage || isScrolled || isMobileMenuOpen
                ? "text-gold"
                : "text-white"
            }`}
          >
            SILVIA
          </span>
          <span
            className={`text-xs tracking-[0.15em] font-sans uppercase transition-colors duration-300 ${
              !isHomePage || isScrolled || isMobileMenuOpen
                ? "text-charcoal"
                : "text-white/70"
            }`}
          >
            Skin Studio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                !isHomePage || isScrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant={!isHomePage || isScrolled ? "primary" : "outline"}
            onClick={() => (window.location.href = "tel:+447427619245")}
            data-analytics="navbar-book-desktop"
            className={
              !isHomePage || isScrolled
                ? ""
                : "text-white border-white hover:text-white hover:border-gold"
            }
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu
            className={`w-6 h-6 ${!isHomePage || isScrolled ? "text-charcoal" : "text-white"}`}
          />
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed top-16 right-0 w-72 max-h-[calc(100vh-64px)] bg-white z-40 flex flex-col shadow-xl md:hidden overflow-y-auto rounded-l-2xl"
          >
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-r from-butter to-charcoal/5 p-6 flex items-center justify-between border-b border-gold/20">
              <div>
                <div className="font-serif text-lg font-bold text-gold">
                  SILVIA
                </div>
                <div className="text-xs text-charcoal/70 tracking-wider">
                  Skin Studio
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="block py-3 px-4 rounded-lg text-charcoal font-serif text-base hover:bg-butter hover:text-gold transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="border-t border-gold/20 p-6 space-y-4">
              <Button
                onClick={() => (window.location.href = "tel:+447427619245")}
                data-analytics="navbar-book-mobile"
                className="w-full"
              >
                Book Appointment
              </Button>
              <div className="flex justify-center gap-4 pt-2">
                <a
                  href="tel:+447427619245"
                  className="p-2.5 rounded-full bg-butter text-charcoal hover:bg-gold hover:text-white transition-all"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="https://instagram.com/silviaskinstudio"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-butter text-charcoal hover:bg-gold hover:text-white transition-all"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

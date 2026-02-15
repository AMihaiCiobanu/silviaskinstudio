/** @format */

import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col z-50">
          <span
            className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-gold" : "text-white"
            }`}
          >
            SILVIA
          </span>
          <span
            className={`text-[0.6rem] md:text-xs tracking-[0.2em] font-sans uppercase transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-charcoal" : "text-white/80"
            }`}
          >
            Skin Studio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant={isScrolled ? "primary" : "outline"}
            className={
              isScrolled
                ? ""
                : "text-white border-white hover:text-white hover:border-gold"
            }
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8 text-charcoal" />
          ) : (
            <Menu
              className={`w-8 h-8 ${isScrolled ? "text-charcoal" : "text-white"}`}
            />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-charcoal hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex flex-col space-y-4 w-64">
                <Button className="w-full justify-center">
                  Book Appointment
                </Button>
                <div className="flex justify-center space-x-6 pt-4">
                  <a
                    href="tel:+447427619245"
                    className="text-charcoal hover:text-gold"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/silviaskinstudio"
                    target="_blank"
                    rel="noreferrer"
                    className="text-charcoal hover:text-gold"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

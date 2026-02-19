/** @format */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import {
  getCookieConsent,
  setCookieConsent,
  initializeGA,
  event as analyticsEvent,
} from "../../utils/analytics";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay to not annoy immediately
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent("accepted");
    initializeGA(); // Initialize Google Analytics
    analyticsEvent({
      action: "accept",
      category: "CookieConsent",
      label: "cookie-banner",
    });
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookieConsent("declined");
    analyticsEvent({
      action: "decline",
      category: "CookieConsent",
      label: "cookie-banner",
    });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-gold/20 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-charcoal/80 text-center md:text-left">
              We use essential cookies and analytics tools (Google Analytics) to
              improve your experience. By accepting, you agree to our use of
              cookies for site performance and analytics. Review our{" "}
              <a
                href="/privacy"
                className="text-gold underline hover:text-gold/80"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="py-2 text-xs"
              >
                Decline
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAccept}
                className="py-2 text-xs"
              >
                Accept Cookies
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

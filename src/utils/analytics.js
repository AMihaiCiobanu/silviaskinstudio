// Google Analytics utility functions

// Cookie expiration periods (in days)
const CONSENT_EXPIRY = {
    accepted: 365, // 1 year for accepted
    declined: 30, // 30 days for declined (will ask again)
};

// Helper to set cookie consent with expiration
export const setCookieConsent = (value) => {
    const expiryDays = CONSENT_EXPIRY[value];
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);

    const consentData = {
        value,
        expiry: expiryDate.getTime(),
    };

    try {
        localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    } catch {
        // Ignore storage errors (e.g. quota, disabled storage)
    }
};

// Helper to get cookie consent with expiration check
export const getCookieConsent = () => {
    try {
        const stored = localStorage.getItem('cookieConsent');
        if (!stored) return null;

        const consentData = JSON.parse(stored);

        // Check if expired
        if (new Date().getTime() > consentData.expiry) {
            localStorage.removeItem('cookieConsent');
            return null;
        }

        return consentData.value;
    } catch (e) {
        // Handle old format (plain string) - remove it
        localStorage.removeItem('cookieConsent');
        return null;
    }
};

// Initialize Google Analytics (only called after consent)
export const initializeGA = () => {
    if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
        // Load GA script dynamically
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q0E1QXW6PV';
        document.head.appendChild(script1);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', 'G-Q0E1QXW6PV');
        window.GA_INITIALIZED = true;
    }
};

// Check if user has consented and initialize GA if needed
export const checkConsentAndInitialize = () => {
    if (typeof window !== 'undefined') {
        const consent = getCookieConsent();
        if (consent === 'accepted' && !window.GA_INITIALIZED) {
            initializeGA();
        }
    }
};

// Track page views
export const pageview = (url) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-Q0E1QXW6PV', {
            page_path: url,
        });
    }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

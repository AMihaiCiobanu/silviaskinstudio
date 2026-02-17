// Google Analytics utility functions

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

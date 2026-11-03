/** @format */

// Single source of truth for name/address/phone and opening hours.
// Search engines cross-check these against Google Business Profile, so every
// surface (Contact, Footer, JSON-LD in index.html) must read from here.
export const studio = {
  name: "Silvia Skin Studio",
  phone: "+447427619245",
  phoneDisplay: "+44 7427 619245",
  email: "silvia.skinstudio@gmail.com",
  instagram: "https://instagram.com/silviaskinstudio",
  mapsUrl: "https://maps.app.goo.gl/hJs143jucsFxBwwg6",
  // Online booking on Fresha; public/assets/booking-qr.svg encodes the same page
  // (with Fresha's qrcode=true flag, as on the printed menu).
  bookingUrl:
    "https://www.fresha.com/book-now/silvia-skin-studio-lw1l04be/all-offer?share=true&pId=2871278",
  address: {
    street: "Park Ln, Langham",
    locality: "Colchester",
    region: "Essex",
    postalCode: "CO4 5WR",
    country: "United Kingdom",
  },
  get addressLine() {
    const { street, locality, postalCode, country } = this.address;
    return `${street}, ${locality} ${postalCode}, ${country}`;
  },
  hours: [
    { days: "Monday", opens: "09:30", closes: "19:00" },
    { days: "Tuesday", closed: true },
    { days: "Wednesday", opens: "09:30", closes: "19:00" },
    { days: "Thursday", closed: true },
    { days: "Friday", opens: "09:30", closes: "17:00" },
    { days: "Saturday", opens: "09:00", closes: "17:00" },
    { days: "Sunday", closed: true },
  ],
};

// Every "Book" button opens Fresha in a new tab; phone links stay for calls.
export const openBooking = () =>
  window.open(studio.bookingUrl, "_blank", "noopener");

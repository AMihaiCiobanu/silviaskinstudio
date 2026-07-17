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
    { days: "Monday – Thursday", opens: "09:30", closes: "19:00" },
    { days: "Friday", opens: "09:00", closes: "17:00" },
    { days: "Saturday", opens: "09:00", closes: "17:00" },
    { days: "Sunday", closed: true },
  ],
};

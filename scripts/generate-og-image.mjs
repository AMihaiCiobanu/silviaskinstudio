/** @format */

// Renders public/og-image.jpg — the link preview card used by Facebook,
// WhatsApp, LinkedIn and X. Those crawlers do not render SVG, so this must stay
// a real raster image at 1200x630. Run: npm run generate-og
//
// Fonts are resolved by the OS, so this uses Georgia rather than the site's
// Cormorant Garamond (which is loaded from Google Fonts at runtime only).

import sharp from "sharp";

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="42%" r="72%">
      <stop offset="0%" stop-color="#c9a961" stop-opacity="0.20"/>
      <stop offset="45%" stop-color="#c9a961" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#c9a961" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#1c1b19"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="32" y="32" width="${W - 64}" height="${H - 64}" fill="none" stroke="#ffffff" stroke-opacity="0.14" stroke-width="1"/>

  <text x="${W / 2}" y="196" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="19" letter-spacing="7.5" fill="#c9a961">LANGHAM &#183; COLCHESTER</text>

  <text x="${W / 2}" y="322" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="94" fill="#ffffff">Silvia Skin Studio</text>

  <line x1="${W / 2 - 74}" y1="374" x2="${W / 2 - 16}" y2="374" stroke="#c9a961" stroke-opacity="0.55" stroke-width="1"/>
  <rect x="${W / 2 - 4}" y="370" width="8" height="8" fill="#c9a961" transform="rotate(45 ${W / 2} 374)"/>
  <line x1="${W / 2 + 16}" y1="374" x2="${W / 2 + 74}" y2="374" stroke="#c9a961" stroke-opacity="0.55" stroke-width="1"/>

  <text x="${W / 2}" y="440" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="33" font-style="italic" fill="#ffffff" fill-opacity="0.74">Advanced skincare and massage therapy</text>

  <text x="${W / 2}" y="516" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="16" letter-spacing="5.5" fill="#ffffff" fill-opacity="0.42">LEVEL 5 QUALIFIED AESTHETICIAN</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 90, chromaSubsampling: "4:4:4" })
  .toFile("public/og-image.jpg");

console.log(`Wrote public/og-image.jpg (${W}x${H})`);

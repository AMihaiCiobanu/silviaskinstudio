// Copies dist/index.html into a folder per client-side route, so /certificates,
// /products, /privacy and /terms are real files any static server answers with
// 200 (Cloudflare Pages also has the _redirects fallback). Runs after build.
//
// A route can also preload its largest image (Largest Contentful Paint), so
// the browser fetches it with the HTML instead of after the JS has rendered.
import fs from "node:fs";

const routes = {
  certificates: { image: "/assets/certificates/thumbs/cert00001.webp" },
  products: {},
  privacy: {},
  terms: {},
};

const html = fs.readFileSync("dist/index.html", "utf8");
for (const [route, { image }] of Object.entries(routes)) {
  const hint = image
    ? `  <link rel="preload" as="image" href="${image}" fetchpriority="high">\n`
    : "";
  fs.mkdirSync(`dist/${route}`, { recursive: true });
  fs.writeFileSync(`dist/${route}/index.html`, html.replace("</head>", `${hint}</head>`));
}

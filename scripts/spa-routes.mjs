// Copies dist/index.html into a folder per client-side route, so /certificates,
// /products, /privacy and /terms are real files any static server answers with
// 200 (Cloudflare Pages also has the _redirects fallback). Runs after build.
import fs from "node:fs";

const routes = ["certificates", "products", "privacy", "terms"];
const html = fs.readFileSync("dist/index.html");
for (const r of routes) {
  fs.mkdirSync(`dist/${r}`, { recursive: true });
  fs.writeFileSync(`dist/${r}/index.html`, html);
}

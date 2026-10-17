// Makes grid thumbnails of the certificate scans (long side 800px, enough for
// the 400px-tall tiles on a 2x screen). The full 1920px scans stay for the
// lightbox. Run after adding or replacing a certificate: npm run thumbs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const src = "public/assets/certificates";
const out = path.join(src, "thumbs");
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(src).filter((f) => f.endsWith(".webp"))) {
  const info = await sharp(path.join(src, f))
    .resize(800, 800, { fit: "inside" })
    .webp({ quality: 78 })
    .toFile(path.join(out, f));
  console.log(f, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`);
}

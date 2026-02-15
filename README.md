<!-- @format -->

# Silvia Skin Studio

Advanced skincare and massage therapy website built with React, Vite, and Tailwind CSS.

## 🌐 Live Site

- **Production**: [silviaskinstudio.co.uk](https://silviaskinstudio.co.uk)
- **Repository**: [github.com/AMihaiCiobanu/silviaskinstudio](https://github.com/AMihaiCiobanu/silviaskinstudio)

## 🚀 Technology Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React
- **Hosting**: Cloudflare Pages

## 📦 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌍 Cloudflare Pages Deployment

### Initial Setup

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** → **Create a project**
3. Connect GitHub repository: `AMihaiCiobanu/silviaskinstudio`
4. **Build settings**:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`

### Custom Domain (silviaskinstudio.co.uk)

1. In Cloudflare Pages project → **Custom domains**
2. Add `silviaskinstudio.co.uk` and `www.silviaskinstudio.co.uk`
3. If domain is registered elsewhere (123-reg):
   - Update nameservers to Cloudflare's nameservers
   - Wait for DNS propagation (24-48 hours)

### Auto-Deploy

Every push to `master` branch triggers automatic deployment.

## 📋 SEO & Production Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook/LinkedIn)
- ✅ Twitter Card tags
- ✅ Local Business Schema (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Favicon + Apple Touch Icon
- ✅ SPA redirect rules (\_redirects)
- ⚠️ **TODO**: Add `/public/og-image.jpg` (1200x630px) for social media previews

## 📱 Features

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Color Theme**: Butter (#FAF9F6), Gold (#D4AF37), Charcoal (#333333)
- **Sections**: Hero, About, Services, Products, Gallery, Reviews, Contact
- **Pages**: Home, Certificates, Privacy Policy, Terms & Conditions
- **Interactive**: Certificate gallery with lightbox, smooth animations
- **Maps**: Integrated Google Maps for location

## 📍 Business Info

- **Address**: Park Ln, Langham, Colchester CO4 5WR, UK
- **Phone**: +44 7427 619245
- **Email**: silvia.skinstudio@gmail.com
- **Instagram**: [@silviaskinstudio](https://instagram.com/silviaskinstudio)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Services, etc.
│   └── ui/             # Reusable UI components
├── pages/              # Route pages
├── data/               # Services data
└── assets/             # Images, icons

public/
├── certificates/       # Certificate images (14 files)
├── certificates.pdf
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── _redirects         # SPA routing for Cloudflare
```

## 📝 Notes

- Primary users are on mobile devices
- Certificate images: cert00001.jpeg through cert00014.jpeg
- Google Maps coordinates: 51.942, 0.940
- Opening hours: Mon-Thu 09:30-19:00, Fri-Sat 09:00-17:00, Sun Closed

---

Built with ❤️ by [Mihai Ciobanu](https://github.com/AMihaiCiobanu)

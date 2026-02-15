# Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub repository: https://github.com/AMihaiCiobanu/silviaskinstudio
- Cloudflare account
- Domain: silviaskinstudio.co.uk (registered via 123-reg)

## Step 1: Create Cloudflare Pages Project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Connect to Git** (or **Create a project** → **Connect to Git**)
4. Authorize Cloudflare to access your GitHub account
5. Select repository: `AMihaiCiobanu/silviaskinstudio`
6. Click **Begin setup**

## Step 2: Configure Build Settings

In the build configuration page, set:

```
Project name: silviaskinstudio
Production branch: master
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
```

### Environment Variables (Optional)
None required for basic deployment.

## Step 3: Deploy

1. Click **Save and Deploy**
2. Wait 2-3 minutes for build to complete
3. You'll get a temporary URL: `silviaskinstudio.pages.dev`

## Step 4: Add Custom Domain

### Option A: Domain already in Cloudflare
1. In your Pages project → **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter `silviaskinstudio.co.uk`
4. Click **Activate domain**
5. Repeat for `www.silviaskinstudio.co.uk`
6. DNS records will be added automatically

### Option B: Domain at 123-reg (Transfer DNS to Cloudflare)
1. In Cloudflare Dashboard → **Websites** → **Add a site**
2. Enter `silviaskinstudio.co.uk` → Click **Add site**
3. Select **Free** plan
4. Cloudflare will scan existing DNS records
5. Review and click **Continue**
6. Note the nameservers (e.g., `jim.ns.cloudflare.com` and `vera.ns.cloudflare.com`)
7. Log in to [123-reg control panel](https://dcc.123-reg.co.uk)
8. Select your domain → **Manage**
9. Go to **Nameservers** section
10. Change from 123-reg nameservers to Cloudflare nameservers
11. Save changes
12. Back in Cloudflare, click **Done, check nameservers**
13. Wait 24-48 hours for DNS propagation
14. Once active, add custom domain in Pages (follow Option A)

## Step 5: Configure SSL/TLS

1. Go to **SSL/TLS** → **Overview**
2. Set encryption mode to **Full** or **Full (strict)**
3. Go to **Edge Certificates**
4. Enable these features:
   - ✅ Always Use HTTPS
   - ✅ Automatic HTTPS Rewrites
   - ✅ HTTP Strict Transport Security (HSTS)

## Step 6: Optimize Performance

### Caching
1. Go to **Caching** → **Configuration**
2. Set **Browser Cache TTL**: 4 hours (or higher)

### Speed
1. Go to **Speed** → **Optimization**
2. Enable:
   - ✅ Auto Minify (JavaScript, CSS, HTML)
   - ✅ Brotli compression

## Step 7: Set Up Analytics (Optional)

### Web Analytics (Privacy-friendly, no cookies)
1. Go to **Analytics** → **Web Analytics**
2. Click **Add a site**
3. Add `silviaskinstudio.co.uk`
4. Copy the JavaScript snippet
5. Paste in `/index.html` before closing `</head>` tag

## Step 8: Verify Deployment

Visit your site:
- https://silviaskinstudio.co.uk
- https://www.silviaskinstudio.co.uk

Check:
- ✅ All pages load correctly
- ✅ SSL certificate is active (padlock icon)
- ✅ Routing works (navigate between pages)
- ✅ Images and certificates load
- ✅ Contact form/links work
- ✅ Mobile responsiveness

## Automatic Deployments

Every `git push` to the `master` branch will trigger automatic deployment:

```bash
git add .
git commit -m "Your commit message"
git push
```

Cloudflare will:
1. Pull latest code from GitHub
2. Run `npm install`
3. Run `npm run build`
4. Deploy to production
5. Purge cache automatically

## Monitoring

### Build Status
- Cloudflare Dashboard → Your project → **Deployments** tab
- See build logs, deployment history, and status

### Analytics
- **Traffic**: Cloudflare Dashboard → **Analytics**
- **Performance**: Lighthouse score, Web Vitals

## Troubleshooting

### Build fails
- Check **Deployments** → Click failed build → View logs
- Common issues:
  - Missing dependencies: Run `npm install` locally
  - Build errors: Run `npm run build` locally to test

### Domain not resolving
- DNS propagation takes 24-48 hours
- Check status: https://www.whatsmydns.net

### 404 Errors on routes
- Ensure `_redirects` file exists in `/public`
- Content: `/* /index.html 200`

### Old version showing
- Clear cache: Cloudflare Dashboard → **Caching** → **Purge Cache**
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

## Support
- Cloudflare Docs: https://developers.cloudflare.com/pages
- Community: https://community.cloudflare.com

---

Last updated: February 16, 2026

# Praveen Sahani — Personal Digital Identity Website

> **Official Personal Website & Verified Digital Presence of Praveen Sahani**  
> Preferred Deployment URL: [https://praveensahani.netlify.app](https://praveensahani.netlify.app)  
> Business Website: [https://praveensahani-business.netlify.app](https://praveensahani-business.netlify.app)

---

## 🌟 Overview

This is the production-ready personal digital identity website for **Praveen Sahani**. It transforms personal identity into a modern, minimal, 3D-styled web presence with glassmorphism elements, soft gradients, responsive cards, and full technical SEO optimization.

### Key Highlights
- **Real Profile Photograph**: Prominently displayed circular profile photograph (`/public/images/profile-photo.jpg`) with subtle 3D lighting, gradient ring halo, and verified badge.
- **Centralized Social Links**: Managed in `lib/social-links.ts`. Platforms without URLs remain hidden automatically, ensuring zero broken links.
- **Privacy-Conscious Location**: City and district level representation (*Gorakhpur, Uttar Pradesh, India — 273209*) without exposing any street-level address.
- **Dedicated Business Portal**: Visually distinguished showcase card linking to `https://praveensahani-business.netlify.app`.
- **Direct Contact**: Fast `mailto:` integration for `praveensahani9273@gmail.com` with one-tap clipboard copy and toast feedback.
- **WhatsApp, Telegram & Social Sharing Optimization**: Pre-generated 1200×630 OpenGraph card with full server-side HTML metadata for rich previews.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css           # Tailwind CSS imports & animations
│   ├── layout.tsx            # Technical SEO, JSON-LD Person schema & OpenGraph
│   ├── page.tsx              # Assembled homepage sections & interactive state
│   ├── robots.ts             # Search engine & social crawler rules
│   └── sitemap.ts            # Dynamic XML sitemap definition
├── components/
│   ├── HeroProfile.tsx       # Section A: Circular avatar, name, bio, vCard
│   ├── SocialGrid.tsx        # Section B: Bubble social cards with empty-link filter
│   ├── AboutLocation.tsx     # Section C: Privacy-first structured location
│   ├── BusinessWebsiteCard.tsx # Section D: Business website portal card
│   ├── ContactCard.tsx       # Section E: Email action & copy utilities
│   ├── Footer.tsx            # Section F: Copyright 2026, navigation, back-to-top
│   ├── ShareModal.tsx        # Instant sharing & dynamic QR code generator
│   ├── SocialLinksCustomizerModal.tsx # In-browser link manager & code exporter
│   ├── CacheRefreshGuideModal.tsx     # WhatsApp/Telegram cache refresh guide
│   └── DeploymentGuideModal.tsx       # Interactive GitHub & Netlify helper
├── lib/
│   ├── identity-data.ts      # Core verified personal info & constants
│   ├── social-links.ts       # Centralized social platforms config & URLs
│   └── utils.ts              # Class name utilities
├── public/
│   ├── favicon.ico           # 32x32 Favicon generated from photo
│   ├── icon-192.png          # 192x192 PWA Web App icon
│   ├── icon-512.png          # 512x512 PWA Web App icon
│   ├── manifest.json         # Web App Manifest
│   ├── robots.txt            # Static robots file for crawlers
│   ├── sitemap.xml           # Static sitemap for Google Search Console
│   └── images/
│       ├── profile-photo.jpg # High-res official profile photo
│       ├── profile-photo.png # Transparent avatar source
│       ├── og-image.jpg      # 1200x630 Social sharing card (JPEG)
│       └── og-image.png      # 1200x630 Social sharing card (PNG)
├── netlify.toml              # Netlify build & cache configuration
├── package.json              # Next.js 15, React 19, Tailwind v4, Lucide
└── README.md                 # Complete documentation & guides
```

---

## 🚀 How to Add or Update Social Media Links

Open `lib/social-links.ts` in your code editor. Each platform has a simple structure:

```typescript
{
  id: 'instagram',
  name: 'Instagram',
  platform: 'instagram',
  handleDisplay: '@your_username',
  url: 'https://instagram.com/your_username', // Add your actual link here
  description: 'Photos, moments & personal stories',
  ...
}
```

- **To activate a card**: Put your full URL inside `url: "..."`.
- **To keep a card hidden**: Keep `url: ""`. It will remain hidden from the website until you are ready.
- You can also use the in-browser **"Social Settings"** button on the website to type handles directly and click **"Apply to Website"** or **"Copy Code"**!

---

## 📤 GitHub Upload Instructions

Run these commands in your project root terminal to push the codebase to your GitHub repository:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "feat: Praveen Sahani personal digital identity website"

# 4. Rename default branch to main
git branch -M main

# 5. Connect your GitHub remote repository
# Replace YOUR_GITHUB_USERNAME with your actual GitHub username:
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/praveen-sahani-identity.git

# 6. Push code to GitHub
git push -u origin main
```

---

## 🌐 Netlify Deployment Instructions

### Automatic Deployment via Git (Recommended)

1. Log in to your [Netlify Dashboard](https://app.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Choose **GitHub** and authorize access to your `praveen-sahani-identity` repository.
4. Netlify will detect Next.js automatically using the included `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy Site"**.

### Setting Subdomain: `praveensahani.netlify.app`

1. Once deployed, navigate to **Site configuration** → **Domain management**.
2. Click **"Options"** → **"Edit site name"**.
3. Type: `praveensahani`.
4. Click **"Save"**.
   - *Note on availability:* If `praveensahani` is already claimed by another user on Netlify, Netlify will indicate it is taken. In that case, use `praveen-sahani` or connect your custom domain (e.g., `praveensahani.com`).

---

## 📱 Social Sharing Previews (WhatsApp, Telegram, Facebook, X)

The OpenGraph preview is pre-configured with:
- **Title**: `Praveen Sahani | Official Website`
- **Description**: `Explore the personal digital identity of Praveen Sahani.`
- **Image**: `https://praveensahani.netlify.app/images/og-image.jpg` (1200×630)
- **URL**: `https://praveensahani.netlify.app`

### How to Force-Refresh Social Media Caches

Social platforms aggressively cache link previews for days or weeks. If you update your photo or metadata and notice an old preview:

1. **WhatsApp / Facebook**:
   - Visit the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
   - Paste `https://praveensahani.netlify.app` and click **"Scrape Again"**.
   - This immediately clears the Meta CDN cache for both Facebook and WhatsApp.
2. **Telegram**:
   - Open Telegram and message [@WebpageBot](https://t.me/WebpageBot).
   - Send `https://praveensahani.netlify.app`.
   - The bot will scrape the latest metadata and clear Telegram's global cache within 3 seconds.
3. **Instant Cache-Buster Trick**:
   - When sharing the link in any chat, append a query parameter:  
     `https://praveensahani.netlify.app?v=2`  
     This bypasses any cached preview and forces the messaging app to fetch fresh data.

---

## 🔍 Google Search Console Indexing

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add your property: `https://praveensahani.netlify.app`.
3. Submit your sitemap:
   ```
   https://praveensahani.netlify.app/sitemap.xml
   ```
4. All canonical tags, structured JSON-LD Person schema, robots.txt, and image metadata are already embedded in the initial server HTML.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Start production build locally
npm run start
```
The application will be accessible at `http://localhost:3000`.

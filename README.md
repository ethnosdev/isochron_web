# Isochron Landing Page (`isochron.ethnos.dev`)

This directory contains the source code for the Isochron landing page, designed to be hosted on **Cloudflare Pages** and distribute the macOS installer `.dmg` hosted on **Cloudflare R2**.

---

## 📁 Directory Structure

```text
isochron_web/
├── _headers              # Cloudflare Pages security & caching headers
├── assets/
│   ├── icon.webp              # Web-optimized app icon (128x128 WebP, ~3.6 KB)
│   ├── icon.png               # High-res app icon fallback (128x128 PNG, ~21 KB)
│   ├── icon-1024.png          # Master app icon (1024x1024)
│   ├── apple-touch-icon.png   # iOS home screen icon (180x180)
│   ├── og-image.png           # Social preview Open Graph image (512x512)
│   ├── favicon.png            # 32x32 browser tab favicon
│   ├── favicon-64.png         # 64x64 browser favicon
│   ├── screenshot-light.webp  # High-res light mode screenshot (WebP)
│   ├── screenshot-light.png   # Light mode screenshot fallback (PNG)
│   ├── screenshot-dark.webp   # High-res dark mode screenshot (WebP)
│   └── screenshot-dark.png    # Dark mode screenshot fallback (PNG)
├── index.html            # Semantic HTML5 landing page
├── styles.css            # System-adaptive macOS aesthetic stylesheet
├── script.js             # Theme toggle & download URL configuration
└── README.md             # Deployment and customization guide
```

---

## ⚙️ Configuration

### 1. DMG Download Link
In [`script.js`](script.js), `CONFIG.downloadUrl` is set to the latest release `.dmg`:

```javascript
const CONFIG = {
  downloadUrl: "https://github.com/ethnosdev/isochron/releases/latest/download/Isochron.dmg",
  version: "2.0.0",
};
```

All download buttons on the landing page will automatically link to this URL.

### 2. Screenshots (Light and Dark Mode)
The landing page automatically switches between light and dark screenshots to match the active theme. Both WebP and lossless PNG fallbacks are included in `isochron_web/assets/`. If you take updated screenshots in the future, simply place them in `assets/` with matching names (`screenshot-light.png` and `screenshot-dark.png`).

---

## 🚀 Deploying to Cloudflare Pages

### Option 1: Git Integration (Recommended)
1. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository (`ethnosdev/isochron`).
3. Set the build settings:
   - **Framework preset**: `None`
   - **Build command**: *(Leave blank)*
   - **Build output directory**: `isochron_web`
4. Click **Save and Deploy**.
5. Under **Custom domains**, add `isochron.ethnos.dev`.

### Option 2: Wrangler CLI Direct Upload
```bash
npx wrangler pages deploy isochron_web --project-name=isochron-landing
```

# CybrConsulting AI Lead Generation Tool (Vite + React + Tailwind CSS)

A modern, responsive B2B website for **CybrConsulting** with:
- Semantic sections (Header, About, Project Gallery, Services, Contact, Sign Up)
- Tailwind CSS styling and responsive layout
- Signup form UX with email/password + social auth entry points (Google, Facebook, iCloud)
- Production-ready frontend build using Vite

## 1) Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## 2) Project structure

```text
.
├─ index.html
├─ src/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ eslint.config.js
```

## 3) Deploy for free (GitHub + Vercel)

### Step A: Push to GitHub

```bash
git init
git add .
git commit -m "Initial CybrConsulting Vite app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step B: Deploy with Vercel

1. Sign in to [vercel.com](https://vercel.com) using GitHub.
2. Click **Add New → Project**.
3. Import this repository.
4. Vercel auto-detects Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.
6. Your free subdomain will look like: `https://<project-name>.vercel.app`.

### Step C: Preview deployments

- Every PR gets an automatic preview URL (enabled by default once GitHub repo is connected).
- In GitHub PR checks, click the Vercel preview link to validate changes before merge.

## 4) Azure + Vercel + GitHub workflow

Use Azure services for backend/AI and Vercel for frontend:

1. **Frontend** (this repo): deploy on Vercel.
2. **AI/Lead scoring API**: host on Azure App Service / Azure Functions.
3. Store API secrets in Vercel Project Settings → Environment Variables.
4. In production, call your Azure API from this React app via HTTPS.

## 5) Connect custom domain (or keep free subdomain)

### Option 1: Keep free subdomain
- Use `https://<project-name>.vercel.app` at no cost.

### Option 2: Custom domain
1. Buy a domain from any registrar.
2. In Vercel Project → **Settings → Domains**, add your domain.
3. Add DNS records Vercel requests (typically A/CNAME).
4. Wait for DNS propagation.
5. Set your primary domain and enable redirect (`www` ↔ apex).

## 6) Production readiness checklist

- [x] Fast Vite production build
- [x] Responsive UI with semantic sections
- [x] Tailwind utility CSS tree-shaking via content config
- [x] PR preview deployment flow via Vercel + GitHub
- [ ] Connect signup/social login to a real auth provider (Auth0, Clerk, Firebase, Azure AD B2C)
- [ ] Connect forms to backend endpoint and add validation + anti-spam
- [ ] Implement real AI lead scoring API and audit logs

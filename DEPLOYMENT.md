# Deployment Instructions

## Quick Local Preview

The development server should be running. Check your terminal for the URL (usually `http://localhost:5173`).

If not running, start it with:
```bash
npm run dev
```

## Deploy to Vercel (Recommended - Free & Fast)

### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository OR drag and drop the `dist` folder
4. Vercel will auto-detect Vite and deploy

## Deploy to Netlify (Free & Easy)

### Option 1: Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Option 2: Using Netlify Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your `dist` folder
3. Get instant live URL!

## Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Run: `npm run deploy`

## Other Options

- **Surge.sh**: `npm install -g surge && surge dist`
- **Cloudflare Pages**: Connect GitHub repo or upload `dist` folder
- **Firebase Hosting**: Use Firebase CLI

## Build for Production

Always build before deploying:
```bash
npm run build
```

The `dist` folder contains all production-ready files.

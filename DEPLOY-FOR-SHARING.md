# Deploy Your Website for Sharing

## Quick Options (Choose One):

### Option 1: Vercel (Recommended - Free & Fast)
1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Select your `ardictechweb-v1` repository
5. Vercel will auto-detect settings from `vercel.json`
6. Click "Deploy"
7. Your site will be live at: `https://ardictechweb-v1.vercel.app` (or similar)
8. Share this URL with your coworker!

### Option 2: Netlify Drop (No Account Needed)
1. Go to https://app.netlify.com/drop
2. Build your project: `npm run build`
3. Drag and drop the `dist` folder onto the Netlify page
4. Get an instant URL like: `https://random-name-123.netlify.app`
5. Share this URL!

### Option 3: Netlify (With GitHub)
1. Go to https://app.netlify.com
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your `ardictechweb-v1` repository
5. Netlify will auto-detect from `netlify.toml`
6. Click "Deploy site"
7. Share the URL!

### Option 4: Surge.sh (Command Line)
```bash
npm install -g surge
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content
npm run build
surge dist/
# Follow prompts to create account and deploy
# You'll get a URL like: https://your-site-name.surge.sh
```

## Which Should You Choose?

- **Vercel**: Best for ongoing deployments, auto-deploys on git push
- **Netlify Drop**: Fastest for one-time sharing (no account needed)
- **Surge**: Good for quick command-line deployments

All options are **FREE** and will give you a shareable URL!

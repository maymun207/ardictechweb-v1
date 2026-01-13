#!/bin/bash
# Push to ardictechweb-v1 repository

cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "🚀 Pushing ARDICTECH project to GitHub (ardictechweb-v1)"
echo "========================================================="
echo ""

# Step 1: Initialize git
if [ ! -d .git ]; then
  echo "📦 Initializing git repository..."
  git init
  git config user.name "Developer"
  git config user.email "developer@ardictech.com"
  echo "✓ Git initialized"
fi

# Step 2: Add and commit
echo "📝 Adding and committing files..."
git add -A

if git diff --staged --quiet 2>/dev/null; then
  echo "✓ No new changes to commit"
else
  git commit -m "Initial commit: ARDICTECH Hero page with multi-language support

- Built elegant hero section with React, Tailwind CSS, and Framer Motion
- Implemented ARDICTECH logo integration
- Applied magenta-to-cyan gradient color theme from logo
- Created transparent glassmorphism design elements
- Added interactive constraint selection cards
- Implemented English and Turkish language support
- Added smooth animations and transitions
- Responsive design for mobile and desktop"
  echo "✓ Changes committed"
fi

# Step 3: Set branch
git branch -M main 2>/dev/null

# Step 4: Get GitHub username
echo ""
echo "🔗 Setting up GitHub remote..."
USERNAME=""

# Try GitHub CLI first
if command -v gh &> /dev/null; then
  if gh auth status &> /dev/null; then
    USERNAME=$(gh api user --jq .login 2>/dev/null)
  fi
fi

# If no username, prompt
if [ -z "$USERNAME" ]; then
  echo "Please enter your GitHub username:"
  read USERNAME
fi

if [ -z "$USERNAME" ]; then
  echo "❌ No username provided. Exiting."
  exit 1
fi

# Step 5: Set remote
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$USERNAME/ardictechweb-v1.git"
echo "✓ Remote set to: https://github.com/$USERNAME/ardictechweb-v1.git"

# Step 6: Push
echo ""
echo "📤 Pushing to GitHub..."
if git push -u origin main 2>&1; then
  echo ""
  echo "✅ SUCCESS! Your code is now on GitHub!"
  echo "Repository: https://github.com/$USERNAME/ardictechweb-v1"
else
  echo ""
  echo "❌ Push failed. Common solutions:"
  echo ""
  echo "1. Authenticate with GitHub CLI:"
  echo "   gh auth login"
  echo ""
  echo "2. Or use SSH instead:"
  echo "   git remote set-url origin git@github.com:$USERNAME/ardictechweb-v1.git"
  echo "   git push -u origin main"
  echo ""
  echo "3. Or use a Personal Access Token:"
  echo "   - Go to: https://github.com/settings/tokens"
  echo "   - Create token with 'repo' permissions"
  echo "   - Use token as password when pushing"
fi

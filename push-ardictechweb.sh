#!/bin/bash
set -e

cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "🚀 Pushing to ardictechweb-v1 repository..."
echo ""

# Initialize git if needed
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
  git config user.name "Developer"
  git config user.email "developer@ardictech.com"
fi

# Add all files
echo "Adding all files..."
git add -A

# Commit
echo "Committing changes..."
git commit -m "Initial commit: ARDICTECH Hero page with multi-language support

- Built elegant hero section with React, Tailwind CSS, and Framer Motion
- Implemented ARDICTECH logo integration
- Applied magenta-to-cyan gradient color theme from logo
- Created transparent glassmorphism design elements
- Added interactive constraint selection cards
- Implemented English and Turkish language support
- Added smooth animations and transitions
- Responsive design for mobile and desktop" || echo "Already committed"

# Set branch to main
git branch -M main 2>/dev/null || true

# Set up remote
echo ""
echo "Setting up GitHub remote..."
git remote remove origin 2>/dev/null || true

# Try to get username from GitHub CLI
if command -v gh &> /dev/null && gh auth status &> /dev/null; then
  USERNAME=$(gh api user --jq .login 2>/dev/null)
  if [ -n "$USERNAME" ]; then
    git remote add origin "https://github.com/$USERNAME/ardictechweb-v1.git"
    echo "✓ Remote set to: https://github.com/$USERNAME/ardictechweb-v1.git"
  else
    echo "Please enter your GitHub username:"
    read USERNAME
    git remote add origin "https://github.com/$USERNAME/ardictechweb-v1.git"
  fi
else
  echo "Please enter your GitHub username:"
  read USERNAME
  git remote add origin "https://github.com/$USERNAME/ardictechweb-v1.git"
fi

# Push
echo ""
echo "Pushing to GitHub..."
if git push -u origin main; then
  echo ""
  echo "✅ Successfully pushed to GitHub!"
  echo "Repository: https://github.com/$USERNAME/ardictechweb-v1"
else
  echo ""
  echo "❌ Push failed. You may need to:"
  echo "   - Authenticate: gh auth login"
  echo "   - Or use SSH: git remote set-url origin git@github.com:$USERNAME/ardictechweb-v1.git"
fi

#!/bin/bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "=== ARDICTECH Project - GitHub Push Script ==="
echo ""

# First, ensure local commit is done
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
  git config user.name "Developer" 2>/dev/null || true
  git config user.email "developer@ardictech.com" 2>/dev/null || true
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "Committing local changes..."
  git add -A
  git commit -m "Update: ARDICTECH Hero page with multi-language support

- Built elegant hero section with React, Tailwind CSS, and Framer Motion
- Implemented ARDICTECH logo integration
- Applied magenta-to-cyan gradient color theme from logo
- Created transparent glassmorphism design elements
- Added interactive constraint selection cards
- Implemented English and Turkish language support
- Added smooth animations and transitions
- Responsive design for mobile and desktop"
  echo "✓ Local changes committed"
else
  echo "✓ All changes already committed"
fi

echo ""
echo "=== GitHub Setup ==="
echo ""

# Check if remote exists
if git remote get-url origin >/dev/null 2>&1; then
  REMOTE_URL=$(git remote get-url origin)
  echo "Found existing remote: $REMOTE_URL"
  echo ""
  read -p "Do you want to use this remote? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Please provide your GitHub repository URL:"
    echo "Format: https://github.com/username/repository.git"
    read -p "GitHub URL: " GITHUB_URL
    if [ -n "$GITHUB_URL" ]; then
      git remote set-url origin "$GITHUB_URL"
      echo "✓ Remote updated to: $GITHUB_URL"
    fi
  fi
else
  echo "No GitHub remote configured."
  echo ""
  echo "Please create a GitHub repository first, then provide the URL:"
  echo "1. Go to https://github.com/new"
  echo "2. Create a new repository (e.g., 'ardictech-hero')"
  echo "3. Copy the repository URL"
  echo ""
  read -p "Enter your GitHub repository URL: " GITHUB_URL
  
  if [ -z "$GITHUB_URL" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
  fi
  
  git remote add origin "$GITHUB_URL"
  echo "✓ Remote added: $GITHUB_URL"
fi

echo ""
echo "=== Pushing to GitHub ==="
echo ""

# Get current branch name
BRANCH=$(git branch --show-current 2>/dev/null || echo "main")

# Push to GitHub
echo "Pushing to GitHub (branch: $BRANCH)..."
if git push -u origin "$BRANCH" 2>&1; then
  echo ""
  echo "✅ Successfully pushed to GitHub!"
  echo ""
  echo "Your repository is now available on GitHub."
else
  echo ""
  echo "❌ Push failed. Common issues:"
  echo "   - Authentication required (use GitHub CLI or SSH keys)"
  echo "   - Repository doesn't exist yet"
  echo "   - No write permissions"
  echo ""
  echo "To push manually, run:"
  echo "  git push -u origin $BRANCH"
fi

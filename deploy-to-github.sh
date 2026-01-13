#!/bin/bash
set -e  # Exit on error

cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "🚀 ARDICTECH - GitHub Deployment"
echo "================================"
echo ""

# Step 1: Initialize and commit locally
echo "📦 Step 1: Setting up local Git repository..."
if [ ! -d .git ]; then
  git init
  echo "✓ Git repository initialized"
else
  echo "✓ Git repository already exists"
fi

# Configure git user
git config user.name "Developer" 2>/dev/null || true
git config user.email "developer@ardictech.com" 2>/dev/null || true

# Add and commit
git add -A
if git diff --staged --quiet; then
  echo "✓ No changes to commit"
else
  git commit -m "Initial commit: ARDICTECH Hero page with multi-language support

- Built elegant hero section with React, Tailwind CSS, and Framer Motion
- Implemented ARDICTECH logo integration
- Applied magenta-to-cyan gradient color theme from logo
- Created transparent glassmorphism design elements
- Added interactive constraint selection cards
- Implemented English and Turkish language support
- Added smooth animations and transitions
- Responsive design for mobile and desktop" || echo "Commit completed"
  echo "✓ All changes committed"
fi

# Ensure we're on main branch
git branch -M main 2>/dev/null || true

echo ""
echo "📤 Step 2: Pushing to GitHub..."
echo ""

# Step 2: Try GitHub CLI first
if command -v gh &> /dev/null; then
  echo "GitHub CLI detected..."
  
  # Check authentication
  if gh auth status &> /dev/null; then
    echo "✓ GitHub CLI authenticated"
    
    # Check if remote exists
    if git remote get-url origin &> /dev/null; then
      REMOTE_URL=$(git remote get-url origin)
      echo "Found existing remote: $REMOTE_URL"
      echo "Pushing to existing repository..."
      git push -u origin main && echo "✅ Successfully pushed to GitHub!" && exit 0
    else
      # Create new repository
      REPO_NAME="ardictech-hero"
      echo "Creating new GitHub repository: $REPO_NAME"
      
      if gh repo create "$REPO_NAME" --public --source=. --remote=origin --push 2>&1; then
        echo ""
        echo "✅ Successfully created and pushed to GitHub!"
        USERNAME=$(gh api user --jq .login 2>/dev/null || echo "your-username")
        echo "Repository URL: https://github.com/$USERNAME/$REPO_NAME"
        exit 0
      else
        echo "⚠️  Repository creation failed, trying manual push..."
      fi
    fi
  else
    echo "⚠️  GitHub CLI not authenticated. Run: gh auth login"
  fi
else
  echo "⚠️  GitHub CLI not installed"
fi

# Step 3: Fallback - check for existing remote
if git remote get-url origin &> /dev/null; then
  REMOTE_URL=$(git remote get-url origin)
  echo "Found remote: $REMOTE_URL"
  echo "Attempting to push..."
  
  if git push -u origin main 2>&1; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    exit 0
  else
    echo ""
    echo "❌ Push failed. You may need to authenticate."
    echo "   Try: gh auth login"
    echo "   Or set up SSH keys"
    exit 1
  fi
else
  echo ""
  echo "❌ No GitHub remote configured."
  echo ""
  echo "To complete the setup:"
  echo "1. Create a repository at https://github.com/new"
  echo "2. Then run:"
  echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
  echo "   git push -u origin main"
  echo ""
  echo "Or install GitHub CLI and authenticate:"
  echo "   brew install gh"
  echo "   gh auth login"
  exit 1
fi

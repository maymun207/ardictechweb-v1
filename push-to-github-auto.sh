#!/bin/bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "=== ARDICTECH Project - GitHub Push (Auto) ==="
echo ""

# Ensure local commit
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
  git config user.name "Developer" 2>/dev/null || true
  git config user.email "developer@ardictech.com" 2>/dev/null || true
fi

# Commit if needed
if [ -n "$(git status --porcelain)" ]; then
  echo "Committing local changes..."
  git add -A
  git commit -m "Initial commit: ARDICTECH Hero page with multi-language support

- Built elegant hero section with React, Tailwind CSS, and Framer Motion
- Implemented ARDICTECH logo integration
- Applied magenta-to-cyan gradient color theme from logo
- Created transparent glassmorphism design elements
- Added interactive constraint selection cards
- Implemented English and Turkish language support
- Added smooth animations and transitions
- Responsive design for mobile and desktop" || true
fi

echo "✓ Local repository ready"
echo ""

# Try to use GitHub CLI if available
if command -v gh &> /dev/null; then
  echo "GitHub CLI detected. Attempting to create repository..."
  
  # Check if authenticated
  if gh auth status &> /dev/null; then
    REPO_NAME="ardictech-hero"
    echo "Creating GitHub repository: $REPO_NAME"
    
    if gh repo create "$REPO_NAME" --public --source=. --remote=origin --push 2>&1; then
      echo ""
      echo "✅ Successfully created and pushed to GitHub!"
      echo "Repository: https://github.com/$(gh api user --jq .login)/$REPO_NAME"
      exit 0
    else
      echo "Repository might already exist or there was an error."
    fi
  else
    echo "GitHub CLI not authenticated. Please run: gh auth login"
  fi
fi

# Fallback: Check for existing remote
if git remote get-url origin &> /dev/null; then
  REMOTE_URL=$(git remote get-url origin)
  echo "Found remote: $REMOTE_URL"
  echo "Pushing to GitHub..."
  
  BRANCH=$(git branch --show-current 2>/dev/null || echo "main")
  git branch -M main 2>/dev/null || true
  
  if git push -u origin main 2>&1; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    exit 0
  else
    echo ""
    echo "❌ Push failed. You may need to:"
    echo "   1. Create the repository on GitHub first"
    echo "   2. Authenticate (gh auth login or use SSH)"
    echo "   3. Add remote: git remote add origin <your-repo-url>"
  fi
else
  echo "No GitHub remote configured."
  echo ""
  echo "To set up GitHub:"
  echo "1. Create a repository at https://github.com/new"
  echo "2. Then run: git remote add origin <your-repo-url>"
  echo "3. Then run: git push -u origin main"
fi

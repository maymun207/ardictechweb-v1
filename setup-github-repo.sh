#!/bin/bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

# Initialize and commit
git init 2>/dev/null
git config user.name "Developer" 2>/dev/null
git config user.email "developer@ardictech.com" 2>/dev/null
git add -A
git commit -m "Initial commit: ARDICTECH Hero page with multi-language support" 2>/dev/null || true
git branch -M main 2>/dev/null

# Get username
if command -v gh &> /dev/null && gh auth status &> /dev/null 2>&1; then
  USERNAME=$(gh api user --jq .login 2>/dev/null)
  if [ -n "$USERNAME" ]; then
    git remote remove origin 2>/dev/null
    git remote add origin "https://github.com/$USERNAME/ardictechweb-v1.git"
    echo "Remote set to: https://github.com/$USERNAME/ardictechweb-v1.git"
    echo "Now pushing..."
    git push -u origin main 2>&1
  fi
else
  echo "GitHub CLI not available. Please run:"
  echo "  git remote add origin https://github.com/YOUR_USERNAME/ardictechweb-v1.git"
  echo "  git push -u origin main"
fi

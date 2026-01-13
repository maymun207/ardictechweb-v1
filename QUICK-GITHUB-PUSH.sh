#!/bin/bash
# Quick GitHub Push Script
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "Step 1: Ensuring local commit..."
git init 2>/dev/null
git config user.name "Developer" 2>/dev/null
git config user.email "developer@ardictech.com" 2>/dev/null
git add -A
git commit -m "Initial commit: ARDICTECH Hero page" 2>/dev/null || echo "Already committed"
git branch -M main 2>/dev/null

echo "Step 2: Checking GitHub CLI..."
if command -v gh &> /dev/null && gh auth status &> /dev/null; then
  echo "Creating GitHub repository with CLI..."
  gh repo create ardictech-hero --public --source=. --remote=origin --push 2>&1
  echo "Done! Check: https://github.com/$(gh api user --jq .login)/ardictech-hero"
else
  echo "GitHub CLI not available or not authenticated."
  echo "Please:"
  echo "  1. Create repo at https://github.com/new (name: ardictech-hero)"
  echo "  2. Run: git remote add origin https://github.com/YOUR_USERNAME/ardictech-hero.git"
  echo "  3. Run: git push -u origin main"
fi

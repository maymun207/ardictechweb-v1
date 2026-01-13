#!/bin/bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

# Initialize git if not already initialized
if [ ! -d .git ]; then
  git init
  echo "Git repository initialized"
fi

# Configure git user if not set
git config user.name "Developer" 2>/dev/null || true
git config user.email "developer@ardictech.com" 2>/dev/null || true

# Add all files
git add -A

# Show what will be committed
echo "Files to be committed:"
git status --short

# Commit
git commit -m "Initial commit: ARDICTECH Hero page with multi-language support

- Built elegant hero section with React, Tailwind CSS, and Framer Motion
- Implemented ARDICTECH logo integration
- Applied magenta-to-cyan gradient color theme from logo
- Created transparent glassmorphism design elements
- Added interactive constraint selection cards
- Implemented English and Turkish language support
- Added smooth animations and transitions
- Responsive design for mobile and desktop"

# Show commit log
echo ""
echo "Latest commit:"
git log --oneline -1

echo ""
echo "Git status:"
git status

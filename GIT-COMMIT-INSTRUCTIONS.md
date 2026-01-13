# Git Commit Instructions

If the automated commit didn't work, please run these commands manually in your terminal:

```bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

# Initialize git repository (if not already done)
git init

# Configure git user (if not already configured)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add -A

# Commit with message
git commit -m "Initial commit: ARDICTECH Hero page with multi-language support

- Built elegant hero section with React, Tailwind CSS, and Framer Motion
- Implemented ARDICTECH logo integration
- Applied magenta-to-cyan gradient color theme from logo
- Created transparent glassmorphism design elements
- Added interactive constraint selection cards
- Implemented English and Turkish language support
- Added smooth animations and transitions
- Responsive design for mobile and desktop"

# Verify the commit
git log --oneline -1
git status
```

Alternatively, you can run the provided script:
```bash
chmod +x commit.sh
./commit.sh
```

#!/bin/bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "=== GitHub Repository Status Check ===" > github-status-check.txt
echo "" >> github-status-check.txt

# Check remote configuration
echo "=== Remote Configuration ===" >> github-status-check.txt
git remote -v >> github-status-check.txt 2>&1
echo "" >> github-status-check.txt

# Fetch latest from remote
echo "Fetching latest from GitHub..." >> github-status-check.txt
git fetch origin >> github-status-check.txt 2>&1
echo "" >> github-status-check.txt

# Check if remote branch exists
echo "=== Remote Branch Status ===" >> github-status-check.txt
if git ls-remote --heads origin main &>/dev/null; then
  echo "✓ Remote branch 'main' exists on GitHub" >> github-status-check.txt
else
  echo "✗ Remote branch 'main' NOT found on GitHub" >> github-status-check.txt
fi
echo "" >> github-status-check.txt

# Compare local and remote commits
echo "=== Local Commits ===" >> github-status-check.txt
git log HEAD --oneline -5 >> github-status-check.txt 2>&1
echo "" >> github-status-check.txt

echo "=== Remote Commits (origin/main) ===" >> github-status-check.txt
if git rev-parse --verify origin/main &>/dev/null; then
  git log origin/main --oneline -5 >> github-status-check.txt 2>&1
else
  echo "✗ Remote branch not found locally" >> github-status-check.txt
fi
echo "" >> github-status-check.txt

# Check for differences
echo "=== Comparison ===" >> github-status-check.txt
LOCAL_COMMIT=$(git rev-parse HEAD 2>/dev/null)
REMOTE_COMMIT=$(git rev-parse origin/main 2>/dev/null 2>&1)

if [ -n "$REMOTE_COMMIT" ] && [ "$REMOTE_COMMIT" != "$LOCAL_COMMIT" ]; then
  echo "⚠️  Local and remote commits differ" >> github-status-check.txt
  echo "Local:  $LOCAL_COMMIT" >> github-status-check.txt
  echo "Remote: $REMOTE_COMMIT" >> github-status-check.txt
elif [ -n "$REMOTE_COMMIT" ] && [ "$REMOTE_COMMIT" == "$LOCAL_COMMIT" ]; then
  echo "✅ Local and remote commits match!" >> github-status-check.txt
  echo "Commit: $LOCAL_COMMIT" >> github-status-check.txt
else
  echo "⚠️  Cannot compare - remote may not be set up" >> github-status-check.txt
fi
echo "" >> github-status-check.txt

# Check status
echo "=== Git Status ===" >> github-status-check.txt
git status -sb >> github-status-check.txt 2>&1
echo "" >> github-status-check.txt

# Check if there are unpushed commits
echo "=== Unpushed Commits ===" >> github-status-check.txt
git log origin/main..HEAD --oneline 2>&1 | head -10 >> github-status-check.txt
if [ $? -eq 0 ] && [ -n "$(git log origin/main..HEAD --oneline 2>&1)" ]; then
  echo "⚠️  There are local commits not pushed to GitHub" >> github-status-check.txt
else
  echo "✓ All local commits are pushed to GitHub" >> github-status-check.txt
fi

cat github-status-check.txt

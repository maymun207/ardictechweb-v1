#!/bin/bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

echo "=== Git Repository Status Check ===" > git-status-check.txt
echo "" >> git-status-check.txt

# Check if git is initialized
if [ -d .git ]; then
  echo "✓ Git repository is initialized" >> git-status-check.txt
else
  echo "✗ Git repository is NOT initialized" >> git-status-check.txt
  echo "" >> git-status-check.txt
  echo "Run: git init" >> git-status-check.txt
  exit 1
fi

echo "" >> git-status-check.txt
echo "=== Git Status ===" >> git-status-check.txt
git status >> git-status-check.txt 2>&1

echo "" >> git-status-check.txt
echo "=== Uncommitted Changes ===" >> git-status-check.txt
git status --short >> git-status-check.txt 2>&1

echo "" >> git-status-check.txt
echo "=== Commit History ===" >> git-status-check.txt
git log --oneline -5 >> git-status-check.txt 2>&1

echo "" >> git-status-check.txt
echo "=== Current Branch ===" >> git-status-check.txt
git branch >> git-status-check.txt 2>&1

echo "" >> git-status-check.txt
echo "=== Remote Configuration ===" >> git-status-check.txt
git remote -v >> git-status-check.txt 2>&1

echo "" >> git-status-check.txt
echo "=== Files in Repository ===" >> git-status-check.txt
git ls-files | wc -l | xargs echo "Total tracked files:" >> git-status-check.txt

cat git-status-check.txt

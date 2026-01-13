# GitHub Setup Instructions

## Option 1: Using the Automated Script

Run the provided script:

```bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content
chmod +x push-to-github.sh
./push-to-github.sh
```

The script will:
1. Ensure all local changes are committed
2. Prompt you for your GitHub repository URL
3. Add the remote and push to GitHub

## Option 2: Manual Setup

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., `ardictech-hero`)
4. Choose public or private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Connect and Push

```bash
cd /Users/tunckahveci/Desktop/2026CoderWorld-Prj3/Content

# Ensure everything is committed locally
git add -A
git commit -m "Initial commit: ARDICTECH Hero page with multi-language support"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Authentication

If you're asked for credentials:

**Option A: Use GitHub CLI (Recommended)**
```bash
# Install GitHub CLI if not installed
brew install gh

# Authenticate
gh auth login

# Then push
git push -u origin main
```

**Option B: Use Personal Access Token**
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Use the token as your password when pushing

**Option C: Use SSH (Recommended for frequent use)**
```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Copy your public key: cat ~/.ssh/id_ed25519.pub

# Use SSH URL instead
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Quick Commands Reference

```bash
# Check status
git status

# Check remote
git remote -v

# View commits
git log --oneline

# Push updates
git push origin main
```

## Troubleshooting

**"Repository not found"**
- Check the repository URL is correct
- Ensure the repository exists on GitHub
- Verify you have access permissions

**"Authentication failed"**
- Use GitHub CLI: `gh auth login`
- Or set up SSH keys
- Or use a Personal Access Token

**"Updates were rejected"**
- If someone else pushed first: `git pull --rebase origin main` then push again
- If you want to force (careful!): `git push -f origin main`

#!/bin/bash

# Deploy to Vercel Script
# This script will deploy your ARDICTECH website to Vercel

cd "$(dirname "$0")"

echo "🚀 Deploying to Vercel..."
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
echo "Note: You may need to login if this is your first time"
echo ""

vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "Your site should be live at the URL shown above."

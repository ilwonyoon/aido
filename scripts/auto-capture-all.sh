#!/bin/bash

# Fully automated high-resolution image capture pipeline
# Runs all steps sequentially and commits results

set -e

cd "$(dirname "$0")"

echo "🚀 Starting automated high-resolution image capture..."
echo "======================================================"
echo ""

# Step 1: Extract OG URLs
echo "📍 Step 1: Extracting OG URLs from all 205 companies..."
node extract-og-urls.mjs

if [ ! -f "og-urls.json" ]; then
  echo "❌ Failed to extract OG URLs"
  exit 1
fi

echo "✅ OG URLs extracted"
echo ""

# Step 2: Download OG images at 1440px
echo "📍 Step 2: Downloading OG images at 1440px resolution..."
node download-og-images.mjs og-urls.json

if [ ! -f "og-downloaded.json" ]; then
  echo "❌ Failed to download OG images"
  exit 1
fi

echo "✅ OG images downloaded"
echo ""

# Step 3: Capture screenshots for failed companies
echo "📍 Step 3: Capturing screenshots for failed companies..."
node capture-failed-screenshots.mjs

echo "✅ Screenshots captured"
echo ""

# Step 4: Generate report
echo "📊 Final Report"
echo "==============="
echo ""

SUCCESS=$(cat og-downloaded.json | jq '[.[] | select(.downloaded)] | length')
TOTAL=$(cat og-downloaded.json | jq 'length')
SCREENSHOTS=$(cat og-screenshot-results.json 2>/dev/null | jq '[.[] | select(.success)] | length' || echo 0)

echo "OG Images:    $SUCCESS/$TOTAL"
echo "Screenshots:  $SCREENSHOTS"
echo ""

TOTAL_SUCCESS=$((SUCCESS + SCREENSHOTS))
echo "✅ Total Success: $TOTAL_SUCCESS/205"
echo "📈 Success Rate: $(echo "scale=1; $TOTAL_SUCCESS * 100 / 205" | bc)%"
echo ""

# Step 5: Commit results
echo "📍 Step 5: Committing results..."
cd ..
git add public/og-images scripts/

git commit -m "30/01/30 - $(date +%H:%M:%S) | Complete high-resolution image capture

- Downloaded $SUCCESS OG images at 1440px
- Captured $SCREENSHOTS screenshots via Playwright
- Total: $TOTAL_SUCCESS/205 companies ($(echo "scale=1; $TOTAL_SUCCESS * 100 / 205" | bc)%)
- Resolution: 1440px+ @ 90% quality

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

echo "✅ Results committed"
echo ""
echo "🎉 Pipeline complete!"

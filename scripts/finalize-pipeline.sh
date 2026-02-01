#!/bin/bash

# Finalize high-resolution image pipeline
# Run after download completes

set -e
cd "$(dirname "$0")"

echo "🎬 Finalizing High-Resolution Image Pipeline"
echo "============================================="
echo ""

# Wait for download to complete
echo "⏳ Waiting for download to complete..."
while pgrep -f "download-og-images" > /dev/null; do
  COUNT=$(ls -1 ../public/og-images/*.webp 2>/dev/null | wc -l | tr -d ' ')
  echo "   Progress: $COUNT images downloaded..."
  sleep 10
done

echo "✅ Download complete!"
echo ""

# Check results
DOWNLOADED=$(cat og-downloaded-0-205.json | jq '[.[] | select(.downloaded)] | length')
TOTAL=$(cat og-downloaded-0-205.json | jq 'length')
echo "📊 Download Results: $DOWNLOADED/$TOTAL"
echo ""

# Capture screenshots for failed companies
echo "📸 Capturing Playwright screenshots..."
node capture-failed-screenshots.mjs

SCREENSHOTS=$(cat og-screenshot-results.json 2>/dev/null | jq '[.[] | select(.success)] | length' 2>/dev/null || echo 0)
echo "📸 Screenshots: $SCREENSHOTS captured"
echo ""

# Final statistics
TOTAL_SUCCESS=$((DOWNLOADED + SCREENSHOTS))
SUCCESS_RATE=$(echo "scale=1; $TOTAL_SUCCESS * 100 / 205" | bc)

echo "✅ Final Results"
echo "==============="
echo "OG Images:    $DOWNLOADED/205"
echo "Screenshots:  $SCREENSHOTS"
echo "Total:        $TOTAL_SUCCESS/205 ($SUCCESS_RATE%)"
echo ""

# Verify image quality
echo "🔍 Verifying image resolution..."
SAMPLE_WIDTH=$(file ../public/og-images/anthropic-og.webp 2>/dev/null | grep -o "VP8 encoding, [0-9]*x" | grep -o "[0-9]*" || echo "N/A")
echo "Sample image width: ${SAMPLE_WIDTH}px"
echo ""

# Commit results
echo "💾 Committing results..."
cd ..
git add public/og-images/ scripts/

COMMIT_MSG="30/01/30 - $(date +%H:%M:%S) | Complete high-resolution image capture

Downloaded ${DOWNLOADED} OG images at 1440px resolution
Captured ${SCREENSHOTS} Playwright screenshots
Total success: ${TOTAL_SUCCESS}/205 (${SUCCESS_RATE}%)

Improvements:
- Resolution: 800px → 1440px (1.8x increase)
- Quality: 85% → 90% WebP
- Sample dimensions: ${SAMPLE_WIDTH}x height

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

git commit -m "$COMMIT_MSG"

echo ""
echo "🎉 Pipeline Complete!"
echo ""
echo "Summary saved to git log"

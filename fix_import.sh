#!/bin/bash

TARGET_FILE="src/components/DynamicTopology.vue"

echo "🔧 Fixing animejs import to the most stable version..."

# We will replace any form of animejs import with the correct one.
# This covers both 'animejs' and 'animejs/lib/anime.es.js' with wrong default import assumption.
# The regex matches "import anime from 'animejs...';"
sed -i.bak "s|import.*from 'animejs.*';|import anime from 'animejs/lib/anime.es.js';|g" "$TARGET_FILE"

echo "✅ Import statement in $TARGET_FILE has been corrected."
rm "${TARGET_FILE}.bak"

echo "🚀 Please run 'npm run dev' now."

#!/usr/bin/env bash
# One-command release: build -> version bump -> push -> publish to npm.
#
# Usage:
#   npm run release            # patch  (1.0.9 -> 1.0.10)
#   npm run release -- minor   # minor  (1.0.9 -> 1.1.0)
#   npm run release -- major   # major  (1.0.9 -> 2.0.0)
#
# Notes:
# - npm publish will prompt for your 2FA one-time password (OTP).
# - The version commit carries [skip ci] so the GitHub Actions workflow
#   does NOT double-bump / re-publish.
set -euo pipefail

BUMP="${1:-patch}"

# Must be on main with a clean working tree.
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "main" ]; then
  echo "✗ release must run on main (currently on '$BRANCH')." >&2
  exit 1
fi
if [ -n "$(git status --porcelain)" ]; then
  echo "✗ working tree not clean — commit or stash changes first." >&2
  exit 1
fi

echo "→ syncing with origin/main"
git pull --rebase origin main

echo "→ building"
npm run build

echo "→ bumping version ($BUMP)"
npm version "$BUMP" -m "chore: release v%s [skip ci]"

echo "→ pushing commit + tag"
git push --follow-tags origin main

echo "→ publishing to npm (enter your 2FA OTP when prompted)"
npm publish --access public

echo "✓ released $(node -p "require('./package.json').version")"

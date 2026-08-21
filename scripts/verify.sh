#!/usr/bin/env bash
set -euo pipefail

echo "Running lint..."
pnpm run lint

echo "Automated tests are not configured; continuing with the static production build gate."

echo "Running static production build..."
pnpm run generate

echo "All checks passed."

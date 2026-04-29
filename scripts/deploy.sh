#!/usr/bin/env bash
# Server-side deploy script for dev.rustresort.com.
# Run from project root.

set -euo pipefail

echo "==> git pull"
git pull --ff-only

echo "==> composer install"
composer install --no-dev --optimize-autoloader --no-interaction

echo "==> php artisan migrate"
php artisan migrate --force

# Force-reinstall node deps with the correct platform bindings.
# Workaround for https://github.com/npm/cli/issues/4828 — package-lock.json
# generated on dev machine (macOS) doesn't carry linux-x64-gnu bindings.
echo "==> npm install (clean)"
rm -rf node_modules package-lock.json
npm install --include=optional --no-audit --no-fund

echo "==> npm run build"
npm run build

echo "==> php artisan optimize"
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "==> Done."

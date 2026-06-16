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

# Воспроизводимая установка строго из package-lock.json (lockfileVersion 3 содержит
# бинарники под все платформы, включая linux-x64-gnu). НЕ удаляем лок: именно
# `rm package-lock.json && npm install` тянул старый @jridgewell/trace-mapping без
# .mjs и ломал `vite build`. npm ci сам очищает node_modules перед установкой.
echo "==> npm ci (clean, reproducible)"
npm ci --no-audit --no-fund

echo "==> npm run build"
npm run build

echo "==> php artisan optimize"
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "==> Done."

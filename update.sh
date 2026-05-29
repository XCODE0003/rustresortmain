#!/usr/bin/env bash
#
# Обновление нового проекта на сервере одной командой.
#
# Решает повторяющиеся грабли:
#   1. git pull
#   2. npm-баг с нативными биндингами (package-lock.json собран на macOS,
#      на Linux ломаются @tailwindcss/oxide / rollup native) — переустанавливаем
#      node_modules ТОЛЬКО когда реально менялись зависимости.
#   3. vite-плагин wayfinder зовёт `php artisan` — нужен php 8.4, а системный 8.3
#      → подкладываем /opt/php84/bin в PATH на время сборки.
#   4. чистим кеши Laravel.
#
# Запуск:
#   bash update.sh            # обычное обновление (build + кеши)
#   bash update.sh --deps     # принудительно переустановить node_modules
#
set -euo pipefail

PROJECT=/var/www/www-root/data/www/dev.rustresort.com
PHP84=/opt/php84/bin
cd "$PROJECT"

# php 8.4 первым в PATH — иначе wayfinder упадёт на platform_check (8.3)
export PATH="$PHP84:$PATH"

echo "==> git pull"
BEFORE=$(git rev-parse HEAD)
git pull
AFTER=$(git rev-parse HEAD)

FORCE_DEPS=0
[ "${1:-}" = "--deps" ] && FORCE_DEPS=1

# Менялись ли зависимости в этом pull?
DEPS_CHANGED=0
if [ "$BEFORE" != "$AFTER" ]; then
  if git diff --name-only "$BEFORE" "$AFTER" | grep -qE '^package(-lock)?\.json$'; then
    DEPS_CHANGED=1
  fi
fi

if [ "$FORCE_DEPS" = "1" ] || [ "$DEPS_CHANGED" = "1" ] || [ ! -d node_modules ]; then
  echo "==> переустановка node_modules (deps изменились или их нет)"
  # mac-lock ломает нативные биндинги на Linux → ставим без него
  rm -rf node_modules package-lock.json
  npm install --no-audit --no-fund
else
  echo "==> зависимости не менялись — пропускаю npm install"
fi

echo "==> vite build (php = $(php -v | head -1 | awk '{print $2}'))"
npm run build

echo "==> artisan optimize:clear"
php artisan optimize:clear

echo ""
echo "✅ Готово. Hard reload (Ctrl+Shift+R) на https://rustresort.com"

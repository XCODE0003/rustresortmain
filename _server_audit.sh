#!/usr/bin/env bash
# Read-only server audit. Ничего не меняет. Скопируй ВЕСЬ вывод и пришли.
set +e

WWW=/var/www/www-root/data/www
DEV=$WWW/dev.rustresort.com
MAIN=$WWW/rustresort.com

line(){ printf '\n========== %s ==========\n' "$1"; }

line "HOST / OS"
hostname; uname -a; cat /etc/os-release 2>/dev/null | grep PRETTY

line "WEB ROOT LISTING"
ls -la $WWW 2>/dev/null

line "PHP VERSIONS AVAILABLE"
which php php8.4 php8.3 php8.2 2>/dev/null
php -v 2>/dev/null | head -1
for p in /opt/php*/bin/php /usr/bin/php8.* /usr/local/bin/php8.*; do
  [ -x "$p" ] && echo "$p -> $($p -v 2>/dev/null | head -1)"
done

line "WEB SERVER"
nginx -v 2>&1
apache2 -v 2>&1; httpd -v 2>&1
ps aux | grep -E 'nginx|apache|php-fpm' | grep -v grep | head -20

line "NGINX/APACHE VHOSTS (rustresort)"
grep -rl "rustresort" /etc/nginx 2>/dev/null
grep -rl "rustresort" /etc/apache2 2>/dev/null
echo "--- dev vhost ---"
grep -rh -A30 "dev.rustresort.com" /etc/nginx/sites-* /etc/nginx/conf.d 2>/dev/null | head -60
echo "--- main vhost ---"
grep -rh -A30 "server_name rustresort.com\|server_name www.rustresort.com" /etc/nginx/sites-* /etc/nginx/conf.d 2>/dev/null | head -60

for DIR in "$MAIN" "$DEV"; do
  line "PROJECT: $DIR"
  if [ ! -d "$DIR" ]; then echo "  NOT FOUND"; continue; fi
  echo "--- root listing ---"; ls -la "$DIR" | head -40
  echo "--- git ---"
  git -C "$DIR" remote -v 2>/dev/null
  git -C "$DIR" branch -vv 2>/dev/null | head -5
  git -C "$DIR" log --oneline -3 2>/dev/null
  git -C "$DIR" status -s 2>/dev/null | head -30
  echo "--- laravel version ---"
  php "$DIR/artisan" --version 2>/dev/null
  echo "--- .env (секреты замаскированы) ---"
  if [ -f "$DIR/.env" ]; then
    grep -E '^(APP_ENV|APP_DEBUG|APP_URL|APP_KEY|DB_CONNECTION|DB_HOST|DB_PORT|DB_DATABASE|DB_USERNAME|CACHE_|SESSION_|QUEUE_|REDIS_HOST|FILESYSTEM)' "$DIR/.env" \
      | sed -E 's/(APP_KEY=).*/\1***/; s/(PASSWORD=).*/\1***/; s/(DB_USERNAME=).*/\1***/'
  else echo "  no .env"; fi
  echo "--- storage symlink ---"
  ls -la "$DIR/public/storage" 2>/dev/null
  echo "--- images dir count ---"
  echo "public/images: $(ls -1 "$DIR/public/images" 2>/dev/null | wc -l) files"
  echo "storage images: $(ls -1 "$DIR/storage/app/public/images" 2>/dev/null | wc -l) files"
  echo "--- build manifest ---"
  ls -la "$DIR/public/build/manifest.json" "$DIR/public/build/.vite/manifest.json" 2>/dev/null
  echo "--- composer/node ---"
  [ -f "$DIR/composer.json" ] && grep -E '"php"|"laravel/framework"' "$DIR/composer.json"
  [ -f "$DIR/package.json" ] && grep -E '"build"|"dev"' "$DIR/package.json" | head -3
done

line "MYSQL"
which mysql mysqldump 2>/dev/null
mysql --version 2>/dev/null
echo "--- databases (если root-доступ без пароля) ---"
mysql -uroot -e "SHOW DATABASES;" 2>/dev/null || echo "  (нужен пароль — пропускаю)"

line "DISK"
df -h "$WWW" 2>/dev/null

line "CRON (rustresort)"
crontab -l 2>/dev/null | grep -i rustresort
ls -la /etc/cron.d 2>/dev/null | grep -i rust

line "SUPERVISOR / QUEUE WORKERS"
ls /etc/supervisor/conf.d 2>/dev/null
supervisorctl status 2>/dev/null | grep -i rust

line "DONE — скопируй весь вывод выше"

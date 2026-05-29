#!/usr/bin/env bash
# Read-only audit #2: nginx vhosts + php-fpm версии + сравнение данных в двух БД.
# Ничего не меняет.
set +e
line(){ printf '\n========== %s ==========\n' "$1"; }

line "NGINX VHOST: rustresort.com (полностью)"
cat /etc/nginx/vhosts/www-root/rustresort.com.conf 2>/dev/null

line "NGINX VHOST: dev.rustresort.com (полностью)"
cat /etc/nginx/vhosts/www-root/dev.rustresort.com.conf 2>/dev/null

line "PHP-FPM POOLS (какой сокет = какая версия)"
echo "--- php84 pools ---"
grep -rE '^\[|listen =' /opt/php84/etc/php-fpm.d/ 2>/dev/null
echo "--- php83 pools ---"
grep -rE '^\[|listen =' /opt/php83/etc/php-fpm.d/ 2>/dev/null
echo "--- system php8.3 fpm pools ---"
grep -rE '^\[|listen =' /etc/php/8.3/fpm/pool.d/ 2>/dev/null

line "DB: rust-resort-main (НОВАЯ) — размер данных"
mysql -uroot rust-resort-main -e "
  SELECT COUNT(*) AS users FROM users;
  SELECT COUNT(*) AS shop_items FROM shop_items;
" 2>/dev/null
echo "--- список таблиц + примерное число строк ---"
mysql -uroot -e "
  SELECT table_name, table_rows
  FROM information_schema.tables
  WHERE table_schema='rust-resort-main'
  ORDER BY table_rows DESC LIMIT 40;" 2>/dev/null

line "DB: rust-resot (СТАРАЯ боевая) — размер данных"
echo "--- список таблиц + примерное число строк ---"
mysql -uroot -e "
  SELECT table_name, table_rows
  FROM information_schema.tables
  WHERE table_schema='rust-resot'
  ORDER BY table_rows DESC LIMIT 40;" 2>/dev/null

line "Есть ли в НОВОЙ БД таблицы платежей/балансов и сколько там строк"
for t in users payments transactions balances orders shop_purchases purchases; do
  c=$(mysql -uroot -N -e "SELECT COUNT(*) FROM \`rust-resort-main\`.\`$t\`;" 2>/dev/null)
  [ -n "$c" ] && echo "  rust-resort-main.$t = $c строк"
done
echo "--- старая БД для сравнения ---"
for t in users payments transactions balances orders shop_purchases purchases; do
  c=$(mysql -uroot -N -e "SELECT COUNT(*) FROM \`rust-resot\`.\`$t\`;" 2>/dev/null)
  [ -n "$c" ] && echo "  rust-resot.$t = $c строк"
done

line "DONE — пришли весь вывод"

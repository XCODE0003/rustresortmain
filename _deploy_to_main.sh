#!/usr/bin/env bash
#
# Переключает домен rustresort.com на НОВЫЙ проект (Laravel 12), который сейчас
# живёт в каталоге dev.rustresort.com и работает через php84 сокет 2.sock.
#
# Логика: dev уже работает на этих файлах + 2.sock. Делаем так, чтобы main-домен
# указывал на ТОТ ЖЕ root и ТОТ ЖЕ сокет — поведение будет 1:1 с dev.
#
# НИЧЕГО не удаляет. Старый проект остаётся в /rustresort.com (бэкап, откат за 10 сек).
# Старая БД rust-resot не трогается. Новый проект использует rust-resort-main.
#
# Использование:
#   bash _deploy_to_main.sh --dry     # показать план, сгенерить nginx .new для просмотра
#   bash _deploy_to_main.sh --apply   # применить (с бэкапами + авто-откат nginx)
#
set -uo pipefail

PHP=/opt/php84/bin/php
NEW=/var/www/www-root/data/www/dev.rustresort.com
OLD=/var/www/www-root/data/www/rustresort.com
VHOST=/etc/nginx/vhosts/www-root/rustresort.com.conf
ENV=$NEW/.env
TS=$(date +%Y%m%d-%H%M%S)
BACKUP=/root/deploy-backup-$TS

MODE="${1:---dry}"

line(){ printf '\n========== %s ==========\n' "$1"; }
ok(){ printf '  ✅ %s\n' "$1"; }
warn(){ printf '  ⚠️  %s\n' "$1"; }

line "PREFLIGHT — текущее состояние"
echo "--- nginx root + socket (main) ---"
grep -nE 'set \$root_path|fastcgi_pass' "$VHOST" | sed 's/^/  /'
echo "--- .env нового проекта ---"
grep -E '^(APP_ENV|APP_DEBUG|APP_URL|DB_DATABASE|QUEUE_CONNECTION|CACHE_STORE)' "$ENV" | sed 's/^/  /'
echo "--- cron (rustresort) ---"
crontab -l 2>/dev/null | grep -i rustresort | sed 's/^/  /'

# Build the proposed nginx config in-memory.
# ВАЖНО: в ISPmanager-конфиге ДВЕ "set $root_path" — одна с /public, вторая БЕЗ.
# Обе должны указывать на $NEW/public, иначе вторая (без /public) перекроет первую
# и nginx будет искать индекс в каталоге проекта → 403 forbidden.
# Порядок sed важен: сначала длинный паттерн (.../rustresort.com/public),
# потом короткий (.../rustresort.com;) → оба дают $NEW/public.
PROPOSED=$(sed \
  -e 's#/var/www/www-root/data/www/rustresort.com/public#'"$NEW"'/public#g' \
  -e 's#/var/www/www-root/data/www/rustresort.com;#'"$NEW"'/public;#g' \
  -e 's#unix:/var/www/php-fpm/1.sock#unix:/var/www/php-fpm/2.sock#g' \
  "$VHOST")

line "PLANNED CHANGES"
echo "1) nginx $VHOST:"
echo "     root  → $NEW/public"
echo "     socket→ /var/www/php-fpm/2.sock (php84, как у dev)"
echo "2) .env: APP_ENV=production, APP_DEBUG=false"
echo "3) artisan (php84): clear+cache config/view, optimize"
echo "4) cron: '* * * * * $PHP $NEW/artisan schedule:run' (каждую минуту вместо */3)"
echo "5) Старый проект и БД rust-resot — НЕ трогаем (бэкап/откат)"

if [ "$MODE" = "--dry" ]; then
  echo "$PROPOSED" > "$VHOST.new"
  line "DRY RUN"
  ok "Новый nginx-конфиг записан в: $VHOST.new"
  echo "  Посмотри diff:   diff $VHOST $VHOST.new"
  echo "  Если ок — запусти: bash _deploy_to_main.sh --apply"
  echo ""
  echo "--- DIFF (старый → новый) ---"
  diff "$VHOST" "$VHOST.new"
  exit 0
fi

if [ "$MODE" != "--apply" ]; then
  echo "Неизвестный режим: $MODE (используй --dry или --apply)"; exit 1
fi

#############################################
# APPLY
#############################################
mkdir -p "$BACKUP"
line "BACKUP → $BACKUP"
cp "$VHOST" "$BACKUP/rustresort.com.conf.bak" && ok "nginx vhost"
cp "$ENV" "$BACKUP/.env.bak" && ok ".env"
crontab -l > "$BACKUP/crontab.bak" 2>/dev/null && ok "crontab"

# 1) nginx
line "1/4 nginx"
echo "$PROPOSED" > "$VHOST"
if nginx -t 2>"$BACKUP/nginx-test.log"; then
  ok "nginx -t прошёл"
  systemctl reload nginx 2>/dev/null || service nginx reload
  ok "nginx reload"
else
  warn "nginx -t УПАЛ — откатываю"
  cat "$BACKUP/nginx-test.log"
  cp "$BACKUP/rustresort.com.conf.bak" "$VHOST"
  nginx -t && (systemctl reload nginx 2>/dev/null || service nginx reload)
  warn "Откат выполнен, домен по-прежнему на старом проекте. Стоп."
  exit 1
fi

# 2) .env
line "2/4 .env → production"
sed -i 's/^APP_ENV=.*/APP_ENV=production/' "$ENV"
sed -i 's/^APP_DEBUG=.*/APP_DEBUG=false/' "$ENV"
grep -E '^(APP_ENV|APP_DEBUG)' "$ENV" | sed 's/^/  /'
ok "APP_ENV/APP_DEBUG обновлены"

# 3) artisan caches
line "3/4 artisan (php84)"
cd "$NEW" || exit 1
$PHP artisan optimize:clear 2>&1 | sed 's/^/  /'
$PHP artisan config:cache    2>&1 | sed 's/^/  /'
$PHP artisan view:cache      2>&1 | sed 's/^/  /'
# route:cache best-effort (может падать на closure-роутах)
$PHP artisan route:cache 2>&1 | sed 's/^/  /' || warn "route:cache пропущен (closure-роуты) — это ок"
ok "кеши пересобраны"

# 4) cron
line "4/4 cron → каждую минуту, новый проект"
( crontab -l 2>/dev/null | grep -v -i 'rustresort.com/artisan schedule:run'; \
  echo "* * * * * $PHP $NEW/artisan schedule:run >> /dev/null 2>&1" ) | crontab -
echo "  Новый crontab:"; crontab -l | grep -i schedule:run | sed 's/^/    /'
ok "cron обновлён"

# 5) smoke test через РЕАЛЬНЫЙ vhost (не localhost — он слушает только на IP)
line "SMOKE TEST"
IP=$(grep -oE 'listen [0-9.]+' "$VHOST" | head -1 | awk '{print $2}')
IP=${IP:-217.26.30.24}
echo "  Проверяю https://rustresort.com через $IP ..."
CODE=$(curl -s -o /tmp/smoke.html -w '%{http_code}' https://rustresort.com --resolve rustresort.com:443:"$IP" 2>/dev/null)
SIZE=$(wc -c < /tmp/smoke.html 2>/dev/null)
echo "  HTTP $CODE, тело $SIZE байт"
if [ "$CODE" = "200" ] && [ "${SIZE:-0}" -gt 500 ]; then
  ok "Сайт отвечает 200 и отдаёт контент"
  grep -qiE 'app|inertia|vite|<div id="app"|rustresort' /tmp/smoke.html && ok "Похоже на новый Vue/Inertia сайт"
else
  warn "Подозрительный ответ (код $CODE, размер $SIZE). Проверь tail error.log ниже:"
  tail -5 /var/www/httpd-logs/rustresort.com.error.log | sed 's/^/    /'
  warn "Если 403/пусто — откатись командами ниже и пришли вывод."
fi

line "DONE ✅"
echo "  Открой https://rustresort.com в ИНКОГНИТО (Ctrl+Shift+R) — должен открыться новый сайт."
echo "  Бэкапы: $BACKUP"
echo ""
echo "  ОТКАТ (если что-то не так):"
echo "    cp $BACKUP/rustresort.com.conf.bak $VHOST && nginx -t && systemctl reload nginx"
echo "    cp $BACKUP/.env.bak $ENV"
echo "    crontab $BACKUP/crontab.bak"

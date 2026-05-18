# Настройка крона и очереди на сервере

После деплоя кода на сервер `217.26.30.24` (`dev.rustresort.com`) выполнить под root следующее.

## 1. Починить crontab www-root

Текущий крон у `www-root` указывает на несуществующий путь
`/var/www/u3377206/data/www/rustresort.com/` — поэтому `schedule:run` не запускается,
из-за чего не синхронизируется онлайн и не обрабатывается очередь выдачи.

Открыть редактор:

```bash
crontab -u www-root -e
```

Заменить содержимое на:

```cron
MAILTO=""

# Новый сайт (dev.rustresort.com) — каждую минуту
* * * * * cd /var/www/www-root/data/www/dev.rustresort.com && /usr/local/bin/php artisan schedule:run >> storage/logs/schedule.log 2>&1

# Старый сайт оставить, если он ещё нужен
* * * * * cd /var/www/www-root/data/www/rustresort.com && /usr/local/bin/php artisan schedule:run >> storage/logs/schedule.log 2>&1
```

Уточнить путь к PHP (на ISPmanager обычно `/opt/php84/bin/php` или
`/usr/local/mgr5/sbin/php-bin-isp-php84`):

```bash
ls /opt/php*/bin/php /var/www/php-bin-isp-php84/php* 2>/dev/null
which php
```

Подставить найденный путь вместо `/usr/local/bin/php`.

## 2. Воркер очереди

В коде уже добавлен фолбэк — `Schedule::command('queue:work --stop-when-empty --tries=3')`
в `routes/console.php` будет каждую минуту разбирать очередь, пока крон работает.
Этого хватит для типового трафика.

Если нужна более низкая задержка и стабильность — поставить supervisor.

### Вариант А (рекомендуется): supervisor

```bash
apt install -y supervisor
```

`/etc/supervisor/conf.d/rustresort-queue.conf`:

```ini
[program:rustresort-queue]
process_name=%(program_name)s_%(process_num)02d
command=/usr/local/bin/php /var/www/www-root/data/www/dev.rustresort.com/artisan queue:work --tries=3 --timeout=120 --sleep=3
autostart=true
autorestart=true
user=www-root
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/www-root/data/www/dev.rustresort.com/storage/logs/queue.log
stopwaitsecs=130
```

Применить:

```bash
supervisorctl reread
supervisorctl update
supervisorctl status rustresort-queue:*
```

Если supervisor поднят — убрать `Schedule::command('queue:work …')` из
`routes/console.php` (иначе будут две параллельные обработки одной таблицы jobs).

### Вариант Б: systemd

`/etc/systemd/system/rustresort-queue.service`:

```ini
[Unit]
Description=RustResort Laravel Queue Worker
After=network.target mysql.service

[Service]
Type=simple
User=www-root
Restart=always
RestartSec=5
ExecStart=/usr/local/bin/php /var/www/www-root/data/www/dev.rustresort.com/artisan queue:work --tries=3 --timeout=120 --sleep=3
StandardOutput=append:/var/www/www-root/data/www/dev.rustresort.com/storage/logs/queue.log
StandardError=append:/var/www/www-root/data/www/dev.rustresort.com/storage/logs/queue.log

[Install]
WantedBy=multi-user.target
```

Запустить:

```bash
systemctl daemon-reload
systemctl enable --now rustresort-queue
systemctl status rustresort-queue
```

## 3. Проверка

```bash
cd /var/www/www-root/data/www/dev.rustresort.com

# Расписание видится в выводе:
php artisan schedule:list

# Ручной запуск синхронизации онлайна:
php artisan servers:sync-online

# Глянуть очередь:
php artisan queue:monitor default
mysql -u <user> -p<pass> rust_resort_main -e \
  "SELECT id, queue, attempts, failed_at FROM jobs LIMIT 20; \
   SELECT id, queue, exception FROM failed_jobs ORDER BY failed_at DESC LIMIT 5;"

# Хвост лога расписания:
tail -f storage/logs/schedule.log storage/logs/queue.log storage/logs/laravel.log
```

## 4. Безопасность

После починки **сменить root-пароль** на сервере и перевести SSH на ключи —
пароль засветился в чате и логах:

```bash
passwd                              # новый пароль для root
nano /etc/ssh/sshd_config           # PasswordAuthentication no
systemctl restart ssh
```

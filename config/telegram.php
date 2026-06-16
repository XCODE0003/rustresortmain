<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Telegram Promo Bot
    |--------------------------------------------------------------------------
    | bot_token        — токен бота от @BotFather.
    | webhook_url      — публичный URL вебхука, напр. https://rustresort.com/api/telegram/webhook
    | allowed_ids      — список Telegram user id через запятую, кому разрешён доступ.
    | webhook_secret   — (опц.) секрет, который Telegram шлёт в заголовке
    |                    X-Telegram-Bot-Api-Secret-Token; если задан — проверяется.
    */
    'bot_token' => env('TELEGRAM_BOT_TOKEN', ''),
    'webhook_url' => env('TELEGRAM_WEBHOOK_URL', ''),
    'allowed_ids' => env('TELEGRAM_ALLOWED_IDS', ''),
    'webhook_secret' => env('TELEGRAM_WEBHOOK_SECRET', ''),
];

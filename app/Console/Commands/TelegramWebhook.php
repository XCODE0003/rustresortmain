<?php

namespace App\Console\Commands;

use App\Telegram\TelegramClient;
use Illuminate\Console\Command;

class TelegramWebhook extends Command
{
    protected $signature = 'telegram:webhook {action=status : set | remove | status}';

    protected $description = 'Управление вебхуком Telegram-бота промокодов';

    public function handle(): int
    {
        $telegram = new TelegramClient();

        if (! $telegram->isConfigured()) {
            $this->error('TELEGRAM_BOT_TOKEN не настроен в .env');

            return self::FAILURE;
        }

        return match ($this->argument('action')) {
            'set' => $this->setWebhook($telegram),
            'remove' => $this->removeWebhook($telegram),
            default => $this->showStatus($telegram),
        };
    }

    protected function setWebhook(TelegramClient $telegram): int
    {
        $url = (string) config('telegram.webhook_url');
        if ($url === '') {
            $this->error('TELEGRAM_WEBHOOK_URL не настроен в .env');

            return self::FAILURE;
        }

        $params = ['url' => $url];
        $secret = (string) config('telegram.webhook_secret', '');
        if ($secret !== '') {
            $params['secret_token'] = $secret;
        }

        $resp = $telegram->setWebhook($params);
        if (! empty($resp['ok'])) {
            $this->info('✅ Webhook установлен: '.$url);

            return self::SUCCESS;
        }

        $this->error('❌ Не удалось установить webhook: '.($resp['description'] ?? 'unknown'));

        return self::FAILURE;
    }

    protected function removeWebhook(TelegramClient $telegram): int
    {
        $resp = $telegram->deleteWebhook();
        if (! empty($resp['ok'])) {
            $this->info('✅ Webhook удалён');

            return self::SUCCESS;
        }

        $this->error('❌ Не удалось удалить webhook: '.($resp['description'] ?? 'unknown'));

        return self::FAILURE;
    }

    protected function showStatus(TelegramClient $telegram): int
    {
        $resp = $telegram->getWebhookInfo();
        $info = $resp['result'] ?? [];

        $this->info('📡 Статус Webhook:');
        $this->line('   URL: '.($info['url'] ?: '<не установлен>'));
        $this->line('   Pending updates: '.($info['pending_update_count'] ?? 0));
        if (! empty($info['last_error_message'])) {
            $this->line('   Last error: '.$info['last_error_message']);
        }
        $this->newLine();
        $this->line('Команды: telegram:webhook set | remove | status');

        return self::SUCCESS;
    }
}

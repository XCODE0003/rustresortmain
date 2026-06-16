<?php

namespace App\Telegram;

use Illuminate\Support\Facades\Http;

/**
 * Минимальный клиент Telegram Bot API на Laravel HTTP-клиенте.
 *
 * Заменяет irazasyed/telegram-bot-sdk из старого проекта: боту нужны лишь
 * простые POST-вызовы к api.telegram.org, поэтому отдельная зависимость
 * (и её баг с guzzle promises) не нужна — деплой остаётся без composer-изменений.
 */
class TelegramClient
{
    private string $token;

    public function __construct(?string $token = null)
    {
        $this->token = $token ?: (string) config('telegram.bot_token');
    }

    public function isConfigured(): bool
    {
        return $this->token !== '';
    }

    /**
     * Вызов метода Bot API. Возвращает декодированный JSON-ответ Telegram.
     */
    public function call(string $method, array $params = []): array
    {
        $response = Http::asJson()
            ->timeout(20)
            ->connectTimeout(10)
            ->post("https://api.telegram.org/bot{$this->token}/{$method}", $params);

        return $response->json() ?? ['ok' => false, 'description' => 'empty response'];
    }

    public function sendMessage(array $params): array
    {
        return $this->call('sendMessage', $params);
    }

    public function editMessageText(array $params): array
    {
        return $this->call('editMessageText', $params);
    }

    public function answerCallbackQuery(array $params): array
    {
        return $this->call('answerCallbackQuery', $params);
    }

    public function setWebhook(array $params): array
    {
        return $this->call('setWebhook', $params);
    }

    public function deleteWebhook(): array
    {
        return $this->call('deleteWebhook');
    }

    public function getWebhookInfo(): array
    {
        return $this->call('getWebhookInfo');
    }
}

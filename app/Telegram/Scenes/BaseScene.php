<?php

namespace App\Telegram\Scenes;

use App\Telegram\Services\ConversationService;
use App\Telegram\TelegramClient;

/**
 * Базовая сцена бота (порт из старого проекта). Транспорт — TelegramClient
 * (Laravel HTTP), вместо SDK Api/Update. Входящий апдейт приходит уже
 * распарсенным в массив (см. TelegramBotController::webhook).
 *
 * Ожидаемые ключи $update: telegram_id, chat_id, is_bot, text,
 * callback_data, callback_query_id, callback_message_id.
 */
abstract class BaseScene
{
    protected TelegramClient $telegram;

    /** @var array<string,mixed> */
    protected array $update;

    protected int $telegramId;

    protected int $chatId;

    abstract public static function getName(): string;

    abstract public function enter(): void;

    abstract public function handle(): void;

    public function setContext(TelegramClient $telegram, array $update, int $telegramId, int $chatId): void
    {
        $this->telegram = $telegram;
        $this->update = $update;
        $this->telegramId = $telegramId;
        $this->chatId = $chatId;
    }

    protected function getCurrentStep(): ?string
    {
        $state = ConversationService::getState($this->telegramId);

        return $state['step'] ?? null;
    }

    protected function getData(): array
    {
        $state = ConversationService::getState($this->telegramId);

        return $state['data'] ?? [];
    }

    protected function setData(array $data): void
    {
        ConversationService::updateData($this->telegramId, $data);
    }

    protected function goToStep(string $step): void
    {
        ConversationService::nextStep($this->telegramId, $step);
    }

    protected function leave(): void
    {
        ConversationService::clearState($this->telegramId);
    }

    protected function reply(string $text, array $options = []): void
    {
        $this->telegram->sendMessage(array_merge([
            'chat_id' => $this->chatId,
            'text' => $text,
            'parse_mode' => 'HTML',
        ], $options));
    }

    protected function answerCallback(?string $text = null): void
    {
        $callbackQueryId = $this->update['callback_query_id'] ?? null;
        if ($callbackQueryId) {
            $this->telegram->answerCallbackQuery([
                'callback_query_id' => $callbackQueryId,
                'text' => $text,
            ]);
        }
    }

    protected function editMessage(int $messageId, string $text, array $options = []): void
    {
        $this->telegram->editMessageText(array_merge([
            'chat_id' => $this->chatId,
            'message_id' => $messageId,
            'text' => $text,
            'parse_mode' => 'HTML',
        ], $options));
    }

    protected function getMessageText(): ?string
    {
        return $this->update['text'] ?? null;
    }

    protected function getCallbackData(): ?string
    {
        return $this->update['callback_data'] ?? null;
    }

    protected function getCallbackMessageId(): ?int
    {
        return $this->update['callback_message_id'] ?? null;
    }
}

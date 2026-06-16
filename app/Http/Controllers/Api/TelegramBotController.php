<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Telegram\Scenes\MainMenuScene;
use App\Telegram\Scenes\PromoCreateScene;
use App\Telegram\Scenes\PromoListScene;
use App\Telegram\Scenes\PromoStatsScene;
use App\Telegram\Services\ConversationService;
use App\Telegram\TelegramClient;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/**
 * Вебхук Telegram-бота промокодов (порт из старого проекта; транспорт — TelegramClient).
 * Доступ ограничен whitelist'ом telegram.allowed_ids. Опционально проверяется
 * секрет вебхука (заголовок X-Telegram-Bot-Api-Secret-Token).
 */
class TelegramBotController extends Controller
{
    protected TelegramClient $telegram;

    /** @var array<string,class-string> */
    protected array $scenes = [
        'main_menu' => MainMenuScene::class,
        'promo_create' => PromoCreateScene::class,
        'promo_list' => PromoListScene::class,
        'promo_stats' => PromoStatsScene::class,
    ];

    public function __construct()
    {
        $this->telegram = new TelegramClient();
    }

    public function webhook(Request $request): JsonResponse
    {
        // Опциональная проверка секрета вебхука.
        $secret = (string) config('telegram.webhook_secret', '');
        if ($secret !== '' && $request->header('X-Telegram-Bot-Api-Secret-Token') !== $secret) {
            return response()->json(['status' => 'forbidden'], 403);
        }

        try {
            $payload = $request->json()->all();
            if (empty($payload)) {
                $payload = json_decode($request->getContent(), true) ?: [];
            }

            $update = $this->parseUpdate($payload);

            if (! $update['telegram_id'] || ! $update['chat_id'] || $update['is_bot']) {
                return response()->json(['status' => 'ok']);
            }

            $telegramId = $update['telegram_id'];
            $chatId = $update['chat_id'];

            if (! $this->isAllowed($telegramId)) {
                Log::channel('api')->warning("Telegram: unauthorized access attempt from ID {$telegramId}");
                $this->telegram->sendMessage([
                    'chat_id' => $chatId,
                    'text' => '⛔ Нет доступа. Ваш Telegram ID не в списке разрешённых.',
                ]);

                return response()->json(['status' => 'unauthorized']);
            }

            $text = $update['text'];

            // /start и /menu — всегда в главное меню.
            if ($text && in_array(strtolower($text), ['/start', '/menu'], true)) {
                ConversationService::clearState($telegramId);
                $this->enterScene(new MainMenuScene(), $update, $telegramId, $chatId);

                return response()->json(['status' => 'ok']);
            }

            $state = ConversationService::getState($telegramId);

            if ($state && isset($state['scene'], $this->scenes[$state['scene']])) {
                $sceneClass = $this->scenes[$state['scene']];
                $scene = new $sceneClass();
                $scene->setContext($this->telegram, $update, $telegramId, $chatId);
                $scene->handle();
            } else {
                $this->enterScene(new MainMenuScene(), $update, $telegramId, $chatId);
            }

            return response()->json(['status' => 'ok']);
        } catch (\Throwable $e) {
            Log::channel('api')->error('Telegram webhook error: '.$e->getMessage()."\n".$e->getTraceAsString());

            // Возвращаем 200, чтобы Telegram не зацикливал ретраи на «битом» апдейте.
            return response()->json(['status' => 'error']);
        }
    }

    /**
     * Разбирает сырой апдейт Telegram в плоский массив, который понимают сцены.
     * callback_query имеет приоритет над message.
     *
     * @return array{telegram_id:?int,chat_id:?int,is_bot:bool,text:?string,callback_data:?string,callback_query_id:?string,callback_message_id:?int}
     */
    protected function parseUpdate(array $payload): array
    {
        $update = [
            'telegram_id' => null,
            'chat_id' => null,
            'is_bot' => false,
            'text' => null,
            'callback_data' => null,
            'callback_query_id' => null,
            'callback_message_id' => null,
        ];

        if (! empty($payload['callback_query'])) {
            $cb = $payload['callback_query'];
            $update['telegram_id'] = $cb['from']['id'] ?? null;
            $update['chat_id'] = $cb['message']['chat']['id'] ?? null;
            $update['is_bot'] = (bool) ($cb['from']['is_bot'] ?? false);
            $update['callback_data'] = $cb['data'] ?? null;
            $update['callback_query_id'] = $cb['id'] ?? null;
            $update['callback_message_id'] = $cb['message']['message_id'] ?? null;
        } elseif (! empty($payload['message'])) {
            $msg = $payload['message'];
            $update['telegram_id'] = $msg['from']['id'] ?? null;
            $update['chat_id'] = $msg['chat']['id'] ?? null;
            $update['is_bot'] = (bool) ($msg['from']['is_bot'] ?? false);
            $update['text'] = $msg['text'] ?? null;
        }

        return $update;
    }

    protected function enterScene(MainMenuScene $scene, array $update, int $telegramId, int $chatId): void
    {
        $scene->setContext($this->telegram, $update, $telegramId, $chatId);
        $scene->enter();
    }

    protected function isAllowed(int $telegramId): bool
    {
        $allowedIds = array_filter(array_map('trim', explode(',', (string) config('telegram.allowed_ids', ''))));

        return in_array((string) $telegramId, $allowedIds, true);
    }
}

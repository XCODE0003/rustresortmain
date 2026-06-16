<?php

namespace App\Telegram\Scenes;

use App\Models\PromoCode;
use App\Telegram\Services\ConversationService;

class PromoListScene extends BaseScene
{
    protected const PER_PAGE = 10;

    public static function getName(): string
    {
        return 'promo_list';
    }

    public function enter(): void
    {
        ConversationService::setState($this->telegramId, self::getName(), 'list', ['page' => 0]);
        $this->showList(0);
    }

    public function handle(): void
    {
        $callbackData = $this->getCallbackData();

        if (! $callbackData) {
            return;
        }

        $this->answerCallback();

        if ($callbackData === 'back_to_menu') {
            $this->leave();
            $this->goToMainMenu();

            return;
        }

        if ($callbackData === 'refresh_list') {
            $data = $this->getData();
            $this->showList($data['page'] ?? 0, true, $this->getCallbackMessageId());

            return;
        }

        if (str_starts_with($callbackData, 'page_')) {
            $page = (int) str_replace('page_', '', $callbackData);
            $this->setData(['page' => $page]);
            $this->showList($page, true, $this->getCallbackMessageId());

            return;
        }

        if (str_starts_with($callbackData, 'stats_')) {
            $promoId = (int) str_replace('stats_', '', $callbackData);
            ConversationService::setState($this->telegramId, PromoStatsScene::getName(), 'view', ['promo_id' => $promoId]);
            $scene = new PromoStatsScene();
            $scene->setContext($this->telegram, $this->update, $this->telegramId, $this->chatId);
            $scene->showPromoStats($promoId, true, $this->getCallbackMessageId());

            return;
        }
    }

    public function showList(int $page = 0, bool $edit = false, ?int $messageId = null): void
    {
        // Только промокоды, созданные ботом.
        $total = PromoCode::where('is_created_bot', true)->count();
        $totalPages = max(1, (int) ceil($total / self::PER_PAGE));
        $page = max(0, min($page, $totalPages - 1));

        $promoCodes = PromoCode::where('is_created_bot', true)
            ->orderBy('created_at', 'desc')
            ->skip($page * self::PER_PAGE)
            ->take(self::PER_PAGE)
            ->get();

        $text = "📋 <b>Список промокодов</b> <i>(созданные ботом)</i>\n";
        $text .= 'Страница '.($page + 1)." из {$totalPages} (всего: {$total})\n\n";

        if ($promoCodes->isEmpty()) {
            $text .= '<i>Промокодов не найдено</i>';
        } else {
            foreach ($promoCodes as $promo) {
                $users = is_array($promo->users) ? $promo->users : [];
                $activations = count($users);
                $maxActivations = $promo->max_activations ?? '∞';

                $statusEmoji = '🟢';
                if ($promo->max_activations && $activations >= $promo->max_activations) {
                    $statusEmoji = '🔴';
                }

                $text .= "{$statusEmoji} <code>{$promo->code}</code> — {$promo->title}\n";
                $text .= "   📊 Активаций: {$activations}".($promo->max_activations ? "/{$maxActivations}" : '')."\n";
            }
        }

        $text .= "\n<i>🟢 Активен | 🔴 Неактивен</i>";

        $buttons = [];

        $promoButtons = [];
        foreach ($promoCodes as $promo) {
            $promoButtons[] = ['text' => "📊 {$promo->code}", 'callback_data' => "stats_{$promo->id}"];
        }

        foreach (array_chunk($promoButtons, 3) as $row) {
            $buttons[] = $row;
        }

        $navButtons = [];
        if ($page > 0) {
            $navButtons[] = ['text' => '⬅️', 'callback_data' => 'page_'.($page - 1)];
        }
        $navButtons[] = ['text' => '🔄', 'callback_data' => 'refresh_list'];
        if ($page < $totalPages - 1) {
            $navButtons[] = ['text' => '➡️', 'callback_data' => 'page_'.($page + 1)];
        }
        $buttons[] = $navButtons;

        $buttons[] = [['text' => '🏠 Главное меню', 'callback_data' => 'back_to_menu']];

        $keyboard = ['inline_keyboard' => $buttons];

        if ($edit && $messageId) {
            $this->editMessage($messageId, $text, ['reply_markup' => json_encode($keyboard)]);
        } else {
            $this->reply($text, ['reply_markup' => json_encode($keyboard)]);
        }
    }

    protected function goToMainMenu(): void
    {
        $scene = new MainMenuScene();
        $scene->setContext($this->telegram, $this->update, $this->telegramId, $this->chatId);
        $scene->enter();
    }
}

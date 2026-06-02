<?php

namespace App\Http\Controllers;

use App\Models\Cases;
use App\Models\Inventory;
use App\Models\PromoCode;
use App\Models\ShopItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

/**
 * Активация промокодов из личного кабинета.
 *
 * Логика перенесена из старого проекта (rustresortOld PromoCodeController@activate),
 * адаптирована под новый проект: баланс в рублях (без конвертации USD), флеш через
 * Inertia (redirect()->back()->with), награды (кейс/товар/VIP) кладутся в inventories.
 *
 * type (single-use): 1 — один раз на пользователя; 2 — один раз глобально; иначе — без
 * ограничения по уникальности (только max_activations).
 * type_reward: 1 — VIP, 2 и 7 — бонус на баланс, 3 — онлайн-время под кейс,
 * 4 — кейс в инвентарь, 5 — товар магазина в инвентарь, 6 — % к следующему пополнению.
 */
class PromoController extends Controller
{
    public function activate(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'code' => ['required', 'string', 'max:64'],
        ]);

        $user = auth()->user();
        if (! $user) {
            abort(401);
        }

        $lock = Cache::lock('promocode_apply_'.$user->id, 5);
        if (! $lock->get()) {
            return back()->with('error', 'Промокод уже обрабатывается, попробуйте ещё раз.');
        }

        try {
            $promo = PromoCode::where('code', $validated['code'])
                ->where('is_created_bot', false)
                ->first();

            if (! $promo || ! $promo->isActive()) {
                return back()->with('error', 'Неверный промокод или срок его действия истёк.');
            }

            $usedUsers = is_array($promo->users) ? $promo->users : (json_decode($promo->users ?? '[]', true) ?: []);
            $alreadyUsedByMe = collect($usedUsers)->contains(fn ($u) => (int) ($u['user_id'] ?? 0) === $user->id);

            // Уникальность активации.
            if ((int) $promo->type === 1 && $alreadyUsedByMe) {
                return back()->with('error', 'Вы уже активировали этот промокод.');
            }
            if ((int) $promo->type === 2 && ! empty($usedUsers)) {
                return back()->with('error', 'Этот промокод уже был использован.');
            }

            // Лимит активаций.
            if ($promo->max_activations && count($usedUsers) >= $promo->max_activations) {
                return back()->with('error', 'Достигнут лимит активаций промокода.');
            }

            // Применяем награду. Запись активации делаем ТОЛЬКО после успешной выдачи,
            // чтобы при ошибке промокод не «сгорал».
            $result = $this->applyReward($promo, $user);
            if ($result === null) {
                return back()->with('error', 'Промокод настроен некорректно. Обратитесь в поддержку.');
            }

            if (! $alreadyUsedByMe) {
                $usedUsers[] = ['user_id' => $user->id, 'date' => now()->toDateTimeString()];
                $promo->users = $usedUsers;
                $promo->save();
            }

            Log::channel('paymentslog')->info('Promo activated', [
                'user_id' => $user->id,
                'code' => $promo->code,
                'type_reward' => $promo->type_reward,
            ]);

            return back()->with('success', $result);
        } finally {
            $lock->release();
        }
    }

    /**
     * Выдаёт награду по type_reward. Возвращает текст успеха или null при некорректной
     * конфигурации промокода.
     */
    private function applyReward(PromoCode $promo, $user): ?string
    {
        switch ((int) $promo->type_reward) {
            case 1: // VIP → инвентарь
                if (! $promo->premium_period) {
                    return null;
                }
                Inventory::create([
                    'type' => 1,
                    'item' => json_encode(['type' => 1, 'image' => 'images/vip.png', 'item_id' => null]),
                    'amount' => 1,
                    'user_id' => $user->id,
                    'vip_period' => $promo->premium_period,
                    'deposit_bonus' => 0,
                    'balance' => 0,
                ]);

                return 'Промокод активирован! Вы получили VIP на '.$promo->premium_period.' дн. — заберите его в инвентаре.';

            case 2: // Бонус на баланс (RUB)
            case 7:
                if ($promo->bonus_amount <= 0) {
                    return null;
                }
                $user->increment('balance', $promo->bonus_amount);

                return 'Промокод активирован! Баланс пополнен на '.(float) $promo->bonus_amount.' ₽.';

            case 3: // Онлайн-время под открытие кейса
                $map = [1 => 'online_time', 2 => 'online_time_monday', 3 => 'online_time_thursday'];
                $hoursMap = [1 => 100, 2 => 50, 3 => 75];
                $key = (int) $promo->bonus_case_id;
                if (! isset($map[$key])) {
                    return null;
                }
                $user->increment($map[$key], 60 * 60 * $hoursMap[$key]);

                return 'Промокод активирован! Вам начислено время для открытия кейса.';

            case 4: // Кейс → инвентарь
                $case = Cases::find($promo->case_id);
                if (! $case) {
                    return null;
                }
                Inventory::create([
                    'type' => 4,
                    'case_id' => $promo->case_id,
                    'amount' => 1,
                    'user_id' => $user->id,
                ]);

                return 'Промокод активирован! Кейс «'.($case->title_ru ?? $case->title_en ?? '').'» добавлен в инвентарь.';

            case 5: // Товар магазина → инвентарь
                $item = ShopItem::find($promo->shop_item_id);
                if (! $item) {
                    return null;
                }
                Inventory::create([
                    'type' => 5,
                    'shop_item_id' => $promo->shop_item_id,
                    'variation_id' => $promo->variation_id,
                    'amount' => 1,
                    'user_id' => $user->id,
                ]);

                return 'Промокод активирован! Товар «'.($item->name_ru ?? $item->name_en ?? '').'» добавлен в инвентарь.';

            case 6: // % к следующему пополнению
                if ($promo->bonus_amount <= 0) {
                    return null;
                }
                session()->put('deposit_bonus', (float) $promo->bonus_amount);

                return 'Промокод активирован! Вы получите +'.(float) $promo->bonus_amount.'% при следующем пополнении баланса.';

            default:
                return null;
        }
    }
}

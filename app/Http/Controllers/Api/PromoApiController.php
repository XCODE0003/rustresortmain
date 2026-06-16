<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PromoCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

/**
 * API для внутриигрового плагина ResortPromo (Rust/Oxide).
 * Порт из старого проекта (rustresortOld Api\PromoApiController).
 *
 * Плагин НЕ присылает api_key — эндпоинты открытые (как и в старом проекте, где
 * PROMO_API_KEY=none делал middleware no-op). Прямой вызов /api/activate снаружи
 * лишь пишет активацию в promo_codes.users; награды выдаёт сам плагин ПОСЛЕ ответа 200.
 *
 * Активации на сервере хранятся в promo_codes.users как
 * {steam_id, date, is_bot_promo: true, server_ip} (модель кастит users в array).
 */
class PromoApiController extends Controller
{
    /**
     * GET /api/promo/get
     * Список активных бот-промокодов для плагина. Формат — строго JSON-массив строк
     * ["promo1","promo2"] (плагин регистрирует каждый как чат-команду).
     */
    public function getPromos(): JsonResponse
    {
        $now = now();

        $promoCodes = PromoCode::query()
            ->where(function ($query) use ($now) {
                $query->whereNull('date_start')->orWhere('date_start', '<=', $now);
            })
            ->where(function ($query) use ($now) {
                $query->whereNull('date_end')->orWhere('date_end', '>=', $now);
            })
            ->where('is_created_bot', true)
            ->get();

        $activeCodes = [];

        foreach ($promoCodes as $promo) {
            // Лимит активаций исчерпан — не отдаём плагину.
            if ($promo->max_activations !== null && $promo->max_activations > 0) {
                $users = is_array($promo->users) ? $promo->users : [];
                if (count($users) >= $promo->max_activations) {
                    continue;
                }
            }

            $activeCodes[] = strtolower($promo->code);
        }

        return response()->json($activeCodes);
    }

    /**
     * POST /api/activate
     * Body: {"promo":"code","steam_id":"76561...","server_ip":"1.2.3.4"}
     *
     * 200 — активировано; 400 — не найден/неактивен/лимит; 409 — уже активирован
     * (повторно можно раз в 14 дней).
     */
    public function activate(Request $request): JsonResponse
    {
        $data = $request->json()->all();
        if (empty($data)) {
            $data = json_decode($request->getContent(), true) ?: $request->all();
        }

        $promoCode = strtolower((string) ($data['promo'] ?? ''));
        $steamId = (string) ($data['steam_id'] ?? '');
        $serverIp = (string) ($data['server_ip'] ?? '');

        Log::channel('api')->info("Promo API: activation attempt - promo: {$promoCode}, steam_id: {$steamId}, server_ip: {$serverIp}");

        if ($promoCode === '' || $steamId === '') {
            Log::channel('api')->warning("Promo API: missing required fields - promo: {$promoCode}, steam_id: {$steamId}");

            return response()->json(['error' => 'Missing required fields'], 400);
        }

        return DB::transaction(function () use ($promoCode, $steamId, $serverIp) {
            // Блокировка строки на время проверки/записи — защита от гонок.
            $promo = PromoCode::whereRaw('LOWER(code) = ?', [$promoCode])
                ->lockForUpdate()
                ->first();

            if (! $promo || $promo->is_created_bot === false) {
                Log::channel('api')->warning("Promo API: promo not found - {$promoCode}");

                return response()->json(['error' => 'Promo code not found'], 400);
            }

            $now = now();

            if ($promo->date_start && $promo->date_start->gt($now)) {
                return response()->json(['error' => 'Promo code not yet active'], 400);
            }

            if ($promo->date_end && $promo->date_end->lt($now)) {
                return response()->json(['error' => 'Promo code expired'], 400);
            }

            $users = is_array($promo->users) ? $promo->users : [];

            // Повторная активация этим steam_id разрешена не чаще раза в 14 дней.
            $lastActivationAt = null;
            foreach ($users as $user) {
                if (($user['steam_id'] ?? null) === $steamId) {
                    $date = $user['date'] ?? null;
                    if ($date && (! $lastActivationAt || strtotime($date) > strtotime($lastActivationAt))) {
                        $lastActivationAt = $date;
                    }
                }
            }

            if ($lastActivationAt !== null) {
                $daysSince = ($now->getTimestamp() - strtotime($lastActivationAt)) / 86400;
                if ($daysSince < 14) {
                    $daysLeft = (int) ceil(14 - $daysSince);
                    Log::channel('api')->warning("Promo API: too soon - promo: {$promoCode}, steam_id: {$steamId}, days_left: {$daysLeft}");

                    return response()->json([
                        'error' => 'Already activated',
                        'retry_after_days' => $daysLeft,
                    ], 409);
                }
            }

            if ($promo->max_activations !== null && $promo->max_activations > 0 && count($users) >= $promo->max_activations) {
                Log::channel('api')->warning("Promo API: max activations reached - {$promoCode}");

                return response()->json(['error' => 'Max activations reached'], 400);
            }

            $users[] = [
                'steam_id' => $steamId,
                'date' => $now->format('Y-m-d H:i:s'),
                'is_bot_promo' => true,
                'server_ip' => $serverIp,
            ];

            $promo->users = $users;
            $promo->save();

            Log::channel('api')->info("Promo API: activated - promo: {$promoCode}, steam_id: {$steamId}, server_ip: {$serverIp}");

            return response()->json(['success' => true, 'message' => 'Promo code activated'], 200);
        });
    }
}

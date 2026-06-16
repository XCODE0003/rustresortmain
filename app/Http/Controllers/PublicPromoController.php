<?php

namespace App\Http\Controllers;

use App\Models\Donate;
use App\Models\PromoCode;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

/**
 * Публичная статистика промокода (порт из старого проекта).
 *
 * Показывает, сколько задонатили игроки, активировавшие промокод (в первую очередь
 * на сервере через плагин — is_bot_promo). Учитываются только донаты ПОСЛЕ активации.
 * Открытая шаренная ссылка /p/{uuid} (noindex), отдаётся standalone-страницей.
 */
class PublicPromoController extends Controller
{
    public function show(string $uuid): Response
    {
        $promo = PromoCode::where('public_uuid', $uuid)->firstOrFail();

        $users = is_array($promo->users) ? $promo->users : [];
        $totalActivations = count($users);

        // steam_id -> самая ранняя дата активации (донаты считаем только после неё).
        $steamIdActivations = [];
        $siteUserIds = [];

        foreach ($users as $user) {
            $activationDate = $user['date'] ?? null;

            if (! empty($user['steam_id']) && $activationDate) {
                $steamId = $user['steam_id'];
                if (! isset($steamIdActivations[$steamId]) || strtotime($activationDate) < strtotime($steamIdActivations[$steamId])) {
                    $steamIdActivations[$steamId] = $activationDate;
                }
            }

            if (! empty($user['user_id'])) {
                $siteUserIds[] = ['user_id' => $user['user_id'], 'activation_date' => $activationDate];
            }
        }

        // Активации с сайта хранят user_id — резолвим их steam_id.
        if (! empty($siteUserIds)) {
            $usersData = User::whereIn('id', array_column($siteUserIds, 'user_id'))
                ->whereNotNull('steam_id')
                ->get(['id', 'steam_id']);

            foreach ($usersData as $userData) {
                $activation = collect($siteUserIds)->firstWhere('user_id', $userData->id);
                $date = $activation['activation_date'] ?? null;
                if ($date && (! isset($steamIdActivations[$userData->steam_id]) || strtotime($date) < strtotime($steamIdActivations[$userData->steam_id]))) {
                    $steamIdActivations[$userData->steam_id] = $date;
                }
            }
        }

        $steamIds = array_keys($steamIdActivations);

        // Условие "донат конкретного игрока после его активации" переиспользуем во всех запросах.
        $afterActivation = function ($query) use ($steamIdActivations) {
            $query->where(function ($q) use ($steamIdActivations) {
                foreach ($steamIdActivations as $steamId => $activationDate) {
                    $q->orWhere(function ($subQ) use ($steamId, $activationDate) {
                        $subQ->where('steam_id', $steamId)->where('created_at', '>=', $activationDate);
                    });
                }
            });
        };

        // Агрегаты по ВСЕМ подходящим донатам (кэш 5 минут).
        $donateStats = Cache::remember("promo_stats_{$promo->id}_v1", 300, function () use ($steamIds, $afterActivation) {
            if (empty($steamIds)) {
                return ['total_count' => 0, 'total_amount' => 0, 'first_donation_at' => null, 'last_donation_at' => null];
            }

            $stats = Donate::whereIn('steam_id', $steamIds)
                ->where('status', 1)
                ->where($afterActivation)
                ->selectRaw('COUNT(*) as total_count, COALESCE(SUM(amount), 0) as total_amount, MIN(created_at) as first_donation_at, MAX(created_at) as last_donation_at')
                ->first();

            return [
                'total_count' => (int) ($stats->total_count ?? 0),
                'total_amount' => (float) ($stats->total_amount ?? 0),
                'first_donation_at' => $stats->first_donation_at,
                'last_donation_at' => $stats->last_donation_at,
            ];
        });

        // Последние 50 донатов (без пагинации — страница standalone).
        $donations = collect();
        $dailyStats = collect();
        if (! empty($steamIds)) {
            $donations = Donate::whereIn('steam_id', $steamIds)
                ->where('status', 1)
                ->where($afterActivation)
                ->orderByDesc('created_at')
                ->limit(50)
                ->get(['id', 'user_id', 'steam_id', 'amount', 'created_at']);

            $dailyStats = Donate::whereIn('steam_id', $steamIds)
                ->where('status', 1)
                ->where('created_at', '>=', now()->subDays(30))
                ->where($afterActivation)
                ->selectRaw('DATE(created_at) as date, SUM(amount) as total, COUNT(*) as count')
                ->groupBy('date')
                ->orderByDesc('date')
                ->get();
        }

        // Разбивка активаций: сервер (плагин) vs сайт.
        $serverActivations = 0;
        $siteActivations = 0;
        foreach ($users as $user) {
            if (! empty($user['is_bot_promo'])) {
                $serverActivations++;
            } else {
                $siteActivations++;
            }
        }

        return response()
            ->view('promo.public', [
                'promo' => $promo,
                'totalActivations' => $totalActivations,
                'serverActivations' => $serverActivations,
                'siteActivations' => $siteActivations,
                'donateStats' => $donateStats,
                'donations' => $donations,
                'dailyStats' => $dailyStats,
            ])
            ->header('X-Robots-Tag', 'noindex, nofollow');
    }
}

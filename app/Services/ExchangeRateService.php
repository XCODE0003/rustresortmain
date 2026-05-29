<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * Курс USD→RUB для крипто-платежей.
 *
 * Баланс/ввод — в рублях, но Heleket для крипты (to_currency) выставляет счёт
 * в USD. Этот сервис конвертирует рубли в доллары по курсу CoinGecko (USDT≈USD),
 * кэширует на час, при сбое API отдаёт последнее известное значение либо фолбэк.
 */
class ExchangeRateService
{
    private const CACHE_KEY = 'usd_rub_rate';

    private const LAST_KNOWN_KEY = 'usd_rub_rate_last_known';

    private const TTL_SECONDS = 3600;

    /** Резервный курс, если API недоступен и нет сохранённого значения. */
    private const FALLBACK_RATE = 95.0;

    /**
     * Сколько рублей в одном долларе.
     */
    public function usdToRub(): float
    {
        $cached = Cache::get(self::CACHE_KEY);
        if (is_numeric($cached) && (float) $cached > 0) {
            return (float) $cached;
        }

        $rate = $this->fetchRate();
        if ($rate !== null) {
            Cache::put(self::CACHE_KEY, $rate, self::TTL_SECONDS);
            Cache::forever(self::LAST_KNOWN_KEY, $rate);

            return $rate;
        }

        $lastKnown = Cache::get(self::LAST_KNOWN_KEY);
        if (is_numeric($lastKnown) && (float) $lastKnown > 0) {
            return (float) $lastKnown;
        }

        return self::FALLBACK_RATE;
    }

    /**
     * Перевести сумму в рублях в доллары (округление до центов).
     */
    public function rubToUsd(float $rub): float
    {
        $rate = $this->usdToRub();

        return $rate > 0 ? round($rub / $rate, 2) : $rub;
    }

    private function fetchRate(): ?float
    {
        try {
            $response = Http::timeout(5)->get('https://api.coingecko.com/api/v3/simple/price', [
                'ids' => 'tether',
                'vs_currencies' => 'rub',
            ]);

            if ($response->successful()) {
                $rate = $response->json('tether.rub');
                if (is_numeric($rate) && (float) $rate > 0) {
                    return (float) $rate;
                }
            }

            Log::channel('heleket')->warning('USD_RUB_RATE_FETCH_BAD_RESPONSE', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);
        } catch (\Throwable $e) {
            Log::channel('heleket')->warning('USD_RUB_RATE_FETCH_FAILED', [
                'error' => $e->getMessage(),
            ]);
        }

        return null;
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class PaymentGateway extends Model
{
    protected $fillable = [
        'code',
        'name',
        'name_ru',
        'is_active',
        'sort',
        'logo',
        'settings',
        'description',
        'currency',
        'min_amount',
        'max_amount',
        'commission_percent',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'settings' => 'array',
            'min_amount' => 'decimal:2',
            'max_amount' => 'decimal:2',
            'commission_percent' => 'decimal:2',
        ];
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('sort');
    }

    public function getSetting(string $key, $default = null)
    {
        return $this->settings[$key] ?? $default;
    }

    public function setSetting(string $key, $value): void
    {
        $settings = $this->settings ?? [];
        $settings[$key] = $value;
        $this->settings = $settings;
    }

    /**
     * Человекочитаемые имена процессоров (бэкендов).
     */
    protected static array $backendNames = [
        'pally' => 'Pally',
        'heleket' => 'Heleket',
        'tebex' => 'Tebex',
        'enot' => 'Enot',
        'freekassa' => 'FreeKassa',
        'yookassa' => 'ЮKassa',
        'unitpay' => 'UnitPay',
        'cryptocloud' => 'CryptoCloud',
        'paykeeper' => 'PayKeeper',
        'alfabank' => 'Альфа-Банк',
        'qiwi' => 'QIWI',
        'cent' => 'CentApp',
        'paypal' => 'PayPal',
        'steam' => 'Steam',
    ];

    /**
     * Карта код_метода → имя процессора (для админки/статистики).
     * mir/sbp/viza_mc_* (backend=pally) → "Pally", bitcoin/usdt (heleket) → "Heleket" и т.д.
     */
    public static function processorLabels(): array
    {
        return Cache::remember('payment_processor_labels', 3600, function () {
            $map = [];
            foreach (self::all(['code', 'name_ru', 'settings']) as $g) {
                $backend = is_array($g->settings) ? ($g->settings['backend'] ?? null) : null;
                $map[$g->code] = self::$backendNames[$backend] ?? ($g->name_ru ?: $g->code);
            }

            return $map;
        });
    }

    /**
     * Лейбл процессора по коду метода. Легаси-коды (которых нет в таблице) — как есть.
     */
    public static function labelFor(?string $code): string
    {
        if ($code === null || $code === '') {
            return '';
        }

        // tebex-донаты хранятся как "tebex: card" и т.п.
        if (str_starts_with($code, 'tebex')) {
            return 'Tebex';
        }

        return self::processorLabels()[$code] ?? $code;
    }
}

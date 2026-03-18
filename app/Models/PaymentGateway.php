<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}

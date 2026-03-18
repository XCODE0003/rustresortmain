<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PromoCode extends Model
{
    protected $fillable = [
        'public_uuid',
        'title',
        'code',
        'type',
        'type_reward',
        'user_id',
        'bonus_amount',
        'premium_period',
        'case_id',
        'bonus_case_id',
        'server_id',
        'users',
        'date_start',
        'date_end',
        'max_activations',
        'items',
        'shop_item_id',
        'variation_id',
        'is_created_bot',
    ];

    protected function casts(): array
    {
        return [
            'bonus_amount' => 'decimal:2',
            'users' => 'array',
            'items' => 'array',
            'date_start' => 'datetime',
            'date_end' => 'datetime',
            'is_created_bot' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function case(): BelongsTo
    {
        return $this->belongsTo(Cases::class, 'case_id');
    }

    public function shopItem(): BelongsTo
    {
        return $this->belongsTo(ShopItem::class, 'shop_item_id');
    }

    public function isActive(): bool
    {
        $now = now();

        if ($this->date_start && $this->date_start->isFuture()) {
            return false;
        }

        if ($this->date_end && $this->date_end->isPast()) {
            return false;
        }

        if ($this->max_activations && is_array($this->users) && count($this->users) >= $this->max_activations) {
            return false;
        }

        return true;
    }
}

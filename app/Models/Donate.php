<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Donate extends Model
{
    protected $fillable = [
        'user_id',
        'server',
        'payment_id',
        'amount',
        'bonus_amount',
        'item_id',
        'var_id',
        'status',
        'payment_system',
        'steam_id',
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'decimal:2',
            'bonus_amount' => 'decimal:2',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function item(): BelongsTo
    {
        return $this->belongsTo(ShopItem::class, 'item_id');
    }

    public function isPending(): bool
    {
        return $this->status === 0;
    }

    public function isCompleted(): bool
    {
        return $this->status === 1;
    }

    public function isFailed(): bool
    {
        return $this->status === 2;
    }
}

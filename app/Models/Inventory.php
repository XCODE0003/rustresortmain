<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Inventory extends Model
{
    protected $fillable = [
        'type',
        'item',
        'case_id',
        'shop_item_id',
        'item_id',
        'amount',
        'variation_id',
        'balance',
        'vip_period',
        'deposit_bonus',
        'user_id',
    ];

    protected function casts(): array
    {
        return [
            'balance' => 'decimal:2',
            'deposit_bonus' => 'decimal:2',
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
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShopStatistic extends Model
{
    protected $fillable = [
        'item_id',
        'set_id',
        'case_id',
        'amount',
        'price',
        'server',
        'user_id',
        'steam_id',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
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

    public function set(): BelongsTo
    {
        return $this->belongsTo(ShopSet::class, 'set_id');
    }

    public function case(): BelongsTo
    {
        return $this->belongsTo(Cases::class, 'case_id');
    }
}

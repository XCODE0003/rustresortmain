<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShopPurchase extends Model
{
    protected $fillable = [
        'item_id',
        'user_id',
        'count',
        'server_id',
        'validity',
    ];

    protected function casts(): array
    {
        return [
            'validity' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function shopItem(): BelongsTo
    {
        return $this->belongsTo(ShopItem::class, 'item_id');
    }

    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class);
    }

    public function isValid(): bool
    {
        return $this->validity === null || $this->validity->isFuture();
    }

    public function isExpired(): bool
    {
        return $this->validity && $this->validity->isPast();
    }
}

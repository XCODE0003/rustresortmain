<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShopCart extends Model
{
    protected $fillable = [
        'user_id',
        'item_id',
        'count',
    ];

    protected function casts(): array
    {
        return [
            'count' => 'integer',
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
}

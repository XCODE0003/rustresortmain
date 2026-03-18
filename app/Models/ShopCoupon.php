<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShopCoupon extends Model
{
    protected $fillable = [
        'title',
        'code',
        'type',
        'percent',
        'user_id',
        'users',
        'date_start',
        'date_end',
        'items',
    ];

    protected function casts(): array
    {
        return [
            'users' => 'array',
            'items' => 'array',
            'date_start' => 'datetime',
            'date_end' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function isActive(): bool
    {
        $now = now();

        return ($this->date_start === null || $this->date_start->isPast())
            && ($this->date_end === null || $this->date_end->isFuture());
    }
}

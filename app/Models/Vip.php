<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vip extends Model
{
    protected $fillable = [
        'user_id',
        'server_id',
        'service_name',
        'date',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function isActive(): bool
    {
        return $this->date->isFuture();
    }

    public function isExpired(): bool
    {
        return $this->date->isPast();
    }
}

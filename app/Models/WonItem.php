<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WonItem extends Model
{
    protected $fillable = [
        'user_id',
        'item',
        'item_id',
        'item_icon',
        'issued',
        'server',
    ];

    protected function casts(): array
    {
        return [
            'issued' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

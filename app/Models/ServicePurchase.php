<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServicePurchase extends Model
{
    protected $fillable = [
        'user_id',
        'server',
        'command',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Shopping extends Model
{
    protected $table = 'shopping';

    protected $fillable = [
        'user_id',
        'command',
        'status',
        'server',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function isPending(): bool
    {
        return $this->status === 0;
    }

    public function isCompleted(): bool
    {
        return $this->status === 1;
    }
}

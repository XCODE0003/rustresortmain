<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RconTask extends Model
{
    protected $fillable = [
        'server',
        'command',
        'status',
        'comment',
    ];

    public const UPDATED_AT = null;

    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class, 'server', 'id');
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PlayersOnline extends Model
{
    protected $fillable = [
        'steam_id',
        'user_id',
        'server',
        'online_prev',
        'online_time',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class, 'server', 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ban extends Model
{
    protected $fillable = [
        'rustapp_id',
        'steam_id',
        'steam_name',
        'steam_avatar',
        'reason',
        'server_ids',
        'banned_at',
        'expires_at',
        'is_active',
        'ban_group_uuid',
        'last_seen_at',
    ];

    protected function casts(): array
    {
        return [
            'server_ids' => 'array',
            'banned_at' => 'integer',
            'expires_at' => 'integer',
            'is_active' => 'boolean',
            'last_seen_at' => 'datetime',
        ];
    }
}

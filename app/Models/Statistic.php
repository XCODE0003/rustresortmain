<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Statistic extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'date',
        'general',
        'server',
        'player_id',
        'name',
        'user_id',
        'deaths',
        'kills',
        'deaths_player',
        'resourse_list',
        'raid_list',
        'head_shots',
        'is_npc',
        'hits',
        'shoots',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
            'resourse_list' => 'array',
            'raid_list' => 'array',
            'is_npc' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

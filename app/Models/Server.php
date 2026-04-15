<?php

namespace App\Models;

use App\Casts\ServerOptionsCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Server extends Model
{
    protected $fillable = [
        'name',
        'status',
        'sort',
        'image',
        'options',
        'wipe',
        'next_wipe',
        'category_id',
    ];

    protected function casts(): array
    {
        return [
            'options' => ServerOptionsCast::class,
            'wipe' => 'datetime',
            'next_wipe' => 'datetime',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ServerCategory::class, 'category_id');
    }

    public function rconTasks(): HasMany
    {
        return $this->hasMany(RconTask::class, 'server', 'id');
    }

    public function playersOnline(): HasMany
    {
        return $this->hasMany(PlayersOnline::class, 'server', 'id');
    }

    public function isOnline(): bool
    {
        return $this->status === 1;
    }
}

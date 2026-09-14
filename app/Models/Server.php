<?php

namespace App\Models;

use App\Casts\ServerOptionsCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Arr;

class Server extends Model
{
    /**
     * Единственные ключи options, которые разрешено отдавать на фронтенд.
     * Всё остальное (rcon_ip, rcon_passw, api_key и т.п.) — СЕКРЕТЫ и наружу не уходят.
     */
    public const PUBLIC_OPTION_KEYS = ['ip', 'port', 'rate', 'connect'];

    protected $fillable = [
        'name',
        'status',
        'sort',
        'image',
        'options',
        'wipe',
        'next_wipe',
        'wipe_schedule_days',
        'wipe_schedule_time',
        'category_id',
    ];

    protected function casts(): array
    {
        return [
            'options' => ServerOptionsCast::class,
            'wipe' => 'datetime',
            'next_wipe' => 'datetime',
            'wipe_schedule_days' => 'array',
            'wipe_schedule_time' => 'string',
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

    /**
     * Безопасное представление сервера для публичного фронтенда.
     *
     * НИКОГДА не используйте $server->toArray() в контроллерах/props: колонка
     * options содержит RCON-креды (rcon_ip, rcon_passw, api_key). Этот метод
     * отдаёт только whitelist-поля и урезает options до PUBLIC_OPTION_KEYS.
     *
     * @return array<string, mixed>
     */
    public function toPublicArray(): array
    {
        $options = is_array($this->options) ? $this->options : [];

        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->image,
            'status' => $this->status,
            'sort' => $this->sort,
            'category' => $this->relationLoaded('category') ? $this->category?->toArray() : null,
            'next_wipe' => $this->next_wipe?->toISOString(),
            'last_wipe' => $this->wipe?->toISOString(),
            'online_players' => (int) ($options['online_players'] ?? 0),
            'queue_players' => (int) ($options['queue_players'] ?? 0),
            'max_players' => (int) ($options['max_players'] ?? 500),
            'options' => Arr::only($options, self::PUBLIC_OPTION_KEYS),
        ];
    }
}

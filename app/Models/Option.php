<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'key',
        'value',
        'default_key',
        'server',
    ];

    public static function getValue(string $key, ?int $server = null): ?string
    {
        return static::query()
            ->where('key', $key)
            ->where('server', $server)
            ->value('value');
    }

    public static function setValue(string $key, string $value, ?int $server = null): void
    {
        static::updateOrCreate(
            ['key' => $key, 'server' => $server],
            ['value' => $value]
        );
    }
}

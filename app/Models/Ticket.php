<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Ticket extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'attachment',
        'question',
        'answer',
        'title',
        'uuid',
        'answer_user_id',
        'is_read',
        'user_is_read',
        'server_id',
        'type',
        'char_id',
    ];

    protected function casts(): array
    {
        return [
            'is_read' => 'boolean',
            'user_is_read' => 'boolean',
        ];
    }

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($ticket) {
            if (! $ticket->uuid) {
                $ticket->uuid = (string) Str::uuid();
            }
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function answerer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'answer_user_id');
    }

    public function isAnswered(): bool
    {
        return ! empty($this->answer);
    }
}

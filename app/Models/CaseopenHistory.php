<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CaseopenHistory extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'case_id',
        'user_id',
        'item_id',
        'item_amount',
        'date',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'datetime',
        ];
    }

    public function case(): BelongsTo
    {
        return $this->belongsTo(Cases::class, 'case_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

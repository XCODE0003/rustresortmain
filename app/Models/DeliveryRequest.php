<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DeliveryRequest extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'item_id',
        'item',
        'item_icon',
        'item_type',
        'amount',
        'price',
        'price_min',
        'price_max',
        'price_cap',
        'status',
        'delivery_id',
        'note',
        'server',
        'date_request',
        'date_execution',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'price_min' => 'decimal:2',
            'price_max' => 'decimal:2',
            'price_cap' => 'decimal:2',
            'date_request' => 'datetime',
            'date_execution' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

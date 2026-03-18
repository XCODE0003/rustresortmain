<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CasesItem extends Model
{
    protected $fillable = [
        'item_id',
        'category_id',
        'quality_type',
        'price',
        'price_usd',
        'amount',
        'status',
        'sort',
        'image',
        'source',
        'title',
        'subtitle',
        'description',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'price_usd' => 'decimal:2',
        ];
    }
}

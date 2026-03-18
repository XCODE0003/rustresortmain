<?php

namespace App\Models;

use App\Traits\HasMultiLanguageFields;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ShopSet extends Model
{
    use HasMultiLanguageFields;

    protected $fillable = [
        'items',
        'status',
        'category_id',
        'servers',
        'server',
        'price',
        'price_usd',
        'sort',
        'amount',
        'can_gift',
        'discount_percent',
        'disable_category_discount',
        'image',
        'name_ru',
        'name_en',
        'name_de',
        'name_fr',
        'name_it',
        'name_es',
        'name_uk',
        'short_description_ru',
        'short_description_en',
        'short_description_de',
        'short_description_fr',
        'short_description_it',
        'short_description_es',
        'short_description_uk',
        'description_ru',
        'description_en',
        'description_de',
        'description_fr',
        'description_it',
        'description_es',
        'description_uk',
    ];

    protected function casts(): array
    {
        return [
            'items' => 'array',
            'servers' => 'array',
            'price' => 'decimal:2',
            'price_usd' => 'decimal:2',
            'can_gift' => 'boolean',
            'disable_category_discount' => 'boolean',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ShopCategory::class, 'category_id');
    }

    public function statistics(): HasMany
    {
        return $this->hasMany(ShopStatistic::class, 'set_id');
    }
}

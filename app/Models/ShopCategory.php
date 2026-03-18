<?php

namespace App\Models;

use App\Traits\HasMultiLanguageFields;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ShopCategory extends Model
{
    use HasMultiLanguageFields;

    protected $fillable = [
        'path',
        'sort',
        'discount_percent',
        'title_ru',
        'title_en',
        'title_de',
        'title_fr',
        'title_it',
        'title_es',
        'title_uk',
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
            'discount_percent' => 'decimal:2',
        ];
    }

    public function items(): HasMany
    {
        return $this->hasMany(ShopItem::class, 'category_id');
    }

    public function sets(): HasMany
    {
        return $this->hasMany(ShopSet::class, 'category_id');
    }
}

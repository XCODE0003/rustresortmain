<?php

namespace App\Models;

use App\Traits\HasMultiLanguageFields;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cases extends Model
{
    use HasMultiLanguageFields;

    protected $fillable = [
        'category_id',
        'items',
        'server',
        'servers',
        'price',
        'price_usd',
        'status',
        'kind',
        'online_amount',
        'prizes_max',
        'image',
        'sort',
        'is_free',
        'title_en',
        'title_ru',
        'title_de',
        'title_es',
        'title_fr',
        'title_it',
        'title_uk',
        'subtitle_en',
        'subtitle_ru',
        'subtitle_de',
        'subtitle_es',
        'subtitle_fr',
        'subtitle_it',
        'subtitle_uk',
        'description_en',
        'description_ru',
        'description_de',
        'description_es',
        'description_fr',
        'description_it',
        'description_uk',
    ];

    protected function casts(): array
    {
        return [
            'items' => 'array',
            'servers' => 'array',
            'price' => 'decimal:2',
            'price_usd' => 'decimal:2',
            'is_free' => 'boolean',
        ];
    }

    public function histories(): HasMany
    {
        return $this->hasMany(CaseopenHistory::class, 'case_id');
    }

    public function statistics(): HasMany
    {
        return $this->hasMany(ShopStatistic::class, 'case_id');
    }
}

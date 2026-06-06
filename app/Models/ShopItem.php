<?php

namespace App\Models;

use App\Casts\LenientJsonArray;
use App\Traits\HasMultiLanguageFields;
use App\Traits\HasShopDiscounts;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ShopItem extends Model
{
    use HasMultiLanguageFields;
    use HasShopDiscounts;

    protected $fillable = [
        'rs_id',
        'item_id',
        'category_id',
        'server',
        'servers',
        'price',
        'price_usd',
        'discount_percent',
        'disable_category_discount',
        'amount',
        'command',
        'is_blueprint',
        'is_command',
        'is_item',
        'wipe_block',
        'status',
        'variations',
        'image',
        'sort',
        'can_gift',
        'name_ru',
        'name_en',
        'name_de',
        'name_fr',
        'name_it',
        'name_es',
        'name_uk',
        'short_name',
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
            'price' => 'decimal:2',
            'price_usd' => 'decimal:2',
            'discount_percent' => 'decimal:2',
            'disable_category_discount' => 'boolean',
            'is_blueprint' => 'boolean',
            'is_command' => 'boolean',
            'is_item' => 'boolean',
            // wipe_block — ЧИСЛО ЧАСОВ блокировки выдачи после вайпа (0 = без блока),
            // а не флаг. Каст в boolean терял значение (24ч → true → 1).
            'wipe_block' => 'integer',
            'can_gift' => 'boolean',
            // Не 'array': админка двойно кодировала JSON, и каст 'array' отдавал
            // строку вместо массива (вариации «терялись» — см. LenientJsonArray).
            'servers' => LenientJsonArray::class,
            'variations' => LenientJsonArray::class,
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ShopCategory::class, 'category_id');
    }

    public function purchases(): HasMany
    {
        return $this->hasMany(ShopPurchase::class, 'item_id');
    }

    public function statistics(): HasMany
    {
        return $this->hasMany(ShopStatistic::class, 'item_id');
    }
}

<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Товар, ожидающий выдачи игроку в игре (корзина / bucket).
 *
 * Обычные предметы магазина (НЕ услуги/команды) не отправляются по RCON, а
 * складываются сюда. Внутриигровой плагин забирает их через Api\ShopController
 * (getUser → deleteItem) и выдаёт игроку по short_name / rust_id.
 */
class BucketItem extends Model
{
    protected $fillable = [
        'user_id',
        'shop_item_id',
        'rust_id',
        'var_id',
        'command',
        'price',
        'quantity',
        'wipe_block',
        'steam_id',
        'server_name',
        'server_id',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'quantity' => 'integer',
            'rust_id' => 'integer',
        ];
    }

    public function shopItem(): BelongsTo
    {
        return $this->belongsTo(ShopItem::class, 'shop_item_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

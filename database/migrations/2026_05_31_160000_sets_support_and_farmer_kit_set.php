<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Farmer Kit — это набор (сет), а не обычный товар: покупается одним лотом и
 * выдаётся пачкой предметов. Переносим его в shop_sets (из старого прода),
 * прячем дубль-товар (shop_items id 11) и добавляем donates.set_id для покупок
 * сетов. Откатываем временный механизм kit_items (заменён системой сетов).
 */
return new class extends Migration
{
    public function up(): void
    {
        // 1) Откат временного kit_items на shop_items (используем сеты).
        if (Schema::hasColumn('shop_items', 'kit_items')) {
            Schema::table('shop_items', function (Blueprint $table) {
                $table->dropColumn('kit_items');
            });
        }

        // 2) Покупки наборов: donates.set_id.
        if (! Schema::hasColumn('donates', 'set_id')) {
            Schema::table('donates', function (Blueprint $table) {
                $table->unsignedBigInteger('set_id')->nullable()->after('item_id');
            });
        }

        // 3) Создаём сет Farmer Kit (состав/цена из старого прода rust-resot set 11),
        //    если такого ещё нет. Категорию наследуем от текущего товара id 11.
        if (! DB::table('shop_sets')->where('name_en', 'Farmer Kit')->exists()) {
            $categoryId = DB::table('shop_items')->where('id', 11)->value('category_id');
            // Подстраховка: если категория почему-то не существует — оставляем null.
            if ($categoryId && ! DB::table('shop_categories')->where('id', $categoryId)->exists()) {
                $categoryId = null;
            }

            DB::table('shop_sets')->insert([
                'items' => json_encode([
                    ['id' => 240, 'amount' => 5],  // Ore Tea
                    ['id' => 236, 'amount' => 5],  // Wood Tea
                    ['id' => 301, 'amount' => 3],  // Bear Pie
                    ['id' => 44, 'amount' => 3],   // Jackhammer
                    ['id' => 38, 'amount' => 3],   // Chainsaw
                ]),
                'status' => 1,
                'category_id' => $categoryId,
                'servers' => json_encode(['2', '3']),
                'server' => -1,
                'price' => 699.00,
                'price_usd' => 9.00,
                'sort' => 30,
                'amount' => 1,
                'can_gift' => 1,
                'discount_percent' => 0,
                'disable_category_discount' => 0,
                'image' => 'images/BKB1rEhawQUOYFwAqyFQBXTcQTMI5bdHJkwQSymh.png',
                'name_ru' => 'Farmer Kit',
                'name_en' => 'Farmer Kit',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // 4) Прячем дубль — обычный товар Farmer Kit (shop_items id 11).
        DB::table('shop_items')->where('id', 11)->update(['status' => 0]);
    }

    public function down(): void
    {
        // Необратимо (данные/реструктуризация набора). Колонку set_id оставляем.
    }
};

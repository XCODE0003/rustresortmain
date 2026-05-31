<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Состав наборов (китов): JSON [{id, amount}, ...] вложенных товаров. При покупке
 * набор раскладывается на отдельные предметы в корзине (см. DeliverPurchaseItemsJob).
 * Заполняем Farmer Kit (id 11) составом из старого набора rust-resot (set 11).
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasColumn('shop_items', 'kit_items')) {
            Schema::table('shop_items', function (Blueprint $table) {
                $table->json('kit_items')->nullable()->after('variations');
            });
        }

        DB::table('shop_items')
            ->where('id', 11)
            ->whereNull('kit_items')
            ->update([
                'kit_items' => json_encode([
                    ['id' => 240, 'amount' => 5],  // Ore Tea
                    ['id' => 236, 'amount' => 5],  // Wood Tea
                    ['id' => 301, 'amount' => 3],  // Bear Pie
                    ['id' => 44, 'amount' => 3],   // Jackhammer
                    ['id' => 38, 'amount' => 3],   // Chainsaw
                ]),
            ]);
    }

    public function down(): void
    {
        // Колонку и данные не откатываем.
    }
};

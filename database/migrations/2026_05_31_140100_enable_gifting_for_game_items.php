<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Часть обычных товаров (чаи, пироги, карты доступа, медицина, изучения AK/Bolt,
     * одежда, патроны) имела can_gift=0 → buyWithBalance блокировал покупку в подарок
     * («в подарок не приходят»). Это обычные предметы корзины, их можно дарить —
     * включаем дарение для всех товаров, у кого оно было выключено.
     */
    public function up(): void
    {
        if (Schema::hasTable('shop_items') && Schema::hasColumn('shop_items', 'can_gift')) {
            DB::table('shop_items')->where('can_gift', 0)->update(['can_gift' => 1]);
        }

        if (Schema::hasTable('shop_sets') && Schema::hasColumn('shop_sets', 'can_gift')) {
            DB::table('shop_sets')->where('can_gift', 0)->update(['can_gift' => 1]);
        }
    }

    public function down(): void
    {
        // Необратимо по дизайну: мы не знаем исходный набор can_gift=0, а возврат
        // запрета дарения только навредит. Оставляем как есть.
    }
};

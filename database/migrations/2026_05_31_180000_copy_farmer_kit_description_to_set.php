<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * При переносе Farmer Kit в набор (shop_sets) его богатое описание с иконками
 * состава осталось на скрытом товаре shop_items id 11. Копируем описание на сет,
 * чтобы в модалке отображались иконки чаёв/инструментов, а не пустота.
 */
return new class extends Migration
{
    public function up(): void
    {
        $item = DB::table('shop_items')->where('id', 11)->first();

        if ($item && ! empty($item->description_ru)) {
            DB::table('shop_sets')
                ->where('name_en', 'Farmer Kit')
                ->where(function ($q) {
                    $q->whereNull('description_ru')->orWhere('description_ru', '');
                })
                ->update([
                    'description_ru' => $item->description_ru,
                    'description_en' => $item->description_en,
                ]);
        }
    }

    public function down(): void
    {
        // Не откатываем.
    }
};

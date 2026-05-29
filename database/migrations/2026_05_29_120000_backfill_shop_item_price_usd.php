<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Бэкофилл USD-цен товаров, потерянных при переносе со старого проекта
 * (rustresortOld). Значения взяты из старой БД: для обычных товаров — по
 * совпадающему id из старой shop_items, для Farmer Kit (новый shop_item id 11)
 * — из старого shop_sets id 11. Плюс восстанавливаем состав Farmer Kit
 * в описании (в старой БД он хранился как набор с items).
 *
 * Ставим только там, где значение отсутствует (NULL/0) — ручные правки в
 * админке не затираем.
 */
return new class extends Migration
{
    public function up(): void
    {
        // new shop_items.id => price_usd (из старой базы)
        $priceUsd = [
            11 => 9.00,   // Farmer Kit (старый set 11)
            232 => 0.50,  // Green Keycard
            233 => 0.85,  // Blue Keycard
            234 => 1.25,  // Red Keycard
            236 => 0.90,  // Wood Tea
            237 => 0.30,  // Healing Tea
            238 => 0.80,  // Anti-Rad Tea
            239 => 0.80,  // Max Health Tea
            240 => 1.30,  // Ore Tea
            241 => 1.00,  // Scrap Tea
            247 => 0.50,  // Large Medkit
            248 => 0.60,  // Medical Syringe
            249 => 0.60,  // Blueberries
            293 => 3.00,  // AK47
            294 => 3.00,  // Bolt Action Rifle (250)
            301 => 1.10,  // Bear Pie
            302 => 0.60,  // Survivors Pie
        ];

        foreach ($priceUsd as $id => $usd) {
            DB::table('shop_items')
                ->where('id', $id)
                ->where(function ($q) {
                    $q->whereNull('price_usd')->orWhere('price_usd', 0);
                })
                ->update(['price_usd' => $usd]);
        }

        // Состав Farmer Kit (из старого набора): описываем, что выдаётся.
        $farmerRu = 'В набор входит: Ore Tea ×5, Wood Tea ×5, Bear Pie ×3, Jackhammer ×3, Chainsaw ×3';
        $farmerEn = 'Includes: Ore Tea ×5, Wood Tea ×5, Bear Pie ×3, Jackhammer ×3, Chainsaw ×3';

        DB::table('shop_items')
            ->where('id', 11)
            ->where(function ($q) {
                $q->whereNull('description_ru')->orWhere('description_ru', '');
            })
            ->update([
                'description_ru' => $farmerRu,
                'description_en' => $farmerEn,
            ]);
    }

    public function down(): void
    {
        // Бэкофилл данных — откат не выполняем (значения восстановлены из старой БД).
    }
};

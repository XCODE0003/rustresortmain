<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Бэкофилл short_name товаров, потерянных при переносе. Без short_name
 * внутриигровой плагин не может выдать предмет (выдаёт по ShortName), поэтому
 * чаи/кейкарды/пироги/медицина/оружие не выдавались. Значения из старого
 * прода (rust-resot) по совпадающим id. Ставим только где пусто.
 */
return new class extends Migration
{
    public function up(): void
    {
        $shortNames = [
            232 => 'keycard_green',
            233 => 'keycard_blue',
            234 => 'keycard_red',
            236 => 'woodtea.pure',
            237 => 'healingtea.pure',
            238 => 'radiationresisttea.pure',
            239 => 'maxhealthtea.pure',
            240 => 'oretea.pure',
            241 => 'scraptea.pure',
            247 => 'largemedkit',
            248 => 'syringe.medical',
            249 => 'blueberries',
            293 => 'rifle.ak',
            294 => 'rifle.bolt',
            301 => 'pie.bear',
            302 => 'pie.survivors',
        ];

        foreach ($shortNames as $id => $sn) {
            DB::table('shop_items')
                ->where('id', $id)
                ->where(function ($q) {
                    $q->whereNull('short_name')->orWhere('short_name', '');
                })
                ->update(['short_name' => $sn]);
        }
    }

    public function down(): void
    {
        // Бэкофилл данных — откат не выполняем.
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * В HTML-описаниях наборов (китов) три иконки ссылались на несуществующие
 * файлы /source/icon/*.png. Нужные иконки есть, но под другими именами —
 * правим ссылки в описаниях. Файлы стораджа при этом не трогаем.
 */
return new class extends Migration
{
    /** wrong filename => correct filename (оба в public/source/icon) */
    private const MAP = [
        'source/icon/bearpie.png' => 'source/icon/pie-bear.png',
        'source/icon/pureoretea.png' => 'source/icon/oretea-pure.png',
        'source/icon/purewoodtea.png' => 'source/icon/woodtea-pure.png',
    ];

    public function up(): void
    {
        $this->replace(self::MAP);
    }

    public function down(): void
    {
        $this->replace(array_flip(self::MAP));
    }

    private function replace(array $map): void
    {
        foreach ($map as $from => $to) {
            foreach (['description_ru', 'description_en'] as $col) {
                DB::table('shop_items')
                    ->where($col, 'like', '%'.$from.'%')
                    ->update([$col => DB::raw("REPLACE($col, ".DB::getPdo()->quote($from).', '.DB::getPdo()->quote($to).')')]);
            }
        }
    }
};

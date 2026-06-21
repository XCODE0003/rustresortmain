<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Farmer Kit — единоразовая выдача предметов, а не кит с откатом.
 * Убираем мем-лейбл «| CoolDown: 6h» из HTML-описания (WipeBlock оставляем).
 *
 * Только Farmer Kit: другие киты (Beach/Village/Outpost/Military/Cobalt) не трогаем.
 * Описание может жить и в наборе (shop_sets), и в исходном товаре (shop_items),
 * а id набора различаются между окружениями — поэтому ищем по имени, а не по id.
 */
return new class extends Migration
{
    /** Снимает « | CoolDown: <span>...</span>», сохраняя «WipeBlock: <span>1h</span>». */
    private const COOLDOWN_PATTERN = '/\s*\|\s*CoolDown:\s*<span>[^<]*<\/span>/iu';

    /** Таблицы с локализованным HTML-описанием набора. */
    private const TABLES = ['shop_sets', 'shop_items'];

    /** Локализованные колонки описания, где встречается лейбл. */
    private const DESCRIPTION_COLUMNS = ['description_ru', 'description_en'];

    public function up(): void
    {
        foreach (self::TABLES as $table) {
            if (! Schema::hasTable($table)) {
                continue;
            }

            $columns = array_values(array_filter(
                self::DESCRIPTION_COLUMNS,
                fn (string $column): bool => Schema::hasColumn($table, $column),
            ));

            if ($columns === []) {
                continue;
            }

            $this->stripCooldown($table, $columns);
        }
    }

    public function down(): void
    {
        // Лейбл восстанавливать не нужно — это была ошибочная подпись.
    }

    /**
     * @param  list<string>  $columns
     */
    private function stripCooldown(string $table, array $columns): void
    {
        $rows = DB::table($table)
            ->where(fn (Builder $q) => $this->scopeFarmerKit($q, $table))
            ->where(function (Builder $q) use ($columns): void {
                foreach ($columns as $column) {
                    $q->orWhere($column, 'like', '%CoolDown%');
                }
            })
            ->get(['id', ...$columns]);

        foreach ($rows as $row) {
            $changes = [];

            foreach ($columns as $column) {
                $original = $row->{$column};

                if ($original === null || $original === '') {
                    continue;
                }

                $cleaned = preg_replace(self::COOLDOWN_PATTERN, '', $original);

                if ($cleaned !== null && $cleaned !== $original) {
                    $changes[$column] = $cleaned;
                }
            }

            if ($changes !== []) {
                DB::table($table)->where('id', $row->id)->update($changes);
            }
        }
    }

    /**
     * Ограничивает выборку только набором Farmer Kit (RU/EN-имена),
     * не затрагивая другие киты. Имя сравниваем без учёта регистра.
     */
    private function scopeFarmerKit(Builder $query, string $table): void
    {
        $patterns = ['%farmer%', '%фармер%', '%фермер%'];

        foreach (['name_en', 'name_ru'] as $column) {
            if (! Schema::hasColumn($table, $column)) {
                continue;
            }

            foreach ($patterns as $pattern) {
                $query->orWhereRaw("LOWER({$column}) LIKE ?", [$pattern]);
            }
        }
    }
};

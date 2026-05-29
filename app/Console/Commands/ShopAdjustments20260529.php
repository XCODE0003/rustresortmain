<?php

namespace App\Console\Commands;

use App\Models\ShopItem;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Точечные правки магазина после фидбека 2026-05-29:
 *   - Скрыть обычный Outpost (id=26). Outpost KIT (id=298) остаётся.
 *   - Перенести Blueprint 303 и 304 из "Рецепты" в "Компоненты".
 *   - Перенести AK47 (293) и Bolt Action Rifle 250 (294) из "Оружие" в "Рецепты".
 *
 *   php artisan shop:adjust-20260529           # apply
 *   php artisan shop:adjust-20260529 --dry     # preview
 */
class ShopAdjustments20260529 extends Command
{
    protected $signature = 'shop:adjust-20260529 {--dry : Preview without writing}';

    protected $description = 'Hide regular Outpost; move blueprints to Компоненты; move AK47/BoltAction to Рецепты';

    public function handle(): int
    {
        $isDry = (bool) $this->option('dry');

        $catComponents = 9;   // Компоненты
        $catRecipes = 14;     // Рецепты

        $hideIds = [26];                // regular Outpost
        $toComponents = [303, 304];     // Blueprints
        $toRecipes = [293, 294];        // AK47, Bolt Action Rifle (250)

        $this->info('=== Current state ===');
        foreach (ShopItem::whereIn('id', array_merge($hideIds, $toComponents, $toRecipes))->get() as $i) {
            $this->line(sprintf(
                '  id=%-3d  %-30s  status=%d  cat=%s',
                $i->id, $i->name_ru, $i->status, $i->category_id ?? 'NULL'
            ));
        }
        $this->line('');

        $this->info('=== Planned changes ===');
        $this->line('  Hide:        id='.implode(',', $hideIds).' (status → 0)');
        $this->line("  → Компоненты: id=".implode(',', $toComponents)." (cat → {$catComponents})");
        $this->line("  → Рецепты:    id=".implode(',', $toRecipes)." (cat → {$catRecipes})");
        $this->line('');

        if ($isDry) {
            $this->warn('DRY RUN — no changes written.');

            return self::SUCCESS;
        }

        DB::transaction(function () use ($hideIds, $toComponents, $toRecipes, $catComponents, $catRecipes) {
            ShopItem::whereIn('id', $hideIds)->update(['status' => 0]);
            ShopItem::whereIn('id', $toComponents)->update(['category_id' => $catComponents]);
            ShopItem::whereIn('id', $toRecipes)->update(['category_id' => $catRecipes]);
        });

        Cache::flush();

        $this->info('✅ Applied.');

        return self::SUCCESS;
    }
}

<?php

namespace App\Console\Commands;

use App\Models\ShopItem;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Sync DEV shop items list with MAIN (production) list.
 *
 * Source of truth: HTML dump from rustresort.com (production) shop page.
 * Activates only items present in MAIN with the exact ordering from MAIN.
 * Hides everything else (status=0). Safe — non-destructive, easy to revert.
 *
 *   php artisan shop:sync-main          # apply
 *   php artisan shop:sync-main --dry    # dry-run (preview only)
 */
class SyncShopItemsWithMain extends Command
{
    protected $signature = 'shop:sync-main {--dry : Preview without writing}';

    protected $description = 'Sync shop items list 1:1 with MAIN (rustresort.com) — activate matching IDs, hide the rest, fix sort order';

    /**
     * Ordered list of MAIN item IDs grouped by category. Order in this array
     * defines the sort order on the page. Each group is spaced by 100 to
     * leave room for future inserts.
     */
    private array $mainOrder = [
        // Cases (special items)
        'cases' => [17, 18, 14, 15, 26, 31],

        // VIP, Kits, subscriptions
        'vip_kits' => [300, 299, 298, 253, 295, 251, 203, 11],

        // Tea & Pies
        'tea_pies' => [240, 236, 237, 238, 239, 241, 301, 302],

        // Weapons (rifles → smgs → pistols → shotguns → grenades → attachments)
        'weapons' => [
            119, 122, 92, 95, 285, 118, 128, 130, 290, 138,
            131, 133, 126, 109, 127, 136, 132, 287, 135, 137,
            134, 129, 286, 110, 121, 291, 120, 139, 141, 142,
            143, 146, 140, 198,
        ],

        // Resources (wood, stones, scrap, fuel)
        'resources' => [41, 42, 43, 62, 28, 61, 306, 30, 68, 60, 250],

        // Explosives (C4, rockets, satchels)
        'explosives' => [152, 158, 305, 157, 150],

        // Electronics (computer, CCTV, components)
        'electronics' => [
            200, 199, 151, 169, 171, 184, 186, 201, 176, 163,
            189, 191, 154, 173, 304, 303,
        ],

        // Buildings (workbenches, furnaces, bed)
        'buildings' => [54, 59, 58, 57, 55, 51, 56],

        // Ammo (5.56, pistol, shotgun shells)
        'ammo' => [179, 181, 187, 190, 182, 192, 174, 172, 175],

        // Electrical (turbines, generators, batteries, turret)
        'electrical' => [165, 153, 166, 156, 202, 170, 159, 177, 180],

        // Tools (jackhammer, chainsaw, salvaged tools)
        'tools' => [44, 38, 49, 48],

        // Armor & clothing
        'armor' => [
            98, 102, 84, 85, 87, 86, 307, 243, 91, 244,
            245, 246, 94, 93, 96, 104, 103, 242,
        ],

        // Keycards
        'keycards' => [232, 233, 234],

        // Medical
        'medical' => [247, 248, 249],

        // Special weapons (AK47 / Bolt Action with 0 wipe-block)
        'extras' => [293, 294],
    ];

    public function handle(): int
    {
        $isDry = (bool) $this->option('dry');

        // Flatten to ordered list, assigning sort = group_index * 1000 + position * 10
        $orderedIds = [];
        $sortMap = [];
        $groupIndex = 0;
        foreach ($this->mainOrder as $groupName => $ids) {
            $position = 0;
            foreach ($ids as $id) {
                $sort = ($groupIndex * 1000) + ($position * 10) + 10;
                $orderedIds[] = $id;
                $sortMap[$id] = ['sort' => $sort, 'group' => $groupName];
                $position++;
            }
            $groupIndex++;
        }

        $this->info('=== MAIN target ===');
        $this->info('Total items expected: '.count($orderedIds));

        // Check which MAIN ids exist in our DB
        $existing = ShopItem::whereIn('id', $orderedIds)->pluck('id')->all();
        $missing = array_diff($orderedIds, $existing);

        if (! empty($missing)) {
            $this->warn('Missing in DB (will be skipped): '.implode(', ', $missing));
        }

        // Items that will be HIDDEN (everything not in MAIN list)
        $toHideCount = ShopItem::whereNotIn('id', $orderedIds)
            ->where('status', 1)
            ->count();

        $this->info('Items to hide (status 1 → 0): '.$toHideCount);
        $this->info('Items to activate (status → 1 + new sort): '.count($existing));

        if ($isDry) {
            $this->warn('DRY RUN — no changes written.');
            $this->table(
                ['Group', 'IDs (will be activated)'],
                collect($this->mainOrder)->map(fn ($ids, $g) => [$g, implode(', ', $ids)])->values()
            );

            return self::SUCCESS;
        }

        DB::transaction(function () use ($orderedIds, $sortMap, $existing) {
            // 1. Hide everything not in MAIN
            ShopItem::whereNotIn('id', $orderedIds)->update(['status' => 0]);

            // 2. Activate + reorder MAIN items
            foreach ($existing as $id) {
                ShopItem::where('id', $id)->update([
                    'status' => 1,
                    'sort'   => $sortMap[$id]['sort'],
                ]);
            }
        });

        // Bust caches that may hold stale lists
        Cache::forget('active_payment_gateways');
        Cache::flush();

        $this->info('');
        $this->info('✅ Sync complete.');
        $this->info("   Activated: ".count($existing));
        $this->info("   Hidden:    {$toHideCount}");

        if (! empty($missing)) {
            $this->warn("   Missing in DB: ".count($missing).' (printed above) — add via admin if needed.');
        }

        return self::SUCCESS;
    }
}

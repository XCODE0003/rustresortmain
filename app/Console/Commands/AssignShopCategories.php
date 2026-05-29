<?php

namespace App\Console\Commands;

use App\Models\ShopCategory;
use App\Models\ShopItem;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Жёстко прописывает правильную category_id всем 138 товарам MAIN.
 *
 * Категории матчатся по русскому имени (fuzzy):
 *   - "Чаи", "Пироги", "Еда"     → tea_pies (8 items)
 *   - "Оружие"                    → weapons (34 items)
 *   - "Ресурсы"                   → resources (11 items)
 *   - и т.д.
 *
 * Если категория НЕ найдена в БД — команда покажет какие есть, и предложит
 * создать недостающие или скажет какие имена использовать.
 *
 *   php artisan shop:assign-categories          # apply
 *   php artisan shop:assign-categories --dry    # preview
 *   php artisan shop:assign-categories --create-missing  # auto-create missing categories
 */
class AssignShopCategories extends Command
{
    protected $signature = 'shop:assign-categories
        {--dry : Preview without writing}
        {--create-missing : Auto-create categories that don\'t exist}';

    protected $description = 'Assign correct category_id to all 138 MAIN items grouped by category';

    /**
     * Группы и ожидаемые названия категорий (синонимы в порядке убывания приоритета).
     * Команда найдёт ПЕРВУЮ существующую категорию из списка синонимов.
     */
    private array $groups = [
        // VIPs, kits, privileges — dev has "Услуги"
        'vip_kits' => [
            'names' => ['Услуги', 'Привилегии', 'VIP', 'Подписки', 'Киты'],
            'ids' => [300, 299, 298, 253, 295, 251, 203, 11],
        ],
        'tea_pies' => [
            'names' => ['Чаи / Пироги', 'Чаи/Пироги', 'Чаи', 'Еда', 'Пироги'],
            'ids' => [240, 236, 237, 238, 239, 241, 301, 302],
        ],
        'weapons' => [
            'names' => ['Оружие', 'Weapons'],
            'ids' => [
                119, 122, 92, 95, 285, 118, 128, 130, 290, 138,
                131, 133, 126, 109, 127, 136, 132, 287, 135, 137,
                134, 129, 286, 110, 121, 291, 120, 139, 141, 142,
                143, 146, 140, 198, 293, 294,
            ],
        ],
        'resources' => [
            'names' => ['Ресурсы', 'Resources'],
            'ids' => [41, 42, 43, 62, 28, 61, 306, 30, 68, 60, 250],
        ],
        'explosives' => [
            'names' => ['Взрывное', 'Взрывчатка', 'Взрывчатые', 'Explosives'],
            'ids' => [152, 158, 305, 157, 150],
        ],
        // ONLY pure electronics on dev "Электроника"
        'electronics' => [
            'names' => ['Электроника', 'Electronics'],
            'ids' => [200, 199, 151],
        ],
        // Components are separate on dev "Компоненты"
        'components' => [
            'names' => ['Компоненты', 'Components'],
            'ids' => [169, 171, 184, 186, 201, 176, 163, 189, 191, 154, 173],
        ],
        'blueprints' => [
            'names' => ['Рецепты', 'Чертежи', 'Blueprints'],
            'ids' => [304, 303],
        ],
        // Workbenches, furnaces, bed — go into "Предметы" on dev
        'buildings' => [
            'names' => ['Предметы', 'Постройки', 'Строительство', 'Buildings'],
            'ids' => [54, 59, 58, 57, 55, 51, 56],
        ],
        'ammo' => [
            'names' => ['Патроны', 'Боеприпасы', 'Ammo'],
            'ids' => [179, 181, 187, 190, 182, 192, 174, 172, 175],
        ],
        // Generators, batteries, turret, switch, sprinkler — also "Предметы" or "Электроника"
        // Putting into "Электроника" since they're electric devices
        'electrical' => [
            'names' => ['Электрика', 'Электроника', 'Электричество', 'Electrical'],
            'ids' => [165, 153, 166, 156, 202, 170, 159, 177, 180],
        ],
        'tools' => [
            'names' => ['Инструменты', 'Tools'],
            'ids' => [44, 38, 49, 48],
        ],
        'armor' => [
            'names' => ['Одежда', 'Броня', 'Armor'],
            'ids' => [98, 102, 84, 85, 87, 86, 307, 243, 91, 244, 245, 246, 94, 93, 96, 104, 103, 242],
        ],
        'keycards' => [
            'names' => ['Карточки', 'Кейкарды', 'Keycards'],
            'ids' => [232, 233, 234],
        ],
        'medical' => [
            'names' => ['Медицина', 'Медикаменты', 'Medical'],
            'ids' => [247, 248, 249],
        ],
    ];

    public function handle(): int
    {
        $isDry = (bool) $this->option('dry');
        $autoCreate = (bool) $this->option('create-missing');

        // 1. List existing categories
        $existing = ShopCategory::orderBy('sort')->get();
        $this->info('=== Existing shop categories in DB ===');
        foreach ($existing as $cat) {
            $count = ShopItem::where('category_id', $cat->id)->where('status', 1)->count();
            $this->line(sprintf('  id=%-3d  %-30s  (active items: %d)', $cat->id, $cat->title_ru ?? '?', $count));
        }
        $this->line('');

        // 2. Match groups to categories
        $plan = [];
        $unmatched = [];

        foreach ($this->groups as $groupKey => $group) {
            $matchedCat = null;
            foreach ($group['names'] as $candidate) {
                $cat = $existing->first(fn ($c) => mb_strtolower(trim($c->title_ru ?? '')) === mb_strtolower(trim($candidate)));
                if ($cat) {
                    $matchedCat = $cat;
                    break;
                }
            }

            if ($matchedCat) {
                $plan[$groupKey] = [
                    'category' => $matchedCat,
                    'item_count' => count($group['ids']),
                    'ids' => $group['ids'],
                ];
            } else {
                $unmatched[$groupKey] = $group;
            }
        }

        // 3. Print plan
        $this->info('=== Matched groups ===');
        foreach ($plan as $key => $info) {
            $this->line(sprintf(
                '  ✅ %-12s → category id=%d "%s" (%d items)',
                $key, $info['category']->id, $info['category']->title_ru, $info['item_count']
            ));
        }
        $this->line('');

        if (! empty($unmatched)) {
            $this->warn('=== UNMATCHED groups ===');
            foreach ($unmatched as $key => $g) {
                $this->line(sprintf('  ❌ %-12s — expected one of: %s', $key, implode(', ', $g['names'])));
            }
            $this->line('');
        }

        // 4. Auto-create missing if asked
        if (! empty($unmatched) && $autoCreate) {
            $this->info('Creating missing categories...');
            $sortStart = ($existing->max('sort') ?? 0) + 10;
            foreach ($unmatched as $key => $g) {
                $firstName = $g['names'][0];
                if ($isDry) {
                    $this->line("  [DRY] would create: \"$firstName\"");

                    continue;
                }

                $newCat = new ShopCategory;
                $newCat->forceFill([
                    'title_ru' => $firstName,
                    'title_en' => end($g['names']),
                    'path' => $this->slugify($firstName),
                    'sort' => $sortStart,
                ])->save();

                $sortStart += 10;
                $plan[$key] = [
                    'category' => $newCat,
                    'item_count' => count($g['ids']),
                    'ids' => $g['ids'],
                ];

                $this->info("  ✅ Created \"$firstName\" (id={$newCat->id})");
            }
            $this->line('');
        }

        if ($isDry) {
            $this->warn('DRY RUN — no shop_items updated.');

            return self::SUCCESS;
        }

        // 5. Apply category_id updates
        $this->info('=== Applying category assignments ===');
        $totalUpdated = 0;
        DB::transaction(function () use ($plan, &$totalUpdated) {
            foreach ($plan as $key => $info) {
                $affected = ShopItem::whereIn('id', $info['ids'])
                    ->update(['category_id' => $info['category']->id]);
                $totalUpdated += $affected;
                $this->line("  $key: $affected items → category id={$info['category']->id}");
            }
        });

        Cache::flush();

        $this->info('');
        $this->info("✅ Total items updated: {$totalUpdated}");

        if (! empty($unmatched) && ! $autoCreate) {
            $this->warn('Some groups were UNMATCHED. Re-run with --create-missing to auto-create their categories.');
        }

        return self::SUCCESS;
    }

    private function slugify(string $text): string
    {
        $map = [
            'а'=>'a','б'=>'b','в'=>'v','г'=>'g','д'=>'d','е'=>'e','ё'=>'e','ж'=>'zh','з'=>'z',
            'и'=>'i','й'=>'y','к'=>'k','л'=>'l','м'=>'m','н'=>'n','о'=>'o','п'=>'p','р'=>'r',
            'с'=>'s','т'=>'t','у'=>'u','ф'=>'f','х'=>'h','ц'=>'c','ч'=>'ch','ш'=>'sh','щ'=>'sch',
            'ъ'=>'','ы'=>'y','ь'=>'','э'=>'e','ю'=>'yu','я'=>'ya',
        ];
        $text = mb_strtolower($text);
        $text = strtr($text, $map);
        $text = preg_replace('/[^a-z0-9]+/', '-', $text);

        return trim($text, '-');
    }
}

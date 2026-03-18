<?php

namespace Database\Seeders;

use App\Models\ShopCategory;
use App\Models\ShopItem;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ShopSeeder extends Seeder
{
    public function run(): void
    {
        try {
            $oldConnection = config('database.connections.mysql_old');
            
            if (!$oldConnection || !$oldConnection['database']) {
                Log::warning('Old database connection not configured. Skipping shop migration.');
                return;
            }

            DB::connection('mysql_old')->getPdo();
            
            if (!DB::connection('mysql_old')->getSchemaBuilder()->hasTable('shop_categories')) {
                Log::warning('shop_categories table not found in old database.');
                return;
            }

            $this->migrateCategories();
            $this->migrateItems();
            
        } catch (\Exception $e) {
            Log::warning('Could not migrate shop data: ' . $e->getMessage());
        }
    }

    protected function migrateCategories(): void
    {
        $oldCategories = DB::connection('mysql_old')
            ->table('shop_categories')
            ->get();

        $migrated = 0;
        foreach ($oldCategories as $oldCategory) {
            try {
                ShopCategory::updateOrCreate(
                    ['path' => $oldCategory->path],
                    [
                        'sort' => $oldCategory->sort ?? 0,
                        'discount_percent' => $oldCategory->discount_percent,
                        'title_ru' => $oldCategory->title_ru,
                        'title_en' => $oldCategory->title_en,
                        'title_de' => $oldCategory->title_de,
                        'title_fr' => $oldCategory->title_fr,
                        'title_it' => $oldCategory->title_it,
                        'title_es' => $oldCategory->title_es,
                        'title_uk' => $oldCategory->title_uk,
                        'description_ru' => $oldCategory->description_ru,
                        'description_en' => $oldCategory->description_en,
                        'description_de' => $oldCategory->description_de,
                        'description_fr' => $oldCategory->description_fr,
                        'description_it' => $oldCategory->description_it,
                        'description_es' => $oldCategory->description_es,
                        'description_uk' => $oldCategory->description_uk,
                        'created_at' => $oldCategory->created_at,
                        'updated_at' => $oldCategory->updated_at,
                    ]
                );
                $migrated++;
            } catch (\Exception $e) {
                Log::error("Failed to migrate category {$oldCategory->id}: {$e->getMessage()}");
            }
        }

        Log::info("Migrated {$migrated} shop categories");
    }

    protected function migrateItems(): void
    {
        $oldItems = DB::connection('mysql_old')
            ->table('shop_items')
            ->get();

        $migrated = 0;
        $skipped = 0;
        
        foreach ($oldItems as $oldItem) {
            try {
                // Найдем категорию по ID из старой БД
                $oldCategory = DB::connection('mysql_old')
                    ->table('shop_categories')
                    ->where('id', $oldItem->category_id)
                    ->first();
                
                $newCategory = null;
                if ($oldCategory) {
                    $newCategory = ShopCategory::where('path', $oldCategory->path)->first();
                }

                // Проверяем, существует ли уже товар с таким ID
                $existingItem = ShopItem::find($oldItem->id);
                
                $data = [
                    'rs_id' => $oldItem->rs_id,
                    'item_id' => $oldItem->item_id,
                    'category_id' => $newCategory?->id,
                    'server' => $oldItem->server,
                    'servers' => $oldItem->servers ? json_decode($oldItem->servers, true) : null,
                    'price' => $oldItem->price,
                    'price_usd' => $oldItem->price_usd,
                    'discount_percent' => $oldItem->discount_percent,
                    'disable_category_discount' => $oldItem->disable_category_discount ?? false,
                    'amount' => $oldItem->amount ?? 1,
                    'command' => $oldItem->command,
                    'is_blueprint' => $oldItem->is_blueprint ?? false,
                    'is_command' => $oldItem->is_command ?? false,
                    'is_item' => $oldItem->is_item ?? true,
                    'can_gift' => $oldItem->can_gift ?? false,
                    'wipe_block' => $oldItem->wipe_block ?? false,
                    'status' => $oldItem->status ?? 1,
                    'variations' => $oldItem->variations ? json_decode($oldItem->variations, true) : null,
                    'name_ru' => $oldItem->name_ru,
                    'name_en' => $oldItem->name_en,
                    'name_de' => $oldItem->name_de,
                    'name_fr' => $oldItem->name_fr,
                    'name_it' => $oldItem->name_it,
                    'name_es' => $oldItem->name_es,
                    'name_uk' => $oldItem->name_uk,
                    'short_name' => $oldItem->short_name,
                    'short_description_ru' => $oldItem->short_description_ru,
                    'short_description_en' => $oldItem->short_description_en,
                    'short_description_de' => $oldItem->short_description_de,
                    'short_description_fr' => $oldItem->short_description_fr,
                    'short_description_it' => $oldItem->short_description_it,
                    'short_description_es' => $oldItem->short_description_es,
                    'short_description_uk' => $oldItem->short_description_uk,
                    'description_ru' => $oldItem->description_ru,
                    'description_en' => $oldItem->description_en,
                    'description_de' => $oldItem->description_de,
                    'description_fr' => $oldItem->description_fr,
                    'description_it' => $oldItem->description_it,
                    'description_es' => $oldItem->description_es,
                    'description_uk' => $oldItem->description_uk,
                    'image' => $oldItem->image,
                    'sort' => $oldItem->sort ?? 0,
                    'created_at' => $oldItem->created_at,
                    'updated_at' => $oldItem->updated_at,
                ];
                
                if ($existingItem) {
                    $existingItem->update($data);
                } else {
                    $item = new ShopItem($data);
                    $item->id = $oldItem->id;
                    $item->save();
                }
                
                $migrated++;
            } catch (\Exception $e) {
                Log::error("Failed to migrate item {$oldItem->id}: {$e->getMessage()}");
                $skipped++;
            }
        }

        Log::info("Migrated {$migrated} shop items (skipped: {$skipped})");
    }
}

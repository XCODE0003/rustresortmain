<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OldDataMigrationSeeder extends Seeder
{
    /** MySQL TIMESTAMP max: 2038-01-19. Некорректные даты заменяем на null. */
    private function sanitizeTimestamp($value): ?string
    {
        if ($value === null || $value === '') {
            return null;
        }
        $str = (string) $value;
        if (preg_match('/^(\d{4})-/', $str, $m) && (int) $m[1] > 2037) {
            return null;
        }
        if (preg_match('/^(0000|1111|2222)-/', $str)) {
            return null;
        }
        return $str;
    }

    public function run(): void
    {
        $this->command->info('Starting data migration from old database...');

        $oldDb = \DB::connection('mysql_old');

        $this->migrateUsers($oldDb);
        $this->migrateShopCategories($oldDb);
        $this->migrateShopItems($oldDb);
        $this->migrateServerCategories($oldDb);
        $this->migrateServers($oldDb);
        $this->migrateActivePurchases($oldDb);
        $this->migratePromoCodes($oldDb);

        $this->command->info('Data migration completed successfully!');
    }

    private function migrateUsers(\Illuminate\Database\Connection $oldDb): void
    {
        $this->command->info('Migrating users...');

        $users = $oldDb->table('users')->get();
        $migrated = 0;

        foreach ($users as $oldUser) {
            $user = null;

            if (!empty($oldUser->steam_id)) {
                $user = \App\Models\User::where('steam_id', $oldUser->steam_id)->first();
            }
            if (!$user && !empty($oldUser->email)) {
                $user = \App\Models\User::where('email', $oldUser->email)->first();
            }

            if ($user) {
                $email = trim((string) ($oldUser->email ?? ''));
                $user->update([
                    'name' => $oldUser->name ?? $user->name,
                    'email' => $email !== '' ? $email : $user->email,
                    'steam_id' => $oldUser->steam_id ?? $user->steam_id,
                    'avatar' => $oldUser->avatar ?? $user->avatar,
                    'balance' => $oldUser->balance ?? 0,
                    'role' => $oldUser->role ?? 'user',
                    'mute' => $oldUser->mute ?? false,
                    'mute_reason' => $oldUser->mute_reason ?? null,
                    'mute_date' => $this->sanitizeTimestamp($oldUser->mute_date ?? null),
                    'online_time' => $oldUser->online_time ?? 0,
                    'online_time_monday' => $oldUser->online_time_monday ?? null,
                    'online_time_thursday' => $oldUser->online_time_thursday ?? null,
                    'online_time_eumain' => $oldUser->online_time_eumain ?? null,
                    'steam_trade_url' => $oldUser->steam_trade_url ?? null,
                    'phone' => $oldUser->phone ?? null,
                    'pin' => $oldUser->pin ?? null,
                    'status_2fa' => $oldUser->status_2fa ?? null,
                    'secretcode_2fa' => $oldUser->secretcode_2fa ?? null,
                ]);
            } else {
                $email = trim((string) ($oldUser->email ?? ''));
                $email = $email !== '' ? $email : ('user_' . $oldUser->id . '@migrated.local');

                try {
                    \DB::table('users')->insert([
                    'name' => $oldUser->name ?? 'User',
                    'email' => $email,
                    'email_verified_at' => $this->sanitizeTimestamp($oldUser->email_verified_at ?? null),
                    'password' => $oldUser->password ?? bcrypt(str()->random(32)),
                    'remember_token' => $oldUser->remember_token,
                    'steam_id' => $oldUser->steam_id ?? null,
                    'avatar' => $oldUser->avatar ?? null,
                    'balance' => $oldUser->balance ?? 0,
                    'role' => $oldUser->role ?? 'user',
                    'mute' => $oldUser->mute ?? false,
                    'mute_reason' => $oldUser->mute_reason ?? null,
                    'mute_date' => $this->sanitizeTimestamp($oldUser->mute_date ?? null),
                    'online_time' => $oldUser->online_time ?? 0,
                    'online_time_monday' => $oldUser->online_time_monday ?? null,
                    'online_time_thursday' => $oldUser->online_time_thursday ?? null,
                    'online_time_eumain' => $oldUser->online_time_eumain ?? null,
                    'steam_trade_url' => $oldUser->steam_trade_url ?? null,
                    'phone' => $oldUser->phone ?? null,
                    'pin' => $oldUser->pin ?? null,
                    'status_2fa' => $oldUser->status_2fa ?? null,
                    'secretcode_2fa' => $oldUser->secretcode_2fa ?? null,
                    'created_at' => $this->sanitizeTimestamp($oldUser->created_at ?? null) ?? now(),
                    'updated_at' => $this->sanitizeTimestamp($oldUser->updated_at ?? null) ?? now(),
                ]);
                } catch (\Illuminate\Database\QueryException $e) {
                    if (strpos($e->getMessage(), 'Duplicate entry') === false) {
                        throw $e;
                    }
                }
            }
            $migrated++;
        }

        $this->command->info("Migrated {$migrated} users");
    }

    private function migrateShopCategories(\Illuminate\Database\Connection $oldDb): void
    {
        $this->command->info('Migrating shop categories...');

        $categories = $oldDb->table('shop_categories')->get();

        foreach ($categories as $oldCategory) {
            \App\Models\ShopCategory::updateOrCreate(
                ['path' => $oldCategory->path],
                [
                    'sort' => $oldCategory->sort,
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
        }

        $this->command->info("Migrated {$categories->count()} categories");
    }

    private function migrateShopItems(\Illuminate\Database\Connection $oldDb): void
    {
        $this->command->info('Migrating shop items...');

        $items = $oldDb->table('shop_items')
            ->where('status', 1)
            ->get();

        foreach ($items as $oldItem) {
            \DB::table('shop_items')->insertOrIgnore([
                'id' => $oldItem->id,
                'rs_id' => $oldItem->rs_id,
                'item_id' => $oldItem->item_id,
                'category_id' => $oldItem->category_id,
                'server' => $oldItem->server,
                'servers' => $oldItem->servers,
                'price' => $oldItem->price,
                'price_usd' => $oldItem->price_usd,
                'discount_percent' => $oldItem->discount_percent,
                'disable_category_discount' => $oldItem->disable_category_discount ?? false,
                'amount' => $oldItem->amount ?? 1,
                'command' => $oldItem->command,
                'is_blueprint' => $oldItem->is_blueprint ?? false,
                'is_command' => $oldItem->is_command ?? false,
                'is_item' => $oldItem->is_item ?? true,
                'wipe_block' => $oldItem->wipe_block ?? false,
                'status' => $oldItem->status ?? 1,
                'variations' => $oldItem->variations,
                'image' => $oldItem->image,
                'sort' => $oldItem->sort ?? 0,
                'can_gift' => $oldItem->can_gift ?? false,
                'name_ru' => $oldItem->name_ru,
                'name_en' => $oldItem->name_en,
                'name_de' => $oldItem->name_de,
                'name_fr' => $oldItem->name_fr,
                'name_it' => $oldItem->name_it,
                'name_es' => $oldItem->name_es,
                'name_uk' => $oldItem->name_uk,
                'short_name' => $oldItem->short_name ?? null,
                'short_description_ru' => $oldItem->short_description_ru ?? null,
                'short_description_en' => $oldItem->short_description_en ?? null,
                'short_description_de' => $oldItem->short_description_de ?? null,
                'short_description_fr' => $oldItem->short_description_fr ?? null,
                'short_description_it' => $oldItem->short_description_it ?? null,
                'short_description_es' => $oldItem->short_description_es ?? null,
                'short_description_uk' => $oldItem->short_description_uk ?? null,
                'description_ru' => $oldItem->description_ru,
                'description_en' => $oldItem->description_en,
                'description_de' => $oldItem->description_de,
                'description_fr' => $oldItem->description_fr,
                'description_it' => $oldItem->description_it,
                'description_es' => $oldItem->description_es,
                'description_uk' => $oldItem->description_uk,
                'created_at' => $oldItem->created_at,
                'updated_at' => $oldItem->updated_at,
            ]);
        }

        $this->command->info("Migrated {$items->count()} items");
    }

    private function migrateServerCategories(\Illuminate\Database\Connection $oldDb): void
    {
        $this->command->info('Migrating server categories...');

        $categories = $oldDb->table('servers_categories')->get();

        foreach ($categories as $oldCategory) {
            \App\Models\ServerCategory::updateOrCreate(
                ['id' => $oldCategory->id],
                [
                    'path' => $oldCategory->path,
                    'status' => $oldCategory->status ?? 1,
                    'sort' => $oldCategory->sort ?? 0,
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
        }

        $this->command->info("Migrated {$categories->count()} server categories");
    }

    private function migrateServers(\Illuminate\Database\Connection $oldDb): void
    {
        $this->command->info('Migrating servers...');

        $servers = $oldDb->table('servers')->get();

        foreach ($servers as $oldServer) {
            \App\Models\Server::updateOrCreate(
                ['id' => $oldServer->id],
                [
                    'name' => $oldServer->name,
                    'status' => $oldServer->status,
                    'sort' => $oldServer->sort ?? 0,
                    'image' => $oldServer->image,
                    'options' => $oldServer->options,
                    'wipe' => $oldServer->wipe,
                    'next_wipe' => $oldServer->next_wipe,
                    'category_id' => $oldServer->category_id,
                    'created_at' => $oldServer->created_at,
                    'updated_at' => $oldServer->updated_at,
                ]
            );
        }

        $this->command->info("Migrated {$servers->count()} servers");
    }

    private function migrateActivePurchases(\Illuminate\Database\Connection $oldDb): void
    {
        $this->command->info('Migrating active purchases...');

        $purchases = $oldDb->table('shop_purchases')
            ->where('created_at', '>=', now()->subMonths(3))
            ->get();

        foreach ($purchases as $oldPurchase) {
            \App\Models\ShopPurchase::updateOrCreate(
                ['id' => $oldPurchase->id],
                [
                    'user_id' => $oldPurchase->user_id,
                    'item_id' => $oldPurchase->item_id,
                    'server_id' => $oldPurchase->server_id,
                    'price' => $oldPurchase->price,
                    'count' => $oldPurchase->count,
                    'created_at' => $oldPurchase->created_at,
                    'updated_at' => $oldPurchase->updated_at,
                ]
            );
        }

        $this->command->info("Migrated {$purchases->count()} active purchases");
    }

    private function migratePromoCodes(\Illuminate\Database\Connection $oldDb): void
    {
        $this->command->info('Migrating promo codes...');

        $promoCodes = $oldDb->table('promo_codes')
            ->where(function ($query) {
                $query->whereNull('date_end')
                    ->orWhere('date_end', '>=', now());
            })
            ->get();

        $migratedUserIds = \App\Models\User::pluck('id')->toArray();

        foreach ($promoCodes as $oldPromo) {
            $userId = $oldPromo->user_id;
            if ($userId && ! in_array($userId, $migratedUserIds)) {
                $userId = null;
            }

            $dateStart = $oldPromo->date_start;
            if ($dateStart && (str_starts_with($dateStart, '1111-') || str_starts_with($dateStart, '0000-'))) {
                $dateStart = null;
            }

            $dateEnd = $oldPromo->date_end;
            if ($dateEnd && (str_starts_with($dateEnd, '1111-') || str_starts_with($dateEnd, '2222-') || str_starts_with($dateEnd, '0000-'))) {
                $dateEnd = null;
            }

            \App\Models\PromoCode::updateOrCreate(
                ['code' => $oldPromo->code],
                [
                    'public_uuid' => $oldPromo->public_uuid,
                    'title' => $oldPromo->title,
                    'type' => $oldPromo->type ?? 'single',
                    'type_reward' => $oldPromo->type_reward ?? 'balance',
                    'user_id' => $userId,
                    'bonus_amount' => $oldPromo->bonus_amount ?? 0,
                    'premium_period' => $oldPromo->premium_period,
                    'case_id' => $oldPromo->case_id,
                    'bonus_case_id' => $oldPromo->bonus_case_id,
                    'server_id' => $oldPromo->server_id,
                    'users' => $oldPromo->users,
                    'date_start' => $dateStart,
                    'date_end' => $dateEnd,
                    'max_activations' => $oldPromo->max_activations,
                    'items' => $oldPromo->items,
                    'shop_item_id' => $oldPromo->shop_item_id,
                    'variation_id' => $oldPromo->variation_id,
                    'is_created_bot' => $oldPromo->is_created_bot ?? false,
                    'created_at' => $oldPromo->created_at,
                    'updated_at' => $oldPromo->updated_at,
                ]
            );
        }

        $this->command->info("Migrated {$promoCodes->count()} promo codes");
    }
}

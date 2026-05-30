<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Models\ShopCategory;
use App\Models\ShopItem;
use App\Models\ShopSet;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $servers = Server::with('category')
            ->where('status', 1)
            ->orderBy('sort')
            ->get()
            ->map(function (Server $server) {
                return array_merge($server->toArray(), [
                    'last_wipe' => $server->wipe?->toISOString(),
                    'online_players' => (int) data_get($server->options, 'online_players', 0),
                    'max_players' => (int) data_get($server->options, 'max_players', 500),
                ]);
            });

        $shopCategories = ShopCategory::query()
            ->select(['id', 'title_ru', 'title_en'])
            ->orderBy('sort')
            ->get();

        $shopItems = ShopItem::query()
            ->select(['shop_items.id', 'shop_items.name_ru', 'shop_items.name_en', 'shop_items.price', 'shop_items.price_usd', 'shop_items.image', 'shop_items.category_id', 'shop_items.server', 'shop_items.servers', 'shop_items.sort', 'shop_items.amount', 'shop_items.discount_percent', 'shop_items.disable_category_discount', 'shop_items.description_ru', 'shop_items.description_en', 'shop_items.variations'])
            ->with('category:id,title_ru,title_en,sort,discount_percent')
            ->where('shop_items.status', 1)
            ->whereNotNull('shop_items.category_id')
            ->get()
            ->map(fn ($item) => array_merge($item->toArray(), ['kind' => 'item']));

        $shopSets = ShopSet::query()
            ->select(['shop_sets.id', 'shop_sets.name_ru', 'shop_sets.name_en', 'shop_sets.price', 'shop_sets.price_usd', 'shop_sets.image', 'shop_sets.category_id', 'shop_sets.server', 'shop_sets.servers', 'shop_sets.sort', 'shop_sets.discount_percent', 'shop_sets.disable_category_discount', 'shop_sets.description_ru', 'shop_sets.description_en', 'shop_sets.items'])
            ->with('category:id,title_ru,title_en,sort,discount_percent')
            ->where('shop_sets.status', 1)
            ->whereNotNull('shop_sets.category_id')
            ->get()
            ->map(fn ($set) => array_merge($set->toArray(), ['kind' => 'set']));

        $shopEntries = $shopItems->concat($shopSets)
            ->sortBy([
                fn ($a, $b) => ($a['category']['sort'] ?? 0) <=> ($b['category']['sort'] ?? 0),
                fn ($a, $b) => ($a['kind'] === $b['kind'] ? 0 : ($a['kind'] === 'item' ? -1 : 1)),
                fn ($a, $b) => ($a['sort'] ?? 0) <=> ($b['sort'] ?? 0),
            ])
            ->values();

        return Inertia::render('home', [
            'servers' => $servers,
            'shopCategories' => $shopCategories,
            'shopItems' => $shopEntries,
        ]);
    }
}

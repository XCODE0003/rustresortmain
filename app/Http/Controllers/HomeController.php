<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Models\ShopCategory;
use App\Models\ShopItem;
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

        $shopItemsQuery = ShopItem::query()
            ->select(['shop_items.id', 'shop_items.name_ru', 'shop_items.name_en', 'shop_items.price', 'shop_items.image', 'shop_items.category_id', 'shop_items.server', 'shop_items.servers', 'shop_items.sort', 'shop_items.description_ru', 'shop_items.description_en', 'shop_items.variations'])
            ->with('category:id,title_ru,title_en')
            ->join('shop_categories', 'shop_categories.id', '=', 'shop_items.category_id')
            ->where('shop_items.status', 1)
            ->whereNotNull('shop_items.category_id')
            ->orderBy('shop_categories.sort')
            ->orderBy('shop_items.sort');

        $shopItems = $shopItemsQuery->get();

        return Inertia::render('home', [
            'servers' => $servers,
            'shopCategories' => $shopCategories,
            'shopItems' => $shopItems,
        ]);
    }
}

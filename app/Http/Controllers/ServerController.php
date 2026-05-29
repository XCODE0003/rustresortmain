<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Models\ServerCategory;
use App\Models\ShopCategory;
use App\Models\ShopItem;
use Inertia\Inertia;
use Inertia\Response;

class ServerController extends Controller
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

        return Inertia::render('servers', [
            'servers' => $servers,
        ]);
    }

    public function shopServers(): Response
    {
        $categories = ServerCategory::with(['servers' => function ($query) {
            $query->where('status', 1)->orderBy('sort');
        }])
            ->orderBy('sort')
            ->get();

        $servers = Server::where('status', 1)
            ->orderBy('sort')
            ->get();

        $shopCategories = ShopCategory::orderBy('sort')->get();

        $items = ShopItem::with('category:id,path,title_ru,title_en')
            ->select(['shop_items.id', 'shop_items.name_ru', 'shop_items.name_en', 'shop_items.price', 'shop_items.price_usd', 'shop_items.image', 'shop_items.category_id', 'shop_items.servers', 'shop_items.variations', 'shop_items.sort', 'shop_items.amount', 'shop_items.description_ru', 'shop_items.description_en'])
            ->join('shop_categories', 'shop_categories.id', '=', 'shop_items.category_id')
            ->where('shop_items.status', 1)
            ->whereNotNull('shop_items.category_id')
            ->orderBy('shop_categories.sort')
            ->orderBy('shop_items.sort')
            ->get();

        return Inertia::render('shop/server/list', [
            'servers' => $servers,
            'categories' => $categories,
            'shopCategories' => $shopCategories,
            'items' => $items,
        ]);
    }

    public function shopServerShow(Server $server)
    {
        $server->load('category');

        session(['selected_server_id' => $server->id]);

        return redirect()->route('shop.index');
    }
}

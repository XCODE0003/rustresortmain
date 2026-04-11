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
                ]);
            });

        $shopCategories = ShopCategory::query()
            ->select(['id', 'title_ru', 'title_en'])
            ->orderBy('sort')
            ->get();

        $shopItemsQuery = ShopItem::query()
            ->select(['id', 'name_ru', 'name_en', 'price', 'image', 'category_id', 'servers', 'sort', 'description_ru', 'description_en', 'variations'])
            ->with('category:id,title_ru,title_en')
            ->where('status', 1)
            ->whereNotNull('category_id')
            ->orderBy('sort');

        $shopItems = $shopItemsQuery->get();

        return Inertia::render('home', [
            'servers' => $servers,
            'shopCategories' => $shopCategories,
            'shopItems' => $shopItems,
        ]);
    }
}

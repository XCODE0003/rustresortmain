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
            ->select(['id', 'name_ru', 'name_en', 'price', 'image', 'category_id', 'servers', 'variations', 'sort', 'amount', 'description_ru', 'description_en'])
            ->where('status', 1)
            ->whereNotNull('category_id')
            ->orderBy('sort')
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

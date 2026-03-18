<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Models\ShopCategory;
use App\Models\ShopItem;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function index(): Response
    {
        $categories = ShopCategory::orderBy('sort')->get();

        $selectedServerId = session('selected_server_id');
        $categorySlug = request('category');

        $itemsQuery = ShopItem::with('category:id,path,title_ru')
            ->select(['id', 'name_ru', 'price', 'image', 'category_id', 'servers', 'variations', 'sort', 'amount', 'description_ru'])
            ->where('status', 1)
            ->whereNotNull('category_id')
            ->orderBy('sort');

        if ($selectedServerId) {
            $itemsQuery->where(function ($query) use ($selectedServerId) {
                $query->whereJsonContains('servers', (string) $selectedServerId)
                    ->orWhereJsonContains('servers', (int) $selectedServerId);
            });
        }

        $items = $itemsQuery->get();

        $selectedServer = $selectedServerId ? Server::find($selectedServerId) : null;

        return Inertia::render('shop/Index', [
            'categories' => $categories,
            'items' => $items,
            'selectedServer' => $selectedServer,
            'categorySlug' => $categorySlug,
        ]);
    }

    public function category(string $path): Response
    {
        $category = ShopCategory::where('path', $path)
            ->with(['items' => function ($query) {
                $query->orderBy('sort');
            }])
            ->firstOrFail();

        return Inertia::render('shop/Category', [
            'category' => $category,
        ]);
    }

    public function show(ShopItem $item): Response
    {
        $item->load('category');

        return Inertia::render('shop/Show', [
            'item' => $item,
        ]);
    }
}

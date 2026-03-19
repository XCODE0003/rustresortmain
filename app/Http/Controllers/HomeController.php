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
        $shopCategoryId = request()->integer('shop_category');
        $shopSearch = trim((string) request()->string('shop_search', ''));

        $servers = Server::with('category')
            ->where('status', 1)
            ->orderBy('sort')
            ->get();

        $shopCategories = ShopCategory::query()
            ->select(['id', 'title_ru'])
            ->orderBy('sort')
            ->get();

        $shopItemsQuery = ShopItem::query()
            ->select(['id', 'name_ru', 'price', 'image', 'category_id', 'sort', 'description_ru', 'variations'])
            ->with('category:id,title_ru')
            ->where('status', 1)
            ->whereNotNull('category_id')
            ->orderBy('sort');

        if ($shopCategoryId > 0) {
            $shopItemsQuery->where('category_id', $shopCategoryId);
        }

        if ($shopSearch !== '') {
            $shopItemsQuery->where(function ($query) use ($shopSearch) {
                $query->where('name_ru', 'like', '%'.$shopSearch.'%')
                    ->orWhere('description_ru', 'like', '%'.$shopSearch.'%');
            });
        }

        $shopItems = $shopItemsQuery
            ->paginate(8, ['*'], 'shop_page')
            ->withQueryString();

        return Inertia::render('home', [
            'servers' => $servers,
            'shopCategories' => $shopCategories,
            'shopItems' => $shopItems,
            'shopFilters' => [
                'shop_category' => $shopCategoryId > 0 ? $shopCategoryId : null,
                'shop_search' => $shopSearch,
            ],
        ]);
    }
}

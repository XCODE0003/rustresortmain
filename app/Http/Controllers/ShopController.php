<?php

namespace App\Http\Controllers;

use App\Jobs\DeliverPurchaseItemsJob;
use App\Models\Donate;
use App\Models\Server;
use App\Models\ShopCategory;
use App\Models\ShopItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function index(): Response
    {
        $categories = ShopCategory::orderBy('sort')->get();

        $selectedServerId = session('selected_server_id');
        $categorySlug = request('category');

        $itemsQuery = ShopItem::with('category:id,path,title_ru,title_en')
            ->select(['id', 'name_ru', 'name_en', 'price', 'image', 'category_id', 'servers', 'variations', 'sort', 'amount', 'description_ru', 'description_en'])
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

    public function buyWithBalance(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'item_id' => 'required|exists:shop_items,id',
            'count' => 'integer|min:1|max:100',
            'var_id' => 'nullable|integer',
            'server_id' => 'nullable|integer',
        ]);

        $user = auth()->user();
        $item = ShopItem::findOrFail($validated['item_id']);
        $count = $validated['count'] ?? 1;

        $price = $item->getFinalPrice();
        if (! empty($validated['var_id']) && is_array($item->variations)) {
            $variation = collect($item->variations)->firstWhere('id', $validated['var_id']);
            if ($variation) {
                $price = (float) ($variation['price'] ?? $price);
            }
        }

        $total = $price * $count;

        if ($user->balance < $total) {
            return redirect()->route('payment')->with('error', __('common.balance_insufficient'));
        }

        $user->decrement('balance', $total);

        $donate = Donate::create([
            'user_id' => $user->id,
            'payment_id' => uniqid('balance_', true),
            'amount' => $total,
            'item_id' => $item->id,
            'count' => $count,
            'var_id' => $validated['var_id'] ?? null,
            'server' => $validated['server_id'] ?? null,
            'status' => 1,
            'payment_system' => 'balance',
            'steam_id' => $user->steam_id,
        ]);

        DeliverPurchaseItemsJob::dispatchSync($donate);

        return redirect()->back()->with('success', __('common.purchase_success'));
    }
}

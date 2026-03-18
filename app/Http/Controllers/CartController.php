<?php

namespace App\Http\Controllers;

use App\Models\ShopCart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CartController extends Controller
{
    public function index(): Response
    {
        $cart = ShopCart::with('item.category')
            ->where('user_id', auth()->id())
            ->get();

        $total = $cart->sum(fn ($cartItem) => $cartItem->item->getFinalPrice() * $cartItem->count);
        $discount = $cart->sum(fn ($cartItem) => ($cartItem->item->price - $cartItem->item->getFinalPrice()) * $cartItem->count);

        return Inertia::render('shop/basket', [
            'cart' => $cart,
            'total' => $total,
            'discount' => $discount,
        ]);
    }

    public function add(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'item_id' => 'required|exists:shop_items,id',
            'count' => 'integer|min:1|max:100',
        ]);

        $cartItem = ShopCart::where('user_id', auth()->id())
            ->where('item_id', $validated['item_id'])
            ->first();

        if ($cartItem) {
            $cartItem->increment('count', $validated['count'] ?? 1);
        } else {
            ShopCart::create([
                'user_id' => auth()->id(),
                'item_id' => $validated['item_id'],
                'count' => $validated['count'] ?? 1,
            ]);
        }

        return redirect()->back()->with('success', 'Товар добавлен в корзину');
    }

    public function update(Request $request, ShopCart $cart): RedirectResponse
    {
        $this->authorize('update', $cart);

        $validated = $request->validate([
            'count' => 'required|integer|min:1|max:100',
        ]);

        $cart->update($validated);

        return redirect()->back()->with('success', 'Количество обновлено');
    }

    public function remove(ShopCart $cart): RedirectResponse
    {
        $this->authorize('delete', $cart);

        $cart->delete();

        return redirect()->back()->with('success', 'Товар удален из корзины');
    }

    public function clear(): RedirectResponse
    {
        ShopCart::where('user_id', auth()->id())->delete();

        return redirect()->back()->with('success', 'Корзина очищена');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\BucketItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function show(): Response
    {
        $user = auth()->user();

        $user->load([
            'shopPurchases.shopItem',
            'shopPurchases.server',
            'donates' => fn ($query) => $query->latest()->limit(5),
        ]);

        // Возврат возможен ТОЛЬКО пока предмет ещё «висит» в игровой корзине (BucketItem
        // с price>0, т.е. не выдан/не активирован в игре). Цена>0 отсекает содержимое
        // наборов (bucket price=0). Помечаем каждую покупку флагом returnable.
        $pendingKeys = BucketItem::where('user_id', $user->id)
            ->where('price', '>', 0)
            ->get(['shop_item_id', 'server_id'])
            ->mapWithKeys(fn ($b) => [$b->shop_item_id.':'.($b->server_id ?? '') => true]);

        $user->shopPurchases->each(function ($purchase) use ($pendingKeys) {
            $purchase->returnable = $pendingKeys->has($purchase->item_id.':'.($purchase->server_id ?? ''));
        });

        return Inertia::render('profile', [
            'user' => $user,
        ]);
    }

    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'phone' => 'sometimes|nullable|string|max:20',
            'steam_trade_url' => 'sometimes|nullable|url',
        ]);

        auth()->user()->update($validated);

        return redirect()->back()->with('success', 'Профиль обновлен');
    }
}

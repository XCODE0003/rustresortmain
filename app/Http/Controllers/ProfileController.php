<?php

namespace App\Http\Controllers;

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

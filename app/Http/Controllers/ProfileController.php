<?php

namespace App\Http\Controllers;

use App\Lib\SteamApi;
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

        // Получаем данные Steam, если есть steam_id
        $steamData = null;
        if ($user->steam_id) {
            $bansResult = SteamApi::getPlayerBans($user->steam_id);
            $gamesResult = SteamApi::getOwnedGames($user->steam_id, 252490); // Rust AppID
            
            $steamData = [
                'bans' => $bansResult->status === 'success' ? $bansResult->data : null,
                'rust_playtime' => $gamesResult->status === 'success' ? $gamesResult->data : null,
            ];
        }

        return Inertia::render('profile', [
            'user' => $user,
            'steamData' => $steamData,
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

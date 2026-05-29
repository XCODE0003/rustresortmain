<?php

namespace App\Http\Controllers;

use App\Models\Server;
use Illuminate\Http\RedirectResponse;
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

    // Отдельная страница выбора сервера не нужна: выбор делается прямо в /shop
    // (инлайн-кнопки серверов) и в модалке покупки. Старый URL редиректим в магазин.
    public function shopServers(): RedirectResponse
    {
        return redirect()->route('shop.index');
    }

    public function shopServerShow(Server $server): RedirectResponse
    {
        session(['selected_server_id' => $server->id]);

        return redirect()->route('shop.index');
    }

    public function shopServerReset(): RedirectResponse
    {
        session()->forget('selected_server_id');

        return redirect()->route('shop.index');
    }
}

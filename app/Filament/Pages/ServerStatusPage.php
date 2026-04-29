<?php

namespace App\Filament\Pages;

use App\Models\PlayersOnline;
use App\Models\Server;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Collection;

class ServerStatusPage extends Page
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedSignal;

    protected static ?string $navigationLabel = 'Статус серверов';

    protected static \UnitEnum|string|null $navigationGroup = 'Игровые серверы';

    protected static ?int $navigationSort = 99;

    protected string $view = 'filament.pages.server-status';

    public static function canAccess(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public function getServers(): Collection
    {
        $servers = Server::orderBy('sort')->get();

        $cutoff = now()->subMinutes(5);
        $onlineCounts = PlayersOnline::query()
            ->whereIn('server', $servers->pluck('id'))
            ->where('updated_at', '>=', $cutoff)
            ->selectRaw('server, COUNT(DISTINCT steam_id) AS cnt')
            ->groupBy('server')
            ->pluck('cnt', 'server');

        return $servers->map(function (Server $server) use ($onlineCounts) {
            return (object) [
                'id' => $server->id,
                'name' => $server->name,
                'is_online' => $server->isOnline(),
                'online' => (int) ($onlineCounts[$server->id] ?? 0),
            ];
        });
    }
}

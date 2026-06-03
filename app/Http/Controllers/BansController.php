<?php

namespace App\Http\Controllers;

use App\Models\Ban;
use App\Models\Server;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BansController extends Controller
{
    private const PER_PAGE = 50;

    /**
     * Список банов читается из ЛОКАЛЬНОЙ таблицы bans (её наполняет SyncRustAppBansJob каждые 3 минуты).
     * Так страница не зависит от доступности RustApp и показывает накопленную историю.
     */
    public function index(Request $request): Response
    {
        $page = max(1, (int) $request->query('page', 1));
        $search = trim((string) $request->query('search', ''));

        $servers = Server::where('status', 1)
            ->orderBy('sort')
            ->get(['id', 'name'])
            ->keyBy('id')
            ->map(fn (Server $s) => $s->name)
            ->all();

        $query = Ban::query()
            ->orderByDesc('banned_at')
            ->orderByDesc('rustapp_id');

        if ($search !== '') {
            $like = '%'.$search.'%';
            $query->where(function ($q) use ($like) {
                $q->where('steam_name', 'like', $like)
                    ->orWhere('steam_id', 'like', $like)
                    ->orWhere('reason', 'like', $like);
            });
        }

        $paginator = $query->paginate(self::PER_PAGE, ['*'], 'page', $page);

        $bans = array_map(
            fn (Ban $ban) => $this->mapBanForPublic($ban, $servers),
            $paginator->items(),
        );

        return Inertia::render('bans', [
            'bans' => $bans,
            'meta' => [
                'total' => $paginator->total(),
                'per_page' => $paginator->perPage(),
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
            ],
            'servers' => $servers,
            'search' => $search,
            'loadError' => false,
        ]);
    }

    /**
     * @param  array<int|string, string>  $servers
     * @return array{nickname: string, avatar: ?string, banned_at: ?int, reason: string, is_active: bool, expires_at: int, server_names: string[]}
     */
    private function mapBanForPublic(Ban $ban, array $servers): array
    {
        $serverNames = array_values(array_filter(
            array_map(fn ($id) => $servers[(int) $id] ?? null, $ban->server_ids ?? []),
            fn ($name) => $name !== null,
        ));

        return [
            'nickname' => $ban->steam_name ?: ($ban->steam_id ?: '—'),
            'avatar' => $ban->steam_avatar,
            'banned_at' => $ban->banned_at,         // уже в UNIX-секундах
            'reason' => $ban->reason ?: '—',
            'is_active' => (bool) $ban->is_active,
            'expires_at' => (int) $ban->expires_at, // 0 = навсегда
            'server_names' => $serverNames,
        ];
    }
}

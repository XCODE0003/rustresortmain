<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Services\RustApp\BansService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BansController extends Controller
{
    public function index(Request $request, BansService $bansService): Response
    {
        $page = max(1, (int) $request->query('page', 1));
        $search = trim((string) $request->query('search', ''));

        $params = [
            'page' => $page - 1,
            'exclude_stale' => true,
            'include_total' => true,
            'limit' => 50,
        ];

        if ($search !== '') {
            $params['search'] = $search;
        }

        $data = $bansService->getBans($params);

        $servers = Server::where('status', 1)
            ->orderBy('sort')
            ->get(['id', 'name'])
            ->keyBy('id')
            ->map(fn (Server $s) => $s->name)
            ->all();

        $success = $data['success'] ?? false;
        $raw = $data['results'] ?? [];

        $bans = array_map(fn (array $ban) => $this->mapBanForPublic($ban, $servers), $raw);
        $limit = (int) ($data['limit'] ?? 0);
        if ($limit < 1) {
            $limit = 20;
        }

        $total = (int) ($data['total'] ?? count($raw));
        $lastPage = max(1, (int) ceil($total / $limit));

        return Inertia::render('bans', [
            'bans' => $bans,
            'meta' => [
                'total' => $total,
                'per_page' => $limit,
                'current_page' => $page,
                'last_page' => $lastPage,
            ],
            'servers' => $servers,
            'search' => $search,
            'loadError' => ! $success,
        ]);
    }

    /**
     * @param  array<int|string, string>  $servers
     * @return array{nickname: string, avatar: ?string, banned_at: ?int, reason: string, is_active: bool, expires_at: int, server_names: string[]}
     */
    private function mapBanForPublic(array $ban, array $servers): array
    {
        $player = $ban['player'] ?? [];

        $serverIds = [];
        if (isset($ban['server_ids']) && is_array($ban['server_ids'])) {
            $serverIds = $ban['server_ids'];
        } elseif (isset($ban['server_id'])) {
            $serverIds = [$ban['server_id']];
        }

        $serverNames = array_values(array_filter(
            array_map(fn ($id) => $servers[(int) $id] ?? null, $serverIds),
            fn ($name) => $name !== null,
        ));

        return [
            'nickname' => $player['steam_name'] ?? ($ban['steam_id'] ?? '—'),
            'avatar' => $player['steam_avatar'] ?? null,
            'banned_at' => isset($ban['created_at']) ? (int) $ban['created_at'] : null,
            'reason' => $ban['reason'] ?? '—',
            'is_active' => (bool) ($ban['computed_is_active'] ?? true),
            'expires_at' => (int) ($ban['expired_at'] ?? 0),
            'server_names' => $serverNames,
        ];
    }
}

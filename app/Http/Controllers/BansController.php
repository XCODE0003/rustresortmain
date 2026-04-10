<?php

namespace App\Http\Controllers;

use App\Services\RustApp\BansService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BansController extends Controller
{
    public function index(Request $request, BansService $bansService): Response
    {
        $page = max(1, (int) $request->query('page', 1));

        $data = $bansService->getBans([
            'page' => $page - 1,
            'exclude_stale' => true,
            'include_total' => true,
            'limit' => 50,
        ]);

        $success = $data['success'] ?? false;
        $raw = $data['results'] ?? [];

        $bans = array_map(fn (array $ban) => $this->mapBanForPublic($ban), $raw);
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
            'loadError' => ! $success,
        ]);
    }

    /**
     * @return array{nickname: string, avatar: ?string, banned_at: ?int, reason: string, is_active: bool, expires_at: int}
     */
    private function mapBanForPublic(array $ban): array
    {
        $player = $ban['player'] ?? [];

        return [
            'nickname' => $player['steam_name'] ?? ($ban['steam_id'] ?? '—'),
            'avatar' => $player['steam_avatar'] ?? null,
            'banned_at' => isset($ban['created_at']) ? (int) $ban['created_at'] : null,
            'reason' => $ban['reason'] ?? '—',
            'is_active' => (bool) ($ban['computed_is_active'] ?? true),
            'expires_at' => (int) ($ban['expired_at'] ?? 0),
        ];
    }
}

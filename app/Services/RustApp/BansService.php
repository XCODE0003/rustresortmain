<?php

namespace App\Services\RustApp;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class BansService
{
    private string $baseUrl;
    private string $privateKey;

    public function __construct()
    {
        $this->baseUrl    = config('services.rustapp.base_url', 'https://court.rustapp.io');
        $this->privateKey = config('services.rustapp.private_key', '');
    }

    private function client(): PendingRequest
    {
        return Http::withHeaders([
            'Authorization' => $this->privateKey,
            'Content-Type'  => 'application/json',
            'Accept'        => 'application/json',
        ])->baseUrl($this->baseUrl)->timeout(15);
    }

    /**
     * GET /public/bans
     * Params: sort_by, page, exclude_stale, steam_id, search, include_total, ban_ids, ban_group_uuid
     */
    public function getBans(array $params = []): array
    {
        $defaults = [
            'sort_by'       => 'created',
            'page'          => 0,
            'include_total' => true,
        ];

        try {
            $response = $this->client()->get('/public/bans', array_merge($defaults, $params));

            if ($response->successful()) {
                return $response->json() ?? ['results' => [], 'page' => 0, 'limit' => 0];
            }

            Log::warning('RustApp getBans failed', [
                'status' => $response->status(),
                'body'   => $response->body(),
            ]);
        } catch (\Throwable $e) {
            Log::error('RustApp getBans exception', ['error' => $e->getMessage()]);
        }

        return ['results' => [], 'page' => 0, 'limit' => 0];
    }

    /**
     * POST /public/bans
     * Body: { bans: [{ steam_id, reason, comment, expired_at, ban_ip, ban_ip_active, server_ids, proofs }] }
     * expired_at = 0 → permanent
     */
    public function ban(array $bans): array
    {
        try {
            $response = $this->client()->post('/public/bans', ['bans' => $bans]);

            if ($response->successful()) {
                return ['success' => true];
            }

            Log::warning('RustApp ban failed', [
                'status' => $response->status(),
                'body'   => $response->body(),
            ]);

            return ['success' => false, 'error' => $response->body()];
        } catch (\Throwable $e) {
            Log::error('RustApp ban exception', ['error' => $e->getMessage()]);
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    /**
     * POST /public/unban?target_steam_id=XXX
     */
    public function unban(string $steamId): array
    {
        try {
            $response = $this->client()->post('/public/unban?target_steam_id=' . urlencode($steamId));

            if ($response->successful()) {
                return ['success' => true];
            }

            Log::warning('RustApp unban failed', [
                'status'   => $response->status(),
                'body'     => $response->body(),
                'steam_id' => $steamId,
            ]);

            return ['success' => false, 'error' => $response->body()];
        } catch (\Throwable $e) {
            Log::error('RustApp unban exception', ['error' => $e->getMessage()]);
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}

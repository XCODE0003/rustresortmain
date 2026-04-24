<?php

namespace App\Services\RustApp;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;

class BansService
{
    private string $baseUrl;

    private string $privateKey;

    public function __construct()
    {
        $this->baseUrl = config('services.rustapp.base_url', 'https://court.rustapp.io');
        $this->privateKey = config('services.rustapp.private_key', '');
    }

    private function client(): PendingRequest
    {
        return Http::withHeaders([
            'X-API-Key' => $this->privateKey,
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->baseUrl($this->baseUrl)->timeout(15);
    }

    /**
     * GET /public/bans
     */
    public function getBans(array $params = []): array
    {
        $defaults = [
            'sort_by' => 'created',
            'page' => 0,
            'include_total' => true,
        ];

        try {
            $response = $this->client()->get('/public/bans', array_merge($defaults, $params));

            if ($response->successful()) {
                $payload = $response->json() ?? ['results' => [], 'page' => 0, 'limit' => 0];
                $payload['success'] = true;

                return $payload;
            }
        } catch (\Throwable) {
            // silent
        }

        return [
            'results' => [],
            'page' => 0,
            'limit' => 0,
            'total' => 0,
            'success' => false,
        ];
    }

    /**
     * POST /public/bans
     */
    public function ban(array $bans): array
    {
        try {
            $response = $this->client()->post('/public/bans', ['bans' => $bans]);

            if ($response->successful()) {
                return ['success' => true];
            }

            return ['success' => false, 'error' => $response->body()];
        } catch (\Throwable $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    /**
     * POST /public/unban?target_steam_id=XXX
     */
    public function unban(string $steamId): array
    {
        try {
            $response = $this->client()->post('/public/unban?target_steam_id='.urlencode($steamId));

            if ($response->successful()) {
                return ['success' => true];
            }

            return ['success' => false, 'error' => $response->body()];
        } catch (\Throwable $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}

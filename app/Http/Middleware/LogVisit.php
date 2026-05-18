<?php

namespace App\Http\Middleware;

use App\Models\Visit;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Response;

class LogVisit
{
    /**
     * Routes (or path prefixes) we don't want to log.
     */
    private const SKIP_PREFIXES = [
        'admin',
        'api',
        '_boost',
        '_ignition',
        'livewire',
        'filament',
        'storage',
        'build',
        'up',
        'auth/steam',
        'login',
        'logout',
        'notifications',
        'locale',
    ];

    /** Logs a visit per (IP, path) once per 5 minutes to avoid SPA noise. */
    private const DEDUPE_TTL = 300;

    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $this->record($request, $response);

        return $response;
    }

    protected function record(Request $request, Response $response): void
    {
        if (! $request->isMethod('GET')) {
            return;
        }

        // Skip non-2xx/3xx responses — noise.
        $status = $response->getStatusCode();
        if ($status >= 400) {
            return;
        }

        $path = ltrim($request->path(), '/');
        if ($path === '') {
            $path = '/';
        }

        foreach (self::SKIP_PREFIXES as $prefix) {
            if ($path === $prefix || str_starts_with($path, $prefix.'/')) {
                return;
            }
        }

        if ($this->looksLikeBot($request->userAgent())) {
            return;
        }

        $ip = $request->ip() ?: 'unknown';
        $cacheKey = 'visit:'.md5($ip.'|'.$path);
        if (Cache::has($cacheKey)) {
            return;
        }
        Cache::put($cacheKey, 1, self::DEDUPE_TTL);

        try {
            Visit::create([
                'ip' => $ip,
                'router' => mb_substr($path, 0, 250),
            ]);
        } catch (\Throwable) {
            // never break the page because logging failed
        }
    }

    protected function looksLikeBot(?string $userAgent): bool
    {
        if (! $userAgent) {
            return true;
        }

        $needles = [
            'bot', 'spider', 'crawl', 'slurp', 'fetcher',
            'curl', 'wget', 'python-requests', 'httpclient',
            'monitor', 'uptime', 'pingdom', 'lighthouse',
        ];

        $lower = strtolower($userAgent);
        foreach ($needles as $n) {
            if (str_contains($lower, $n)) {
                return true;
            }
        }

        return false;
    }
}

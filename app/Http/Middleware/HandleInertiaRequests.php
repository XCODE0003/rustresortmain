<?php

namespace App\Http\Middleware;

use App\Models\SocialLink;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'locale' => session('locale', 'ru'),
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'avatar' => $request->user()->avatar,
                    'balance' => $request->user()->balance,
                    'level' => $request->user()->level ?? 1,
                    'steam_id' => $request->user()->steam_id,
                ] : null,
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'social_links' => SocialLink::where('active', true)->orderBy('sort')->get()
                ->map(fn($s) => ['platform' => $s->platform, 'url' => $s->url])
                ->toArray(),
            'notifications' => $request->user()
                ? $request->user()->notifications()
                    ->latest()
                    ->limit(20)
                    ->get()
                    ->map(fn($n) => [
                        'id'         => $n->id,
                        'type'       => $n->data['type'] ?? 'unknown',
                        'title'      => $n->data['title'] ?? '',
                        'message'    => $n->data['message'] ?? '',
                        'amount'     => $n->data['amount'] ?? null,
                        'action'     => $n->data['action'] ?? null,
                        'read'       => ! is_null($n->read_at),
                        'created_at' => $n->created_at,
                    ])
                : [],
        ];
    }
}

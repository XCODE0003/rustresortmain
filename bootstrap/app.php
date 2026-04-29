<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\SetLocale;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->web(append: [
            SetLocale::class,
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $denyToAdmin = function (\Illuminate\Http\Request $request) {
            if (! $request->is('admin*')) {
                return null;
            }

            \Filament\Notifications\Notification::make()
                ->title('Доступ запрещён')
                ->body('У вашей роли нет прав для этого раздела.')
                ->danger()
                ->persistent()
                ->send();

            return redirect()->to('/admin');
        };

        $exceptions->render(function (\Symfony\Component\HttpKernel\Exception\HttpExceptionInterface $e, \Illuminate\Http\Request $request) use ($denyToAdmin) {
            if ($e->getStatusCode() === 403) {
                return $denyToAdmin($request);
            }

            return null;
        });

        $exceptions->render(function (\Illuminate\Auth\Access\AuthorizationException $e, \Illuminate\Http\Request $request) use ($denyToAdmin) {
            return $denyToAdmin($request);
        });
    })->create();

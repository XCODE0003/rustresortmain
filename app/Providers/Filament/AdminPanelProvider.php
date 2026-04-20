<?php

namespace App\Providers\Filament;

use App\Filament\Pages\MainDashboard;
use Filament\Actions\Action;
use Filament\Forms\Components\Field;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Tables\Columns\Column;
use Filament\Tables\Filters\BaseFilter;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        Field::configureUsing(fn (Field $component): Field => $component->translateLabel());
        Column::configureUsing(fn (Column $component): Column => $component->translateLabel());
        BaseFilter::configureUsing(fn (BaseFilter $component): BaseFilter => $component->translateLabel());
        Action::configureUsing(fn (Action $component): Action => $component->translateLabel());

        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->bootUsing(function (): void {
                app()->setLocale('ru');
            })
            ->login()
            ->colors([
                'primary' => Color::Orange,
                'danger' => Color::Red,
                'info' => Color::Blue,
                'success' => Color::Green,
                'warning' => Color::Yellow,
            ])
            ->darkMode(true)
            ->brandName('Rust Resort Admin')
            ->favicon('/favicon.ico')
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                MainDashboard::class,
            ])
            ->widgets([])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->authGuard('web')
            ->databaseNotifications()
            ->navigationGroups([
                'Магазин',
                'Финансы',
                'Игровые серверы',
                'Контент',
                'Поддержка',
                'Пользователи',
                'Настройки',
            ]);
    }
}

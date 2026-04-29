<?php

namespace App\Filament\Pages;

use App\Models\CasesItem;
use App\Models\ShopItem;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;

class UpdateItemsPage extends Page implements HasActions, HasForms
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    use InteractsWithActions;
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedArrowPath;

    protected static ?string $navigationLabel = 'Синхронизация предметов';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 95;

    protected string $view = 'filament.pages.update-items';

    public static function canAccess(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public function getStats(): array
    {
        return [
            'shop_items' => ShopItem::count(),
            'shop_active' => ShopItem::where('status', 1)->count(),
            'cases_items' => CasesItem::count(),
            'cases_active' => CasesItem::where('status', 1)->count(),
        ];
    }

    public function clearItemsCacheAction(): Action
    {
        return Action::make('clearItemsCache')
            ->label('Сбросить кэш предметов')
            ->icon(Heroicon::OutlinedArrowPath)
            ->color('gray')
            ->requiresConfirmation()
            ->action(function (): void {
                Cache::tags(['items', 'shop_items', 'cases_items'])->flush();
                Cache::forget('shop_items');
                Cache::forget('cases_items');

                Notification::make()
                    ->title('Кэш предметов сброшен')
                    ->success()
                    ->send();
            });
    }

    public function syncItemsAction(): Action
    {
        return Action::make('syncItems')
            ->label('Запустить синхронизацию')
            ->icon(Heroicon::OutlinedCloudArrowDown)
            ->color('primary')
            ->requiresConfirmation()
            ->modalDescription('Запустить синхронизацию предметов с внешним API. Может занять несколько минут.')
            ->action(function (): void {
                Notification::make()
                    ->title('Синхронизация запущена')
                    ->body('Задача поставлена в очередь. Подключите свой воркер для реальной выгрузки.')
                    ->info()
                    ->send();
            });
    }
}

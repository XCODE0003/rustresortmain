<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
use BackedEnum;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;

class SteamSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static ?string $navigationLabel = 'Настройки Steam';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 2;

    protected string $view = 'filament.pages.settings.steam-settings';

    public ?array $data = [];

    public static function canAccess(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    public function mount(): void
    {
        $this->form->fill($this->getSettingsData());
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Steam API')
                    ->description('Настройки интеграции со Steam')
                    ->schema([
                        TextInput::make('steam_api_key')
                            ->label('Ключ веб-API Steam')
                            ->helperText('Получить можно на https://steamcommunity.com/dev/apikey')
                            ->maxLength(255)
                            ->required(),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();

        return [
            'steam_api_key' => $settings['steam_api_key'] ?? '',
        ];
    }

    public function save(): void
    {
        $data = $this->form->getState();

        foreach ($data as $key => $value) {
            Option::updateOrCreate(
                ['key' => $key],
                ['value' => $value ?? '']
            );
        }

        Cache::forget('options');

        Notification::make()
            ->title('Настройки Steam сохранены')
            ->success()
            ->send();
    }

    protected function getFormActions(): array
    {
        return [
            \Filament\Actions\Action::make('save')
                ->label('Сохранить')
                ->submit('save'),
        ];
    }
}

<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
use BackedEnum;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;

class WaxpeerApiSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedKey;

    protected static ?string $navigationLabel = 'Waxpeer API';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 9;

    protected string $view = 'filament.pages.settings.options-form';

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
                Section::make('Waxpeer API')
                    ->description('Интеграция с маркетплейсом Waxpeer')
                    ->schema([
                        Toggle::make('waxpeer_enabled')->label('Включить'),
                        TextInput::make('waxpeer_api_key')->label('API ключ')->password()->revealable(),
                        TextInput::make('waxpeer_partner')->label('Partner ID'),
                        TextInput::make('waxpeer_token')->label('Token')->password()->revealable(),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();

        return [
            'waxpeer_enabled' => (bool) ($settings['waxpeer_enabled'] ?? false),
            'waxpeer_api_key' => $settings['waxpeer_api_key'] ?? '',
            'waxpeer_partner' => $settings['waxpeer_partner'] ?? '',
            'waxpeer_token' => $settings['waxpeer_token'] ?? '',
        ];
    }

    public function save(): void
    {
        $data = $this->form->getState();

        foreach ($data as $key => $value) {
            Option::updateOrCreate(
                ['key' => $key],
                ['value' => is_bool($value) ? ($value ? '1' : '0') : ($value ?? '')]
            );
        }

        Cache::forget('options');

        Notification::make()->title('Waxpeer API сохранён')->success()->send();
    }

    protected function getFormActions(): array
    {
        return [
            \Filament\Actions\Action::make('save')->label('Сохранить')->submit('save'),
        ];
    }
}

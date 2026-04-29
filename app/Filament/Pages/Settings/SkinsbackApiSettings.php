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

class SkinsbackApiSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedKey;

    protected static ?string $navigationLabel = 'Skinsback API';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 10;

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
                Section::make('Skinsback API')
                    ->description('Интеграция со Skinsback')
                    ->schema([
                        Toggle::make('skinsback_enabled')->label('Включить'),
                        TextInput::make('skinsback_shop_id')->label('Shop ID'),
                        TextInput::make('skinsback_secret')->label('Secret')->password()->revealable(),
                        TextInput::make('skinsback_webhook_url')->label('Webhook URL'),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();

        return [
            'skinsback_enabled' => (bool) ($settings['skinsback_enabled'] ?? false),
            'skinsback_shop_id' => $settings['skinsback_shop_id'] ?? '',
            'skinsback_secret' => $settings['skinsback_secret'] ?? '',
            'skinsback_webhook_url' => $settings['skinsback_webhook_url'] ?? '',
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

        Notification::make()->title('Skinsback API сохранён')->success()->send();
    }

    protected function getFormActions(): array
    {
        return [
            \Filament\Actions\Action::make('save')->label('Сохранить')->submit('save'),
        ];
    }
}

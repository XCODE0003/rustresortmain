<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;
use BackedEnum;

class AuthSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedLockClosed;
    
    protected static ?string $navigationLabel = 'Настройки авторизации';
    
    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';
    
    protected static ?int $navigationSort = 7;
    
    protected string $view = 'filament.pages.settings.auth-settings';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill($this->getSettingsData());
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Настройки авторизации')
                    ->description('Параметры входа и регистрации')
                    ->schema([
                        Toggle::make('ga_users_status')
                            ->label('Включить двухфакторную аутентификацию (2FA)')
                            ->helperText('Пользователи смогут включить Google Authenticator')
                            ->inline(false),
                        TextInput::make('ga_key')
                            ->label('Ключ для Google Authenticator')
                            ->helperText('Секретный ключ для генерации QR-кодов 2FA')
                            ->maxLength(255)
                            ->default('np57kf8rpwp3e4w9qwm8'),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();
        
        return [
            'ga_users_status' => ($settings['ga_users_status'] ?? '0') === '1',
            'ga_key' => $settings['ga_key'] ?? 'np57kf8rpwp3e4w9qwm8',
        ];
    }

    public function save(): void
    {
        $data = $this->form->getState();

        foreach ($data as $key => $value) {
            if (is_bool($value)) {
                $value = $value ? '1' : '0';
            }
            
            Option::updateOrCreate(
                ['key' => $key],
                ['value' => $value ?? '']
            );
        }

        Cache::forget('options');

        Notification::make()
            ->title('Настройки авторизации сохранены')
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

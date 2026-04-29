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

class SmtpSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedEnvelope;

    protected static ?string $navigationLabel = 'Настройки SMTP';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 5;

    protected string $view = 'filament.pages.settings.smtp-settings';

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
                Section::make('Настройки SMTP')
                    ->description('Конфигурация почтового сервера')
                    ->schema([
                        TextInput::make('smtp_host')
                            ->label('Имя хоста SMTP')
                            ->placeholder('smtp.example.com')
                            ->maxLength(255),
                        TextInput::make('smtp_user')
                            ->label('Имя пользователя SMTP')
                            ->placeholder('user@example.com')
                            ->maxLength(255),
                        TextInput::make('smtp_password')
                            ->label('Пароль SMTP')
                            ->password()
                            ->maxLength(255),
                        TextInput::make('smtp_port')
                            ->label('Порт SMTP')
                            ->numeric()
                            ->default('25')
                            ->maxLength(10),
                        TextInput::make('smtp_from')
                            ->label('Email отправителя')
                            ->email()
                            ->placeholder('noreply@example.com')
                            ->maxLength(255),
                        TextInput::make('smtp_name')
                            ->label('Имя отправителя')
                            ->placeholder('Rust Resort')
                            ->maxLength(255),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();

        return [
            'smtp_host' => $settings['smtp_host'] ?? '',
            'smtp_user' => $settings['smtp_user'] ?? '',
            'smtp_password' => $settings['smtp_password'] ?? '',
            'smtp_port' => $settings['smtp_port'] ?? '25',
            'smtp_from' => $settings['smtp_from'] ?? '',
            'smtp_name' => $settings['smtp_name'] ?? '',
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
            ->title('Настройки SMTP сохранены')
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

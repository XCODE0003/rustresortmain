<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;
use BackedEnum;

class RecaptchaSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedShieldCheck;
    
    protected static ?string $navigationLabel = 'Google reCAPTCHA';
    
    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';
    
    protected static ?int $navigationSort = 6;
    
    protected string $view = 'filament.pages.settings.recaptcha-settings';

    public ?array $data = [];

    public static function canAccess(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public function mount(): void
    {
        $this->form->fill($this->getSettingsData());
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Google reCAPTCHA')
                    ->description('Настройки защиты от ботов')
                    ->schema([
                        TextInput::make('recaptcha_sitekey')
                            ->label('Ключ сайта (Site Key)')
                            ->helperText('Получить можно на https://www.google.com/recaptcha/admin')
                            ->maxLength(255),
                        TextInput::make('recaptcha_secret')
                            ->label('Секретный ключ (Secret Key)')
                            ->password()
                            ->maxLength(255),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();
        
        return [
            'recaptcha_sitekey' => $settings['recaptcha_sitekey'] ?? '',
            'recaptcha_secret' => $settings['recaptcha_secret'] ?? '',
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
            ->title('Настройки reCAPTCHA сохранены')
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

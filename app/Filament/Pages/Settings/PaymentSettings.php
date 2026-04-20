<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;
use BackedEnum;

class PaymentSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCreditCard;
    
    protected static ?string $navigationLabel = 'Платежные системы';
    
    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';
    
    protected static ?int $navigationSort = 3;
    
    protected string $view = 'filament.pages.settings.payment-settings';

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
                Tabs::make('Payment Systems')
                    ->tabs([
                        Tab::make('Enot.io')
                            ->schema([
                                TextInput::make('enot_merchant_id')
                                    ->label('Merchant ID')
                                    ->maxLength(255),
                                TextInput::make('enot_secret_word')
                                    ->label('Secret Word')
                                    ->maxLength(255),
                                TextInput::make('enot_secret_word_2')
                                    ->label('Secret Word 2')
                                    ->maxLength(255),
                            ]),
                        Tab::make('Cent.app')
                            ->schema([
                                TextInput::make('cent_authorization')
                                    ->label('Authorization Key')
                                    ->maxLength(255),
                                TextInput::make('cent_shop_id')
                                    ->label('Shop ID')
                                    ->maxLength(255),
                            ]),
                        Tab::make('Qiwi')
                            ->schema([
                                TextInput::make('qiwi_secret_key')
                                    ->label('Secret Key')
                                    ->maxLength(255),
                                TextInput::make('qiwi_public_key')
                                    ->label('Public Key')
                                    ->maxLength(255),
                                TextInput::make('qiwi_phone')
                                    ->label('Номер телефона')
                                    ->tel()
                                    ->maxLength(20),
                            ]),
                        Tab::make('Freekassa')
                            ->schema([
                                TextInput::make('freekassa_merchant_id')
                                    ->label('Merchant ID')
                                    ->maxLength(255),
                                TextInput::make('freekassa_secret_word')
                                    ->label('Secret Word')
                                    ->maxLength(255),
                                TextInput::make('freekassa_secret_word_2')
                                    ->label('Secret Word 2')
                                    ->maxLength(255),
                            ]),
                        Tab::make('Payok')
                            ->schema([
                                TextInput::make('payok_merchant_id')
                                    ->label('Merchant ID')
                                    ->maxLength(255),
                                TextInput::make('payok_secret_key')
                                    ->label('Secret Key')
                                    ->maxLength(255),
                                TextInput::make('payok_api_id')
                                    ->label('API ID')
                                    ->maxLength(255),
                                TextInput::make('payok_api_key')
                                    ->label('API Key')
                                    ->maxLength(255),
                            ]),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();
        
        return [
            'enot_merchant_id' => $settings['enot_merchant_id'] ?? '',
            'enot_secret_word' => $settings['enot_secret_word'] ?? '',
            'enot_secret_word_2' => $settings['enot_secret_word_2'] ?? '',
            'cent_authorization' => $settings['cent_authorization'] ?? '',
            'cent_shop_id' => $settings['cent_shop_id'] ?? '',
            'qiwi_secret_key' => $settings['qiwi_secret_key'] ?? '',
            'qiwi_public_key' => $settings['qiwi_public_key'] ?? '',
            'qiwi_phone' => $settings['qiwi_phone'] ?? '',
            'freekassa_merchant_id' => $settings['freekassa_merchant_id'] ?? '',
            'freekassa_secret_word' => $settings['freekassa_secret_word'] ?? '',
            'freekassa_secret_word_2' => $settings['freekassa_secret_word_2'] ?? '',
            'payok_merchant_id' => $settings['payok_merchant_id'] ?? '',
            'payok_secret_key' => $settings['payok_secret_key'] ?? '',
            'payok_api_id' => $settings['payok_api_id'] ?? '',
            'payok_api_key' => $settings['payok_api_key'] ?? '',
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
            ->title('Настройки платежных систем сохранены')
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

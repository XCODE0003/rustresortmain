<?php

namespace App\Filament\Pages\Settings;

use App\Filament\Support\HasPermissionGate;
use App\Models\Option;
use App\Models\Server;
use BackedEnum;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;

class SettingsHub extends Page implements HasForms
{
    use HasPermissionGate;
    use InteractsWithForms;

    protected static ?string $permissionKey = 'settings.general|settings.seo|settings.content|settings.communications|settings.payments|settings.api|settings.auth|settings.currency';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static ?string $navigationLabel = 'Настройки';

    protected static ?string $title = 'Настройки';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 1;

    protected string $view = 'filament.pages.settings.options-form';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill($this->getSettingsData());
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('settings')
                    ->persistTabInQueryString()
                    ->tabs([
                        $this->siteTab(),
                        $this->seoTab(),
                        $this->contentTab(),
                        $this->commsTab(),
                        $this->paymentsTab(),
                        $this->apiTab(),
                        $this->authTab(),
                    ]),
            ])
            ->statePath('data');
    }

    protected function siteTab(): Tab
    {
        return Tab::make('Сайт')
            ->icon(Heroicon::OutlinedGlobeAlt)
            ->schema([
                Section::make('Главная страница')
                    ->columns(2)
                    ->schema([
                        Tabs::make('main_languages')->tabs([
                            Tab::make('🇷🇺 Русский')->schema([
                                TextInput::make('main_title_ru')->label('Заголовок'),
                                TextInput::make('main_welcome_ru')->label('Подзаголовок'),
                                Textarea::make('main_description_ru')->label('Описание')->rows(3)->columnSpanFull(),
                            ]),
                            Tab::make('🇬🇧 English')->schema([
                                TextInput::make('main_title_en')->label('Title'),
                                TextInput::make('main_welcome_en')->label('Subtitle'),
                                Textarea::make('main_description_en')->label('Description')->rows(3)->columnSpanFull(),
                            ]),
                        ])->columnSpanFull(),
                    ]),
                Section::make('Прочее')
                    ->columns(2)
                    ->schema([
                        TextInput::make('learn_more_link')->label('Ссылка LEARN MORE')->url()->default('#'),
                    ]),
                Section::make('Языки сайта')
                    ->columns(2)
                    ->schema([
                        TextInput::make('langs_enabled')
                            ->label('Включённые языки')
                            ->helperText('Через запятую: ru,en,de,fr,it,es,uk')
                            ->columnSpanFull(),
                        TextInput::make('langs_default')->label('Язык по умолчанию')->default('ru'),
                    ]),
            ]);
    }

    protected function seoTab(): Tab
    {
        return Tab::make('SEO & Аналитика')
            ->icon(Heroicon::OutlinedMagnifyingGlass)
            ->schema([
                Section::make('robots.txt / sitemap.xml')
                    ->schema([
                        Textarea::make('robots')->label('robots.txt')->rows(8)->columnSpanFull(),
                        Textarea::make('sitemap')->label('sitemap.xml')->rows(8)->columnSpanFull(),
                    ]),
                Section::make('Аналитика и трекинг')
                    ->schema([
                        Textarea::make('analytics_head')->label('Скрипты в <head>')->rows(6)->columnSpanFull(),
                        Textarea::make('analytics_body')->label('Скрипты после <body>')->rows(6)->columnSpanFull(),
                    ]),
                Section::make('Google reCAPTCHA')
                    ->columns(2)
                    ->schema([
                        TextInput::make('recaptcha_sitekey')->label('Site Key'),
                        TextInput::make('recaptcha_secret')->label('Secret Key'),
                    ]),
            ]);
    }

    protected function contentTab(): Tab
    {
        return Tab::make('Контент')
            ->icon(Heroicon::OutlinedPaintBrush)
            ->schema([
                Section::make('Падающий снег')
                    ->columns(2)
                    ->schema([
                        Toggle::make('falling_snow_enabled')->label('Включить'),
                        TextInput::make('falling_snow_count')->label('Количество снежинок')->numeric()->default(50),
                    ]),
                Section::make('Форум')
                    ->columns(2)
                    ->schema([
                        Toggle::make('forum_enabled')->label('Форум активен'),
                        TextInput::make('forum_url')->label('URL форума')->url()->columnSpanFull(),
                    ]),
                Section::make('Раздел «Скачать»')
                    ->schema([
                        TextInput::make('download_steam_url')->label('Steam ссылка')->url()->columnSpanFull(),
                        TextInput::make('download_torrent_url')->label('Torrent ссылка')->url()->columnSpanFull(),
                        Textarea::make('download_description')->label('Описание')->rows(4)->columnSpanFull(),
                    ]),
                Section::make('О нас')
                    ->schema([
                        TextInput::make('about_title')->label('Заголовок')->columnSpanFull(),
                        Textarea::make('about_content')->label('Содержимое')->rows(10)->columnSpanFull(),
                    ]),
            ]);
    }

    protected function commsTab(): Tab
    {
        return Tab::make('Связь')
            ->icon(Heroicon::OutlinedEnvelope)
            ->schema([
                Section::make('SMTP')
                    ->columns(2)
                    ->schema([
                        TextInput::make('smtp_host')->label('Host'),
                        TextInput::make('smtp_port')->label('Port')->default('25'),
                        TextInput::make('smtp_user')->label('Логин'),
                        TextInput::make('smtp_password')->label('Пароль')->password()->revealable(),
                        TextInput::make('smtp_from')->label('From email'),
                        TextInput::make('smtp_name')->label('From name'),
                    ]),
                Section::make('SMS')
                    ->columns(2)
                    ->schema([
                        Toggle::make('sms_enabled')->label('SMS уведомления включены'),
                        TextInput::make('sms_provider')->label('Провайдер'),
                        TextInput::make('sms_login')->label('Логин'),
                        TextInput::make('sms_password')->label('Пароль/токен')->password()->revealable(),
                        TextInput::make('sms_sender')->label('Отправитель'),
                    ]),
                Section::make('Социальные сети')
                    ->columns(2)
                    ->schema([
                        TextInput::make('twitter_link')->label('Twitter')->default('#'),
                        TextInput::make('vk_link')->label('VK')->default('#'),
                        TextInput::make('discord_link')->label('Discord')->default('#'),
                        TextInput::make('steam_link')->label('Steam')->default('#'),
                        TextInput::make('youtube_link')->label('YouTube')->default('#'),
                    ]),
            ]);
    }

    protected function paymentsTab(): Tab
    {
        $servers = Server::orderBy('sort')->get(['id', 'name']);

        $currencyServerSections = [];
        foreach ($servers as $server) {
            $currencyServerSections[] = Section::make($server->name ?: 'Сервер #'.$server->id)
                ->collapsible()
                ->collapsed()
                ->columns(3)
                ->schema([
                    TextInput::make("donat_rate_{$server->id}")->label('Курс ₽/единица')->numeric()->step('0.01'),
                    TextInput::make("donat_min_{$server->id}")->label('Мин. донат')->numeric()->step('0.01'),
                    TextInput::make("donat_max_{$server->id}")->label('Макс. донат')->numeric()->step('0.01'),
                ]);
        }

        return Tab::make('Платежи')
            ->icon(Heroicon::OutlinedBanknotes)
            ->schema([
                Tabs::make('payments_inner')
                    ->columnSpanFull()
                    ->tabs([
                        Tab::make('Платёжные системы')->schema([
                            Tabs::make('gateways')->columnSpanFull()->tabs([
                                Tab::make('Enot.io')->schema([
                                    TextInput::make('enot_merchant_id')->label('Merchant ID'),
                                    TextInput::make('enot_secret_word')->label('Secret Word')->password()->revealable(),
                                    TextInput::make('enot_secret_word_2')->label('Secret Word 2')->password()->revealable(),
                                ]),
                                Tab::make('Cent.app')->schema([
                                    TextInput::make('cent_authorization')->label('Authorization Key')->password()->revealable(),
                                    TextInput::make('cent_shop_id')->label('Shop ID'),
                                ]),
                                Tab::make('Qiwi')->schema([
                                    TextInput::make('qiwi_secret_key')->label('Secret Key')->password()->revealable(),
                                    TextInput::make('qiwi_public_key')->label('Public Key'),
                                    TextInput::make('qiwi_phone')->label('Телефон')->tel(),
                                ]),
                                Tab::make('Freekassa')->schema([
                                    TextInput::make('freekassa_merchant_id')->label('Merchant ID'),
                                    TextInput::make('freekassa_secret_word')->label('Secret Word')->password()->revealable(),
                                    TextInput::make('freekassa_secret_word_2')->label('Secret Word 2')->password()->revealable(),
                                ]),
                                Tab::make('Payok')->schema([
                                    TextInput::make('payok_merchant_id')->label('Merchant ID'),
                                    TextInput::make('payok_secret_key')->label('Secret Key')->password()->revealable(),
                                    TextInput::make('payok_api_id')->label('API ID'),
                                    TextInput::make('payok_api_key')->label('API Key')->password()->revealable(),
                                ]),
                            ]),
                        ]),

                        Tab::make('Курс валют')
                            ->schema(
                                $currencyServerSections === []
                                    ? [Section::make('Серверы не найдены')->schema([])]
                                    : $currencyServerSections
                            ),

                        Tab::make('Бонусы')->schema([
                            Section::make('Общие')->columns(2)->schema([
                                Toggle::make('bonuses_enabled')->label('Бонусная программа активна'),
                                TextInput::make('bonuses_default_percent')->label('Базовый % бонуса')->numeric(),
                            ]),
                            Section::make('Понедельник')->columns(2)->schema([
                                Toggle::make('bonuses_monday_enabled')->label('Активен'),
                                TextInput::make('bonuses_monday_percent')->label('% бонуса')->numeric(),
                                Textarea::make('bonuses_monday_description')->label('Описание')->columnSpanFull(),
                            ]),
                            Section::make('Четверг')->columns(2)->schema([
                                Toggle::make('bonuses_thursday_enabled')->label('Активен'),
                                TextInput::make('bonuses_thursday_percent')->label('% бонуса')->numeric(),
                                Textarea::make('bonuses_thursday_description')->label('Описание')->columnSpanFull(),
                            ]),
                        ]),
                    ]),
            ]);
    }

    protected function apiTab(): Tab
    {
        return Tab::make('API & Интеграции')
            ->icon(Heroicon::OutlinedCodeBracket)
            ->schema([
                Section::make('Game REST API')
                    ->schema([
                        TextInput::make('game_api_key')->label('Ключ API')->password()->revealable(),
                    ]),
                Section::make('Steam API')
                    ->schema([
                        TextInput::make('steam_api_key')->label('Steam API Key')->password()->revealable(),
                    ]),
                Section::make('Waxpeer')
                    ->columns(2)
                    ->schema([
                        Toggle::make('waxpeer_enabled')->label('Включить'),
                        TextInput::make('waxpeer_partner')->label('Partner ID'),
                        TextInput::make('waxpeer_api_key')->label('API ключ')->password()->revealable(),
                        TextInput::make('waxpeer_token')->label('Token')->password()->revealable(),
                    ]),
                Section::make('Skinsback')
                    ->columns(2)
                    ->schema([
                        Toggle::make('skinsback_enabled')->label('Включить'),
                        TextInput::make('skinsback_shop_id')->label('Shop ID'),
                        TextInput::make('skinsback_secret')->label('Secret')->password()->revealable(),
                        TextInput::make('skinsback_webhook_url')->label('Webhook URL')->columnSpanFull(),
                    ]),
            ]);
    }

    protected function authTab(): Tab
    {
        return Tab::make('Авторизация')
            ->icon(Heroicon::OutlinedShieldCheck)
            ->schema([
                Section::make('Двухфакторная авторизация (Google Authenticator)')
                    ->columns(2)
                    ->schema([
                        Toggle::make('ga_users_status')->label('Включить 2FA для пользователей'),
                        TextInput::make('ga_key')->label('Ключ приложения')->default('np57kf8rpwp3e4w9qwm8'),
                    ]),
            ]);
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();

        $stringKeys = [
            'main_title_ru', 'main_welcome_ru', 'main_description_ru',
            'main_title_en', 'main_welcome_en', 'main_description_en',
            'learn_more_link', 'langs_enabled', 'langs_default',
            'robots', 'sitemap', 'analytics_head', 'analytics_body',
            'recaptcha_sitekey', 'recaptcha_secret',
            'falling_snow_count', 'forum_url',
            'download_steam_url', 'download_torrent_url', 'download_description',
            'about_title', 'about_content',
            'smtp_host', 'smtp_port', 'smtp_user', 'smtp_password', 'smtp_from', 'smtp_name',
            'sms_provider', 'sms_login', 'sms_password', 'sms_sender',
            'twitter_link', 'vk_link', 'discord_link', 'steam_link', 'youtube_link',
            'enot_merchant_id', 'enot_secret_word', 'enot_secret_word_2',
            'cent_authorization', 'cent_shop_id',
            'qiwi_secret_key', 'qiwi_public_key', 'qiwi_phone',
            'freekassa_merchant_id', 'freekassa_secret_word', 'freekassa_secret_word_2',
            'payok_merchant_id', 'payok_secret_key', 'payok_api_id', 'payok_api_key',
            'bonuses_default_percent',
            'bonuses_monday_percent', 'bonuses_monday_description',
            'bonuses_thursday_percent', 'bonuses_thursday_description',
            'game_api_key', 'steam_api_key',
            'waxpeer_partner', 'waxpeer_api_key', 'waxpeer_token',
            'skinsback_shop_id', 'skinsback_secret', 'skinsback_webhook_url',
            'ga_key',
        ];

        $boolKeys = [
            'falling_snow_enabled',
            'forum_enabled',
            'sms_enabled',
            'bonuses_enabled', 'bonuses_monday_enabled', 'bonuses_thursday_enabled',
            'waxpeer_enabled', 'skinsback_enabled',
            'ga_users_status',
        ];

        $data = [];
        foreach ($stringKeys as $key) {
            $data[$key] = $settings[$key] ?? '';
        }
        foreach ($boolKeys as $key) {
            $data[$key] = ($settings[$key] ?? '0') === '1';
        }

        $data['learn_more_link'] = $settings['learn_more_link'] ?? '#';
        $data['langs_default'] = $settings['langs_default'] ?? 'ru';
        foreach (['twitter_link', 'vk_link', 'discord_link', 'steam_link', 'youtube_link'] as $k) {
            $data[$k] = $settings[$k] ?? '#';
        }

        foreach (Server::pluck('id') as $id) {
            foreach (['donat_rate_', 'donat_min_', 'donat_max_'] as $prefix) {
                $key = $prefix.$id;
                $data[$key] = $settings[$key] ?? '';
            }
        }

        return $data;
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

        Notification::make()->title('Настройки сохранены')->success()->send();
    }

    protected function getFormActions(): array
    {
        return [
            \Filament\Actions\Action::make('save')->label('Сохранить')->submit('save'),
        ];
    }
}

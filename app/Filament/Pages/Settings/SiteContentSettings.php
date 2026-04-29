<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
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

class SiteContentSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedDocumentText;

    protected static ?string $navigationLabel = 'Сайт: контент и SEO';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 2;

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
                Tabs::make('Группы')
                    ->tabs([
                        Tab::make('SEO')->schema([
                            Textarea::make('robots')->label('robots.txt')->rows(8)->columnSpanFull(),
                            Textarea::make('sitemap')->label('sitemap.xml')->rows(8)->columnSpanFull(),
                        ]),

                        Tab::make('Аналитика')->schema([
                            Textarea::make('analytics_head')->label('Скрипты в <head>')->rows(6)->columnSpanFull(),
                            Textarea::make('analytics_body')->label('Скрипты после <body>')->rows(6)->columnSpanFull(),
                        ]),

                        Tab::make('Снег')->schema([
                            Toggle::make('falling_snow_enabled')->label('Падающий снег включён'),
                            TextInput::make('falling_snow_count')->label('Количество снежинок')->numeric()->default(50),
                        ]),

                        Tab::make('Форум')->schema([
                            Toggle::make('forum_enabled')->label('Форум включён'),
                            TextInput::make('forum_url')->label('URL форума')->url()->columnSpanFull(),
                        ]),

                        Tab::make('Скачать')->schema([
                            TextInput::make('download_steam_url')->label('Steam ссылка')->url()->columnSpanFull(),
                            TextInput::make('download_torrent_url')->label('Torrent ссылка')->url()->columnSpanFull(),
                            Textarea::make('download_description')->label('Описание раздела')->rows(4)->columnSpanFull(),
                        ]),

                        Tab::make('О нас')->schema([
                            TextInput::make('about_title')->label('Заголовок')->columnSpanFull(),
                            Textarea::make('about_content')->label('Содержимое')->rows(10)->columnSpanFull(),
                        ]),

                        Tab::make('SMS')->schema([
                            Toggle::make('sms_enabled')->label('SMS уведомления включены'),
                            TextInput::make('sms_provider')->label('Провайдер'),
                            TextInput::make('sms_login')->label('Логин'),
                            TextInput::make('sms_password')->label('Пароль/токен')->password()->revealable(),
                            TextInput::make('sms_sender')->label('Отправитель'),
                        ]),

                        Tab::make('Бонусы')->schema([
                            Section::make('Общие')->schema([
                                Toggle::make('bonuses_enabled')->label('Бонусная программа активна'),
                                TextInput::make('bonuses_default_percent')->label('Базовый % бонуса')->numeric(),
                            ])->columns(2),
                            Section::make('Понедельник')->schema([
                                Toggle::make('bonuses_monday_enabled')->label('Активен'),
                                TextInput::make('bonuses_monday_percent')->label('% бонуса')->numeric(),
                                Textarea::make('bonuses_monday_description')->label('Описание')->columnSpanFull(),
                            ])->columns(2),
                            Section::make('Четверг')->schema([
                                Toggle::make('bonuses_thursday_enabled')->label('Активен'),
                                TextInput::make('bonuses_thursday_percent')->label('% бонуса')->numeric(),
                                Textarea::make('bonuses_thursday_description')->label('Описание')->columnSpanFull(),
                            ])->columns(2),
                        ]),

                        Tab::make('Языки')->schema([
                            TextInput::make('langs_enabled')->label('Список включённых языков (через запятую)')
                                ->helperText('Например: ru,en,de,fr,it,es,uk')
                                ->columnSpanFull(),
                            TextInput::make('langs_default')->label('Язык по умолчанию')->default('ru'),
                        ]),
                    ])
                    ->persistTabInQueryString(),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();

        $keys = [
            'robots', 'sitemap',
            'analytics_head', 'analytics_body',
            'falling_snow_enabled', 'falling_snow_count',
            'forum_enabled', 'forum_url',
            'download_steam_url', 'download_torrent_url', 'download_description',
            'about_title', 'about_content',
            'sms_enabled', 'sms_provider', 'sms_login', 'sms_password', 'sms_sender',
            'bonuses_enabled', 'bonuses_default_percent',
            'bonuses_monday_enabled', 'bonuses_monday_percent', 'bonuses_monday_description',
            'bonuses_thursday_enabled', 'bonuses_thursday_percent', 'bonuses_thursday_description',
            'langs_enabled', 'langs_default',
        ];

        $data = [];
        foreach ($keys as $key) {
            $value = $settings[$key] ?? '';
            if (str_ends_with($key, '_enabled')) {
                $data[$key] = (bool) $value;
            } else {
                $data[$key] = $value;
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

        Notification::make()->title('Настройки сайта сохранены')->success()->send();
    }

    protected function getFormActions(): array
    {
        return [
            \Filament\Actions\Action::make('save')->label('Сохранить')->submit('save'),
        ];
    }
}

<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;
use BackedEnum;

class GeneralSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;
    
    protected static ?string $navigationLabel = 'Общие настройки';
    
    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';
    
    protected static ?int $navigationSort = 1;
    
    protected string $view = 'filament.pages.settings.general-settings';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill($this->getSettingsData());
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Languages')
                    ->tabs([
                        Tab::make('Русский')
                            ->schema([
                                TextInput::make('main_title_ru')
                                    ->label('Заголовок на главной')
                                    ->maxLength(255),
                                TextInput::make('main_welcome_ru')
                                    ->label('Подзаголовок на главной')
                                    ->maxLength(255),
                                Textarea::make('main_description_ru')
                                    ->label('Описание на главной')
                                    ->rows(3),
                            ]),
                        Tab::make('English')
                            ->schema([
                                TextInput::make('main_title_en')
                                    ->label('Main Title')
                                    ->maxLength(255),
                                TextInput::make('main_welcome_en')
                                    ->label('Main Subtitle')
                                    ->maxLength(255),
                                Textarea::make('main_description_en')
                                    ->label('Main Description')
                                    ->rows(3),
                            ]),
                    ]),

                Section::make('Дополнительные настройки')
                    ->schema([
                        TextInput::make('learn_more_link')
                            ->label('Ссылка LEARN MORE')
                            ->url()
                            ->default('#'),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();
        
        return [
            'main_title_ru' => $settings['main_title_ru'] ?? '',
            'main_welcome_ru' => $settings['main_welcome_ru'] ?? '',
            'main_description_ru' => $settings['main_description_ru'] ?? '',
            'main_title_en' => $settings['main_title_en'] ?? '',
            'main_welcome_en' => $settings['main_welcome_en'] ?? '',
            'main_description_en' => $settings['main_description_en'] ?? '',
            'learn_more_link' => $settings['learn_more_link'] ?? '#',
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
            ->title('Настройки сохранены')
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

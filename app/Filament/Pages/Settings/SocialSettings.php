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

class SocialSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedShare;
    
    protected static ?string $navigationLabel = 'Социальные сети';
    
    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';
    
    protected static ?int $navigationSort = 4;
    
    protected string $view = 'filament.pages.settings.social-settings';

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
                Section::make('Ссылки на социальные сети')
                    ->description('Укажите ссылки на ваши социальные сети')
                    ->schema([
                        TextInput::make('twitter_link')
                            ->label('Twitter')
                            ->url()
                            ->placeholder('https://twitter.com/username')
                            ->maxLength(255),
                        TextInput::make('vk_link')
                            ->label('VKontakte')
                            ->url()
                            ->placeholder('https://vk.com/username')
                            ->maxLength(255),
                        TextInput::make('discord_link')
                            ->label('Discord')
                            ->url()
                            ->placeholder('https://discord.gg/invite')
                            ->maxLength(255),
                        TextInput::make('steam_link')
                            ->label('Steam')
                            ->url()
                            ->placeholder('https://steamcommunity.com/groups/name')
                            ->maxLength(255),
                        TextInput::make('youtube_link')
                            ->label('YouTube')
                            ->url()
                            ->placeholder('https://youtube.com/@channel')
                            ->maxLength(255),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();
        
        return [
            'twitter_link' => $settings['twitter_link'] ?? '#',
            'vk_link' => $settings['vk_link'] ?? '#',
            'discord_link' => $settings['discord_link'] ?? '#',
            'steam_link' => $settings['steam_link'] ?? '#',
            'youtube_link' => $settings['youtube_link'] ?? '#',
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
            ->title('Настройки социальных сетей сохранены')
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

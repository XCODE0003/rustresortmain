<?php

namespace App\Filament\Resources\SocialLinks\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SocialLinkForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Select::make('platform')
                ->label('Платформа')
                ->options([
                    'youtube' => 'YouTube',
                    'discord' => 'Discord',
                    'vk' => 'ВКонтакте',
                    'telegram' => 'Telegram',
                    'twitch' => 'Twitch',
                    'instagram' => 'Instagram',
                ])
                ->required(),

            TextInput::make('url')
                ->label('URL')
                ->url()
                ->required(),

            TextInput::make('sort')
                ->label('Порядок')
                ->numeric()
                ->default(0),

            Toggle::make('active')
                ->label('Активна')
                ->default(true),
        ]);
    }
}

<?php

namespace App\Filament\Resources\Streams\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class StreamForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Стрим')
                ->schema([
                    TextInput::make('title')->label('Название')->required(),
                    TextInput::make('url')->label('Ссылка')->url()->required(),
                    Select::make('language')->label('Язык')->options([
                        'ru' => '🇷🇺 RU',
                        'en' => '🇬🇧 EN',
                        'de' => '🇩🇪 DE',
                        'fr' => '🇫🇷 FR',
                        'it' => '🇮🇹 IT',
                        'es' => '🇪🇸 ES',
                        'uk' => '🇺🇦 UK',
                    ])->default('ru'),
                    TextInput::make('sort')->label('Сортировка')->numeric()->default(0),
                    FileUpload::make('image')->label('Превью')->image()->columnSpanFull(),
                ])
                ->columns(2),
        ]);
    }
}

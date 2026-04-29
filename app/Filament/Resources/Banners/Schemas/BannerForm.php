<?php

namespace App\Filament\Resources\Banners\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class BannerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Баннеры')
                ->schema([
                    TextInput::make('path')->label('Путь / страница')->required(),
                    Repeater::make('banners')
                        ->label('Баннеры')
                        ->schema([
                            FileUpload::make('image')->label('Изображение')->image(),
                            TextInput::make('url')->label('Ссылка'),
                            TextInput::make('title')->label('Заголовок'),
                            TextInput::make('sort')->label('Сортировка')->numeric()->default(0),
                        ])
                        ->columnSpanFull()
                        ->reorderable()
                        ->collapsible(),
                ]),
        ]);
    }
}

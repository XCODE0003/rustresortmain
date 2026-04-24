<?php

namespace App\Filament\Resources\Guides\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class GuideForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Настройки')
                    ->schema([
                        Select::make('category_id')
                            ->label('Категория')
                            ->relationship('category', 'id')
                            ->default(null),
                        TextInput::make('path')
                            ->label('URL путь (slug)')
                            ->required(),
                        TextInput::make('status')
                            ->label('Статус')
                            ->required()
                            ->numeric()
                            ->default(1),
                        TextInput::make('sort')
                            ->label('Сортировка')
                            ->required()
                            ->numeric()
                            ->default(0),
                        FileUpload::make('image')
                            ->label('Изображение')
                            ->image()
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Tabs::make('Языки')
                    ->tabs([
                        Tab::make('🇷🇺 RU')
                            ->schema([
                                TextInput::make('title_ru')
                                    ->label('Заголовок')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('description_ru')
                                    ->label('Описание')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Section::make('SEO')
                                    ->collapsed()
                                    ->schema([
                                        TextInput::make('meta_title_ru')->label('Meta Title')->default(null),
                                        TextInput::make('meta_h1_ru')->label('H1')->default(null),
                                        TextInput::make('meta_h2_ru')->label('H2')->default(null),
                                        TextInput::make('meta_h3_ru')->label('H3')->default(null),
                                        Textarea::make('meta_description_ru')->label('Meta Description')->default(null)->columnSpanFull(),
                                        Textarea::make('meta_keywords_ru')->label('Meta Keywords')->default(null)->columnSpanFull(),
                                    ])
                                    ->columns(2),
                            ]),
                        Tab::make('🇬🇧 EN')
                            ->schema([
                                TextInput::make('title_en')
                                    ->label('Title')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('description_en')
                                    ->label('Description')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Section::make('SEO')
                                    ->collapsed()
                                    ->schema([
                                        TextInput::make('meta_title_en')->label('Meta Title')->default(null),
                                        TextInput::make('meta_h1_en')->label('H1')->default(null),
                                        TextInput::make('meta_h2_en')->label('H2')->default(null),
                                        TextInput::make('meta_h3_en')->label('H3')->default(null),
                                        Textarea::make('meta_description_en')->label('Meta Description')->default(null)->columnSpanFull(),
                                        Textarea::make('meta_keywords_en')->label('Meta Keywords')->default(null)->columnSpanFull(),
                                    ])
                                    ->columns(2),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }
}

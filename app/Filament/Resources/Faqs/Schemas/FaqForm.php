<?php

namespace App\Filament\Resources\Faqs\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class FaqForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Языки')
                    ->tabs([
                        Tab::make('🇷🇺 RU')
                            ->schema([
                                Textarea::make('question_ru')
                                    ->label('Вопрос')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('answer_ru')
                                    ->label('Ответ')
                                    ->default(null)
                                    ->columnSpanFull(),
                            ]),
                        Tab::make('🇬🇧 EN')
                            ->schema([
                                Textarea::make('question_en')
                                    ->label('Question')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('answer_en')
                                    ->label('Answer')
                                    ->default(null)
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpanFull(),
                TextInput::make('sort')
                    ->label('Сортировка')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}

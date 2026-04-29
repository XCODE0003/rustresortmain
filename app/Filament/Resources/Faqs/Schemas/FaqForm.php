<?php

namespace App\Filament\Resources\Faqs\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class FaqForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Textarea::make('question_ru')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('question_en')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('question_de')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('question_fr')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('question_it')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('question_es')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('question_uk')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('answer_ru')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('answer_en')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('answer_de')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('answer_fr')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('answer_it')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('answer_es')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('answer_uk')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('sort')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}

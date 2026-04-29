<?php

namespace App\Filament\Resources\CasesItems\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class CasesItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Предмет кейса')
                ->schema([
                    FileUpload::make('image')
                        ->label('Изображение')
                        ->image()
                        ->columnSpanFull(),
                    TextInput::make('title')->label('Название')->required(),
                    TextInput::make('item_id')->label('ID предмета'),
                    TextInput::make('source')->label('Источник'),
                    TextInput::make('quality_type')->label('Качество'),
                    TextInput::make('amount')->label('Количество')->numeric()->default(1),
                    TextInput::make('price')->label('Цена')->numeric()->step('0.01')->required(),
                    TextInput::make('price_usd')->label('Цена USD')->numeric()->step('0.01'),
                    TextInput::make('category_id')->label('Категория')->numeric(),
                    Select::make('status')->label('Статус')->options([
                        1 => 'Активен',
                        0 => 'Скрыт',
                    ])->default(1)->required(),
                    TextInput::make('sort')->label('Сортировка')->numeric()->default(0),
                    TextInput::make('subtitle')->label('Подзаголовок')->columnSpanFull(),
                    Textarea::make('description')->label('Описание')->rows(3)->columnSpanFull(),
                ])
                ->columns(2),
        ]);
    }
}

<?php

namespace App\Filament\Resources\ServerCategories\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ServerCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        $languages = [
            'ru' => '🇷🇺 RU',
            'en' => '🇬🇧 EN',
            'de' => '🇩🇪 DE',
            'fr' => '🇫🇷 FR',
            'it' => '🇮🇹 IT',
            'es' => '🇪🇸 ES',
            'uk' => '🇺🇦 UK',
        ];

        $tabs = [];
        foreach ($languages as $lang => $label) {
            $tabs[] = Tab::make($label)->schema([
                TextInput::make("title_{$lang}")->label('Название')->columnSpanFull(),
                Textarea::make("description_{$lang}")->label('Описание')->rows(3)->columnSpanFull(),
            ]);
        }

        return $schema->components([
            Section::make('Основное')
                ->schema([
                    TextInput::make('path')->label('Путь (slug)')->required()->unique(ignoreRecord: true),
                    Select::make('status')->label('Статус')->options([
                        1 => 'Активна',
                        0 => 'Скрыта',
                    ])->default(1)->required(),
                    TextInput::make('sort')->label('Сортировка')->numeric()->default(0),
                ])
                ->columns(3),
            Tabs::make('Языки')->tabs($tabs)->columnSpanFull(),
        ]);
    }
}

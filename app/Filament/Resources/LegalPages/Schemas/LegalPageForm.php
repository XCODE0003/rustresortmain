<?php

namespace App\Filament\Resources\LegalPages\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class LegalPageForm
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
            $tabs[] = Tab::make($label)
                ->schema([
                    TextInput::make("title_{$lang}")
                        ->label('Заголовок')
                        ->default(null)
                        ->columnSpanFull(),
                    RichEditor::make("content_{$lang}")
                        ->label('Содержимое')
                        ->default(null)
                        ->columnSpanFull()
                        ->fileAttachmentsVisibility('public'),
                ]);
        }

        return $schema
            ->components([
                Section::make('Идентификатор')
                    ->schema([
                        TextInput::make('slug')
                            ->label('Slug (не менять)')
                            ->disabled()
                            ->dehydrated(false),
                    ]),

                Tabs::make('Языки')
                    ->tabs($tabs)
                    ->columnSpanFull(),
            ]);
    }
}

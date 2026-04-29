<?php

namespace App\Filament\Resources\Articles\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ArticleForm
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
                    RichEditor::make("description_{$lang}")
                        ->label('Содержимое')
                        ->default(null)
                        ->columnSpanFull()
                        ->fileAttachmentsVisibility('public'),
                    Section::make('SEO')
                        ->collapsed()
                        ->schema([
                            TextInput::make("meta_title_{$lang}")
                                ->label('Meta Title')
                                ->default(null),
                            TextInput::make("meta_h1_{$lang}")
                                ->label('H1')
                                ->default(null),
                            TextInput::make("meta_h2_{$lang}")
                                ->label('H2')
                                ->default(null),
                            TextInput::make("meta_h3_{$lang}")
                                ->label('H3')
                                ->default(null),
                            Textarea::make("meta_description_{$lang}")
                                ->label('Meta Description')
                                ->default(null)
                                ->columnSpanFull(),
                            Textarea::make("meta_keywords_{$lang}")
                                ->label('Meta Keywords')
                                ->default(null)
                                ->columnSpanFull(),
                        ])
                        ->columns(2),
                ]);
        }

        return $schema
            ->components([
                Section::make('Настройки')
                    ->schema([
                        FileUpload::make('image')
                            ->label('Изображение')
                            ->image()
                            ->imagePreviewHeight('200')
                            ->columnSpanFull(),
                        TextInput::make('path')
                            ->label('URL путь (slug)')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->helperText('Например: rust-update-04-01-2024'),
                        TextInput::make('type')
                            ->label('Тип')
                            ->default(null)
                            ->helperText('Например: update, event, news'),
                        Select::make('status')
                            ->label('Статус')
                            ->options([
                                1 => 'Активно',
                                0 => 'Скрыто',
                            ])
                            ->default(1)
                            ->required(),
                        TextInput::make('sort')
                            ->label('Сортировка')
                            ->required()
                            ->numeric()
                            ->default(0),
                    ])
                    ->columns(2),

                Tabs::make('Языки')
                    ->tabs($tabs)
                    ->columnSpanFull(),
            ]);
    }
}

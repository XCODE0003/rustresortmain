<?php

namespace App\Filament\Pages;

use App\Filament\Resources\Articles\ArticleResource;
use App\Filament\Resources\Faqs\FaqResource;
use App\Filament\Resources\GuideCategories\GuideCategoryResource;
use App\Filament\Resources\Guides\GuideResource;
use App\Filament\Resources\LegalPages\LegalPageResource;
use App\Filament\Resources\SocialLinks\SocialLinkResource;
use App\Filament\Support\HasPermissionGate;
use App\Models\Article;
use App\Models\Faq;
use App\Models\Guide;
use App\Models\GuideCategory;
use App\Models\LegalPage;
use App\Models\SocialLink;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Livewire\Attributes\Url;

class ContentHub extends Page implements HasTable
{
    use HasPermissionGate;
    use InteractsWithTable;

    protected static ?string $permissionKey = 'content.articles|content.faq|content.guides|content.legal|settings.communications';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedDocumentText;

    protected static ?string $navigationLabel = 'Контент сайта';

    protected static ?string $title = 'Контент сайта';

    protected static \UnitEnum|string|null $navigationGroup = 'Контент';

    protected static ?int $navigationSort = 1;

    protected string $view = 'filament.pages.content-hub';

    #[Url(as: 'tab')]
    public string $activeTab = 'articles';

    public function setActiveTab(string $tab): void
    {
        $this->activeTab = $tab;
        $this->resetTable();
    }

    public function getTabs(): array
    {
        return [
            'articles' => ['label' => 'Новости', 'icon' => Heroicon::OutlinedNewspaper],
            'faq' => ['label' => 'FAQ', 'icon' => Heroicon::OutlinedQuestionMarkCircle],
            'guides' => ['label' => 'Гайды', 'icon' => Heroicon::OutlinedBookOpen],
            'categories' => ['label' => 'Категории гайдов', 'icon' => Heroicon::OutlinedFolderOpen],
            'legal' => ['label' => 'Правовые страницы', 'icon' => Heroicon::OutlinedScale],
            'social' => ['label' => 'Социальные сети', 'icon' => Heroicon::OutlinedShare],
        ];
    }

    public function getCreateUrl(): string
    {
        return match ($this->activeTab) {
            'articles' => ArticleResource::getUrl('create'),
            'guides' => GuideResource::getUrl('create'),
            'categories' => GuideCategoryResource::getUrl('create'),
            'legal' => LegalPageResource::getUrl('create'),
            'social' => SocialLinkResource::getUrl('create'),
            default => FaqResource::getUrl('create'),
        };
    }

    public function table(Table $table): Table
    {
        return match ($this->activeTab) {
            'articles' => $this->articlesTable($table),
            'guides' => $this->guidesTable($table),
            'categories' => $this->categoriesTable($table),
            'legal' => $this->legalTable($table),
            'social' => $this->socialTable($table),
            default => $this->faqTable($table),
        };
    }

    protected function articlesTable(Table $table): Table
    {
        return $table
            ->query(Article::query())
            ->defaultSort('sort')
            ->columns([
                ImageColumn::make('image')->label('')->size(40),
                TextColumn::make('title_ru')->label('Заголовок')->searchable()->limit(45),
                TextColumn::make('path')->label('URL')->searchable()->copyable(),
                TextColumn::make('type')->label('Тип')->badge()->color('gray')->placeholder('—'),
                IconColumn::make('status')->label('Опубликован')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
                TextColumn::make('created_at')->label('Создан')->dateTime('d.m.Y')->sortable()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('status')->label('Статус')->options(['1' => 'Опубликован', '0' => 'Скрыт']),
            ])
            ->recordUrl(fn (Article $r): string => ArticleResource::getUrl('edit', ['record' => $r]));
    }

    protected function faqTable(Table $table): Table
    {
        return $table
            ->query(Faq::query())
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('question_ru')->label('Вопрос')->searchable()->limit(60),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->recordUrl(fn (Faq $r): string => FaqResource::getUrl('edit', ['record' => $r]));
    }

    protected function guidesTable(Table $table): Table
    {
        return $table
            ->query(Guide::query())
            ->defaultSort('sort')
            ->columns([
                ImageColumn::make('image')->label('')->size(40),
                TextColumn::make('title_ru')->label('Название')->searchable()->limit(45),
                TextColumn::make('path')->label('URL')->searchable()->copyable(),
                TextColumn::make('category.title_ru')->label('Категория')->placeholder('—')->searchable(),
                IconColumn::make('status')->label('Статус')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->filters([
                SelectFilter::make('category_id')->label('Категория')
                    ->options(fn () => GuideCategory::pluck('title_ru', 'id')->toArray()),
                SelectFilter::make('status')->label('Статус')->options(['1' => 'Активен', '0' => 'Скрыт']),
            ])
            ->recordUrl(fn (Guide $r): string => GuideResource::getUrl('edit', ['record' => $r]));
    }

    protected function categoriesTable(Table $table): Table
    {
        return $table
            ->query(GuideCategory::query())
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('title_ru')->label('Название')->searchable(),
                TextColumn::make('path')->label('Путь')->searchable(),
                TextColumn::make('guides_count')->label('Гайдов')->counts('guides')->alignCenter(),
                IconColumn::make('status')->label('Статус')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->recordUrl(fn (GuideCategory $r): string => GuideCategoryResource::getUrl('edit', ['record' => $r]));
    }

    protected function legalTable(Table $table): Table
    {
        return $table
            ->query(LegalPage::query())
            ->columns([
                TextColumn::make('title_ru')->label('Название')->searchable(),
                TextColumn::make('slug')->label('URL slug')->searchable()->copyable(),
                TextColumn::make('updated_at')->label('Обновлён')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->recordUrl(fn (LegalPage $r): string => LegalPageResource::getUrl('edit', ['record' => $r]));
    }

    protected function socialTable(Table $table): Table
    {
        return $table
            ->query(SocialLink::query())
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('platform')->label('Платформа')->searchable()->badge(),
                TextColumn::make('url')->label('Ссылка')->searchable()->limit(50)->copyable(),
                IconColumn::make('active')->label('Активна')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->filters([
                SelectFilter::make('active')->label('Статус')->options(['1' => 'Активна', '0' => 'Скрыта']),
            ])
            ->recordUrl(fn (SocialLink $r): string => SocialLinkResource::getUrl('edit', ['record' => $r]));
    }
}

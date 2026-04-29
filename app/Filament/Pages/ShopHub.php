<?php

namespace App\Filament\Pages;

use App\Filament\Resources\ShopCategories\ShopCategoryResource;
use App\Filament\Resources\ShopCoupons\ShopCouponResource;
use App\Filament\Resources\ShopItems\ShopItemResource;
use App\Filament\Resources\ShopSets\ShopSetResource;
use App\Filament\Support\HasPermissionGate;
use App\Models\ShopCategory;
use App\Models\ShopCoupon;
use App\Models\ShopItem;
use App\Models\ShopSet;
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

class ShopHub extends Page implements HasTable
{
    use HasPermissionGate;
    use InteractsWithTable;

    protected static ?string $permissionKey = 'shop.items.view|shop.categories.edit|shop.sets.edit|shop.coupons.edit';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedShoppingBag;

    protected static ?string $navigationLabel = 'Магазин';

    protected static ?string $title = 'Магазин';

    protected static \UnitEnum|string|null $navigationGroup = 'Магазин';

    protected static ?int $navigationSort = 1;

    protected string $view = 'filament.pages.shop-hub';

    #[Url(as: 'tab')]
    public string $activeTab = 'items';

    public function setActiveTab(string $tab): void
    {
        $this->activeTab = $tab;
        $this->resetTable();
    }

    public function getTabs(): array
    {
        return [
            'items' => ['label' => 'Товары', 'icon' => Heroicon::OutlinedCube],
            'categories' => ['label' => 'Категории', 'icon' => Heroicon::OutlinedFolder],
            'sets' => ['label' => 'Сеты', 'icon' => Heroicon::OutlinedSquares2x2],
            'coupons' => ['label' => 'Купоны', 'icon' => Heroicon::OutlinedTicket],
        ];
    }

    public function getCreateUrl(): string
    {
        return match ($this->activeTab) {
            'categories' => ShopCategoryResource::getUrl('create'),
            'sets' => ShopSetResource::getUrl('create'),
            'coupons' => ShopCouponResource::getUrl('create'),
            default => ShopItemResource::getUrl('create'),
        };
    }

    public function table(Table $table): Table
    {
        return match ($this->activeTab) {
            'categories' => $this->categoriesTable($table),
            'sets' => $this->setsTable($table),
            'coupons' => $this->couponsTable($table),
            default => $this->itemsTable($table),
        };
    }

    protected function itemsTable(Table $table): Table
    {
        return $table
            ->query(ShopItem::query())
            ->defaultSort('sort')
            ->columns([
                ImageColumn::make('image')->label('')->size(40),
                TextColumn::make('name_ru')->label('Название')->searchable()->limit(40),
                TextColumn::make('item_id')->label('Item ID')->searchable(),
                TextColumn::make('category_id')->label('Категория')
                    ->formatStateUsing(fn ($state) => ShopCategory::find($state)?->title_ru ?? '—')
                    ->searchable(),
                TextColumn::make('price')->label('Цена')->money('RUB')->sortable(),
                IconColumn::make('status')->label('Активен')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->filters([
                SelectFilter::make('category_id')->label('Категория')
                    ->options(fn () => ShopCategory::pluck('title_ru', 'id')->toArray()),
                SelectFilter::make('status')->label('Статус')->options(['1' => 'Активен', '0' => 'Скрыт']),
            ])
            ->recordUrl(fn (ShopItem $r): string => ShopItemResource::getUrl('edit', ['record' => $r]));
    }

    protected function categoriesTable(Table $table): Table
    {
        return $table
            ->query(ShopCategory::query())
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('title_ru')->label('Название')->searchable(),
                TextColumn::make('path')->label('Путь')->searchable()->copyable(),
                TextColumn::make('discount_percent')->label('Скидка')
                    ->formatStateUsing(fn ($state) => $state ? "{$state}%" : '—'),
                TextColumn::make('items_count')->label('Товаров')
                    ->counts('items')->alignCenter(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->recordUrl(fn (ShopCategory $r): string => ShopCategoryResource::getUrl('edit', ['record' => $r]));
    }

    protected function setsTable(Table $table): Table
    {
        return $table
            ->query(ShopSet::query())
            ->defaultSort('sort')
            ->columns([
                ImageColumn::make('image')->label('')->size(40),
                TextColumn::make('title_ru')->label('Название')->searchable()->limit(40),
                TextColumn::make('price')->label('Цена')->money('RUB')->sortable(),
                IconColumn::make('status')->label('Активен')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->label('Статус')->options(['1' => 'Активен', '0' => 'Скрыт']),
            ])
            ->recordUrl(fn (ShopSet $r): string => ShopSetResource::getUrl('edit', ['record' => $r]));
    }

    protected function couponsTable(Table $table): Table
    {
        return $table
            ->query(ShopCoupon::query())
            ->defaultSort('id', 'desc')
            ->columns([
                TextColumn::make('title')->label('Название')->searchable(),
                TextColumn::make('code')->label('Код')->searchable()->copyable(),
                TextColumn::make('type')->label('Тип')->badge()
                    ->formatStateUsing(fn ($state) => $state == 1 ? 'Процент' : 'Сумма'),
                TextColumn::make('percent')->label('Размер'),
                TextColumn::make('date_start')->label('С')->dateTime('d.m.Y H:i')->placeholder('—'),
                TextColumn::make('date_end')->label('До')->dateTime('d.m.Y H:i')->placeholder('—'),
                TextColumn::make('user.name')->label('Пользователь')->placeholder('—'),
            ])
            ->filters([
                SelectFilter::make('type')->label('Тип')->options([1 => 'Процент', 2 => 'Сумма']),
            ])
            ->recordUrl(fn (ShopCoupon $r): string => ShopCouponResource::getUrl('edit', ['record' => $r]));
    }
}

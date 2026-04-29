<?php

namespace App\Filament\Pages;

use App\Filament\Resources\ServerCategories\ServerCategoryResource;
use App\Filament\Resources\Servers\ServerResource;
use App\Filament\Support\HasPermissionGate;
use App\Models\PlayersOnline;
use App\Models\Server;
use App\Models\ServerCategory;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use Livewire\Attributes\Url;

class ServersHub extends Page implements HasTable
{
    use HasPermissionGate;
    use InteractsWithTable;

    protected static ?string $permissionKey = 'servers.view|servers.edit|servers.categories|servers.status';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedServer;

    protected static ?string $navigationLabel = 'Серверы';

    protected static ?string $title = 'Серверы и статус';

    protected static \UnitEnum|string|null $navigationGroup = 'Игровые серверы';

    protected static ?int $navigationSort = 1;

    protected string $view = 'filament.pages.servers-hub';

    #[Url(as: 'tab')]
    public string $activeTab = 'servers';

    public function setActiveTab(string $tab): void
    {
        $this->activeTab = $tab;
        $this->resetTable();
    }

    public function getTabs(): array
    {
        return [
            'servers' => ['label' => 'Список серверов', 'icon' => Heroicon::OutlinedServer],
            'categories' => ['label' => 'Категории', 'icon' => Heroicon::OutlinedFolder],
            'status' => ['label' => 'Онлайн-статус', 'icon' => Heroicon::OutlinedSignal],
        ];
    }

    public function getCreateUrl(): ?string
    {
        return match ($this->activeTab) {
            'servers' => ServerResource::getUrl('create'),
            'categories' => ServerCategoryResource::getUrl('create'),
            default => null,
        };
    }

    public function getStatusList(): Collection
    {
        $servers = Server::orderBy('sort')->get();

        $cutoff = now()->subMinutes(5);
        $online = PlayersOnline::query()
            ->whereIn('server', $servers->pluck('id'))
            ->where('updated_at', '>=', $cutoff)
            ->selectRaw('server, COUNT(DISTINCT steam_id) AS cnt')
            ->groupBy('server')
            ->pluck('cnt', 'server');

        return $servers->map(fn (Server $s) => (object) [
            'id' => $s->id,
            'name' => $s->name,
            'is_online' => $s->isOnline(),
            'online' => (int) ($online[$s->id] ?? 0),
        ]);
    }

    public function table(Table $table): Table
    {
        return match ($this->activeTab) {
            'categories' => $this->categoriesTable($table),
            default => $this->serversTable($table),
        };
    }

    protected function serversTable(Table $table): Table
    {
        return $table
            ->query(Server::query())
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('name')->label('Название')->searchable()->sortable(),
                TextColumn::make('category.title_ru')->label('Категория')->placeholder('—'),
                IconColumn::make('status')->label('Активен')->boolean(),
                TextColumn::make('next_wipe')->label('Следующий вайп')->dateTime('d.m.Y H:i')->placeholder('—'),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->filters([
                SelectFilter::make('category_id')->label('Категория')
                    ->options(fn () => ServerCategory::pluck('title_ru', 'id')->toArray()),
                SelectFilter::make('status')->label('Статус')->options(['1' => 'Активен', '0' => 'Скрыт']),
            ])
            ->recordUrl(fn (Server $r): string => ServerResource::getUrl('edit', ['record' => $r]));
    }

    protected function categoriesTable(Table $table): Table
    {
        return $table
            ->query(ServerCategory::query())
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('title_ru')->label('Название')->searchable(),
                TextColumn::make('path')->label('Путь')->searchable(),
                TextColumn::make('servers_count')->label('Серверов')->counts('servers')->alignCenter(),
                IconColumn::make('status')->label('Активна')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->recordUrl(fn (ServerCategory $r): string => ServerCategoryResource::getUrl('edit', ['record' => $r]));
    }
}

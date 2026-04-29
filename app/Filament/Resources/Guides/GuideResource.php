<?php

namespace App\Filament\Resources\Guides;

use App\Filament\Resources\Guides\Pages\CreateGuide;
use App\Filament\Resources\Guides\Pages\EditGuide;
use App\Filament\Resources\Guides\Pages\ListGuides;
use App\Filament\Resources\Guides\Schemas\GuideForm;
use App\Filament\Resources\Guides\Tables\GuidesTable;
use App\Filament\Support\AdminResource;
use App\Models\Guide;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;

class GuideResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = Guide::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function canViewAny(): bool
    {
        return auth()->user()?->isAdminOrModerator() ?? false;
    }

    public static function canCreate(): bool
    {
        return auth()->user()?->isAdminOrModerator() ?? false;
    }

    public static function canEdit(Model $record): bool
    {
        return auth()->user()?->isAdminOrModerator() ?? false;
    }

    public static function canDelete(Model $record): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public static function form(Schema $schema): Schema
    {
        return GuideForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return GuidesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListGuides::route('/'),
            'create' => CreateGuide::route('/create'),
            'edit' => EditGuide::route('/{record}/edit'),
        ];
    }
}

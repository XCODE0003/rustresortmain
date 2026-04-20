<?php

namespace App\Filament\Resources\Users;

use App\Filament\Resources\Users\Pages\CreateUser;
use App\Filament\Resources\Users\Pages\EditUser;
use App\Filament\Resources\Users\Pages\ListUsers;
use App\Filament\Resources\Users\Schemas\UserForm;
use App\Filament\Resources\Users\Tables\UsersTable;
use App\Filament\Support\AdminResource;
use App\Models\User;
use BackedEnum;
use Illuminate\Database\Eloquent\Model;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class UserResource extends AdminResource
{
    protected static ?string $model = User::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUsers;

    protected static \UnitEnum|string|null $navigationGroup = 'Users';

    protected static ?int $navigationSort = 1;

    public static function canViewAny(): bool
    {
        return auth()->user()?->isAdminOrModerator() ?? false;
    }

    public static function canCreate(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public static function canEdit(Model $record): bool
    {
        return auth()->user()?->isAdminOrModerator() ?? false;
    }

    public static function canDelete(Model $record): bool
    {
        return auth()->user()?->isAdmin() && auth()->id() !== $record->id;
    }

    public static function form(Schema $schema): Schema
    {
        return UserForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return UsersTable::configure($table);
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
            'index' => ListUsers::route('/'),
            'create' => CreateUser::route('/create'),
            'edit' => EditUser::route('/{record}/edit'),
        ];
    }
}

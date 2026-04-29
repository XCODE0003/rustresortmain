<?php

namespace App\Filament\Resources\Roles\Schemas;

use App\Models\Role;
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class RoleForm
{
    public static function configure(Schema $schema): Schema
    {
        $groupTabs = [];
        foreach (Role::permissionGroups() as $groupName => $permissions) {
            $groupTabs[] = Tab::make($groupName)
                ->schema([
                    CheckboxList::make('permissions')
                        ->hiddenLabel()
                        ->options($permissions)
                        ->columns(2)
                        ->bulkToggleable()
                        ->saveRelationshipsUsing(null)
                        ->dehydrated(false),
                ]);
        }

        return $schema->components([
            Section::make('Описание роли')
                ->columns(3)
                ->schema([
                    TextInput::make('name')->label('Название')->required(),
                    TextInput::make('slug')->label('Slug (системный)')
                        ->required()
                        ->disabled(fn ($record) => $record?->is_system)
                        ->dehydrated()
                        ->unique(ignoreRecord: true)
                        ->helperText('Используется в коде. Меняйте только при создании.'),
                    Select::make('color')->label('Цвет')->options([
                        'gray' => 'Серый',
                        'info' => 'Синий',
                        'success' => 'Зелёный',
                        'warning' => 'Оранжевый',
                        'danger' => 'Красный',
                    ])->default('gray')->required(),
                    TextInput::make('description')->label('Описание')->columnSpanFull(),
                    TextInput::make('sort')->label('Сортировка')->numeric()->default(0),
                    Toggle::make('is_system')->label('Системная')
                        ->disabled()
                        ->dehydrated(false)
                        ->helperText('Системные роли нельзя удалить'),
                ]),

            Section::make('Права доступа')
                ->description('Отметьте, что разрешено делать пользователям с этой ролью. Системная роль admin имеет «*» (все права).')
                ->schema([
                    CheckboxList::make('permissions')
                        ->hiddenLabel()
                        ->columnSpanFull()
                        ->options(self::flatOptions())
                        ->bulkToggleable()
                        ->columns(3)
                        ->descriptions(self::descriptions())
                        ->helperText('Чтобы дать сразу все права — впишите слаг * в БД вручную или используйте роль admin.'),
                ]),
        ]);
    }

    protected static function flatOptions(): array
    {
        $out = [];
        foreach (Role::permissionGroups() as $groupName => $perms) {
            foreach ($perms as $key => $label) {
                $out[$key] = $label;
            }
        }

        return $out;
    }

    protected static function descriptions(): array
    {
        $out = [];
        foreach (Role::permissionGroups() as $groupName => $perms) {
            foreach ($perms as $key => $label) {
                $out[$key] = $groupName;
            }
        }

        return $out;
    }
}

<?php

namespace App\Filament\Support;

use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Str;
use UnitEnum;

abstract class AdminResource extends Resource
{
    /**
     * Permission key required to view this resource.
     * Override in subclasses; null = admin-only.
     */
    protected static ?string $permissionView = null;

    /** Permission for create/edit/delete; falls back to view permission. */
    protected static ?string $permissionEdit = null;

    protected static function permissionAllowed(?string $key): bool
    {
        $user = auth()->user();
        if (! $user) {
            return false;
        }
        if ($key === null) {
            return $user->isAdmin();
        }

        return $user->hasPermission($key);
    }

    public static function shouldRegisterNavigation(): bool
    {
        return static::permissionAllowed(static::$permissionView);
    }

    public static function canViewAny(): bool
    {
        return static::permissionAllowed(static::$permissionView);
    }

    public static function canCreate(): bool
    {
        return static::permissionAllowed(static::$permissionEdit ?? static::$permissionView);
    }

    public static function canEdit(Model $record): bool
    {
        return static::permissionAllowed(static::$permissionEdit ?? static::$permissionView);
    }

    public static function canDelete(Model $record): bool
    {
        return static::permissionAllowed(static::$permissionEdit ?? static::$permissionView);
    }

    public static function canDeleteAny(): bool
    {
        return static::permissionAllowed(static::$permissionEdit ?? static::$permissionView);
    }

    protected static function getTranslationKey(): string
    {
        return Str::of(class_basename(static::class))
            ->beforeLast('Resource')
            ->snake()
            ->toString();
    }

    protected static function getTranslatedValue(string $suffix): ?string
    {
        $key = 'filament-admin.resources.'.static::getTranslationKey().'.'.$suffix;

        if (! Lang::has($key, 'ru')) {
            return null;
        }

        return __($key);
    }

    public static function getNavigationGroup(): string|UnitEnum|null
    {
        $group = parent::getNavigationGroup();

        if (! is_string($group)) {
            return $group;
        }

        $key = 'filament-admin.groups.'.$group;

        if (! Lang::has($key, 'ru')) {
            return $group;
        }

        return __($key);
    }

    public static function getNavigationLabel(): string
    {
        return static::getTranslatedValue('navigation') ?? parent::getNavigationLabel();
    }

    public static function getModelLabel(): string
    {
        return static::getTranslatedValue('model') ?? parent::getModelLabel();
    }

    public static function getPluralModelLabel(): string
    {
        return static::getTranslatedValue('plural') ?? parent::getPluralModelLabel();
    }
}

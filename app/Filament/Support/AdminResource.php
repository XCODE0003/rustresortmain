<?php

namespace App\Filament\Support;

use Filament\Resources\Resource;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Str;
use UnitEnum;

abstract class AdminResource extends Resource
{
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

<?php

namespace App\Filament\Support;

/**
 * Add to a Filament Page to gate access by permission key.
 *
 * Each consumer class MUST declare a static `$permissionKey` property:
 * - null  → admin-only.
 * - '*'   → any authenticated admin-panel user.
 * - 'a|b' → user must have at least one of these permission keys.
 */
trait HasPermissionGate
{
    public static function canAccess(): bool
    {
        return static::permissionAllowed();
    }

    public static function shouldRegisterNavigation(): bool
    {
        return static::permissionAllowed();
    }

    protected static function permissionAllowed(): bool
    {
        $user = auth()->user();
        if (! $user) {
            return false;
        }

        $key = property_exists(static::class, 'permissionKey') ? static::$permissionKey : null;

        if ($key === null) {
            return $user->isAdmin();
        }

        if ($key === '*') {
            return true;
        }

        foreach (explode('|', $key) as $candidate) {
            if ($user->hasPermission(trim($candidate))) {
                return true;
            }
        }

        return false;
    }
}

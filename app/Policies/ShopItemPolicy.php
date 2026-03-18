<?php

namespace App\Policies;

use App\Models\ShopItem;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ShopItemPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function view(User $user, ShopItem $shopItem): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, ShopItem $shopItem): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, ShopItem $shopItem): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, ShopItem $shopItem): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, ShopItem $shopItem): bool
    {
        return $user->isAdmin();
    }
}

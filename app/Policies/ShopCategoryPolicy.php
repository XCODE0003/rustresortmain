<?php

namespace App\Policies;

use App\Models\ShopCategory;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ShopCategoryPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function view(User $user, ShopCategory $shopCategory): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, ShopCategory $shopCategory): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, ShopCategory $shopCategory): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, ShopCategory $shopCategory): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, ShopCategory $shopCategory): bool
    {
        return $user->isAdmin();
    }
}

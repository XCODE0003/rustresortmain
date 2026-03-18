<?php

namespace App\Policies;

use App\Models\ShopSet;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ShopSetPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function view(User $user, ShopSet $shopSet): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, ShopSet $shopSet): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, ShopSet $shopSet): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, ShopSet $shopSet): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, ShopSet $shopSet): bool
    {
        return $user->isAdmin();
    }
}

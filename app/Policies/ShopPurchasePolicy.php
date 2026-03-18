<?php

namespace App\Policies;

use App\Models\ShopPurchase;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ShopPurchasePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function view(User $user, ShopPurchase $shopPurchase): bool
    {
        return $user->isAdmin()
            || $user->isSupport()
            || $user->isInvestor()
            || $shopPurchase->user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, ShopPurchase $shopPurchase): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, ShopPurchase $shopPurchase): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, ShopPurchase $shopPurchase): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, ShopPurchase $shopPurchase): bool
    {
        return $user->isAdmin();
    }
}

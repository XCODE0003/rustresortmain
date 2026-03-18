<?php

namespace App\Policies;

use App\Models\ShopCart;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ShopCartPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, ShopCart $shopCart): bool
    {
        return $shopCart->user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, ShopCart $shopCart): bool
    {
        return $shopCart->user_id === $user->id;
    }

    public function delete(User $user, ShopCart $shopCart): bool
    {
        return $shopCart->user_id === $user->id;
    }

    public function restore(User $user, ShopCart $shopCart): bool
    {
        return false;
    }

    public function forceDelete(User $user, ShopCart $shopCart): bool
    {
        return false;
    }
}

<?php

namespace App\Policies;

use App\Models\PromoCode;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PromoCodePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isInvestor();
    }

    public function view(User $user, PromoCode $promoCode): bool
    {
        return $user->isAdmin() || $user->isInvestor();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, PromoCode $promoCode): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, PromoCode $promoCode): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, PromoCode $promoCode): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, PromoCode $promoCode): bool
    {
        return $user->isAdmin();
    }
}

<?php

namespace App\Policies;

use App\Models\Donate;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class DonatePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function view(User $user, Donate $donate): bool
    {
        return $user->isAdmin() || $user->isSupport() || $user->isInvestor();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Donate $donate): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, Donate $donate): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, Donate $donate): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, Donate $donate): bool
    {
        return $user->isAdmin();
    }
}

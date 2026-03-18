<?php

namespace App\Policies;

use App\Models\RconTask;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class RconTaskPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function view(User $user, RconTask $rconTask): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, RconTask $rconTask): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, RconTask $rconTask): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, RconTask $rconTask): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, RconTask $rconTask): bool
    {
        return $user->isAdmin();
    }
}

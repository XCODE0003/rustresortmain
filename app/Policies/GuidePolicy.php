<?php

namespace App\Policies;

use App\Models\Guide;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class GuidePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function view(User $user, Guide $guide): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function update(User $user, Guide $guide): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function delete(User $user, Guide $guide): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, Guide $guide): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, Guide $guide): bool
    {
        return $user->isAdmin();
    }
}

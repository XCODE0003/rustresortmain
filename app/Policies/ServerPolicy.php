<?php

namespace App\Policies;

use App\Models\Server;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ServerPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function view(User $user, Server $server): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, Server $server): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, Server $server): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, Server $server): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, Server $server): bool
    {
        return $user->isAdmin();
    }
}

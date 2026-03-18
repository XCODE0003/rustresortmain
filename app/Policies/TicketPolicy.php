<?php

namespace App\Policies;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TicketPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function view(User $user, Ticket $ticket): bool
    {
        return $user->isAdmin() || $user->isSupport() || $ticket->user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Ticket $ticket): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function delete(User $user, Ticket $ticket): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, Ticket $ticket): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, Ticket $ticket): bool
    {
        return $user->isAdmin();
    }
}

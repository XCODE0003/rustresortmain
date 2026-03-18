<?php

namespace App\Policies;

use App\Models\Faq;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class FaqPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function view(User $user, Faq $faq): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function update(User $user, Faq $faq): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function delete(User $user, Faq $faq): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, Faq $faq): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, Faq $faq): bool
    {
        return $user->isAdmin();
    }
}

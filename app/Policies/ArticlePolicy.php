<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ArticlePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function view(User $user, Article $article): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function update(User $user, Article $article): bool
    {
        return $user->isAdmin() || $user->isSupport();
    }

    public function delete(User $user, Article $article): bool
    {
        return $user->isAdmin();
    }

    public function restore(User $user, Article $article): bool
    {
        return $user->isAdmin();
    }

    public function forceDelete(User $user, Article $article): bool
    {
        return $user->isAdmin();
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;

class NotificationController extends Controller
{
    public function markAllRead(): RedirectResponse
    {
        auth()->user()->unreadNotifications->markAsRead();

        return redirect()->back();
    }

    public function markRead(string $id): RedirectResponse
    {
        auth()->user()->notifications()->find($id)?->markAsRead();

        return redirect()->back();
    }
}

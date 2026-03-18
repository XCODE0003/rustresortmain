<?php

namespace App\Http\Controllers;

use App\Models\Server;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $servers = Server::with('category')
            ->where('status', 1)
            ->orderBy('sort')
            ->get();

        return Inertia::render('home', [
            'servers' => $servers,
        ]);
    }
}

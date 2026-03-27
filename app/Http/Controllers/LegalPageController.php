<?php

namespace App\Http\Controllers;

use App\Models\LegalPage;
use Inertia\Inertia;
use Inertia\Response;

class LegalPageController extends Controller
{
    public function show(string $slug): Response
    {
        $page = LegalPage::where('slug', $slug)->firstOrFail();

        return Inertia::render('legal/show', [
            'title'   => $page->getLocalizedTitle(),
            'content' => $page->getLocalizedContent(),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Inertia\Inertia;
use Inertia\Response;

class FaqController extends Controller
{
    public function index(): Response
    {
        $faqs = Faq::orderBy('sort')
            ->get()
            ->map(fn($f) => [
                'id'       => $f->id,
                'question' => $f->getLocalizedQuestion(),
                'answer'   => $f->getLocalizedAnswer(),
            ]);

        return Inertia::render('faq', ['faqs' => $faqs]);
    }
}

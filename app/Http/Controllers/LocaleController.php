<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LocaleController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        $locale = $request->input('locale', 'ru');
        
        if (!in_array($locale, ['ru', 'en'])) {
            $locale = 'ru';
        }
        
        session(['locale' => $locale]);
        app()->setLocale($locale);
        
        return back();
    }
}

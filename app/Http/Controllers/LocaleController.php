<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LocaleController extends Controller
{
    public const SUPPORTED_LOCALES = ['ru', 'en'];

    public const DEFAULT_LOCALE = 'ru';

    public function update(Request $request): RedirectResponse
    {
        $locale = $request->input('locale', self::DEFAULT_LOCALE);

        if (! in_array($locale, self::SUPPORTED_LOCALES)) {
            $locale = self::DEFAULT_LOCALE;
        }

        session(['locale' => $locale]);
        app()->setLocale($locale);

        return back();
    }
}

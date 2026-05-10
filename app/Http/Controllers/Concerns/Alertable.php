<?php

namespace App\Http\Controllers\Concerns;

use Illuminate\Support\Facades\Session;

trait Alertable
{
    protected function alert(string $type, string $message): void
    {
        $existing = Session::get('alert.'.$type, []);
        $existing[] = $message;
        Session::flash('alert.'.$type, $existing);
    }
}

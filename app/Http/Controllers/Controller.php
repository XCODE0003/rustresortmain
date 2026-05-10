<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\Alertable;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;

abstract class Controller
{
    use Alertable, AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}

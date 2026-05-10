<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use App\Models\Option;
use App\Models\Server;
use App\Services\Statistics;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Log;

class UpdateitemsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('can:admin'); // gated by route-level Backend middleware
    }

    public function index() {
        // Legacy Lineage2 item-name sync from `items_tmp` connection.
        // Not configured in this project — return a plain notice.
        return response('Updateitems sync is not configured for this project.', 200);
    }

}

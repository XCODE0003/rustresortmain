<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServerRequest;
use App\Models\Server;
use App\Services\WipeScheduleService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ServerController extends Controller
{
    public function __construct(private readonly WipeScheduleService $wipeScheduleService)
    {
        // $this->middleware('can:admin'); // gated by route-level Backend middleware
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        $servers = Server::query();

        $search = request()->query('search');
        if (request()->has('search') && is_string($search)) {
            $servers->where('name', 'LIKE', "%{$search}%");
        }

        $servers = $servers->latest()->paginate();

        return view('backend.pages.servers.index', compact('servers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('backend.pages.servers.form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ServerRequest $request): RedirectResponse
    {
        $req = $request->validated();
        $options = [
            'ip' => $req['ip'],
            'rcon_ip' => $req['rcon_ip'],
            'rsworld_db_type' => $req['rsworld_db_type'],
            // Адрес для кнопки «Скопировать коннект» на сайте (домен:порт).
            'connect' => $req['connect'] ?? '',
            'api_url' => '',
            'api_key' => '',
            'rcon_passw' => $req['rcon_passw'],
        ];
        $data = [
            'name' => $req['name'],
            'category_id' => $req['category_id'],
            'status' => $req['status'],
            'sort' => $req['sort'],
            'next_wipe' => $req['next_wipe'],
            'wipe_schedule_days' => $req['wipe_schedule_days'] ?? [],
            'wipe_schedule_time' => $req['wipe_schedule_time'] ?? null,
            'options' => json_encode($options),
        ];

        $data['image'] = $request->image->store('images', 'public');

        $this->alert('success', __('Сервер успешно добавлен'));
        Log::channel('adminlog')->info('Admin '.auth()->user()->name.': Server added successfully. Parameters: '.json_encode($request->all()));

        $server = Server::create($data);
        $this->applyScheduleDates($server);

        return redirect()->route('servers.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Server $server)
    {
        return view('backend.pages.servers.form', compact('server'));
    }

    public function settings($id)
    {
        $server = Server::where('id', $id)->first();

        return view('backend.pages.servers.settings', compact('server'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ServerRequest $request, Server $server): RedirectResponse
    {
        $req = $request->validated();

        $options = [
            'ip' => $req['ip'],
            'rcon_ip' => $req['rcon_ip'],
            'rsworld_db_type' => $req['rsworld_db_type'],
            // Адрес для кнопки «Скопировать коннект» на сайте (домен:порт).
            'connect' => $req['connect'] ?? '',
            'api_url' => (isset($req['api_url'])) ? $req['api_url'] : '',
            'api_key' => (isset($req['api_key'])) ? $req['api_key'] : '',
            'rcon_passw' => (isset($req['rcon_passw'])) ? $req['rcon_passw'] : '',
        ];

        $data = [
            'name' => $req['name'],
            'category_id' => $req['category_id'],
            'status' => $req['status'],
            'sort' => $req['sort'],
            'next_wipe' => $req['next_wipe'],
            'wipe_schedule_days' => $req['wipe_schedule_days'] ?? [],
            'wipe_schedule_time' => $req['wipe_schedule_time'] ?? null,
            'options' => json_encode($options),
        ];

        if (isset($data['image'])) {
            Storage::disk('public')->delete($server->image);
        }
        if ($request->has('image')) {
            $data['image'] = $request->image->store('images', 'public');
        }

        $this->alert('success', __('Сервер успешно обновлен'));
        Log::channel('adminlog')->info('Admin '.auth()->user()->name.': The server has been successfully updated. Parameters: '.json_encode($request->all(), JSON_UNESCAPED_UNICODE));

        $server->update($data);
        $this->applyScheduleDates($server->refresh());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Server $server)
    {
        Storage::disk('public')->delete($server->image);
        $server->delete();

        $this->alert('success', __('Сервер успешно удален'));
        Log::channel('adminlog')->info('Admin '.auth()->user()->name.': The server was successfully removed. Parameters:'.json_encode($server->name));

        return back();
    }

    private function applyScheduleDates(Server $server): void
    {
        $schedule = $this->wipeScheduleService->calculate($server);

        $server->forceFill([
            'wipe' => $schedule['last_wipe'],
            'next_wipe' => $schedule['next_wipe'],
        ])->save();
    }
}

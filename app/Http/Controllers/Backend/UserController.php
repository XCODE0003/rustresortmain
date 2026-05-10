<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware('can:admin'); // gated by route-level Backend middleware
    }

    public function index()
    {
        $users = User::query();

        $search = request()->query('search');
        if ($search) {
            $users->where('name', 'LIKE', "%{$search}%");
            $users->orWhere('email', 'LIKE', "%{$search}%");
            $users->orWhere('phone', 'LIKE', "%{$search}%");
            $users->orWhere('steam_id', 'LIKE', "%{$search}%");
        }

        $mute_status = request()->query('mute_status');
        if ($mute_status > 0) {
            $users->where('mute', $mute_status);
        }

        $role = request()->query('role');
        if ($role != '' && $role != 'all') {
            if ($role == 'analyst') {
                $role = 'investor';
            }
            $users->where('role', $role);
        }

        $users = $users->paginate();

        return view('backend.pages.users.list', compact('users'));
    }

    public function details(User $user)
    {
        $data = [];

        return view('backend.pages.users.info', compact('data', 'user'));
    }

    public function admin(User $user): RedirectResponse
    {
        $user->role = 'admin';
        $user->save();
        Log::channel('adminlog')->info(auth()->user()->role.' '.auth()->user()->name.": Appointed {$user->name} as administrator");
        $this->alert('success', __('Вы успешно назначили').' '.$user->name.' '.__('администратором'));

        return back();
    }

    public function support(User $user): RedirectResponse
    {
        $user->role = 'support';
        $user->save();
        Log::channel('adminlog')->info(auth()->user()->role.' '.auth()->user()->name.": Appointed {$user->name} support agent");
        $this->alert('success', __('Вы успешно назначили').' '.$user->name.' '.__('агентом поддержки'));

        return back();
    }

    public function investor(User $user): RedirectResponse
    {
        $user->role = 'investor';
        $user->save();
        Log::channel('adminlog')->info(auth()->user()->role.' '.auth()->user()->name.": Appointed {$user->name} as investor");
        $this->alert('success', __('Вы успешно назначили').' '.$user->name.' '.__('доступ Инвестора'));

        return back();
    }

    public function user(User $user): RedirectResponse
    {
        $user->role = 'user';
        $user->save();
        Log::channel('adminlog')->info(auth()->user()->role.' '.auth()->user()->name.": Appointed {$user->name} regular user");
        $this->alert('success', __('Вы успешно назначили').' '.$user->name.' '.__('обычным пользователем'));

        return back();
    }

    public function setBalance(Request $request): RedirectResponse
    {
        $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'balance' => 'required|numeric',
        ]);

        $user = User::findOrFail($request->input('user_id'));
        $user->balance = $request->input('balance');
        $user->save();

        Log::channel('adminlog')->info(auth()->user()->role.' '.auth()->user()->name.": Изменил баланс пользователя {$user->name} на ".$request->input('balance'));
        $this->alert('success', __('Вы успешно изменили баланс пользователю').' '.$user->name);

        return back();
    }

    public function mute(Request $request): RedirectResponse
    {
        $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'mute_date' => 'required|integer|in:0,1,2,3',
            'mute_reason' => 'required|string|max:255',
        ]);

        $user = User::findOrFail($request->input('user_id'));

        $offset = match ((int) $request->input('mute_date')) {
            1 => 60 * 60 * 24 * 7,
            2 => 60 * 60 * 24 * 30,
            3 => 60 * 60 * 24 * 30 * 12 * 100,
            default => 60 * 60 * 24,
        };

        $mute_date = date('Y-m-d H:i:s', time() + $offset);

        $user->mute = 1;
        $user->mute_reason = $request->input('mute_reason');
        $user->mute_date = $mute_date;
        $user->save();

        Log::channel('adminlog')->info(auth()->user()->role.' '.auth()->user()->name.": Выдал мут пользователю {$user->name} до {$mute_date} с причиной {$request->input('mute_reason')}");
        $this->alert('success', __('Вы успешно выдали мут пользователю').' '.$user->name);

        return back();
    }

    public function unmute(User $user): RedirectResponse
    {
        $user->mute = 0;
        $user->mute_reason = '';
        $user->mute_date = null;
        $user->save();

        Log::channel('adminlog')->info(auth()->user()->role.' '.auth()->user()->name.": Снял мут с пользователя {$user->name}.");
        $this->alert('success', __('Вы успешно сняли мут с пользователя').' '.$user->name);

        return back();
    }

    public function getUserByName(Request $request)
    {
        $users = User::where('name', 'LIKE', "%{$request->user_name}%")->get();

        return response()->json([
            'status' => 'success',
            'users' => $users,
        ]);
    }
}

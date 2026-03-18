<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Lib\SteamApi;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SteamAuthController extends Controller
{
    /**
     * Redirect to Steam OpenID authentication
     */
    public function redirect(): RedirectResponse
    {
        try {
            $result = SteamApi::login();
            
            if ($result->status == 'success') {
                \Log::info('Steam redirect URL: ' . $result->data);
                return redirect()->away($result->data);
            }

            \Log::error('Steam login failed: ' . $result->data);
            return redirect()->route('home')->with('error', 'Ошибка инициализации Steam авторизации');
        } catch (\Exception $e) {
            \Log::error('Steam redirect exception: ' . $e->getMessage());
            return redirect()->route('home')->with('error', 'Ошибка: ' . $e->getMessage());
        }
    }

    /**
     * Handle Steam OpenID callback
     */
    public function callback(Request $request): RedirectResponse
    {
        $result = SteamApi::login();

        if ($result->status == 'success') {
            $steamid = $result->data;
            session()->put('steamid', $steamid);

            $userInfoResult = SteamApi::getUserInfo($steamid);
            
            if ($userInfoResult->status == 'success') {
                $userSteam = $userInfoResult->data;
                session()->put('user_steam', $userSteam);

                $password = $userSteam->steamid . '0kf7v6xi34';
                $user = User::where('steam_id', $steamid)->first();
                
                if (!$user) {
                    $user = new User;
                    $user->steam_id = $userSteam->steamid;
                    $user->password = Hash::make($password);
                    $user->email = $steamid . '@steam.local';
                }

                $user->name = $userSteam->personaname;
                $user->avatar = $userSteam->avatarfull ?? $userSteam->avatar ?? null;
                $user->save();

                Auth::login($user, true);
                $request->session()->regenerate();

                return redirect()->intended('/');
            }
        }

        return redirect()->route('home')->with('error', 'Ошибка авторизации через Steam');
    }

    /**
     * Logout user
     */
    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home');
    }
}


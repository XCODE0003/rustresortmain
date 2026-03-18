<?php

namespace App\Lib;

use App\Models\Option;
use Illuminate\Support\Facades\Cache;

class SteamApi
{
    /**
     * Initiate Steam OpenID login
     */
    public static function login(): object
    {
        $appUrl = config('app.url');
        
        // Нормализуем URL - убираем trailing slash
        $appUrl = rtrim($appUrl, '/');
        
        // Используем полный URL вместо только хоста
        $openid = new \LightOpenID($appUrl);

        if (!$openid->mode) {
            $openid->identity = 'https://steamcommunity.com/openid';
            $openid->returnUrl = $appUrl . '/auth/steam/callback';
            
            \Log::info('Steam OpenID initialized', [
                'appUrl' => $appUrl,
                'returnUrl' => $openid->returnUrl,
            ]);
            
            return (object)[
                'status' => 'success',
                'data' => $openid->authUrl(),
            ];
        } elseif ($openid->mode == 'cancel') {
            return (object)[
                'status' => 'error',
                'data' => 'User has canceled authentication!',
            ];
        } else {
            if ($openid->validate()) {
                $id = $openid->identity;
                $ptn = "/^https?:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/";
                preg_match($ptn, $id, $matches);

                $steamid = $matches[1] ?? null;
                
                if ($steamid) {
                    return (object)[
                        'status' => 'success',
                        'data' => $steamid,
                    ];
                }
                
                return (object)[
                    'status' => 'error',
                    'data' => 'Invalid Steam ID format.',
                ];
            } else {
                return (object)[
                    'status' => 'error',
                    'data' => 'User is not logged in.',
                ];
            }
        }
    }

    /**
     * Get Steam user information
     */
    public static function getUserInfo(string $steamid): object
    {
        $apiKey = self::getSteamApiKey();
        
        if (!$apiKey) {
            return (object)[
                'status' => 'error',
                'data' => 'Steam API key not configured.',
            ];
        }

        try {
            $url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={$apiKey}&steamids={$steamid}";
            $response = file_get_contents($url);
            $content = json_decode($response, true);
            
            if (isset($content['response']['players'][0])) {
                return (object)[
                    'status' => 'success',
                    'data' => (object)$content['response']['players'][0],
                ];
            }
            
            return (object)[
                'status' => 'error',
                'data' => 'User not found.',
            ];
        } catch (\Exception $e) {
            return (object)[
                'status' => 'error',
                'data' => 'Failed to fetch user info: ' . $e->getMessage(),
            ];
        }
    }

    /**
     * Get Steam API key from options
     */
    protected static function getSteamApiKey(): ?string
    {
        return Cache::remember('steam_api_key', 3600, function () {
            return Option::where('key', 'steam_api_key')->value('value');
        });
    }

    /**
     * Get player bans information
     */
    public static function getPlayerBans(string $steamid): object
    {
        $apiKey = self::getSteamApiKey();
        
        if (!$apiKey) {
            return (object)[
                'status' => 'error',
                'data' => 'Steam API key not configured.',
            ];
        }

        try {
            $url = "https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key={$apiKey}&steamids={$steamid}";
            $response = file_get_contents($url);
            $content = json_decode($response, true);
            
            if (isset($content['players'][0])) {
                return (object)[
                    'status' => 'success',
                    'data' => (object)$content['players'][0],
                ];
            }
            
            return (object)[
                'status' => 'error',
                'data' => 'Bans info not found.',
            ];
        } catch (\Exception $e) {
            return (object)[
                'status' => 'error',
                'data' => 'Failed to fetch bans info: ' . $e->getMessage(),
            ];
        }
    }

    /**
     * Get owned games and playtime
     */
    public static function getOwnedGames(string $steamid, int $appid = 252490): object
    {
        $apiKey = self::getSteamApiKey();
        
        if (!$apiKey) {
            return (object)[
                'status' => 'error',
                'data' => 'Steam API key not configured.',
            ];
        }

        try {
            $url = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key={$apiKey}&steamid={$steamid}&include_appinfo=1&include_played_free_games=1&appids_filter[0]={$appid}";
            $response = file_get_contents($url);
            $content = json_decode($response, true);
            
            if (isset($content['response']['games'][0])) {
                return (object)[
                    'status' => 'success',
                    'data' => (object)$content['response']['games'][0],
                ];
            }
            
            return (object)[
                'status' => 'error',
                'data' => 'Game not found in library.',
            ];
        } catch (\Exception $e) {
            return (object)[
                'status' => 'error',
                'data' => 'Failed to fetch games: ' . $e->getMessage(),
            ];
        }
    }

    /**
     * Logout (clear session)
     */
    public static function logout(): void
    {
        session()->flush();
    }
}

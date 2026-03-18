<?php

namespace App\Lib;

use App\Services\RconConnectionManager;
use Illuminate\Support\Facades\Log;

class RustCON
{
    public static function sendCommand($command, $server_id = null)
    {
        if (config('server_api.rcon_ip', '') == '' || strpos(config('server_api.rcon_ip', ''), '127.0.0.1') !== false) {
            return false;
        }

        if ($server_id === null) {
            $server_id = session('server_id', 1);
        }

        try {
            $manager = RconConnectionManager::getInstance();
            $result = $manager->sendCommand($server_id, $command);

            return $result;
        } catch (\Exception $ex) {
            Log::channel('rcon_master')->error("Error sending command: {$ex->getMessage()}");
        }

        return false;
    }
}

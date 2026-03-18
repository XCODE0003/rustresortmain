<?php

namespace App\Filament\Widgets;

use App\Models\Server;
use Filament\Widgets\Widget;

class ServerStatusWidget extends Widget
{
    protected string $view = 'filament.widgets.server-status-widget';

    protected int|string|array $columnSpan = 'full';

    public function getServers(): \Illuminate\Support\Collection
    {
        return Server::where('status', 1)
            ->orderBy('sort')
            ->get();
    }
}

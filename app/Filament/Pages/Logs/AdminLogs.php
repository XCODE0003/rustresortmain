<?php

namespace App\Filament\Pages\Logs;

use App\Filament\Support\HasPermissionGate;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;

class AdminLogs extends Page
{
    use HasPermissionGate;

    protected static ?string $permissionKey = 'logs.admin';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCommandLine;

    protected static ?string $navigationLabel = 'Админ-логи';

    protected static \UnitEnum|string|null $navigationGroup = 'Logs';

    protected static ?int $navigationSort = 50;

    protected string $view = 'filament.pages.logs.tail-log';

    protected static ?string $title = 'Админ-логи';

    protected string $logRelativePath = 'logs/admin.log';

    protected int $maxLines = 500;

    public function getViewData(): array
    {
        return [
            'title' => static::$title,
            'lines' => $this->readLogTail(),
        ];
    }

    protected function readLogTail(): array
    {
        $path = storage_path($this->logRelativePath);

        if (! is_file($path) || ! is_readable($path)) {
            return [];
        }

        $lines = @file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];

        return array_slice($lines, -$this->maxLines);
    }
}

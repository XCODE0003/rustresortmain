<?php

namespace App\Filament\Pages\Logs;

use App\Filament\Support\HasPermissionGate;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;

class ServerErrors extends Page
{
    use HasPermissionGate;

    protected static ?string $permissionKey = 'logs.errors';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedExclamationTriangle;

    protected static ?string $navigationLabel = 'Ошибки сервера';

    protected static \UnitEnum|string|null $navigationGroup = 'Logs';

    protected static ?int $navigationSort = 52;

    protected string $view = 'filament.pages.logs.tail-log';

    protected static ?string $title = 'storage/logs/laravel.log';

    protected string $logRelativePath = 'logs/laravel.log';

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

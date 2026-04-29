<?php

namespace App\Filament\Pages\Logs;

use App\Filament\Support\HasPermissionGate;
use App\Models\CaseopenHistory;
use App\Models\Donate;
use App\Models\ShopStatistic;
use App\Models\User;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Panel;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Collection;

class UserLogs extends Page
{
    use HasPermissionGate;

    protected static ?string $permissionKey = 'logs.user';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedDocumentMagnifyingGlass;

    protected static ?string $navigationLabel = 'Логи юзера';

    protected static \UnitEnum|string|null $navigationGroup = 'Logs';

    protected static ?int $navigationSort = 60;

    protected string $view = 'filament.pages.logs.user-logs';

    public ?User $user = null;

    public ?int $userId = null;

    public static function getRoutePath(Panel $panel): string
    {
        return '/user-logs/{user?}';
    }

    public function mount(?int $user = null): void
    {
        $this->userId = $user;
        $this->user = $user ? User::find($user) : null;
    }

    public function getDonations(): Collection
    {
        if (! $this->user) {
            return collect();
        }

        return Donate::where('user_id', $this->user->id)
            ->latest()
            ->limit(100)
            ->get();
    }

    public function getShopPurchases(): Collection
    {
        if (! $this->user) {
            return collect();
        }

        return ShopStatistic::where('user_id', $this->user->id)
            ->with('item')
            ->latest()
            ->limit(100)
            ->get();
    }

    public function getCaseOpens(): Collection
    {
        if (! $this->user) {
            return collect();
        }

        return CaseopenHistory::where('user_id', $this->user->id)
            ->with('case')
            ->orderByDesc('date')
            ->limit(100)
            ->get();
    }

    public function getAdminLogTail(): array
    {
        if (! $this->user) {
            return [];
        }

        $path = storage_path('logs/admin.log');
        if (! is_file($path) || ! is_readable($path)) {
            return [];
        }

        $needles = [
            'user_id='.$this->user->id,
            'user='.$this->user->id,
            $this->user->email,
            $this->user->steam_id,
        ];
        $needles = array_filter($needles);

        $lines = @file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
        $matches = [];

        foreach ($lines as $line) {
            foreach ($needles as $needle) {
                if (stripos($line, (string) $needle) !== false) {
                    $matches[] = $line;
                    break;
                }
            }
        }

        return array_slice($matches, -200);
    }
}

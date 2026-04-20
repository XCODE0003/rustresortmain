<?php

namespace App\Filament\Pages\Bans;

use App\Services\RustApp\BansService;
use BackedEnum;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;

class BansPage extends Page implements HasActions, HasForms
{
    use InteractsWithActions;
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedNoSymbol;

    protected static ?string $navigationLabel = 'Баны';

    protected static \UnitEnum|string|null $navigationGroup = 'Пользователи';

    protected static ?int $navigationSort = 5;

    protected static ?string $title = 'Управление банами';

    protected string $view = 'filament.pages.bans.bans-page';

    // Filters
    public string $search = '';

    public bool $excludeStale = true;

    public int $currentPage = 0;

    // Data
    public array $bans = [];

    public int $totalBans = 0;

    public bool $loadError = false;

    // Ban form
    public bool $showBanForm = false;

    public string $banSteamId = '';

    public string $banReason = '';

    public string $banComment = '';

    public string $banExpiredAt = ''; // empty = permanent

    public static function canAccess(): bool
    {
        return auth()->user()?->isAdminOrModerator() ?? false;
    }

    public function mount(): void
    {
        $this->loadBans();
    }

    public function loadBans(): void
    {
        $this->loadError = false;
        $params = ['page' => $this->currentPage];

        if ($this->excludeStale) {
            $params['exclude_stale'] = true;
        }

        if ($this->search !== '') {
            $params['search'] = $this->search;
        }

        $data = app(BansService::class)->getBans($params);
        $this->bans = $data['results'] ?? [];
        $this->totalBans = $data['total'] ?? count($this->bans);

        if (empty($data['results']) && isset($data['error'])) {
            $this->loadError = true;
        }
    }

    public function updatedSearch(): void
    {
        $this->currentPage = 0;
        $this->loadBans();
    }

    public function updatedExcludeStale(): void
    {
        $this->currentPage = 0;
        $this->loadBans();
    }

    public function nextPage(): void
    {
        $this->currentPage++;
        $this->loadBans();
    }

    public function prevPage(): void
    {
        if ($this->currentPage > 0) {
            $this->currentPage--;
            $this->loadBans();
        }
    }

    public function toggleBanForm(): void
    {
        $this->showBanForm = ! $this->showBanForm;
        if (! $this->showBanForm) {
            $this->resetBanForm();
        }
    }

    public function doBan(): void
    {
        if (empty($this->banSteamId) || empty($this->banReason)) {
            Notification::make()
                ->title('Заполните Steam ID и причину')
                ->warning()
                ->send();

            return;
        }

        $ban = [
            'steam_id' => trim($this->banSteamId),
            'reason' => trim($this->banReason),
            'comment' => trim($this->banComment),
            'expired_at' => $this->banExpiredAt !== ''
                ? strtotime($this->banExpiredAt)
                : 0,
        ];

        $result = app(BansService::class)->ban([$ban]);

        if ($result['success']) {
            Notification::make()
                ->title('Игрок забанен')
                ->success()
                ->send();
            $this->resetBanForm();
            $this->showBanForm = false;
            $this->currentPage = 0;
            $this->loadBans();
        } else {
            Notification::make()
                ->title('Ошибка бана')
                ->body($result['error'] ?? 'Неизвестная ошибка')
                ->danger()
                ->send();
        }
    }

    public function unban(string $steamId): void
    {
        $result = app(BansService::class)->unban($steamId);

        if ($result['success']) {
            Notification::make()
                ->title('Игрок разбанен')
                ->success()
                ->send();
            $this->loadBans();
        } else {
            Notification::make()
                ->title('Ошибка разбана')
                ->body($result['error'] ?? 'Неизвестная ошибка')
                ->danger()
                ->send();
        }
    }

    private function resetBanForm(): void
    {
        $this->banSteamId = '';
        $this->banReason = '';
        $this->banComment = '';
        $this->banExpiredAt = '';
    }
}

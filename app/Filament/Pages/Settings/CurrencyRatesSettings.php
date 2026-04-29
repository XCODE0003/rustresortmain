<?php

namespace App\Filament\Pages\Settings;

use App\Models\Option;
use App\Models\Server;
use BackedEnum;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Cache;

class CurrencyRatesSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCurrencyDollar;

    protected static ?string $navigationLabel = 'Курс валют по серверам';

    protected static \UnitEnum|string|null $navigationGroup = 'Настройки';

    protected static ?int $navigationSort = 6;

    protected string $view = 'filament.pages.settings.options-form';

    public ?array $data = [];

    public static function canAccess(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    public function mount(): void
    {
        $this->form->fill($this->getSettingsData());
    }

    public function form(Schema $schema): Schema
    {
        $servers = Server::orderBy('sort')->get(['id', 'name']);

        $sections = [];
        foreach ($servers as $server) {
            $sections[] = Section::make($server->name ?: 'Сервер #'.$server->id)
                ->schema([
                    TextInput::make("donat_rate_{$server->id}")
                        ->label('Курс (₽ за единицу игровой валюты)')
                        ->numeric()
                        ->step('0.01'),
                    TextInput::make("donat_min_{$server->id}")
                        ->label('Минимальный донат (₽)')
                        ->numeric()
                        ->step('0.01'),
                    TextInput::make("donat_max_{$server->id}")
                        ->label('Максимальный донат (₽)')
                        ->numeric()
                        ->step('0.01'),
                ])
                ->columns(3)
                ->collapsible();
        }

        if ($sections === []) {
            $sections[] = Section::make('Серверы не найдены')->schema([]);
        }

        return $schema->components($sections)->statePath('data');
    }

    protected function getSettingsData(): array
    {
        $settings = Option::all()->pluck('value', 'key')->toArray();

        $servers = Server::pluck('id');
        $data = [];
        foreach ($servers as $id) {
            foreach (['donat_rate_', 'donat_min_', 'donat_max_'] as $prefix) {
                $key = $prefix.$id;
                $data[$key] = $settings[$key] ?? '';
            }
        }

        return $data;
    }

    public function save(): void
    {
        $data = $this->form->getState();

        foreach ($data as $key => $value) {
            Option::updateOrCreate(
                ['key' => $key],
                ['value' => $value ?? '']
            );
        }

        Cache::forget('options');

        Notification::make()->title('Курсы сохранены')->success()->send();
    }

    protected function getFormActions(): array
    {
        return [
            \Filament\Actions\Action::make('save')->label('Сохранить')->submit('save'),
        ];
    }
}

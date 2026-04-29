<?php

namespace App\Filament\Resources\Users\Pages;

use App\Filament\Resources\Users\UserResource;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Filament\Support\Icons\Heroicon;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('warehouse')
                ->label('Склад игрока')
                ->icon(Heroicon::OutlinedArchiveBox)
                ->color('info')
                ->url(fn (): string => route('filament.admin.resources.inventories.index', [
                    'tableFilters[user_id][value]' => $this->record->id,
                ])),
            Action::make('user_logs')
                ->label('Логи юзера')
                ->icon(Heroicon::OutlinedDocumentMagnifyingGlass)
                ->color('gray')
                ->url(fn (): string => route('filament.admin.pages.user-logs', ['user' => $this->record->id])),
            DeleteAction::make(),
        ];
    }
}

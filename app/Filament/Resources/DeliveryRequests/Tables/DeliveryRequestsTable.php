<?php

namespace App\Filament\Resources\DeliveryRequests\Tables;

use App\Models\DeliveryRequest;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class DeliveryRequestsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('date_request', 'desc')
            ->columns([
                ImageColumn::make('item_icon')->label('')->size(36),
                TextColumn::make('user.name')->label('Пользователь')->searchable()->sortable(),
                TextColumn::make('item')->label('Предмет')->searchable()->limit(35),
                TextColumn::make('item_id')->label('Item ID')->searchable(),
                TextColumn::make('amount')->label('Кол-во')->alignCenter(),
                TextColumn::make('price')->label('Цена')->money('RUB'),
                TextColumn::make('price_cap')->label('Cap')->money('RUB')->placeholder('—'),
                TextColumn::make('status')->label('Статус')->badge()
                    ->formatStateUsing(fn (int $state): string => match ($state) {
                        0 => 'Новая',
                        1 => 'В обработке',
                        2 => 'Завершена',
                        3 => 'Отменена',
                        4 => 'Waxpeer',
                        8 => 'Skinsback',
                        default => (string) $state,
                    })
                    ->color(fn (int $state): string => match ($state) {
                        0 => 'warning',
                        1 => 'info',
                        2 => 'success',
                        3 => 'danger',
                        default => 'gray',
                    }),
                TextColumn::make('date_request')->label('Дата')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->label('Статус')->options([
                    0 => 'Новая',
                    1 => 'В обработке',
                    2 => 'Завершена',
                    3 => 'Отменена',
                    4 => 'Waxpeer',
                    8 => 'Skinsback',
                ]),
            ])
            ->recordActions([
                EditAction::make(),
                Action::make('inprocessing')->label('В обработку')->icon(Heroicon::OutlinedArrowPath)
                    ->visible(fn (DeliveryRequest $r) => $r->status === 0)
                    ->action(fn (DeliveryRequest $r) => $r->update(['status' => 1])),
                Action::make('completed')->label('Завершить')->icon(Heroicon::OutlinedCheckCircle)->color('success')
                    ->visible(fn (DeliveryRequest $r) => in_array($r->status, [0, 1, 4, 8]))
                    ->requiresConfirmation()
                    ->action(fn (DeliveryRequest $r) => $r->update(['status' => 2, 'date_execution' => now()])),
                Action::make('canceled')->label('Отменить')->icon(Heroicon::OutlinedXCircle)->color('danger')
                    ->visible(fn (DeliveryRequest $r) => $r->status !== 3 && $r->status !== 2)
                    ->requiresConfirmation()
                    ->action(fn (DeliveryRequest $r) => $r->update(['status' => 3])),
            ]);
    }
}

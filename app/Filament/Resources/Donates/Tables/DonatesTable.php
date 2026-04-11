<?php

namespace App\Filament\Resources\Donates\Tables;

use App\Models\Donate;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class DonatesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('user.avatar')
                    ->label('')
                    ->circular()
                    ->defaultImageUrl(fn ($record): string => 'https://ui-avatars.com/api/?name='.urlencode($record->user?->name ?? '?').'&background=2d2d2d&color=ff8c00&size=64')
                    ->size(36),

                TextColumn::make('user.name')
                    ->label('Игрок')
                    ->searchable()
                    ->sortable()
                    ->description(fn ($record): ?string => $record->steam_id ? 'Steam: '.$record->steam_id : null)
                    ->weight('semibold'),

                TextColumn::make('amount')
                    ->label('Сумма')
                    ->money('RUB')
                    ->sortable()
                    ->weight('bold')
                    ->color('success'),

                TextColumn::make('bonus_amount')
                    ->label('Бонус')
                    ->money('RUB')
                    ->sortable()
                    ->badge()
                    ->color(fn ($state): string => $state > 0 ? 'success' : 'gray'),

                TextColumn::make('item.name_ru')
                    ->label('Товар')
                    ->searchable()
                    ->placeholder('—')
                    ->description(fn ($record): ?string => $record->var_id ? 'Вариант #'.$record->var_id : null)
                    ->limit(30),

                TextColumn::make('count')
                    ->label('Кол-во')
                    ->numeric()
                    ->sortable()
                    ->placeholder('—')
                    ->alignCenter(),

                TextColumn::make('status')
                    ->label('Статус')
                    ->badge()
                    ->color(fn (int $state): string => match ($state) {
                        1 => 'success',
                        2 => 'danger',
                        default => 'warning',
                    })
                    ->formatStateUsing(fn (int $state): string => match ($state) {
                        1 => 'Завершён',
                        2 => 'Ошибка',
                        default => 'Ожидает',
                    })
                    ->sortable(),

                TextColumn::make('payment_system')
                    ->label('Система')
                    ->badge()
                    ->color('info')
                    ->searchable(),

                TextColumn::make('payment_id')
                    ->label('ID платежа')
                    ->searchable()
                    ->copyable()
                    ->copyMessage('Скопировано!')
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('created_at')
                    ->label('Дата')
                    ->dateTime('d.m.Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('status')
                    ->label('Статус')
                    ->options([
                        0 => 'Ожидает',
                        1 => 'Завершён',
                        2 => 'Ошибка',
                    ]),

                SelectFilter::make('payment_system')
                    ->label('Платёжная система')
                    ->options(
                        fn (): array => Donate::distinct()
                            ->whereNotNull('payment_system')
                            ->pluck('payment_system', 'payment_system')
                            ->toArray()
                    ),

                Filter::make('today')
                    ->label('Сегодня')
                    ->query(fn (Builder $query): Builder => $query->whereDate('created_at', today())),

                Filter::make('this_week')
                    ->label('Эта неделя')
                    ->query(fn (Builder $query): Builder => $query->where('created_at', '>=', now()->startOfWeek())),

                Filter::make('this_month')
                    ->label('Этот месяц')
                    ->query(fn (Builder $query): Builder => $query->where('created_at', '>=', now()->startOfMonth())),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}

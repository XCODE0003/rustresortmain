<?php

namespace App\Filament\Widgets;

use Filament\Actions\BulkActionGroup;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class RecentPaymentsWidget extends TableWidget
{
    protected static ?string $heading = 'Recent Payments';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                \App\Models\Donate::query()
                    ->latest()
                    ->limit(10)
            )
            ->columns([
                \Filament\Tables\Columns\TextColumn::make('user.name')
                    ->label('User')
                    ->searchable(),
                \Filament\Tables\Columns\TextColumn::make('amount')
                    ->label('Amount')
                    ->money('RUB'),
                \Filament\Tables\Columns\TextColumn::make('payment_system')
                    ->label('Gateway')
                    ->badge(),
                \Filament\Tables\Columns\TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (int $state): string => match ($state) {
                        1 => 'success',
                        2 => 'danger',
                        default => 'warning',
                    })
                    ->formatStateUsing(fn (int $state): string => match ($state) {
                        1 => 'Completed',
                        2 => 'Failed',
                        default => 'Pending',
                    }),
                \Filament\Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime(),
            ])
            ->paginated(false);
    }
}

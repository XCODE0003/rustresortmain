<?php

namespace App\Filament\Resources\Streams;

use App\Filament\Resources\Streams\Pages\CreateStream;
use App\Filament\Resources\Streams\Pages\EditStream;
use App\Filament\Resources\Streams\Pages\ListStreams;
use App\Filament\Resources\Streams\Schemas\StreamForm;
use App\Filament\Resources\Streams\Tables\StreamsTable;
use App\Filament\Support\AdminResource;
use App\Models\Stream;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class StreamResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = Stream::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedVideoCamera;

    protected static \UnitEnum|string|null $navigationGroup = 'Content';

    protected static ?int $navigationSort = 6;

    protected static ?string $navigationLabel = 'Стримы';

    public static function form(Schema $schema): Schema
    {
        return StreamForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return StreamsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListStreams::route('/'),
            'create' => CreateStream::route('/create'),
            'edit' => EditStream::route('/{record}/edit'),
        ];
    }
}

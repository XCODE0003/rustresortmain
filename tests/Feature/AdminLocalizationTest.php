<?php

use App\Filament\Pages\Bans\BansPage;
use App\Filament\Resources\Articles\ArticleResource;
use App\Filament\Resources\Servers\ServerResource;
use App\Filament\Resources\Users\UserResource;

it('returns russian labels for admin resources and pages', function (): void {
    app()->setLocale('ru');

    expect(UserResource::getNavigationGroup())->toBe('Пользователи')
        ->and(UserResource::getNavigationLabel())->toBe('Пользователи')
        ->and(UserResource::getModelLabel())->toBe('пользователь')
        ->and(UserResource::getPluralModelLabel())->toBe('пользователи')
        ->and(ServerResource::getNavigationGroup())->toBe('Игровые серверы')
        ->and(ServerResource::getNavigationLabel())->toBe('Серверы')
        ->and(ArticleResource::getNavigationLabel())->toBe('Статьи')
        ->and(BansPage::getNavigationGroup())->toBe('Пользователи')
        ->and(__('Email address'))->toBe('Адрес email')
        ->and(__('Status'))->toBe('Статус');
});

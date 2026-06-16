<?php

namespace App\Telegram\Services;

use Illuminate\Support\Facades\Cache;

/**
 * Сервис для управления состояниями диалогов Telegram (порт из старого проекта).
 */
class ConversationService
{
    protected const CACHE_PREFIX = 'telegram_conversation_';

    /** Время жизни состояния (сек) — 1 час. */
    protected const TTL = 3600;

    public static function getState(int $telegramId): ?array
    {
        return Cache::get(self::CACHE_PREFIX.$telegramId);
    }

    public static function setState(int $telegramId, string $scene, string $step, array $data = []): void
    {
        Cache::put(self::CACHE_PREFIX.$telegramId, [
            'scene' => $scene,
            'step' => $step,
            'data' => $data,
            'updated_at' => now()->toDateTimeString(),
        ], self::TTL);
    }

    public static function updateData(int $telegramId, array $newData): void
    {
        $state = self::getState($telegramId);
        if ($state) {
            $state['data'] = array_merge($state['data'] ?? [], $newData);
            $state['updated_at'] = now()->toDateTimeString();
            Cache::put(self::CACHE_PREFIX.$telegramId, $state, self::TTL);
        }
    }

    public static function nextStep(int $telegramId, string $step): void
    {
        $state = self::getState($telegramId);
        if ($state) {
            $state['step'] = $step;
            $state['updated_at'] = now()->toDateTimeString();
            Cache::put(self::CACHE_PREFIX.$telegramId, $state, self::TTL);
        }
    }

    public static function clearState(int $telegramId): void
    {
        Cache::forget(self::CACHE_PREFIX.$telegramId);
    }

    public static function inScene(int $telegramId, ?string $scene = null): bool
    {
        $state = self::getState($telegramId);
        if (! $state) {
            return false;
        }
        if ($scene !== null) {
            return ($state['scene'] ?? null) === $scene;
        }

        return true;
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BucketItem;
use App\Models\Option;
use App\Models\ShopItem;
use App\Models\Shopping;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * API для внутриигрового плагина: выдача обычных товаров (bucket).
 *
 * Плагин периодически опрашивает getUser, получает список ожидающих выдачи
 * предметов, выдаёт их игроку по ShortName/RustID, затем подтверждает выдачу
 * через deleteItem. Контракт ответов сохранён совместимым со старым проектом.
 */
class ShopController extends Controller
{
    /**
     * Список товаров игрока, ожидающих выдачи, + баланс.
     * GET /api/shop/getUser?api_key=...&userID=<steamid>
     */
    public function getUser(Request $request): JsonResponse
    {
        if ($error = $this->guard($request)) {
            return $error;
        }

        $steamId = (string) $request->input('userID', '');
        if ($steamId === '') {
            return $this->error('userID is missed');
        }

        $user = User::where('steam_id', $steamId)->first();
        if (! $user) {
            return $this->error('userID not find');
        }

        $bucket = BucketItem::where('user_id', $user->id)
            ->orderBy('id')
            ->get()
            ->map(fn (BucketItem $item) => $this->presentBucketItem($item))
            ->filter()
            ->values();

        return response()->json([
            'status' => 'success',
            'result' => [
                'UserBalance' => $user->balance,
                'bucket' => $bucket,
            ],
        ]);
    }

    /**
     * Подтверждение выдачи: убираем товар из bucket.
     * POST /api/shop/deleteItem  { api_key, userID, ID }
     */
    public function deleteItem(Request $request): JsonResponse
    {
        if ($error = $this->guard($request)) {
            return $error;
        }

        $steamId = (string) $request->input('userID', '');
        $id = $request->input('ID');
        if ($steamId === '' || $id === null) {
            return $this->error('userID|ID is missed');
        }

        $user = User::where('steam_id', $steamId)->first();
        if (! $user) {
            return $this->error('userID not find');
        }

        $bucketItem = BucketItem::where('id', $id)
            ->where('user_id', $user->id)
            ->first();

        if (! $bucketItem) {
            return $this->error('Item not find in bucket');
        }

        $payload = $this->presentBucketItem($bucketItem);
        $bucketItem->delete();

        return response()->json([
            'status' => 'success',
            'result' => [
                'item' => $payload,
            ],
        ]);
    }

    /**
     * Есть ли у игрока в bucket товар с данным shop_item_id.
     * POST /api/shop/hasItem  { api_key, userID, itemID }
     */
    public function hasItem(Request $request): JsonResponse
    {
        if ($error = $this->guard($request)) {
            return $error;
        }

        $steamId = (string) $request->input('userID', '');
        $itemId = $request->input('itemID');
        if ($steamId === '' || $itemId === null) {
            return $this->error('userID|itemID is missed');
        }

        $user = User::where('steam_id', $steamId)->first();
        if (! $user) {
            return $this->error('userID not find');
        }

        $bucketItem = BucketItem::where('user_id', $user->id)
            ->where('shop_item_id', $itemId)
            ->orderBy('id')
            ->first();

        if (! $bucketItem) {
            return $this->error('itemID not find');
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'itemID' => $bucketItem->id,
            ],
        ]);
    }

    /**
     * Подтверждение выдачи услуги (RCON-команды) — помечаем запись shopping
     * доставленной. Сохранено для совместимости со старым плагином.
     * POST /api/shop/reportService  { api_key, userID, Service, Status }
     */
    public function reportService(Request $request): JsonResponse
    {
        $data = $this->payload($request);

        if (($data['api_key'] ?? null) !== $this->apiKey()) {
            return $this->error('API key is invalid.');
        }

        if (! isset($data['userID'], $data['Service'], $data['Status'])) {
            return $this->error('userID|Service|Status is missed');
        }

        $shopping = Shopping::query()
            ->where('command', 'LIKE', '%'.$data['userID'].'%')
            ->where('command', 'LIKE', '%'.$data['Service'].'%')
            ->where('status', 0)
            ->latest()
            ->first();

        if (! $shopping) {
            return $this->error('User service not found');
        }

        if ($data['Status'] === 'success') {
            $shopping->update(['status' => 1]);
        }

        return response()->json([
            'status' => 'success',
            'result' => 'ok',
        ]);
    }

    /**
     * Представление товара bucket в формате, ожидаемом плагином.
     */
    protected function presentBucketItem(BucketItem $bucket): ?array
    {
        $item = $bucket->shopItem ?? ShopItem::find($bucket->shop_item_id);
        if (! $item) {
            return null;
        }

        // IsItem выводим логически: всё, что попало в bucket — выдаваемый предмет,
        // т.к. услуги (is_command) сюда не складываются. На колонку is_item в БД
        // не опираемся — у импортированных товаров она ненадёжна.
        $isBlueprint = (bool) $item->is_blueprint;

        return [
            'ID' => (string) $bucket->id,
            'Server' => $bucket->server_name,
            'Name' => $item->name_en,
            'ItemID' => $bucket->shop_item_id,
            'RustID' => $bucket->rust_id,
            'SteamID' => $bucket->steam_id,
            'Amount' => $bucket->quantity,
            'ShortName' => $item->short_name,
            'Command' => (string) ($item->command ?? ''),
            'WipeBlock' => (int) $item->wipe_block,
            'ImageUrl' => $item->image,
            'IsBlueprint' => $isBlueprint,
            'IsCommand' => false,
            'IsItem' => ! $isBlueprint,
        ];
    }

    /**
     * Проверка api_key. Возвращает JSON-ошибку либо null, если ключ верный.
     */
    protected function guard(Request $request): ?JsonResponse
    {
        $key = $request->input('api_key');
        if ($key === null || $key !== $this->apiKey()) {
            return $this->error('API key is invalid.');
        }

        return null;
    }

    protected function apiKey(): ?string
    {
        return Option::getValue('game_api_key');
    }

    /**
     * Старый плагин иногда шлёт тело как единственный JSON-ключ — поддерживаем
     * оба варианта (нормальные параметры и "json-в-ключе").
     */
    protected function payload(Request $request): array
    {
        $all = $request->all();

        if (count($all) === 1) {
            $firstKey = array_key_first($all);
            $decoded = json_decode((string) $firstKey, true);
            if (is_array($decoded)) {
                return $decoded;
            }
        }

        return $all;
    }

    protected function error(string $message, int $status = 200): JsonResponse
    {
        return response()->json([
            'status' => 'error',
            'result' => $message,
        ], $status);
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BucketItem;
use App\Models\Option;
use App\Models\ShopItem;
use App\Models\Shopping;
use App\Models\ShopPurchase;
use App\Models\ShopSet;
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
        $shopItemId = $bucketItem->shop_item_id;
        $serverId = $bucketItem->server_id;
        // Привилегия? — определяем ДО удаления записи.
        $isCommand = (bool) ($bucketItem->shopItem?->is_command)
            || ($bucketItem->command !== null && trim((string) $bucketItem->command) !== '');
        $bucketItem->delete();

        // Обычный товар выдан в игре — убираем его из «купленных» в ЛК (списываем 1 шт.).
        // Привилегии (is_command) НЕ списываем: они остаются в ЛК как активная подписка
        // со своим сроком (validity), пока не истекут — иначе VIP пропадал бы из ЛК
        // сразу после захода игрока на сервер.
        if (! $isCommand) {
            $this->consumePurchase($user->id, (int) $shopItemId, $serverId !== null ? (int) $serverId : null);
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'item' => $payload,
            ],
        ]);
    }

    /**
     * Списывает одну единицу соответствующей покупки (ShopPurchase) после выдачи
     * предмета в игре: count-1, либо удаляет запись при достижении нуля.
     */
    protected function consumePurchase(int $userId, int $shopItemId, ?int $serverId): void
    {
        $base = ShopPurchase::where('user_id', $userId)->where('item_id', $shopItemId);

        $sameServer = clone $base;
        $serverId === null ? $sameServer->whereNull('server_id') : $sameServer->where('server_id', $serverId);

        $purchase = $sameServer->orderBy('id')->first() ?? $base->orderBy('id')->first();

        if (! $purchase) {
            return;
        }

        if ((int) $purchase->count > 1) {
            $purchase->decrement('count');
        } else {
            $purchase->delete();
        }
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
     * Список URL иконок всех товаров — плагин подгружает их для отрисовки.
     * POST /api/shop/getImageUrls  { api_key }
     */
    public function getImageUrls(Request $request): JsonResponse
    {
        $data = $this->payload($request);

        if (($data['api_key'] ?? null) !== $this->apiKey()) {
            return $this->error('API key is invalid.');
        }

        return response()->json([
            'status' => 'success',
            'result' => $this->imageList(),
        ], 200, [], JSON_UNESCAPED_SLASHES);
    }

    /**
     * Тот же список иконок, GET-вариант.
     * GET /api/v2/shop/getImageUrls?api_key=...
     */
    public function getImageUrlsV2(Request $request): JsonResponse
    {
        if ($error = $this->guard($request)) {
            return $error;
        }

        return response()->json([
            'status' => 'success',
            'result' => $this->imageList(),
        ], 200, [], JSON_UNESCAPED_SLASHES);
    }

    /**
     * @return list<array{ShortName: ?string, ImageUrl: ?string}>
     */
    protected function imageList(): array
    {
        // Товары (по short_name) + наборы (shop_sets) — чтобы плагин предзагрузил и их
        // картинки тоже (Farmer Kit и т.п.). Поле Name даёт запасной ключ сопоставления.
        $items = ShopItem::query()
            ->select(['name_en', 'short_name', 'image'])
            ->get()
            ->map(fn (ShopItem $item) => [
                'ShortName' => $item->short_name,
                'Name' => $item->name_en,
                'ImageUrl' => $this->imageUrl($item->image),
            ]);

        $sets = ShopSet::query()
            ->select(['name_en', 'image'])
            ->get()
            ->map(fn (ShopSet $set) => [
                'ShortName' => null,
                'Name' => $set->name_en,
                'ImageUrl' => $this->imageUrl($set->image),
            ]);

        return $items->concat($sets)->values()->all();
    }

    /**
     * Абсолютный URL иконки. Картинки лежат в public/images, домен берём из
     * app.url (валидный сертификат), чтобы плагин гарантированно их скачал.
     */
    protected function imageUrl(?string $image): ?string
    {
        if ($image === null || $image === '') {
            return null;
        }

        return rtrim((string) config('app.url'), '/').'/'.ltrim($image, '/');
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

        // Привилегия (is_command): отдаём готовую команду из bucket.command (она
        // резолвится при покупке). Плагин исполняет Command, а ShortName/Amount
        // игнорирует. Для совместимости со старыми записями (без сохранённой команды)
        // подставляем %steamid%/%var% в шаблон item->command на лету.
        $isCommand = (bool) $item->is_command
            || ($bucket->command !== null && trim((string) $bucket->command) !== '');

        if ($isCommand) {
            $command = (string) ($bucket->command ?: $this->resolveCommandFallback($item, $bucket));
            $isBlueprint = false;
        } else {
            $command = '';
            $isBlueprint = (bool) $item->is_blueprint;
        }

        return [
            'ID' => (string) $bucket->id,
            'Server' => $bucket->server_name,
            'Name' => $item->name_en,
            'ItemID' => $bucket->shop_item_id,
            'RustID' => $bucket->rust_id,
            'SteamID' => $bucket->steam_id,
            'Amount' => $bucket->quantity,
            'ShortName' => $item->short_name,
            'Command' => $command,
            'WipeBlock' => (int) $item->wipe_block,
            'ImageUrl' => $this->imageUrl($item->image),
            'IsBlueprint' => $isBlueprint,
            'IsCommand' => $isCommand,
            'IsItem' => ! $isCommand && ! $isBlueprint,
        ];
    }

    /**
     * Резолв команды для bucket-записей без сохранённой команды (старые записи):
     * подставляет SteamID/var в шаблон item->command. Поддерживает оба стиля
     * плейсхолдеров — {steamid}/{var} и %steamid%/%var%.
     */
    protected function resolveCommandFallback(ShopItem $item, BucketItem $bucket): string
    {
        $template = (string) ($item->command ?? '');
        if ($template === '') {
            return '';
        }

        $steamId = (string) ($bucket->steam_id ?? '');
        $var = (string) ($bucket->var_id ?? '');
        $amount = (string) ($item->amount ?? '');

        return strtr($template, [
            '{steamid}' => $steamId,
            '{amount}' => $amount,
            '{var}' => $var,
            '%steamid%' => $steamId,
            '%amount%' => $amount,
            '%var%' => $var,
        ]);
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

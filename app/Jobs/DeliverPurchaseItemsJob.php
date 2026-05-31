<?php

namespace App\Jobs;

use App\Models\BucketItem;
use App\Models\Donate;
use App\Models\Server;
use App\Models\ShopItem;
use App\Models\Shopping;
use App\Models\ShopPurchase;
use App\Models\ShopSet;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class DeliverPurchaseItemsJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public Donate $donate,
    ) {
        $this->onQueue('default');
    }

    public function handle(): void
    {
        // Набор (сет): покупается одним лотом и раскладывается на отдельные
        // предметы в корзине (каждый вложенный товар — самостоятельная выдача).
        if ($this->donate->set_id) {
            $this->deliverSet();

            return;
        }

        $item = ShopItem::find($this->donate->item_id);

        if (! $item) {
            Log::warning("ShopItem not found for donate {$this->donate->id}");

            return;
        }

        // Две разные схемы выдачи:
        //  - Услуги/привилегии/рейты/изучения (is_command=1) — RCON-команда через
        //    таблицу shopping (addgroup / grantperm ...).
        //  - Обычные товары (оружие, ресурсы, патроны...) — кладём в bucket, их
        //    выдаёт внутриигровой плагин по short_name. RCON не используется,
        //    т.к. у таких предметов нет команды (а у части в БД лежит мусор 0/1).
        if ($item->is_command) {
            $this->deliverViaRcon($item);
        } else {
            $this->deliverToBucket($item);
        }

        $this->recordPurchase($item);

        Log::info("Item delivered for donate {$this->donate->id} (".($item->is_command ? 'rcon' : 'bucket').')');
    }

    /**
     * Услуга: формируем команду и кладём в очередь shopping, выдаём сразу.
     */
    protected function deliverViaRcon(ShopItem $item): void
    {
        $command = $this->generateCommand($item, $this->donate);

        // Не создаём пустых записей — пустая команда ничего не выдаёт, а очередь
        // помечает её как доставленную, маскируя проблему.
        if (trim($command) === '' || $command === '0') {
            Log::warning("Empty command for is_command item {$item->id}, donate {$this->donate->id} — nothing to deliver");

            return;
        }

        Shopping::create([
            'user_id' => $this->donate->user_id,
            'command' => $command,
            'status' => 0,
            'server' => $this->donate->server ?? $item->server ?? 0,
        ]);

        // Не ждём следующий тик планировщика — пытаемся выдать сразу.
        ProcessShoppingQueueJob::dispatchSync();
    }

    /**
     * Обычный товар: создаём записи в bucket (по одной на каждую купленную штуку),
     * откуда их заберёт игровой плагин.
     */
    protected function deliverToBucket(ShopItem $item): void
    {
        $steamId = (string) ($this->donate->steam_id ?? $this->donate->user?->steam_id ?? '');
        $serverId = $this->donate->server ?? $item->server ?? null;
        $server = $serverId ? Server::find($serverId) : null;
        $count = max(1, (int) ($this->donate->count ?? 1));

        $amount = $this->resolveAmount($item, $this->donate);

        for ($i = 0; $i < $count; $i++) {
            BucketItem::create([
                'user_id' => $this->donate->user_id,
                'shop_item_id' => $item->id,
                'rust_id' => (int) ($item->item_id ?? 0),
                'var_id' => $this->donate->var_id,
                'price' => $item->price,
                'quantity' => $amount,
                'wipe_block' => (int) $item->wipe_block,
                'steam_id' => $steamId,
                'server_name' => $server?->name,
                'server_id' => $serverId,
            ]);
        }

        Log::info("Bucket: {$count}x{$amount} {$item->short_name} for donate {$this->donate->id}");
    }

    /**
     * Доставка набора (сета): раскладываем items сета на отдельные предметы в
     * корзине (каждый — самостоятельная запись по своему short_name + отдельная
     * покупка), количество = состав × множитель покупки.
     */
    protected function deliverSet(): void
    {
        $set = ShopSet::find($this->donate->set_id);
        if (! $set) {
            Log::warning("ShopSet not found for donate {$this->donate->id}");

            return;
        }

        $steamId = (string) ($this->donate->steam_id ?? $this->donate->user?->steam_id ?? '');
        $serverId = $this->donate->server ?? $set->server ?? null;
        // server=-1 у старых сетов = «все серверы» → не привязываем к серверу.
        if ($serverId !== null && (int) $serverId < 0) {
            $serverId = null;
        }
        $server = $serverId ? Server::find($serverId) : null;
        $count = max(1, (int) ($this->donate->count ?? 1));

        foreach ((array) $set->items as $entry) {
            $contentId = (int) ($entry['id'] ?? 0);
            $contentQty = max(1, (int) ($entry['amount'] ?? 1)) * $count;

            $content = ShopItem::find($contentId);
            if (! $content) {
                Log::warning("Set {$set->id}: content item {$contentId} not found");

                continue;
            }

            BucketItem::create([
                'user_id' => $this->donate->user_id,
                'shop_item_id' => $content->id,
                'rust_id' => (int) ($content->item_id ?? 0),
                'var_id' => null,
                'price' => 0,
                'quantity' => $contentQty,
                'wipe_block' => (int) $content->wipe_block,
                'steam_id' => $steamId,
                'server_name' => $server?->name,
                'server_id' => $serverId,
            ]);

            ShopPurchase::create([
                'item_id' => $content->id,
                'user_id' => $this->donate->user_id,
                'count' => 1,
                'server_id' => $serverId,
                'validity' => null,
            ]);
        }

        Log::info("Set {$set->id} → ".count((array) $set->items)." items for donate {$this->donate->id}");
    }

    protected function recordPurchase(ShopItem $item): void
    {
        $validityDate = null;
        if ($item->wipe_block) {
            $server = Server::find($this->donate->server);
            $validityDate = $server?->next_wipe;
        } elseif ($item->is_command && $this->donate->var_id) {
            // variation_id = количество дней (например VIP 6д, 30д)
            $days = (int) $this->donate->var_id;
            if ($days > 0) {
                $validityDate = now()->addDays($days);
            }
        }

        ShopPurchase::create([
            'item_id' => $item->id,
            'user_id' => $this->donate->user_id,
            'count' => $this->donate->count ?? 1,
            'server_id' => $this->donate->server,
            'validity' => $validityDate,
        ]);
    }

    /**
     * Итоговое количество предмета с учётом выбранной вариации.
     */
    protected function resolveAmount(ShopItem $item, Donate $donate): int
    {
        $amount = $item->amount;

        if ($donate->var_id !== null && is_array($item->variations)) {
            $variation = collect($item->variations)
                ->firstWhere(fn ($v) => (string) ($v['id'] ?? $v['variation_id'] ?? '') === (string) $donate->var_id);
            if ($variation) {
                $amount = $variation['amount'] ?? $variation['quantity'] ?? $amount;
            }
        }

        return max(1, (int) $amount);
    }

    protected function generateCommand(ShopItem $item, Donate $donate): string
    {
        $command = (string) ($item->command ?? '');
        $amount = $item->amount;
        $varValue = $donate->var_id;

        if ($donate->var_id !== null && is_array($item->variations)) {
            $variation = collect($item->variations)
                ->firstWhere(fn ($v) => (string) ($v['id'] ?? $v['variation_id'] ?? '') === (string) $donate->var_id);
            if ($variation) {
                $amount = $variation['amount'] ?? $variation['quantity'] ?? $amount;
                $varValue = $variation['variation_id'] ?? $variation['id'] ?? $varValue;
            }
        }

        $steamId = (string) ($donate->steam_id ?? $donate->user?->steam_id ?? '');
        $amountStr = (string) ($amount ?? '');
        $varStr = (string) ($varValue ?? '');

        // Поддерживаем оба стиля placeholder'ов: {steamid} (новый) и %steamid% (старая БД).
        return strtr($command, [
            '{steamid}' => $steamId,
            '{amount}' => $amountStr,
            '{var}' => $varStr,
            '%steamid%' => $steamId,
            '%amount%' => $amountStr,
            '%var%' => $varStr,
        ]);
    }
}

<?php

namespace App\Jobs;

use App\Models\Donate;
use App\Models\ShopItem;
use App\Models\ShopPurchase;
use App\Models\Shopping;
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
        $item = ShopItem::find($this->donate->item_id);

        if (! $item) {
            Log::warning("ShopItem not found for donate {$this->donate->id}");

            return;
        }

        $command = $this->generateCommand($item, $this->donate);

        Shopping::create([
            'user_id' => $this->donate->user_id,
            'command' => $command,
            'status' => 0,
            'server' => $this->donate->server ?? $item->server ?? 0,
        ]);

        $validityDate = null;
        if ($item->wipe_block) {
            $server = \App\Models\Server::find($this->donate->server);
            $validityDate = $server?->next_wipe;
        }

        ShopPurchase::create([
            'item_id' => $item->id,
            'user_id' => $this->donate->user_id,
            'count' => $this->donate->count ?? 1,
            'server_id' => $this->donate->server,
            'validity' => $validityDate,
        ]);

        Log::info("Item delivered for donate {$this->donate->id}, command queued in shopping table");
    }

    protected function generateCommand(ShopItem $item, Donate $donate): string
    {
        $command = $item->command;
        $amount = $item->amount;

        if ($donate->var_id !== null && is_array($item->variations)) {
            $variation = collect($item->variations)->firstWhere('id', $donate->var_id);
            if ($variation) {
                $amount = $variation['amount'] ?? $amount;
            }
        }

        $command = str_replace('{steamid}', $donate->steam_id ?? $donate->user->steam_id, $command);
        $command = str_replace('{amount}', $amount, $command);

        return $command;
    }
}

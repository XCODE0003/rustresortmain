<?php

namespace App\Console\Commands;

use App\Models\ShopItem;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

/**
 * Скачивает недостающие картинки товаров с production (rustresort.com).
 *
 * Проходит по всем активным shop_items, проверяет наличие файла в public/,
 * и если файла нет — скачивает с MAIN по тому же хешу.
 *
 *   php artisan shop:download-images              # apply
 *   php artisan shop:download-images --dry        # preview без скачивания
 *   php artisan shop:download-images --include-hidden  # включая status=0
 *   php artisan shop:download-images --source=https://rustresort.com/storage/
 */
class DownloadMissingImages extends Command
{
    protected $signature = 'shop:download-images
        {--source=https://rustresort.com/storage/ : URL prefix where images live on MAIN}
        {--dry : Preview without downloading}
        {--include-hidden : Also process status=0 items}
        {--force : Re-download even if file exists locally}';

    protected $description = 'Скачивает недостающие картинки товаров с production сервера';

    public function handle(): int
    {
        $source = rtrim($this->option('source'), '/').'/';
        $isDry = (bool) $this->option('dry');
        $force = (bool) $this->option('force');

        $query = ShopItem::query()
            ->whereNotNull('image')
            ->where('image', '!=', '');

        if (! $this->option('include-hidden')) {
            $query->where('status', 1);
        }

        $items = $query->get(['id', 'name_ru', 'image']);

        $this->info('=== Audit ===');
        $this->info("Checking {$items->count()} items, source: {$source}");
        $this->line('');

        $missing = [];
        $existing = 0;
        $invalidPath = 0;

        foreach ($items as $item) {
            $relativePath = ltrim($item->image, '/');
            if ($relativePath === '' || str_contains($relativePath, '..')) {
                $invalidPath++;
                continue;
            }

            $localPath = public_path($relativePath);

            if (! $force && file_exists($localPath) && filesize($localPath) > 100) {
                $existing++;
                continue;
            }

            $missing[] = [
                'item' => $item,
                'local' => $localPath,
                'relative' => $relativePath,
            ];
        }

        $this->info("Already present: {$existing}");
        if ($invalidPath > 0) {
            $this->warn("Invalid paths (skipped): {$invalidPath}");
        }
        $this->info('Missing (will download): '.count($missing));
        $this->line('');

        if (empty($missing)) {
            $this->info('✅ Nothing to download.');

            return self::SUCCESS;
        }

        if ($isDry) {
            foreach ($missing as $m) {
                $url = $source.$m['relative'];
                $this->line(sprintf('  [DRY] %-30s ← %s', $m['item']->name_ru, $url));
            }

            return self::SUCCESS;
        }

        $bar = $this->output->createProgressBar(count($missing));
        $bar->setFormat(' %current%/%max% [%bar%] %percent:3s%% — %message%');
        $bar->setMessage('starting…');
        $bar->start();

        $downloaded = 0;
        $failed = [];

        foreach ($missing as $m) {
            $bar->setMessage($m['item']->name_ru);

            // Try primary URL first, then fallback without "images/" segment
            $candidates = [
                $source.$m['relative'],                            // .../storage/images/HASH.png
                $source.basename($m['relative']),                  // .../storage/HASH.png
                'https://rustresort.com/'.$m['relative'],          // direct (no /storage/)
            ];

            $ok = false;
            $lastError = '';

            foreach ($candidates as $url) {
                try {
                    $response = Http::timeout(30)
                        ->withOptions(['allow_redirects' => true])
                        ->get($url);

                    if (! $response->ok()) {
                        $lastError = "HTTP {$response->status()}";
                        continue;
                    }

                    $body = $response->body();
                    if (strlen($body) < 100) {
                        $lastError = 'body too small ('.strlen($body).' bytes)';
                        continue;
                    }

                    // Reject HTML error pages
                    $head = substr($body, 0, 200);
                    if (str_contains(strtolower($head), '<!doctype') || str_contains(strtolower($head), '<html')) {
                        $lastError = 'got HTML page, not image';
                        continue;
                    }

                    // Ensure dir exists
                    $dir = dirname($m['local']);
                    if (! is_dir($dir)) {
                        mkdir($dir, 0755, true);
                    }

                    file_put_contents($m['local'], $body);
                    $downloaded++;
                    $ok = true;
                    break;
                } catch (\Throwable $e) {
                    $lastError = $e->getMessage();
                }
            }

            if (! $ok) {
                $failed[] = [
                    'item' => $m['item'],
                    'tried' => $candidates,
                    'error' => $lastError,
                ];
            }

            $bar->advance();
        }

        $bar->setMessage('done');
        $bar->finish();
        $this->line('');
        $this->line('');

        $this->info("✅ Downloaded: {$downloaded} / ".count($missing));

        if (! empty($failed)) {
            $this->warn('❌ Failed: '.count($failed));
            $this->line('');
            foreach ($failed as $f) {
                $this->line("  id={$f['item']->id} {$f['item']->name_ru}");
                $this->line("    last error: {$f['error']}");
                $this->line('    tried URLs:');
                foreach ($f['tried'] as $u) {
                    $this->line("      • {$u}");
                }
            }
        }

        return empty($failed) ? self::SUCCESS : self::FAILURE;
    }
}

<?php

namespace App\Console\Commands;

use App\Models\ShopItem;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

/**
 * Восстанавливает недостающие картинки товаров — из локальной папки ИЛИ по HTTP.
 *
 * Два режима источника:
 *   --from-url=https://rustresort.com  → качает по HTTP {url}/{image} (для локалки)
 *   --from-dir=/path/a,/path/b         → копирует из папок (по умолчанию — старый проект)
 *
 *   php artisan shop:download-images --from-url=https://rustresort.com --dry
 *   php artisan shop:download-images --from-url=https://rustresort.com
 *   php artisan shop:download-images                      # из соседней папки старого проекта
 *   php artisan shop:download-images --include-hidden --force
 */
class DownloadMissingImages extends Command
{
    protected $signature = 'shop:download-images
        {--from-url= : Базовый URL для HTTP-загрузки (напр. https://rustresort.com)}
        {--from-dir= : Папки-источники через запятую (по умолчанию — старый проект)}
        {--dry : Preview без скачивания}
        {--include-hidden : Также обрабатывать status=0}
        {--force : Перезаписать даже если файл уже есть}';

    protected $description = 'Скачивает недостающие картинки товаров (HTTP с сайта или из локальной папки)';

    public function handle(): int
    {
        $isDry = (bool) $this->option('dry');
        $force = (bool) $this->option('force');
        $fromUrl = trim((string) $this->option('from-url'));
        $httpMode = $fromUrl !== '';

        $index = [];
        if ($httpMode) {
            $fromUrl = rtrim($fromUrl, '/');
            $this->info("=== Источник: HTTP {$fromUrl} ===");
        } else {
            $sibling = dirname(base_path()).'/rustresort.com';
            $default = implode(',', [
                $sibling.'/storage/app/public',
                $sibling.'/public/images',
                $sibling.'/public',
            ]);
            $dirs = array_values(array_filter(array_map('trim', explode(',', $this->option('from-dir') ?: $default))));
            $this->info('=== Источник: папки ===');
            $validDirs = [];
            foreach ($dirs as $d) {
                $this->line((is_dir($d) ? '  ✅ ' : '  ✗ ').$d);
                if (is_dir($d)) {
                    $validDirs[] = $d;
                }
            }
            if (empty($validDirs)) {
                $this->error('Нет валидных папок. Укажи --from-dir=/путь или --from-url=https://...');

                return self::FAILURE;
            }
            $this->info('Индексирую файлы…');
            $index = $this->buildIndex($validDirs);
            $this->info('Файлов в источниках: '.count($index));
        }
        $this->line('');

        $query = ShopItem::query()->whereNotNull('image')->where('image', '!=', '');
        if (! $this->option('include-hidden')) {
            $query->where('status', 1);
        }
        $items = $query->get(['id', 'name_ru', 'image']);

        $missing = [];
        $existing = 0;
        foreach ($items as $item) {
            $relativePath = ltrim($item->image, '/');
            if ($relativePath === '' || str_contains($relativePath, '..')) {
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
                'basename' => basename($relativePath),
            ];
        }

        $this->info("Проверено товаров: {$items->count()} | уже на месте: {$existing} | недостающих: ".count($missing));
        $this->line('');

        if (empty($missing)) {
            $this->info('✅ Всё на месте.');

            return self::SUCCESS;
        }

        if ($isDry) {
            foreach ($missing as $m) {
                $where = $httpMode ? "{$fromUrl}/{$m['relative']}" : ($index[$m['basename']] ?? '✗ НЕ найдено');
                $this->line(sprintf('  [DRY] %-28s ← %s', $m['item']->name_ru, $where));
            }

            return self::SUCCESS;
        }

        $bar = $this->output->createProgressBar(count($missing));
        $bar->setFormat(' %current%/%max% [%bar%] %percent:3s%% — %message%');
        $bar->start();

        $done = 0;
        $failed = [];
        foreach ($missing as $m) {
            $bar->setMessage($m['item']->name_ru);

            $dir = dirname($m['local']);
            if (! is_dir($dir)) {
                @mkdir($dir, 0755, true);
            }

            $ok = $httpMode
                ? $this->fetchHttp($fromUrl.'/'.$m['relative'], $m['local'])
                : $this->copyLocal($index[$m['basename']] ?? null, $m['local']);

            if ($ok) {
                $done++;
            } else {
                $failed[] = $m;
            }
            $bar->advance();
        }
        $bar->finish();
        $this->line('');
        $this->line('');

        $this->info("✅ Готово: {$done} / ".count($missing));
        if (! empty($failed)) {
            $this->warn('❌ Не получилось: '.count($failed));
            foreach ($failed as $f) {
                $this->line("  id={$f['item']->id} {$f['item']->name_ru} ({$f['relative']})");
            }
        }

        return empty($failed) ? self::SUCCESS : self::FAILURE;
    }

    private function fetchHttp(string $url, string $target): bool
    {
        try {
            $resp = Http::timeout(30)->withOptions(['allow_redirects' => true])->get($url);
            if (! $resp->ok()) {
                return false;
            }
            $body = $resp->body();
            if (strlen($body) < 100) {
                return false;
            }
            $head = strtolower(substr($body, 0, 200));
            if (str_contains($head, '<!doctype') || str_contains($head, '<html')) {
                return false; // HTML-страница, не картинка
            }

            return file_put_contents($target, $body) !== false;
        } catch (\Throwable) {
            return false;
        }
    }

    private function copyLocal(?string $src, string $target): bool
    {
        if ($src === null || ! is_file($src) || filesize($src) <= 100) {
            return false;
        }

        return @copy($src, $target);
    }

    private function buildIndex(array $dirs): array
    {
        $index = [];
        foreach ($dirs as $dir) {
            $it = new \RecursiveIteratorIterator(
                new \RecursiveDirectoryIterator($dir, \FilesystemIterator::SKIP_DOTS),
                \RecursiveIteratorIterator::LEAVES_ONLY
            );
            foreach ($it as $file) {
                if ($file->isFile() && ! isset($index[$file->getFilename()])) {
                    $index[$file->getFilename()] = $file->getPathname();
                }
            }
        }

        return $index;
    }
}

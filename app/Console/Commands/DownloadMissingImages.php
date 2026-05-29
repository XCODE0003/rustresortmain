<?php

namespace App\Console\Commands;

use App\Models\ShopItem;
use Illuminate\Console\Command;

/**
 * Восстанавливает недостающие картинки товаров из ЛОКАЛЬНОЙ папки.
 *
 * Проходит по shop_items, проверяет наличие файла в public/{image}, и если
 * файла нет — ищет файл с тем же именем (basename) в указанных папках-источниках
 * (рекурсивно) и копирует. По умолчанию источник — старый проект rustresort.com,
 * где лежат все картинки (storage/app/public + public/images).
 *
 *   php artisan shop:download-images            # копирует из старого проекта
 *   php artisan shop:download-images --dry      # превью без копирования
 *   php artisan shop:download-images --include-hidden
 *   php artisan shop:download-images --from-dir=/path/a,/path/b
 *   php artisan shop:download-images --force    # перезаписать существующие
 */
class DownloadMissingImages extends Command
{
    protected $signature = 'shop:download-images
        {--from-dir= : Папки-источники через запятую (по умолчанию — старый проект rustresort.com)}
        {--dry : Preview без копирования}
        {--include-hidden : Также обрабатывать status=0}
        {--force : Перезаписать даже если файл уже есть}';

    protected $description = 'Восстанавливает недостающие картинки товаров из локальной папки';

    public function handle(): int
    {
        $isDry = (bool) $this->option('dry');
        $force = (bool) $this->option('force');

        // Папки-источники: по умолчанию старый проект (сосед по каталогу)
        $sibling = dirname(base_path()).'/rustresort.com';
        $default = implode(',', [
            $sibling.'/storage/app/public',
            $sibling.'/public/images',
            $sibling.'/public',
        ]);
        $dirsOption = $this->option('from-dir') ?: $default;
        $dirs = array_values(array_filter(array_map('trim', explode(',', $dirsOption))));

        $this->info('=== Источники (папки) ===');
        $validDirs = [];
        foreach ($dirs as $d) {
            if (is_dir($d)) {
                $this->line("  ✅ {$d}");
                $validDirs[] = $d;
            } else {
                $this->warn("  ✗ нет каталога: {$d}");
            }
        }
        $this->line('');

        if (empty($validDirs)) {
            $this->error('Ни одной валидной папки-источника. Укажи --from-dir=/путь');

            return self::FAILURE;
        }

        // Индекс basename → полный путь (первое совпадение выигрывает)
        $this->info('Индексирую файлы в источниках…');
        $index = $this->buildIndex($validDirs);
        $this->info('Найдено файлов в источниках: '.count($index));
        $this->line('');

        $query = ShopItem::query()
            ->whereNotNull('image')
            ->where('image', '!=', '');

        if (! $this->option('include-hidden')) {
            $query->where('status', 1);
        }

        $items = $query->get(['id', 'name_ru', 'image']);

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
                'basename' => basename($relativePath),
            ];
        }

        $this->info('=== Audit ===');
        $this->info("Проверено товаров: {$items->count()}");
        $this->info("Уже на месте: {$existing}");
        if ($invalidPath > 0) {
            $this->warn("Кривые пути (пропущены): {$invalidPath}");
        }
        $this->info('Недостающих: '.count($missing));
        $this->line('');

        if (empty($missing)) {
            $this->info('✅ Всё на месте, копировать нечего.');

            return self::SUCCESS;
        }

        if ($isDry) {
            foreach ($missing as $m) {
                $src = $index[$m['basename']] ?? null;
                $mark = $src ? "← {$src}" : '✗ НЕ найдено в источниках';
                $this->line(sprintf('  [DRY] %-28s %s', $m['item']->name_ru, $mark));
            }

            return self::SUCCESS;
        }

        $bar = $this->output->createProgressBar(count($missing));
        $bar->setFormat(' %current%/%max% [%bar%] %percent:3s%% — %message%');
        $bar->setMessage('старт…');
        $bar->start();

        $copied = 0;
        $failed = [];

        foreach ($missing as $m) {
            $bar->setMessage($m['item']->name_ru);

            $src = $index[$m['basename']] ?? null;

            if ($src === null || ! is_file($src) || filesize($src) <= 100) {
                $failed[] = ['item' => $m['item'], 'basename' => $m['basename'], 'reason' => 'не найдено в источниках'];
                $bar->advance();
                continue;
            }

            $dir = dirname($m['local']);
            if (! is_dir($dir)) {
                mkdir($dir, 0755, true);
            }

            if (@copy($src, $m['local'])) {
                $copied++;
            } else {
                $failed[] = ['item' => $m['item'], 'basename' => $m['basename'], 'reason' => 'ошибка copy()'];
            }

            $bar->advance();
        }

        $bar->setMessage('готово');
        $bar->finish();
        $this->line('');
        $this->line('');

        $this->info("✅ Скопировано: {$copied} / ".count($missing));

        if (! empty($failed)) {
            $this->warn('❌ Не найдено/ошибка: '.count($failed));
            foreach ($failed as $f) {
                $this->line("  id={$f['item']->id} {$f['item']->name_ru} ({$f['basename']}) — {$f['reason']}");
            }
        }

        return empty($failed) ? self::SUCCESS : self::FAILURE;
    }

    /**
     * Рекурсивно индексирует файлы в папках: basename → первый найденный путь.
     */
    private function buildIndex(array $dirs): array
    {
        $index = [];
        foreach ($dirs as $dir) {
            $it = new \RecursiveIteratorIterator(
                new \RecursiveDirectoryIterator($dir, \FilesystemIterator::SKIP_DOTS),
                \RecursiveIteratorIterator::LEAVES_ONLY
            );
            foreach ($it as $file) {
                if (! $file->isFile()) {
                    continue;
                }
                $name = $file->getFilename();
                if (! isset($index[$name])) {
                    $index[$name] = $file->getPathname();
                }
            }
        }

        return $index;
    }
}

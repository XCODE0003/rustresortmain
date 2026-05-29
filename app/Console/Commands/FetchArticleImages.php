<?php

namespace App\Console\Commands;

use App\Models\Article;
use Illuminate\Console\Command;

/**
 * Выкачивает ВСЕ картинки новостей: и главную (колонка image), и встроенные
 * в HTML-тело (<img src> внутри description_* всех языков).
 *
 * Каждый файл копируется из старого storage в public нового проекта по тому
 * пути, который указан в ссылке (/images/x.png → public/images/x.png,
 * /storage/images/x.png → public/storage/images/x.png через симлинк), чтобы
 * ссылка в тексте резолвилась.
 *
 *   php artisan news:fetch-images           # копировать
 *   php artisan news:fetch-images --dry     # превью
 *   php artisan news:fetch-images --from-dir=/path/a,/path/b
 */
class FetchArticleImages extends Command
{
    protected $signature = 'news:fetch-images
        {--from-dir= : Папки-источники через запятую (по умолчанию — старый проект)}
        {--dry : Preview без копирования}
        {--force : Перезаписать существующие}';

    protected $description = 'Копирует все картинки новостей (главные + встроенные в текст) из старого storage';

    public function handle(): int
    {
        $isDry = (bool) $this->option('dry');
        $force = (bool) $this->option('force');

        $sibling = dirname(base_path()).'/rustresort.com';
        $default = implode(',', [
            $sibling.'/storage/app/public',
            $sibling.'/public/images',
            $sibling.'/public',
        ]);
        $dirs = array_values(array_filter(array_map('trim', explode(',', $this->option('from-dir') ?: $default))));

        $validDirs = array_values(array_filter($dirs, 'is_dir'));
        $this->info('=== Источники ===');
        foreach ($dirs as $d) {
            $this->line((is_dir($d) ? '  ✅ ' : '  ✗ ').$d);
        }
        if (empty($validDirs)) {
            $this->error('Нет валидных папок-источников.');

            return self::FAILURE;
        }

        $this->info('Индексирую файлы…');
        $index = $this->buildIndex($validDirs);
        $this->info('Файлов в источниках: '.count($index));
        $this->line('');

        // Собираем все ссылки на картинки из всех новостей
        $articles = Article::all();
        $refs = []; // relPath => true (uniq)

        foreach ($articles as $a) {
            // главная картинка
            if (! empty($a->image)) {
                $refs[$this->normalize($a->image)] = true;
            }
            // встроенные в HTML всех текстовых полей
            foreach ($a->getAttributes() as $key => $val) {
                if (! is_string($val) || $val === '') {
                    continue;
                }
                if (! str_starts_with($key, 'description_') && ! str_starts_with($key, 'meta_')) {
                    continue;
                }
                foreach ($this->extractImageUrls($val) as $rel) {
                    $refs[$rel] = true;
                }
            }
        }

        $refs = array_keys(array_filter($refs, fn ($k) => $k !== '', ARRAY_FILTER_USE_KEY));
        $this->info('Уникальных ссылок на картинки в новостях: '.count($refs));
        $this->line('');

        $copied = 0;
        $present = 0;
        $missingSrc = [];

        foreach ($refs as $rel) {
            $target = public_path($rel);
            $base = basename($rel);

            if (! $force && is_file($target) && filesize($target) > 50) {
                $present++;
                continue;
            }

            $src = $index[$base] ?? null;
            if ($src === null) {
                $missingSrc[] = $rel;
                continue;
            }

            if ($isDry) {
                $this->line("  [DRY] {$rel}  ←  {$src}");

                continue;
            }

            $dir = dirname($target);
            if (! is_dir($dir)) {
                @mkdir($dir, 0755, true);
            }
            if (@copy($src, $target)) {
                $copied++;
            } else {
                $missingSrc[] = $rel.' (ошибка copy)';
            }
        }

        $this->line('');
        $this->info("Уже на месте: {$present}");
        if (! $isDry) {
            $this->info("✅ Скопировано: {$copied}");
        }
        if (! empty($missingSrc)) {
            $this->warn('✗ Не найдено в источниках: '.count($missingSrc));
            foreach ($missingSrc as $m) {
                $this->line('    '.$m);
            }
        }

        return self::SUCCESS;
    }

    /**
     * Достаёт из HTML все ссылки на картинки, нормализует в public-relative путь.
     *
     * @return string[]
     */
    private function extractImageUrls(string $html): array
    {
        $out = [];
        // любые токены, заканчивающиеся на расширение картинки (в src, url(), голым текстом)
        if (preg_match_all('#[^\s"\'()<>]+?\.(?:png|jpe?g|webp|gif|svg)#i', $html, $m)) {
            foreach ($m[0] as $u) {
                $rel = $this->normalize($u);
                if ($rel !== '') {
                    $out[] = $rel;
                }
            }
        }

        return $out;
    }

    /**
     * URL/путь → public-relative путь (без домена, без ведущего слэша, без query).
     */
    private function normalize(string $u): string
    {
        $u = html_entity_decode($u, ENT_QUOTES);
        $u = preg_replace('/[?#].*$/', '', $u); // отрезаем query/fragment

        // абсолютный URL → берём path
        if (preg_match('#^https?://#i', $u)) {
            $path = parse_url($u, PHP_URL_PATH);
            $u = $path ?: '';
        }

        $u = ltrim($u, '/');

        if ($u === '' || str_contains($u, '..')) {
            return '';
        }

        // защита от мусора: путь должен вести на картинку
        if (! preg_match('#\.(?:png|jpe?g|webp|gif|svg)$#i', $u)) {
            return '';
        }

        // если путь не из images/ или storage/ — кладём по basename в images/
        if (! preg_match('#(^|/)(images|storage)/#i', '/'.$u)) {
            $u = 'images/'.basename($u);
        }

        return $u;
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
                if ($file->isFile()) {
                    $name = $file->getFilename();
                    if (! isset($index[$name])) {
                        $index[$name] = $file->getPathname();
                    }
                }
            }
        }

        return $index;
    }
}

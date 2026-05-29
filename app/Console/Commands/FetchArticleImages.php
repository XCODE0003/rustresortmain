<?php

namespace App\Console\Commands;

use App\Models\Article;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

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
        {--from-url= : Базовый URL для HTTP-загрузки (напр. https://rustresort.com)}
        {--from-dir= : Папки-источники через запятую (по умолчанию — старый проект)}
        {--dry : Preview без копирования}
        {--force : Перезаписать существующие}';

    protected $description = 'Копирует все картинки новостей (главные + встроенные в текст) из старого storage';

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
            $validDirs = array_values(array_filter($dirs, 'is_dir'));
            $this->info('=== Источники: папки ===');
            foreach ($dirs as $d) {
                $this->line((is_dir($d) ? '  ✅ ' : '  ✗ ').$d);
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

            $src = $httpMode ? ($fromUrl.'/'.$rel) : ($index[$base] ?? null);
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

            $ok = $httpMode ? $this->fetchHttp($src, $target) : @copy($src, $target);
            if ($ok) {
                $copied++;
            } else {
                $missingSrc[] = $rel.($httpMode ? ' (HTTP не скачалось)' : ' (ошибка copy)');
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

        // %20/%D0%91… → реальное имя (nginx ищет на диске декодированное имя)
        $u = rawurldecode($u);

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

    private function fetchHttp(string $url, string $target): bool
    {
        try {
            // путь может содержать пробелы/кириллицу → кодируем сегменты
            $parts = explode('/', $url);
            $encoded = array_map(fn ($p) => str_contains($p, '://') || $p === '' ? $p : rawurlencode($p), $parts);
            $resp = Http::timeout(30)->withOptions(['allow_redirects' => true])->get(implode('/', $encoded));
            if (! $resp->ok()) {
                return false;
            }
            $body = $resp->body();
            if (strlen($body) < 50) {
                return false;
            }
            $head = strtolower(substr($body, 0, 200));
            if (str_contains($head, '<!doctype') || str_contains($head, '<html')) {
                return false;
            }

            return file_put_contents($target, $body) !== false;
        } catch (\Throwable) {
            return false;
        }
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

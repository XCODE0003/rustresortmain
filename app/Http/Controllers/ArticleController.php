<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function index(): Response
    {
        $articles = Article::where('status', 1)
            ->orderBy('sort')
            ->orderByDesc('created_at')
            ->get()
            ->map(fn($a) => [
                'id'          => $a->id,
                'path'        => $a->path,
                'type'        => $a->type,
                'image'       => $this->absImage($a->image),
                'title'       => $a->getLocalizedTitle(),
                'description' => $this->absHtml($a->getLocalizedDescription()),
                'created_at'  => $a->created_at,
            ]);

        return Inertia::render('info/list', ['articles' => $articles]);
    }

    public function show(string $path): Response
    {
        $article = Article::where('path', $path)
            ->where('status', 1)
            ->firstOrFail();

        return Inertia::render('info/show', [
            'article' => [
                'id'          => $article->id,
                'path'        => $article->path,
                'type'        => $article->type,
                'image'       => $this->absImage($article->image),
                'title'       => $article->getLocalizedTitle(),
                'description' => $this->absHtml($article->getLocalizedDescription()),
                'created_at'  => $article->created_at,
            ],
        ]);
    }

    /**
     * Главная картинка → абсолютный путь туда, куда реально скопирован файл.
     */
    private function absImage(?string $path): ?string
    {
        if (! $path) {
            return $path;
        }
        $rel = $this->normalizeImg($path);

        return $rel ? '/'.$rel : $path;
    }

    /**
     * Переписывает все ссылки на картинки в HTML тела новости на абсолютные
     * пути ('/images/...' или '/storage/...'), туда же, куда их скопировал
     * news:fetch-images. Иначе на /info/{path} относительные пути 404-ят.
     */
    private function absHtml(?string $html): ?string
    {
        if (! $html) {
            return $html;
        }

        return preg_replace_callback(
            '#(src|href)=(["\'])([^"\']+?\.(?:png|jpe?g|webp|gif|svg))(["\'])#i',
            function ($m) {
                $rel = $this->normalizeImg($m[3]);

                return $rel ? $m[1].'='.$m[2].'/'.$rel.$m[4] : $m[0];
            },
            $html
        );
    }

    /**
     * URL/путь картинки → public-relative путь (без домена и ведущего слэша),
     * совпадающий с тем, куда команда news:fetch-images положила файл.
     */
    private function normalizeImg(string $u): string
    {
        $u = html_entity_decode($u, ENT_QUOTES);
        $u = preg_replace('/[?#].*$/', '', $u);

        if (preg_match('#^https?://#i', $u)) {
            $u = parse_url($u, PHP_URL_PATH) ?: '';
        }

        $u = rawurldecode($u);
        $u = ltrim($u, '/');

        if ($u === '' || str_contains($u, '..')) {
            return '';
        }
        if (! preg_match('#\.(?:png|jpe?g|webp|gif|svg)$#i', $u)) {
            return '';
        }
        // не из images/ или storage/ → файл лежит в images/{basename}
        if (! preg_match('#(^|/)(images|storage)/#i', '/'.$u)) {
            $u = 'images/'.basename($u);
        }

        return $u;
    }
}

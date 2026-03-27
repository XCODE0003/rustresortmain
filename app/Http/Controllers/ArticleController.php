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
                'image'       => $a->image,
                'title'       => $a->getLocalizedTitle(),
                'description' => $a->getLocalizedDescription(),
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
                'image'       => $article->image,
                'title'       => $article->getLocalizedTitle(),
                'description' => $article->getLocalizedDescription(),
                'created_at'  => $article->created_at,
            ],
        ]);
    }
}

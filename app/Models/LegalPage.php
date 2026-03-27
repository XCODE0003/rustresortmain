<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LegalPage extends Model
{
    protected $fillable = [
        'slug',
        'title_ru', 'title_en', 'title_de', 'title_fr', 'title_it', 'title_es', 'title_uk',
        'content_ru', 'content_en', 'content_de', 'content_fr', 'content_it', 'content_es', 'content_uk',
    ];

    public function getLocalizedTitle(): ?string
    {
        $locale = app()->getLocale();
        return $this->{"title_{$locale}"}
            ?? $this->title_ru
            ?? $this->title_en
            ?? null;
    }

    public function getLocalizedContent(): ?string
    {
        $locale = app()->getLocale();
        return $this->{"content_{$locale}"}
            ?? $this->content_ru
            ?? $this->content_en
            ?? null;
    }
}

<?php

namespace App\Models;

use App\Traits\HasMultiLanguageFields;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GuideCategory extends Model
{
    use HasMultiLanguageFields;

    protected $table = 'guides_categories';

    protected $fillable = [
        'path',
        'status',
        'sort',
        'title_ru', 'title_en', 'title_de', 'title_fr', 'title_it', 'title_es', 'title_uk',
        'description_ru', 'description_en', 'description_de', 'description_fr', 'description_it', 'description_es', 'description_uk',
    ];

    public function guides(): HasMany
    {
        return $this->hasMany(Guide::class, 'category_id');
    }
}

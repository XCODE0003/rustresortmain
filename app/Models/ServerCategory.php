<?php

namespace App\Models;

use App\Traits\HasMultiLanguageFields;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ServerCategory extends Model
{
    use HasMultiLanguageFields;

    protected $table = 'servers_categories';

    protected $fillable = [
        'path',
        'status',
        'sort',
        'title_ru',
        'title_en',
        'title_de',
        'title_fr',
        'title_it',
        'title_es',
        'title_uk',
        'description_ru',
        'description_en',
        'description_de',
        'description_fr',
        'description_it',
        'description_es',
        'description_uk',
    ];

    public function servers(): HasMany
    {
        return $this->hasMany(Server::class, 'category_id');
    }
}

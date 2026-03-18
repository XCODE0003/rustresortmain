<?php

namespace App\Models;

use App\Traits\HasMultiLanguageFields;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasMultiLanguageFields;

    protected $fillable = [
        'question_ru', 'question_en', 'question_de', 'question_fr', 'question_it', 'question_es', 'question_uk',
        'answer_ru', 'answer_en', 'answer_de', 'answer_fr', 'answer_it', 'answer_es', 'answer_uk',
        'sort',
    ];
}

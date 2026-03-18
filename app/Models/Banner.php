<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $fillable = [
        'path',
        'banners',
    ];

    protected function casts(): array
    {
        return [
            'banners' => 'array',
        ];
    }
}

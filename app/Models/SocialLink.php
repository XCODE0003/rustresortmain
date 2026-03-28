<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    protected $fillable = ['platform', 'url', 'sort', 'active'];

    protected $casts = [
        'active' => 'boolean',
        'sort'   => 'integer',
    ];
}

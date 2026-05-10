<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use WhichBrowser\Parser;

class Session extends Model
{
    public $timestamps = false;

    protected $casts = [
        'id' => 'string',
    ];

    /**
     * Compute the OS name from the user agent on the fly.
     * The standard Laravel sessions table has no 'os'/'browser'/'device' columns,
     * so we don't persist the parsed result.
     */
    public function getOs(): ?string
    {
        if (empty($this->user_agent)) {
            return null;
        }

        return (new Parser($this->user_agent))->os->name ?? null;
    }

    public function getBrowser(): ?string
    {
        if (empty($this->user_agent)) {
            return null;
        }

        return (new Parser($this->user_agent))->browser->name ?? null;
    }

    public function getDevice(): ?string
    {
        if (empty($this->user_agent)) {
            return null;
        }

        return (new Parser($this->user_agent))->device->type ?? null;
    }
}

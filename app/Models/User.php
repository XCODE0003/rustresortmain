<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable implements FilamentUser
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'steam_id',
        'avatar',
        'balance',
        'level',
        'role',
        'mute',
        'mute_reason',
        'mute_date',
        'online_time',
        'online_time_monday',
        'online_time_thursday',
        'online_time_eumain',
        'steam_trade_url',
        'phone',
        'pin',
        'status_2fa',
        'secretcode_2fa',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
            'balance' => 'decimal:2',
            'mute' => 'boolean',
            'mute_date' => 'datetime',
        ];
    }

    public function canAccessPanel(Panel $panel): bool
    {
        return in_array($this->role, ['admin', 'moderator']);
    }

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function isModerator(): bool
    {
        return $this->role === 'moderator';
    }

    public function isAdminOrModerator(): bool
    {
        return in_array($this->role, ['admin', 'moderator']);
    }

    public function isSupport(): bool
    {
        return in_array($this->role, ['admin', 'support', 'moderator']);
    }

    public function isInvestor(): bool
    {
        return in_array($this->role, ['admin', 'investor']);
    }

    public function roleModel(): ?Role
    {
        if ($this->role === null) {
            return null;
        }

        return cache()->remember(
            "role.slug.{$this->role}",
            now()->addMinutes(10),
            fn () => Role::where('slug', $this->role)->first()
        );
    }

    public function hasPermission(string $key): bool
    {
        if ($this->role === 'admin') {
            return true;
        }

        $role = $this->roleModel();
        if (! $role) {
            return false;
        }

        return $role->hasPermission($key);
    }

    public function shopPurchases(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ShopPurchase::class);
    }

    public function donates(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Donate::class);
    }

    public function tickets(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Ticket::class);
    }

    public function vips(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Vip::class);
    }

    public function shopCarts(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ShopCart::class);
    }

    public function inventories(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Inventory::class);
    }
}

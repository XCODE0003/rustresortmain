<?php

namespace App\Providers;

use App\Models\Option;
use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Laravel\Socialite\Contracts\Factory as SocialiteFactory;
use Throwable;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();
        $this->registerObservers();
        $this->configureSocialite();
        $this->loadOptionsFromDatabase();
        $this->registerBackendGates();
    }

    protected function registerBackendGates(): void
    {
        Gate::define('admin', fn (User $u): bool => $u->isAdmin());
        Gate::define('moderator', fn (User $u): bool => $u->isAdminOrModerator());
        Gate::define('support', fn (User $u): bool => $u->isSupport());
        Gate::define('investor', fn (User $u): bool => $u->isInvestor());
    }

    protected function configureSocialite(): void
    {
        $socialite = $this->app->make(SocialiteFactory::class);

        $socialite->extend('steam', function ($app) use ($socialite) {
            $config = $app['config']['services.steam'];

            return $socialite->buildProvider(
                \SocialiteProviders\Steam\Provider::class,
                $config
            );
        });
    }

    protected function registerObservers(): void
    {
        \App\Models\Donate::observe(\App\Observers\DonateObserver::class);
        \App\Models\ShopPurchase::observe(\App\Observers\ShopPurchaseObserver::class);
        \App\Models\Server::observe(\App\Observers\ServerObserver::class);
        \App\Models\ShopItem::observe(\App\Observers\ShopItemObserver::class);
        \App\Models\Ticket::observe(\App\Observers\TicketObserver::class);
        \App\Models\User::observe(\App\Observers\UserObserver::class);
        \App\Models\PaymentGateway::observe(\App\Observers\PaymentGatewayObserver::class);
    }

    /**
     * Load options from database into config
     */
    protected function loadOptionsFromDatabase(): void
    {
        try {
            DB::connection()->getPdo();

            if (! Schema::hasTable('options')) {
                return;
            }
        } catch (Throwable $e) {
            return;
        }

        $options = Cache::rememberForever('options', function () {
            return Option::all();
        });

        foreach ($options as $option) {
            config()->set("options.{$option->key}", $option->value);
        }
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }
}

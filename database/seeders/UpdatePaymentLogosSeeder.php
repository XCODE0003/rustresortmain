<?php

namespace Database\Seeders;

use App\Models\PaymentGateway;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;

/**
 * Safe logo-only seeder.
 *
 * Updates ONLY the `logo` column on existing payment_gateways rows.
 * Does NOT touch: is_active, min_amount, max_amount, settings (API keys!),
 * name_ru, sort, commission_percent, currency or any other column.
 * Does NOT create new gateways. Skips codes that don't exist in DB.
 *
 * Safe to re-run any time — idempotent.
 *
 * Usage:
 *   php artisan db:seed --class=UpdatePaymentLogosSeeder
 */
class UpdatePaymentLogosSeeder extends Seeder
{
    public function run(): void
    {
        $map = [
            'viza_mc_rf'       => 'images/payment-logos/v2/visa_mastercard.svg',
            'viza_mc_world'    => 'images/payment-logos/v2/visa_mastercard.svg',
            'mir'              => 'images/payment-logos/v2/sbp.svg',
            'paypal'           => 'images/payment-logos/v2/paypal.svg',
            'alipay'           => 'images/payment-logos/v2/alipay.svg',
            'gpay'             => 'images/payment-logos/v2/gpay.svg',
            'jcb'              => 'images/payment-logos/v2/jcb.svg',
            'american_express' => 'images/payment-logos/v2/amex.svg',
            'steam'            => 'images/payment-logos/v2/steam.svg',
            'bitcoin'          => 'images/payment-logos/v2/bitcoin.svg',
            'usdt'             => 'images/payment-logos/v2/tether.svg',
            'tinkoff_crypto'   => 'images/payment-logos/v2/heleket.svg',
        ];

        $updated = 0;
        $skipped = [];

        foreach ($map as $code => $path) {
            $affected = PaymentGateway::where('code', $code)
                ->update(['logo' => $path]);

            if ($affected > 0) {
                $this->command->info("  ✓ {$code} → {$path}");
                $updated++;
            } else {
                $skipped[] = $code;
            }
        }

        $this->command->info('');
        $this->command->info("Updated {$updated} gateway logo(s).");

        if (! empty($skipped)) {
            $this->command->warn('Skipped (not in DB): ' . implode(', ', $skipped));
        }

        // Bust the cached gateway list so /payment shows fresh logos immediately
        Cache::forget('active_payment_gateways');
        $this->command->info('Cache "active_payment_gateways" cleared.');
    }
}

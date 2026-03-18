import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
const PaymentSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentSettings.url(options),
    method: 'get',
})

PaymentSettings.definition = {
    methods: ["get","head"],
    url: '/admin/payment-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
PaymentSettings.url = (options?: RouteQueryOptions) => {
    return PaymentSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
PaymentSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
PaymentSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PaymentSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
const PaymentSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
PaymentSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
PaymentSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PaymentSettings.form = PaymentSettingsForm

export default PaymentSettings
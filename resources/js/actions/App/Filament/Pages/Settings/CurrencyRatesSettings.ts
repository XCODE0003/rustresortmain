import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
const CurrencyRatesSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CurrencyRatesSettings.url(options),
    method: 'get',
})

CurrencyRatesSettings.definition = {
    methods: ["get","head"],
    url: '/admin/currency-rates-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
CurrencyRatesSettings.url = (options?: RouteQueryOptions) => {
    return CurrencyRatesSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
CurrencyRatesSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CurrencyRatesSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
CurrencyRatesSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CurrencyRatesSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
const CurrencyRatesSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CurrencyRatesSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
CurrencyRatesSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CurrencyRatesSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
CurrencyRatesSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CurrencyRatesSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CurrencyRatesSettings.form = CurrencyRatesSettingsForm

export default CurrencyRatesSettings
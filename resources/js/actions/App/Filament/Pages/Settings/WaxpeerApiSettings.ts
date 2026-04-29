import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
const WaxpeerApiSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WaxpeerApiSettings.url(options),
    method: 'get',
})

WaxpeerApiSettings.definition = {
    methods: ["get","head"],
    url: '/admin/waxpeer-api-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
WaxpeerApiSettings.url = (options?: RouteQueryOptions) => {
    return WaxpeerApiSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
WaxpeerApiSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: WaxpeerApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
WaxpeerApiSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: WaxpeerApiSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
const WaxpeerApiSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: WaxpeerApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
WaxpeerApiSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: WaxpeerApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
WaxpeerApiSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: WaxpeerApiSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

WaxpeerApiSettings.form = WaxpeerApiSettingsForm

export default WaxpeerApiSettings
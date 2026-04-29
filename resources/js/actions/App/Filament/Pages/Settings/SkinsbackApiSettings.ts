import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
const SkinsbackApiSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SkinsbackApiSettings.url(options),
    method: 'get',
})

SkinsbackApiSettings.definition = {
    methods: ["get","head"],
    url: '/admin/skinsback-api-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
SkinsbackApiSettings.url = (options?: RouteQueryOptions) => {
    return SkinsbackApiSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
SkinsbackApiSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SkinsbackApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
SkinsbackApiSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SkinsbackApiSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
const SkinsbackApiSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SkinsbackApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
SkinsbackApiSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SkinsbackApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
SkinsbackApiSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SkinsbackApiSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SkinsbackApiSettings.form = SkinsbackApiSettingsForm

export default SkinsbackApiSettings
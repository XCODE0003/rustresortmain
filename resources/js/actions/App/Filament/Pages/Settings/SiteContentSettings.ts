import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
const SiteContentSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SiteContentSettings.url(options),
    method: 'get',
})

SiteContentSettings.definition = {
    methods: ["get","head"],
    url: '/admin/site-content-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
SiteContentSettings.url = (options?: RouteQueryOptions) => {
    return SiteContentSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
SiteContentSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SiteContentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
SiteContentSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SiteContentSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
const SiteContentSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteContentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
SiteContentSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteContentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
SiteContentSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SiteContentSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SiteContentSettings.form = SiteContentSettingsForm

export default SiteContentSettings
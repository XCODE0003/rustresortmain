import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
const SocialSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SocialSettings.url(options),
    method: 'get',
})

SocialSettings.definition = {
    methods: ["get","head"],
    url: '/admin/social-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
SocialSettings.url = (options?: RouteQueryOptions) => {
    return SocialSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
SocialSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SocialSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
SocialSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SocialSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
const SocialSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SocialSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
SocialSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SocialSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
SocialSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SocialSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SocialSettings.form = SocialSettingsForm

export default SocialSettings
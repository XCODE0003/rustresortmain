import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
const SteamSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SteamSettings.url(options),
    method: 'get',
})

SteamSettings.definition = {
    methods: ["get","head"],
    url: '/admin/steam-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
SteamSettings.url = (options?: RouteQueryOptions) => {
    return SteamSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
SteamSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SteamSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
SteamSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SteamSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
const SteamSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SteamSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
SteamSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SteamSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
SteamSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SteamSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SteamSettings.form = SteamSettingsForm

export default SteamSettings
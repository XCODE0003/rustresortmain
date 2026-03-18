import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
const GameApiSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GameApiSettings.url(options),
    method: 'get',
})

GameApiSettings.definition = {
    methods: ["get","head"],
    url: '/admin/game-api-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
GameApiSettings.url = (options?: RouteQueryOptions) => {
    return GameApiSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
GameApiSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GameApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
GameApiSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GameApiSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
const GameApiSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GameApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
GameApiSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GameApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
GameApiSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GameApiSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GameApiSettings.form = GameApiSettingsForm

export default GameApiSettings
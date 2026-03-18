import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
const AuthSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AuthSettings.url(options),
    method: 'get',
})

AuthSettings.definition = {
    methods: ["get","head"],
    url: '/admin/auth-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
AuthSettings.url = (options?: RouteQueryOptions) => {
    return AuthSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
AuthSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AuthSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
AuthSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AuthSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
const AuthSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AuthSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
AuthSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AuthSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
AuthSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AuthSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AuthSettings.form = AuthSettingsForm

export default AuthSettings
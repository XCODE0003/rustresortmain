import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
const RecaptchaSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RecaptchaSettings.url(options),
    method: 'get',
})

RecaptchaSettings.definition = {
    methods: ["get","head"],
    url: '/admin/recaptcha-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
RecaptchaSettings.url = (options?: RouteQueryOptions) => {
    return RecaptchaSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
RecaptchaSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RecaptchaSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
RecaptchaSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RecaptchaSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
const RecaptchaSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecaptchaSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
RecaptchaSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecaptchaSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
RecaptchaSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RecaptchaSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RecaptchaSettings.form = RecaptchaSettingsForm

export default RecaptchaSettings
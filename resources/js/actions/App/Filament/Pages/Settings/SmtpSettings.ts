import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
const SmtpSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SmtpSettings.url(options),
    method: 'get',
})

SmtpSettings.definition = {
    methods: ["get","head"],
    url: '/admin/smtp-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
SmtpSettings.url = (options?: RouteQueryOptions) => {
    return SmtpSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
SmtpSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SmtpSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
SmtpSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SmtpSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
const SmtpSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SmtpSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
SmtpSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SmtpSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
SmtpSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SmtpSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SmtpSettings.form = SmtpSettingsForm

export default SmtpSettings
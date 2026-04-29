import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
const RegistrationsLog = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegistrationsLog.url(options),
    method: 'get',
})

RegistrationsLog.definition = {
    methods: ["get","head"],
    url: '/admin/registrations-log',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
RegistrationsLog.url = (options?: RouteQueryOptions) => {
    return RegistrationsLog.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
RegistrationsLog.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegistrationsLog.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
RegistrationsLog.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RegistrationsLog.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
const RegistrationsLogForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegistrationsLog.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
RegistrationsLogForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegistrationsLog.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
RegistrationsLogForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegistrationsLog.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RegistrationsLog.form = RegistrationsLogForm

export default RegistrationsLog
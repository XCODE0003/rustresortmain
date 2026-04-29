import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
const ServerErrors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServerErrors.url(options),
    method: 'get',
})

ServerErrors.definition = {
    methods: ["get","head"],
    url: '/admin/server-errors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
ServerErrors.url = (options?: RouteQueryOptions) => {
    return ServerErrors.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
ServerErrors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServerErrors.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
ServerErrors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ServerErrors.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
const ServerErrorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerErrors.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
ServerErrorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerErrors.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
ServerErrorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerErrors.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ServerErrors.form = ServerErrorsForm

export default ServerErrors
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
const ServerStatusPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServerStatusPage.url(options),
    method: 'get',
})

ServerStatusPage.definition = {
    methods: ["get","head"],
    url: '/admin/server-status-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
ServerStatusPage.url = (options?: RouteQueryOptions) => {
    return ServerStatusPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
ServerStatusPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ServerStatusPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
ServerStatusPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ServerStatusPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
const ServerStatusPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerStatusPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
ServerStatusPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerStatusPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
ServerStatusPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ServerStatusPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ServerStatusPage.form = ServerStatusPageForm

export default ServerStatusPage
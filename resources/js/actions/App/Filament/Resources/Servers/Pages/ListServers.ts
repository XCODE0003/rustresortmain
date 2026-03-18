import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Servers\Pages\ListServers::__invoke
* @see app/Filament/Resources/Servers/Pages/ListServers.php:7
* @route '/admin/servers'
*/
const ListServers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListServers.url(options),
    method: 'get',
})

ListServers.definition = {
    methods: ["get","head"],
    url: '/admin/servers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Servers\Pages\ListServers::__invoke
* @see app/Filament/Resources/Servers/Pages/ListServers.php:7
* @route '/admin/servers'
*/
ListServers.url = (options?: RouteQueryOptions) => {
    return ListServers.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Servers\Pages\ListServers::__invoke
* @see app/Filament/Resources/Servers/Pages/ListServers.php:7
* @route '/admin/servers'
*/
ListServers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListServers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Servers\Pages\ListServers::__invoke
* @see app/Filament/Resources/Servers/Pages/ListServers.php:7
* @route '/admin/servers'
*/
ListServers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListServers.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Servers\Pages\ListServers::__invoke
* @see app/Filament/Resources/Servers/Pages/ListServers.php:7
* @route '/admin/servers'
*/
const ListServersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Servers\Pages\ListServers::__invoke
* @see app/Filament/Resources/Servers/Pages/ListServers.php:7
* @route '/admin/servers'
*/
ListServersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Servers\Pages\ListServers::__invoke
* @see app/Filament/Resources/Servers/Pages/ListServers.php:7
* @route '/admin/servers'
*/
ListServersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListServers.form = ListServersForm

export default ListServers
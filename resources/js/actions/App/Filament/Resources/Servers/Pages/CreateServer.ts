import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Servers\Pages\CreateServer::__invoke
* @see app/Filament/Resources/Servers/Pages/CreateServer.php:7
* @route '/admin/servers/create'
*/
const CreateServer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateServer.url(options),
    method: 'get',
})

CreateServer.definition = {
    methods: ["get","head"],
    url: '/admin/servers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Servers\Pages\CreateServer::__invoke
* @see app/Filament/Resources/Servers/Pages/CreateServer.php:7
* @route '/admin/servers/create'
*/
CreateServer.url = (options?: RouteQueryOptions) => {
    return CreateServer.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Servers\Pages\CreateServer::__invoke
* @see app/Filament/Resources/Servers/Pages/CreateServer.php:7
* @route '/admin/servers/create'
*/
CreateServer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateServer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Servers\Pages\CreateServer::__invoke
* @see app/Filament/Resources/Servers/Pages/CreateServer.php:7
* @route '/admin/servers/create'
*/
CreateServer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateServer.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Servers\Pages\CreateServer::__invoke
* @see app/Filament/Resources/Servers/Pages/CreateServer.php:7
* @route '/admin/servers/create'
*/
const CreateServerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateServer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Servers\Pages\CreateServer::__invoke
* @see app/Filament/Resources/Servers/Pages/CreateServer.php:7
* @route '/admin/servers/create'
*/
CreateServerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateServer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Servers\Pages\CreateServer::__invoke
* @see app/Filament/Resources/Servers/Pages/CreateServer.php:7
* @route '/admin/servers/create'
*/
CreateServerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateServer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateServer.form = CreateServerForm

export default CreateServer
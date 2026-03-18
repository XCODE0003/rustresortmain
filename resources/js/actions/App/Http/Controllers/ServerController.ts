import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ServerController::index
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/servers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServerController::index
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServerController::index
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::index
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServerController::index
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::index
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::index
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ServerController::shopServers
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
export const shopServers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopServers.url(options),
    method: 'get',
})

shopServers.definition = {
    methods: ["get","head"],
    url: '/shop/server',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServerController::shopServers
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
shopServers.url = (options?: RouteQueryOptions) => {
    return shopServers.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServerController::shopServers
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
shopServers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopServers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::shopServers
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
shopServers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shopServers.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServerController::shopServers
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
const shopServersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shopServers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::shopServers
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
shopServersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shopServers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::shopServers
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
shopServersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shopServers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

shopServers.form = shopServersForm

/**
* @see \App\Http\Controllers\ServerController::shopServerShow
* @see app/Http/Controllers/ServerController.php:55
* @route '/shop/server/{server}'
*/
export const shopServerShow = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopServerShow.url(args, options),
    method: 'get',
})

shopServerShow.definition = {
    methods: ["get","head"],
    url: '/shop/server/{server}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServerController::shopServerShow
* @see app/Http/Controllers/ServerController.php:55
* @route '/shop/server/{server}'
*/
shopServerShow.url = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { server: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: typeof args.server === 'object'
        ? args.server.id
        : args.server,
    }

    return shopServerShow.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServerController::shopServerShow
* @see app/Http/Controllers/ServerController.php:55
* @route '/shop/server/{server}'
*/
shopServerShow.get = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shopServerShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::shopServerShow
* @see app/Http/Controllers/ServerController.php:55
* @route '/shop/server/{server}'
*/
shopServerShow.head = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shopServerShow.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServerController::shopServerShow
* @see app/Http/Controllers/ServerController.php:55
* @route '/shop/server/{server}'
*/
const shopServerShowForm = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shopServerShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::shopServerShow
* @see app/Http/Controllers/ServerController.php:55
* @route '/shop/server/{server}'
*/
shopServerShowForm.get = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shopServerShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::shopServerShow
* @see app/Http/Controllers/ServerController.php:55
* @route '/shop/server/{server}'
*/
shopServerShowForm.head = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shopServerShow.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

shopServerShow.form = shopServerShowForm

const ServerController = { index, shopServers, shopServerShow }

export default ServerController
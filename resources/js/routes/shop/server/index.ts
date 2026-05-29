import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ServerController::reset
* @see app/Http/Controllers/ServerController.php:45
* @route '/shop/server-reset'
*/
export const reset = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(options),
    method: 'get',
})

reset.definition = {
    methods: ["get","head"],
    url: '/shop/server-reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServerController::reset
* @see app/Http/Controllers/ServerController.php:45
* @route '/shop/server-reset'
*/
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServerController::reset
* @see app/Http/Controllers/ServerController.php:45
* @route '/shop/server-reset'
*/
reset.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::reset
* @see app/Http/Controllers/ServerController.php:45
* @route '/shop/server-reset'
*/
reset.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reset.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServerController::reset
* @see app/Http/Controllers/ServerController.php:45
* @route '/shop/server-reset'
*/
const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::reset
* @see app/Http/Controllers/ServerController.php:45
* @route '/shop/server-reset'
*/
resetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::reset
* @see app/Http/Controllers/ServerController.php:45
* @route '/shop/server-reset'
*/
resetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

reset.form = resetForm

/**
* @see \App\Http\Controllers\ServerController::show
* @see app/Http/Controllers/ServerController.php:38
* @route '/shop/server/{server}'
*/
export const show = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/shop/server/{server}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServerController::show
* @see app/Http/Controllers/ServerController.php:38
* @route '/shop/server/{server}'
*/
show.url = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServerController::show
* @see app/Http/Controllers/ServerController.php:38
* @route '/shop/server/{server}'
*/
show.get = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::show
* @see app/Http/Controllers/ServerController.php:38
* @route '/shop/server/{server}'
*/
show.head = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServerController::show
* @see app/Http/Controllers/ServerController.php:38
* @route '/shop/server/{server}'
*/
const showForm = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::show
* @see app/Http/Controllers/ServerController.php:38
* @route '/shop/server/{server}'
*/
showForm.get = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::show
* @see app/Http/Controllers/ServerController.php:38
* @route '/shop/server/{server}'
*/
showForm.head = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const server = {
    reset: Object.assign(reset, reset),
    show: Object.assign(show, show),
}

export default server
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import item from './item'
import server7c4559 from './server'
/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/shop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
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
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
export const category = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

category.definition = {
    methods: ["get","head"],
    url: '/shop/category/{path}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
category.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    if (Array.isArray(args)) {
        args = {
            path: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        path: args.path,
    }

    return category.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
category.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
category.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: category.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
const categoryForm = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
categoryForm.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
categoryForm.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

category.form = categoryForm

/**
* @see \App\Http\Controllers\ServerController::server
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
export const server = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: server.url(options),
    method: 'get',
})

server.definition = {
    methods: ["get","head"],
    url: '/shop/server',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServerController::server
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
server.url = (options?: RouteQueryOptions) => {
    return server.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServerController::server
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
server.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: server.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::server
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
server.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: server.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServerController::server
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
const serverForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: server.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::server
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
serverForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: server.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::server
* @see app/Http/Controllers/ServerController.php:26
* @route '/shop/server'
*/
serverForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: server.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

server.form = serverForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
export const other = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: other.url(options),
    method: 'get',
})

other.definition = {
    methods: ["get","head"],
    url: '/shop/other',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
other.url = (options?: RouteQueryOptions) => {
    return other.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
other.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: other.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
other.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: other.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
const otherForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: other.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
otherForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: other.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
otherForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: other.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

other.form = otherForm

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
export const buyBalance = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: buyBalance.url(options),
    method: 'post',
})

buyBalance.definition = {
    methods: ["post"],
    url: '/shop/buy-balance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
buyBalance.url = (options?: RouteQueryOptions) => {
    return buyBalance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
buyBalance.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: buyBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
const buyBalanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
buyBalanceForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyBalance.url(options),
    method: 'post',
})

buyBalance.form = buyBalanceForm

const shop = {
    index: Object.assign(index, index),
    category: Object.assign(category, category),
    item: Object.assign(item, item),
    server: Object.assign(server, server7c4559),
    other: Object.assign(other, other),
    buyBalance: Object.assign(buyBalance, buyBalance),
}

export default shop
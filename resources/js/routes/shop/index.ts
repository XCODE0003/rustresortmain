import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/shop',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: index.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: index.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: index.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
index.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: index.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
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

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
indexForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
indexForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
indexForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
indexForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
indexForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see routes/web.php:52
* @route '/shop/{path}'
*/
export const closed = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: closed.url(args, options),
    method: 'get',
})

closed.definition = {
    methods: ["get","head"],
    url: '/shop/{path}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:52
* @route '/shop/{path}'
*/
closed.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return closed.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/web.php:52
* @route '/shop/{path}'
*/
closed.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: closed.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:52
* @route '/shop/{path}'
*/
closed.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: closed.url(args, options),
    method: 'head',
})

/**
* @see routes/web.php:52
* @route '/shop/{path}'
*/
const closedForm = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: closed.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:52
* @route '/shop/{path}'
*/
closedForm.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: closed.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:52
* @route '/shop/{path}'
*/
closedForm.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: closed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

closed.form = closedForm

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:80
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
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
buyBalance.url = (options?: RouteQueryOptions) => {
    return buyBalance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
buyBalance.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: buyBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
const buyBalanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
buyBalanceForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyBalance.url(options),
    method: 'post',
})

buyBalance.form = buyBalanceForm

const shop = {
    index: Object.assign(index, index),
    closed: Object.assign(closed, closed),
    buyBalance: Object.assign(buyBalance, buyBalance),
}

export default shop
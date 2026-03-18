import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BalanceController::index
* @see app/Http/Controllers/BalanceController.php:19
* @route '/payment'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/payment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BalanceController::index
* @see app/Http/Controllers/BalanceController.php:19
* @route '/payment'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BalanceController::index
* @see app/Http/Controllers/BalanceController.php:19
* @route '/payment'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::index
* @see app/Http/Controllers/BalanceController.php:19
* @route '/payment'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BalanceController::index
* @see app/Http/Controllers/BalanceController.php:19
* @route '/payment'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::index
* @see app/Http/Controllers/BalanceController.php:19
* @route '/payment'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::index
* @see app/Http/Controllers/BalanceController.php:19
* @route '/payment'
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
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:29
* @route '/balance/topup'
*/
export const topup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: topup.url(options),
    method: 'post',
})

topup.definition = {
    methods: ["post"],
    url: '/balance/topup',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:29
* @route '/balance/topup'
*/
topup.url = (options?: RouteQueryOptions) => {
    return topup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:29
* @route '/balance/topup'
*/
topup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: topup.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:29
* @route '/balance/topup'
*/
const topupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: topup.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:29
* @route '/balance/topup'
*/
topupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: topup.url(options),
    method: 'post',
})

topup.form = topupForm

const BalanceController = { index, topup }

export default BalanceController
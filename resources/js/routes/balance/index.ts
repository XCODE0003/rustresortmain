import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BalanceController::tebex
* @see app/Http/Controllers/BalanceController.php:139
* @route '/balance/tebex'
*/
export const tebex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tebex.url(options),
    method: 'get',
})

tebex.definition = {
    methods: ["get","head"],
    url: '/balance/tebex',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BalanceController::tebex
* @see app/Http/Controllers/BalanceController.php:139
* @route '/balance/tebex'
*/
tebex.url = (options?: RouteQueryOptions) => {
    return tebex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BalanceController::tebex
* @see app/Http/Controllers/BalanceController.php:139
* @route '/balance/tebex'
*/
tebex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tebex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::tebex
* @see app/Http/Controllers/BalanceController.php:139
* @route '/balance/tebex'
*/
tebex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tebex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BalanceController::tebex
* @see app/Http/Controllers/BalanceController.php:139
* @route '/balance/tebex'
*/
const tebexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tebex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::tebex
* @see app/Http/Controllers/BalanceController.php:139
* @route '/balance/tebex'
*/
tebexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tebex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::tebex
* @see app/Http/Controllers/BalanceController.php:139
* @route '/balance/tebex'
*/
tebexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tebex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tebex.form = tebexForm

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:34
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
* @see app/Http/Controllers/BalanceController.php:34
* @route '/balance/topup'
*/
topup.url = (options?: RouteQueryOptions) => {
    return topup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:34
* @route '/balance/topup'
*/
topup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: topup.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:34
* @route '/balance/topup'
*/
const topupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: topup.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BalanceController::topup
* @see app/Http/Controllers/BalanceController.php:34
* @route '/balance/topup'
*/
topupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: topup.url(options),
    method: 'post',
})

topup.form = topupForm

const balance = {
    tebex: Object.assign(tebex, tebex),
    topup: Object.assign(topup, topup),
}

export default balance
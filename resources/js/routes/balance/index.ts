import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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

const balance = {
    topup: Object.assign(topup, topup),
}

export default balance
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
export const buyWithBalance = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: buyWithBalance.url(options),
    method: 'post',
})

buyWithBalance.definition = {
    methods: ["post"],
    url: '/shop/buy-balance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
buyWithBalance.url = (options?: RouteQueryOptions) => {
    return buyWithBalance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
buyWithBalance.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: buyWithBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
const buyWithBalanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyWithBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:80
* @route '/shop/buy-balance'
*/
buyWithBalanceForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyWithBalance.url(options),
    method: 'post',
})

buyWithBalance.form = buyWithBalanceForm

const ShopController = { buyWithBalance }

export default ShopController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PromoController::activate
* @see app/Http/Controllers/PromoController.php:28
* @route '/promocode/activate'
*/
export const activate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: activate.url(options),
    method: 'post',
})

activate.definition = {
    methods: ["post"],
    url: '/promocode/activate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PromoController::activate
* @see app/Http/Controllers/PromoController.php:28
* @route '/promocode/activate'
*/
activate.url = (options?: RouteQueryOptions) => {
    return activate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PromoController::activate
* @see app/Http/Controllers/PromoController.php:28
* @route '/promocode/activate'
*/
activate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: activate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PromoController::activate
* @see app/Http/Controllers/PromoController.php:28
* @route '/promocode/activate'
*/
const activateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PromoController::activate
* @see app/Http/Controllers/PromoController.php:28
* @route '/promocode/activate'
*/
activateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(options),
    method: 'post',
})

activate.form = activateForm

const PromoController = { activate }

export default PromoController
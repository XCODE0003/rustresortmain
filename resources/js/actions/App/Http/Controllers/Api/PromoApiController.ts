import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PromoApiController::getPromos
* @see app/Http/Controllers/Api/PromoApiController.php:30
* @route '/api/promo/get'
*/
export const getPromos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPromos.url(options),
    method: 'get',
})

getPromos.definition = {
    methods: ["get","head"],
    url: '/api/promo/get',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PromoApiController::getPromos
* @see app/Http/Controllers/Api/PromoApiController.php:30
* @route '/api/promo/get'
*/
getPromos.url = (options?: RouteQueryOptions) => {
    return getPromos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PromoApiController::getPromos
* @see app/Http/Controllers/Api/PromoApiController.php:30
* @route '/api/promo/get'
*/
getPromos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPromos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PromoApiController::getPromos
* @see app/Http/Controllers/Api/PromoApiController.php:30
* @route '/api/promo/get'
*/
getPromos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPromos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PromoApiController::getPromos
* @see app/Http/Controllers/Api/PromoApiController.php:30
* @route '/api/promo/get'
*/
const getPromosForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPromos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PromoApiController::getPromos
* @see app/Http/Controllers/Api/PromoApiController.php:30
* @route '/api/promo/get'
*/
getPromosForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPromos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PromoApiController::getPromos
* @see app/Http/Controllers/Api/PromoApiController.php:30
* @route '/api/promo/get'
*/
getPromosForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getPromos.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getPromos.form = getPromosForm

/**
* @see \App\Http\Controllers\Api\PromoApiController::activate
* @see app/Http/Controllers/Api/PromoApiController.php:68
* @route '/api/activate'
*/
export const activate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: activate.url(options),
    method: 'post',
})

activate.definition = {
    methods: ["post"],
    url: '/api/activate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PromoApiController::activate
* @see app/Http/Controllers/Api/PromoApiController.php:68
* @route '/api/activate'
*/
activate.url = (options?: RouteQueryOptions) => {
    return activate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PromoApiController::activate
* @see app/Http/Controllers/Api/PromoApiController.php:68
* @route '/api/activate'
*/
activate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: activate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PromoApiController::activate
* @see app/Http/Controllers/Api/PromoApiController.php:68
* @route '/api/activate'
*/
const activateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PromoApiController::activate
* @see app/Http/Controllers/Api/PromoApiController.php:68
* @route '/api/activate'
*/
activateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(options),
    method: 'post',
})

activate.form = activateForm

const PromoApiController = { getPromos, activate }

export default PromoApiController
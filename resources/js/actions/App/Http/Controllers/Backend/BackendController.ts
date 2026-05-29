import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\BackendController::index
* @see app/Http/Controllers/Backend/BackendController.php:26
* @route '/backend_uc7BgHFmw32FDIEp'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BackendController::index
* @see app/Http/Controllers/Backend/BackendController.php:26
* @route '/backend_uc7BgHFmw32FDIEp'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BackendController::index
* @see app/Http/Controllers/Backend/BackendController.php:26
* @route '/backend_uc7BgHFmw32FDIEp'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\BackendController::index
* @see app/Http/Controllers/Backend/BackendController.php:26
* @route '/backend_uc7BgHFmw32FDIEp'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\BackendController::index
* @see app/Http/Controllers/Backend/BackendController.php:26
* @route '/backend_uc7BgHFmw32FDIEp'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\BackendController::index
* @see app/Http/Controllers/Backend/BackendController.php:26
* @route '/backend_uc7BgHFmw32FDIEp'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\BackendController::index
* @see app/Http/Controllers/Backend/BackendController.php:26
* @route '/backend_uc7BgHFmw32FDIEp'
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

const BackendController = { index }

export default BackendController
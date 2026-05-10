import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UpdateitemsController::index
* @see app/Http/Controllers/Backend/UpdateitemsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/updateitems'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/updateitems',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UpdateitemsController::index
* @see app/Http/Controllers/Backend/UpdateitemsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/updateitems'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UpdateitemsController::index
* @see app/Http/Controllers/Backend/UpdateitemsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/updateitems'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UpdateitemsController::index
* @see app/Http/Controllers/Backend/UpdateitemsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/updateitems'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UpdateitemsController::index
* @see app/Http/Controllers/Backend/UpdateitemsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/updateitems'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UpdateitemsController::index
* @see app/Http/Controllers/Backend/UpdateitemsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/updateitems'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UpdateitemsController::index
* @see app/Http/Controllers/Backend/UpdateitemsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/updateitems'
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

const UpdateitemsController = { index }

export default UpdateitemsController
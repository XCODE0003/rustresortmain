import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
export const clearStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clearStatistics.url(options),
    method: 'get',
})

clearStatistics.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/statistics/clearStatistics',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.url = (options?: RouteQueryOptions) => {
    return clearStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clearStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clearStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: clearStatistics.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: clearStatistics.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: clearStatistics.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clearStatistics.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatistics.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: clearStatistics.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
const clearStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clearStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clearStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatisticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clearStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatisticsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clearStatistics.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatisticsForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clearStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatisticsForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clearStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatisticsForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clearStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ClearStatisticsController::clearStatistics
* @see app/Http/Controllers/Api/ClearStatisticsController.php:18
* @route '/api/statistics/clearStatistics'
*/
clearStatisticsForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clearStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

clearStatistics.form = clearStatisticsForm

const ClearStatisticsController = { clearStatistics }

export default ClearStatisticsController
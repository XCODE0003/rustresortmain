import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
export const setStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatistics.url(options),
    method: 'get',
})

setStatistics.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/statistics/setStatistics',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.url = (options?: RouteQueryOptions) => {
    return setStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setStatistics.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: setStatistics.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setStatistics.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: setStatistics.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatistics.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: setStatistics.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
const setStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatisticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatisticsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setStatistics.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatisticsForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatisticsForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatisticsForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersStatisticsController::setStatistics
* @see app/Http/Controllers/Api/ServersStatisticsController.php:17
* @route '/api/statistics/setStatistics'
*/
setStatisticsForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setStatistics.form = setStatisticsForm

const ServersStatisticsController = { setStatistics }

export default ServersStatisticsController
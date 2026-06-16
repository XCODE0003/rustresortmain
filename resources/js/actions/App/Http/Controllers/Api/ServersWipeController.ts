import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
export const setLastWipeDate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setLastWipeDate.url(options),
    method: 'get',
})

setLastWipeDate.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/server/setLastWipeDate',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.url = (options?: RouteQueryOptions) => {
    return setLastWipeDate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setLastWipeDate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setLastWipeDate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setLastWipeDate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: setLastWipeDate.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setLastWipeDate.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: setLastWipeDate.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDate.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: setLastWipeDate.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
const setLastWipeDateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setLastWipeDate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setLastWipeDate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setLastWipeDate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setLastWipeDate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setLastWipeDate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setLastWipeDate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDateForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setLastWipeDate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::setLastWipeDate
* @see app/Http/Controllers/Api/ServersWipeController.php:20
* @route '/api/server/setLastWipeDate'
*/
setLastWipeDateForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setLastWipeDate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setLastWipeDate.form = setLastWipeDateForm

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
export const forgetCacheOnline = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgetCacheOnline.url(options),
    method: 'get',
})

forgetCacheOnline.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/server/forgetCacheOnline',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.url = (options?: RouteQueryOptions) => {
    return forgetCacheOnline.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgetCacheOnline.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forgetCacheOnline.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forgetCacheOnline.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: forgetCacheOnline.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: forgetCacheOnline.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forgetCacheOnline.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnline.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: forgetCacheOnline.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
const forgetCacheOnlineForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forgetCacheOnline.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnlineForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forgetCacheOnline.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnlineForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forgetCacheOnline.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnlineForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forgetCacheOnline.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnlineForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forgetCacheOnline.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnlineForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forgetCacheOnline.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnlineForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forgetCacheOnline.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::forgetCacheOnline
* @see app/Http/Controllers/Api/ServersWipeController.php:62
* @route '/api/server/forgetCacheOnline'
*/
forgetCacheOnlineForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forgetCacheOnline.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

forgetCacheOnline.form = forgetCacheOnlineForm

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
export const refreshStatus = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: refreshStatus.url(options),
    method: 'get',
})

refreshStatus.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/server/refreshStatus',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.url = (options?: RouteQueryOptions) => {
    return refreshStatus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: refreshStatus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: refreshStatus.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: refreshStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: refreshStatus.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: refreshStatus.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: refreshStatus.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatus.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: refreshStatus.url(options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
const refreshStatusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: refreshStatus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: refreshStatus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: refreshStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatusForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refreshStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatusForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refreshStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatusForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refreshStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatusForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refreshStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ServersWipeController::refreshStatus
* @see app/Http/Controllers/Api/ServersWipeController.php:73
* @route '/api/server/refreshStatus'
*/
refreshStatusForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: refreshStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

refreshStatus.form = refreshStatusForm

const ServersWipeController = { setLastWipeDate, forgetCacheOnline, refreshStatus }

export default ServersWipeController
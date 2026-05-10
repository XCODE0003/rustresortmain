import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import tickets from './tickets'
import user from './user'
import users from './users'
/**
* @see \App\Http\Controllers\Backend\SettingsController::settings
* @see app/Http/Controllers/Backend/SettingsController.php:31
* @route '/backend_uc7BgHFmw32FDIEp/settings'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::settings
* @see app/Http/Controllers/Backend/SettingsController.php:31
* @route '/backend_uc7BgHFmw32FDIEp/settings'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::settings
* @see app/Http/Controllers/Backend/SettingsController.php:31
* @route '/backend_uc7BgHFmw32FDIEp/settings'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::settings
* @see app/Http/Controllers/Backend/SettingsController.php:31
* @route '/backend_uc7BgHFmw32FDIEp/settings'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::settings
* @see app/Http/Controllers/Backend/SettingsController.php:31
* @route '/backend_uc7BgHFmw32FDIEp/settings'
*/
const settingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::settings
* @see app/Http/Controllers/Backend/SettingsController.php:31
* @route '/backend_uc7BgHFmw32FDIEp/settings'
*/
settingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::settings
* @see app/Http/Controllers/Backend/SettingsController.php:31
* @route '/backend_uc7BgHFmw32FDIEp/settings'
*/
settingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

settings.form = settingsForm

/**
* @see \App\Http\Controllers\Backend\CaseopenHistoryController::caseopen_history
* @see app/Http/Controllers/Backend/CaseopenHistoryController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/caseopen_history'
*/
export const caseopen_history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: caseopen_history.url(options),
    method: 'get',
})

caseopen_history.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/caseopen_history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CaseopenHistoryController::caseopen_history
* @see app/Http/Controllers/Backend/CaseopenHistoryController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/caseopen_history'
*/
caseopen_history.url = (options?: RouteQueryOptions) => {
    return caseopen_history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CaseopenHistoryController::caseopen_history
* @see app/Http/Controllers/Backend/CaseopenHistoryController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/caseopen_history'
*/
caseopen_history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: caseopen_history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CaseopenHistoryController::caseopen_history
* @see app/Http/Controllers/Backend/CaseopenHistoryController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/caseopen_history'
*/
caseopen_history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: caseopen_history.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CaseopenHistoryController::caseopen_history
* @see app/Http/Controllers/Backend/CaseopenHistoryController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/caseopen_history'
*/
const caseopen_historyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: caseopen_history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CaseopenHistoryController::caseopen_history
* @see app/Http/Controllers/Backend/CaseopenHistoryController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/caseopen_history'
*/
caseopen_historyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: caseopen_history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CaseopenHistoryController::caseopen_history
* @see app/Http/Controllers/Backend/CaseopenHistoryController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/caseopen_history'
*/
caseopen_historyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: caseopen_history.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

caseopen_history.form = caseopen_historyForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::delivery_requests
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
export const delivery_requests = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: delivery_requests.url(options),
    method: 'get',
})

delivery_requests.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::delivery_requests
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
delivery_requests.url = (options?: RouteQueryOptions) => {
    return delivery_requests.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::delivery_requests
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
delivery_requests.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: delivery_requests.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::delivery_requests
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
delivery_requests.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: delivery_requests.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::delivery_requests
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
const delivery_requestsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: delivery_requests.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::delivery_requests
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
delivery_requestsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: delivery_requests.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::delivery_requests
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
delivery_requestsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: delivery_requests.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

delivery_requests.form = delivery_requestsForm

const backend = {
    settings: Object.assign(settings, settings),
    tickets: Object.assign(tickets, tickets),
    user: Object.assign(user, user),
    users: Object.assign(users, users),
    caseopen_history: Object.assign(caseopen_history, caseopen_history),
    delivery_requests: Object.assign(delivery_requests, delivery_requests),
}

export default backend
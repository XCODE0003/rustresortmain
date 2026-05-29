import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\LogController::index
* @see app/Http/Controllers/Backend/LogController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/logs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::index
* @see app/Http/Controllers/Backend/LogController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/logs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::index
* @see app/Http/Controllers/Backend/LogController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/logs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::index
* @see app/Http/Controllers/Backend/LogController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/logs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::index
* @see app/Http/Controllers/Backend/LogController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/logs'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::index
* @see app/Http/Controllers/Backend/LogController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/logs'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::index
* @see app/Http/Controllers/Backend/LogController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/logs'
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

/**
* @see \App\Http\Controllers\Backend\LogController::payments
* @see app/Http/Controllers/Backend/LogController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/logs/payments'
*/
export const payments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payments.url(options),
    method: 'get',
})

payments.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::payments
* @see app/Http/Controllers/Backend/LogController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/logs/payments'
*/
payments.url = (options?: RouteQueryOptions) => {
    return payments.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::payments
* @see app/Http/Controllers/Backend/LogController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/logs/payments'
*/
payments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payments.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::payments
* @see app/Http/Controllers/Backend/LogController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/logs/payments'
*/
payments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payments.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::payments
* @see app/Http/Controllers/Backend/LogController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/logs/payments'
*/
const paymentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::payments
* @see app/Http/Controllers/Backend/LogController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/logs/payments'
*/
paymentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::payments
* @see app/Http/Controllers/Backend/LogController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/logs/payments'
*/
paymentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

payments.form = paymentsForm

/**
* @see \App\Http\Controllers\Backend\LogController::shop
* @see app/Http/Controllers/Backend/LogController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/logs/shop'
*/
export const shop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shop.url(options),
    method: 'get',
})

shop.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/shop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::shop
* @see app/Http/Controllers/Backend/LogController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/logs/shop'
*/
shop.url = (options?: RouteQueryOptions) => {
    return shop.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::shop
* @see app/Http/Controllers/Backend/LogController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/logs/shop'
*/
shop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shop.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::shop
* @see app/Http/Controllers/Backend/LogController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/logs/shop'
*/
shop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shop.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::shop
* @see app/Http/Controllers/Backend/LogController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/logs/shop'
*/
const shopForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shop.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::shop
* @see app/Http/Controllers/Backend/LogController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/logs/shop'
*/
shopForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shop.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::shop
* @see app/Http/Controllers/Backend/LogController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/logs/shop'
*/
shopForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shop.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

shop.form = shopForm

/**
* @see \App\Http\Controllers\Backend\LogController::visits
* @see app/Http/Controllers/Backend/LogController.php:66
* @route '/backend_uc7BgHFmw32FDIEp/logs/visits'
*/
export const visits = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visits.url(options),
    method: 'get',
})

visits.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/visits',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::visits
* @see app/Http/Controllers/Backend/LogController.php:66
* @route '/backend_uc7BgHFmw32FDIEp/logs/visits'
*/
visits.url = (options?: RouteQueryOptions) => {
    return visits.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::visits
* @see app/Http/Controllers/Backend/LogController.php:66
* @route '/backend_uc7BgHFmw32FDIEp/logs/visits'
*/
visits.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visits.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::visits
* @see app/Http/Controllers/Backend/LogController.php:66
* @route '/backend_uc7BgHFmw32FDIEp/logs/visits'
*/
visits.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: visits.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::visits
* @see app/Http/Controllers/Backend/LogController.php:66
* @route '/backend_uc7BgHFmw32FDIEp/logs/visits'
*/
const visitsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visits.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::visits
* @see app/Http/Controllers/Backend/LogController.php:66
* @route '/backend_uc7BgHFmw32FDIEp/logs/visits'
*/
visitsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visits.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::visits
* @see app/Http/Controllers/Backend/LogController.php:66
* @route '/backend_uc7BgHFmw32FDIEp/logs/visits'
*/
visitsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: visits.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

visits.form = visitsForm

/**
* @see \App\Http\Controllers\Backend\LogController::registrations
* @see app/Http/Controllers/Backend/LogController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/logs/registrations'
*/
export const registrations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registrations.url(options),
    method: 'get',
})

registrations.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/registrations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::registrations
* @see app/Http/Controllers/Backend/LogController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/logs/registrations'
*/
registrations.url = (options?: RouteQueryOptions) => {
    return registrations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::registrations
* @see app/Http/Controllers/Backend/LogController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/logs/registrations'
*/
registrations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registrations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::registrations
* @see app/Http/Controllers/Backend/LogController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/logs/registrations'
*/
registrations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registrations.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::registrations
* @see app/Http/Controllers/Backend/LogController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/logs/registrations'
*/
const registrationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registrations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::registrations
* @see app/Http/Controllers/Backend/LogController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/logs/registrations'
*/
registrationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registrations.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::registrations
* @see app/Http/Controllers/Backend/LogController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/logs/registrations'
*/
registrationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registrations.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

registrations.form = registrationsForm

/**
* @see \App\Http\Controllers\Backend\LogController::gamecurrencylogs
* @see app/Http/Controllers/Backend/LogController.php:84
* @route '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs'
*/
export const gamecurrencylogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gamecurrencylogs.url(options),
    method: 'get',
})

gamecurrencylogs.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::gamecurrencylogs
* @see app/Http/Controllers/Backend/LogController.php:84
* @route '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs'
*/
gamecurrencylogs.url = (options?: RouteQueryOptions) => {
    return gamecurrencylogs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::gamecurrencylogs
* @see app/Http/Controllers/Backend/LogController.php:84
* @route '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs'
*/
gamecurrencylogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gamecurrencylogs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::gamecurrencylogs
* @see app/Http/Controllers/Backend/LogController.php:84
* @route '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs'
*/
gamecurrencylogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: gamecurrencylogs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::gamecurrencylogs
* @see app/Http/Controllers/Backend/LogController.php:84
* @route '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs'
*/
const gamecurrencylogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gamecurrencylogs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::gamecurrencylogs
* @see app/Http/Controllers/Backend/LogController.php:84
* @route '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs'
*/
gamecurrencylogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gamecurrencylogs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::gamecurrencylogs
* @see app/Http/Controllers/Backend/LogController.php:84
* @route '/backend_uc7BgHFmw32FDIEp/logs/gamecurrencylogs'
*/
gamecurrencylogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gamecurrencylogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

gamecurrencylogs.form = gamecurrencylogsForm

/**
* @see \App\Http\Controllers\Backend\LogController::adminlogs
* @see app/Http/Controllers/Backend/LogController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/logs/adminlogs'
*/
export const adminlogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminlogs.url(options),
    method: 'get',
})

adminlogs.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/adminlogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::adminlogs
* @see app/Http/Controllers/Backend/LogController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/logs/adminlogs'
*/
adminlogs.url = (options?: RouteQueryOptions) => {
    return adminlogs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::adminlogs
* @see app/Http/Controllers/Backend/LogController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/logs/adminlogs'
*/
adminlogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminlogs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::adminlogs
* @see app/Http/Controllers/Backend/LogController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/logs/adminlogs'
*/
adminlogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminlogs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::adminlogs
* @see app/Http/Controllers/Backend/LogController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/logs/adminlogs'
*/
const adminlogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adminlogs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::adminlogs
* @see app/Http/Controllers/Backend/LogController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/logs/adminlogs'
*/
adminlogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adminlogs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::adminlogs
* @see app/Http/Controllers/Backend/LogController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/logs/adminlogs'
*/
adminlogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adminlogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

adminlogs.form = adminlogsForm

/**
* @see \App\Http\Controllers\Backend\LogController::servererrors
* @see app/Http/Controllers/Backend/LogController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/logs/servererrors'
*/
export const servererrors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servererrors.url(options),
    method: 'get',
})

servererrors.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/servererrors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::servererrors
* @see app/Http/Controllers/Backend/LogController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/logs/servererrors'
*/
servererrors.url = (options?: RouteQueryOptions) => {
    return servererrors.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::servererrors
* @see app/Http/Controllers/Backend/LogController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/logs/servererrors'
*/
servererrors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servererrors.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::servererrors
* @see app/Http/Controllers/Backend/LogController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/logs/servererrors'
*/
servererrors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: servererrors.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::servererrors
* @see app/Http/Controllers/Backend/LogController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/logs/servererrors'
*/
const servererrorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: servererrors.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::servererrors
* @see app/Http/Controllers/Backend/LogController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/logs/servererrors'
*/
servererrorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: servererrors.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::servererrors
* @see app/Http/Controllers/Backend/LogController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/logs/servererrors'
*/
servererrorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: servererrors.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

servererrors.form = servererrorsForm

/**
* @see \App\Http\Controllers\Backend\LogController::statistics_game_items
* @see app/Http/Controllers/Backend/LogController.php:154
* @route '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items'
*/
export const statistics_game_items = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics_game_items.url(options),
    method: 'get',
})

statistics_game_items.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::statistics_game_items
* @see app/Http/Controllers/Backend/LogController.php:154
* @route '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items'
*/
statistics_game_items.url = (options?: RouteQueryOptions) => {
    return statistics_game_items.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::statistics_game_items
* @see app/Http/Controllers/Backend/LogController.php:154
* @route '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items'
*/
statistics_game_items.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics_game_items.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::statistics_game_items
* @see app/Http/Controllers/Backend/LogController.php:154
* @route '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items'
*/
statistics_game_items.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statistics_game_items.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::statistics_game_items
* @see app/Http/Controllers/Backend/LogController.php:154
* @route '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items'
*/
const statistics_game_itemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statistics_game_items.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::statistics_game_items
* @see app/Http/Controllers/Backend/LogController.php:154
* @route '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items'
*/
statistics_game_itemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statistics_game_items.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::statistics_game_items
* @see app/Http/Controllers/Backend/LogController.php:154
* @route '/backend_uc7BgHFmw32FDIEp/logs/statistics_game_items'
*/
statistics_game_itemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statistics_game_items.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

statistics_game_items.form = statistics_game_itemsForm

/**
* @see \App\Http\Controllers\Backend\LogController::userlogs
* @see app/Http/Controllers/Backend/LogController.php:117
* @route '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}'
*/
export const userlogs = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userlogs.url(args, options),
    method: 'get',
})

userlogs.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\LogController::userlogs
* @see app/Http/Controllers/Backend/LogController.php:117
* @route '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}'
*/
userlogs.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return userlogs.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LogController::userlogs
* @see app/Http/Controllers/Backend/LogController.php:117
* @route '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}'
*/
userlogs.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userlogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::userlogs
* @see app/Http/Controllers/Backend/LogController.php:117
* @route '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}'
*/
userlogs.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userlogs.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\LogController::userlogs
* @see app/Http/Controllers/Backend/LogController.php:117
* @route '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}'
*/
const userlogsForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userlogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::userlogs
* @see app/Http/Controllers/Backend/LogController.php:117
* @route '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}'
*/
userlogsForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userlogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\LogController::userlogs
* @see app/Http/Controllers/Backend/LogController.php:117
* @route '/backend_uc7BgHFmw32FDIEp/logs/userlogs/{user}'
*/
userlogsForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userlogs.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userlogs.form = userlogsForm

const LogController = { index, payments, shop, visits, registrations, gamecurrencylogs, adminlogs, servererrors, statistics_game_items, userlogs }

export default LogController
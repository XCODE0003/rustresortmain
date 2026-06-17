import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::inprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
export const inprocessing = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inprocessing.url(args, options),
    method: 'get',
})

inprocessing.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::inprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
inprocessing.url = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { deliveryrequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { deliveryrequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            deliveryrequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        deliveryrequest: typeof args.deliveryrequest === 'object'
        ? args.deliveryrequest.id
        : args.deliveryrequest,
    }

    return inprocessing.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::inprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
inprocessing.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inprocessing.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::inprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
inprocessing.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inprocessing.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::inprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
const inprocessingForm = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inprocessing.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::inprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
inprocessingForm.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inprocessing.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::inprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
inprocessingForm.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inprocessing.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

inprocessing.form = inprocessingForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::completed
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
export const completed = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: completed.url(args, options),
    method: 'get',
})

completed.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::completed
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
completed.url = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { deliveryrequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { deliveryrequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            deliveryrequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        deliveryrequest: typeof args.deliveryrequest === 'object'
        ? args.deliveryrequest.id
        : args.deliveryrequest,
    }

    return completed.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::completed
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
completed.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: completed.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::completed
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
completed.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: completed.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::completed
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
const completedForm = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: completed.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::completed
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
completedForm.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: completed.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::completed
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
completedForm.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: completed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

completed.form = completedForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::canceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
export const canceled = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: canceled.url(args, options),
    method: 'get',
})

canceled.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::canceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
canceled.url = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { deliveryrequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { deliveryrequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            deliveryrequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        deliveryrequest: typeof args.deliveryrequest === 'object'
        ? args.deliveryrequest.id
        : args.deliveryrequest,
    }

    return canceled.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::canceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
canceled.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: canceled.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::canceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
canceled.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: canceled.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::canceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
const canceledForm = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: canceled.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::canceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
canceledForm.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: canceled.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::canceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
canceledForm.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: canceled.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

canceled.form = canceledForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::waxpeer_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
export const waxpeer_api = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: waxpeer_api.url(args, options),
    method: 'get',
})

waxpeer_api.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::waxpeer_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
waxpeer_api.url = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { deliveryrequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { deliveryrequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            deliveryrequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        deliveryrequest: typeof args.deliveryrequest === 'object'
        ? args.deliveryrequest.id
        : args.deliveryrequest,
    }

    return waxpeer_api.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::waxpeer_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
waxpeer_api.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: waxpeer_api.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::waxpeer_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
waxpeer_api.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: waxpeer_api.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::waxpeer_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
const waxpeer_apiForm = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeer_api.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::waxpeer_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
waxpeer_apiForm.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeer_api.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::waxpeer_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
waxpeer_apiForm.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeer_api.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

waxpeer_api.form = waxpeer_apiForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::skinsback_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
export const skinsback_api = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skinsback_api.url(args, options),
    method: 'get',
})

skinsback_api.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::skinsback_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
skinsback_api.url = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { deliveryrequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { deliveryrequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            deliveryrequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        deliveryrequest: typeof args.deliveryrequest === 'object'
        ? args.deliveryrequest.id
        : args.deliveryrequest,
    }

    return skinsback_api.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::skinsback_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
skinsback_api.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skinsback_api.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::skinsback_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
skinsback_api.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: skinsback_api.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::skinsback_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
const skinsback_apiForm = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsback_api.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::skinsback_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
skinsback_apiForm.get = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsback_api.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::skinsback_api
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
skinsback_apiForm.head = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsback_api.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

skinsback_api.form = skinsback_apiForm

const set = {
    inprocessing: Object.assign(inprocessing, inprocessing),
    completed: Object.assign(completed, completed),
    canceled: Object.assign(canceled, canceled),
    waxpeer_api: Object.assign(waxpeer_api, waxpeer_api),
    skinsback_api: Object.assign(skinsback_api, skinsback_api),
}

export default set
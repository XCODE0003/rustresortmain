import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::index
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::index
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::index
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::index
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::index
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::index
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::index
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:30
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests'
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
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setPricecap
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
export const setPricecap = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setPricecap.url(args, options),
    method: 'post',
})

setPricecap.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setPricecap
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
setPricecap.url = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return setPricecap.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setPricecap
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
setPricecap.post = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setPricecap.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setPricecap
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
const setPricecapForm = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setPricecap.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setPricecap
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
setPricecapForm.post = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setPricecap.url(args, options),
    method: 'post',
})

setPricecap.form = setPricecapForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusInprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
export const setStatusInprocessing = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusInprocessing.url(args, options),
    method: 'get',
})

setStatusInprocessing.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusInprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
setStatusInprocessing.url = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return setStatusInprocessing.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusInprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
setStatusInprocessing.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusInprocessing.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusInprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
setStatusInprocessing.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setStatusInprocessing.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusInprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
const setStatusInprocessingForm = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusInprocessing.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusInprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
setStatusInprocessingForm.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusInprocessing.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusInprocessing
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/inprocessing/{deliveryrequest}'
*/
setStatusInprocessingForm.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusInprocessing.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setStatusInprocessing.form = setStatusInprocessingForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCompleted
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
export const setStatusCompleted = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusCompleted.url(args, options),
    method: 'get',
})

setStatusCompleted.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCompleted
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
setStatusCompleted.url = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return setStatusCompleted.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCompleted
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
setStatusCompleted.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusCompleted.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCompleted
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
setStatusCompleted.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setStatusCompleted.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCompleted
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
const setStatusCompletedForm = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusCompleted.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCompleted
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
setStatusCompletedForm.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusCompleted.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCompleted
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:116
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/completed/{deliveryrequest}'
*/
setStatusCompletedForm.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusCompleted.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setStatusCompleted.form = setStatusCompletedForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCanceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
export const setStatusCanceled = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusCanceled.url(args, options),
    method: 'get',
})

setStatusCanceled.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCanceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
setStatusCanceled.url = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return setStatusCanceled.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCanceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
setStatusCanceled.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusCanceled.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCanceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
setStatusCanceled.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setStatusCanceled.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCanceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
const setStatusCanceledForm = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusCanceled.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCanceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
setStatusCanceledForm.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusCanceled.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusCanceled
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/canceled/{deliveryrequest}'
*/
setStatusCanceledForm.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusCanceled.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setStatusCanceled.form = setStatusCanceledForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusWaxpeerAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
export const setStatusWaxpeerAPI = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusWaxpeerAPI.url(args, options),
    method: 'get',
})

setStatusWaxpeerAPI.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusWaxpeerAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
setStatusWaxpeerAPI.url = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return setStatusWaxpeerAPI.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusWaxpeerAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
setStatusWaxpeerAPI.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusWaxpeerAPI.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusWaxpeerAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
setStatusWaxpeerAPI.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setStatusWaxpeerAPI.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusWaxpeerAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
const setStatusWaxpeerAPIForm = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusWaxpeerAPI.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusWaxpeerAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
setStatusWaxpeerAPIForm.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusWaxpeerAPI.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusWaxpeerAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/waxpeer_api/{deliveryrequest}'
*/
setStatusWaxpeerAPIForm.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusWaxpeerAPI.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setStatusWaxpeerAPI.form = setStatusWaxpeerAPIForm

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusSkinsbackAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
export const setStatusSkinsbackAPI = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusSkinsbackAPI.url(args, options),
    method: 'get',
})

setStatusSkinsbackAPI.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusSkinsbackAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
setStatusSkinsbackAPI.url = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return setStatusSkinsbackAPI.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusSkinsbackAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
setStatusSkinsbackAPI.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setStatusSkinsbackAPI.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusSkinsbackAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
setStatusSkinsbackAPI.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setStatusSkinsbackAPI.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusSkinsbackAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
const setStatusSkinsbackAPIForm = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusSkinsbackAPI.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusSkinsbackAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
setStatusSkinsbackAPIForm.get = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusSkinsbackAPI.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::setStatusSkinsbackAPI
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/skinsback_api/{deliveryrequest}'
*/
setStatusSkinsbackAPIForm.head = (args: { deliveryrequest: number | { id: number } } | [deliveryrequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: setStatusSkinsbackAPI.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

setStatusSkinsbackAPI.form = setStatusSkinsbackAPIForm

const DeliveryRequestsController = { index, setPricecap, setStatusInprocessing, setStatusCompleted, setStatusCanceled, setStatusWaxpeerAPI, setStatusSkinsbackAPI }

export default DeliveryRequestsController
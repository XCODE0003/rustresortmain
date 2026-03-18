import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:20
* @route '/payment/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/payment/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:20
* @route '/payment/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:20
* @route '/payment/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:20
* @route '/payment/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:20
* @route '/payment/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:20
* @route '/payment/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:20
* @route '/payment/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:35
* @route '/payment'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/payment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:35
* @route '/payment'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:35
* @route '/payment'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:35
* @route '/payment'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:35
* @route '/payment'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PaymentController::success
* @see app/Http/Controllers/PaymentController.php:90
* @route '/payment/{donate}/success'
*/
export const success = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})

success.definition = {
    methods: ["get","head"],
    url: '/payment/{donate}/success',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::success
* @see app/Http/Controllers/PaymentController.php:90
* @route '/payment/{donate}/success'
*/
success.url = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { donate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { donate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            donate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        donate: typeof args.donate === 'object'
        ? args.donate.id
        : args.donate,
    }

    return success.definition.url
            .replace('{donate}', parsedArgs.donate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::success
* @see app/Http/Controllers/PaymentController.php:90
* @route '/payment/{donate}/success'
*/
success.get = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: success.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::success
* @see app/Http/Controllers/PaymentController.php:90
* @route '/payment/{donate}/success'
*/
success.head = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: success.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PaymentController::success
* @see app/Http/Controllers/PaymentController.php:90
* @route '/payment/{donate}/success'
*/
const successForm = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::success
* @see app/Http/Controllers/PaymentController.php:90
* @route '/payment/{donate}/success'
*/
successForm.get = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::success
* @see app/Http/Controllers/PaymentController.php:90
* @route '/payment/{donate}/success'
*/
successForm.head = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: success.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

success.form = successForm

/**
* @see \App\Http\Controllers\PaymentController::cancel
* @see app/Http/Controllers/PaymentController.php:97
* @route '/payment/{donate}/cancel'
*/
export const cancel = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(args, options),
    method: 'get',
})

cancel.definition = {
    methods: ["get","head"],
    url: '/payment/{donate}/cancel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::cancel
* @see app/Http/Controllers/PaymentController.php:97
* @route '/payment/{donate}/cancel'
*/
cancel.url = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { donate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { donate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            donate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        donate: typeof args.donate === 'object'
        ? args.donate.id
        : args.donate,
    }

    return cancel.definition.url
            .replace('{donate}', parsedArgs.donate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::cancel
* @see app/Http/Controllers/PaymentController.php:97
* @route '/payment/{donate}/cancel'
*/
cancel.get = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::cancel
* @see app/Http/Controllers/PaymentController.php:97
* @route '/payment/{donate}/cancel'
*/
cancel.head = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cancel.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PaymentController::cancel
* @see app/Http/Controllers/PaymentController.php:97
* @route '/payment/{donate}/cancel'
*/
const cancelForm = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cancel.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::cancel
* @see app/Http/Controllers/PaymentController.php:97
* @route '/payment/{donate}/cancel'
*/
cancelForm.get = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cancel.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::cancel
* @see app/Http/Controllers/PaymentController.php:97
* @route '/payment/{donate}/cancel'
*/
cancelForm.head = (args: { donate: number | { id: number } } | [donate: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cancel.form = cancelForm

const PaymentController = { create, store, success, cancel }

export default PaymentController
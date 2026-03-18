import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
export const handle = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle.url(args, options),
    method: 'get',
})

handle.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/payments/notification/{gateway}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.url = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gateway: args }
    }

    if (Array.isArray(args)) {
        args = {
            gateway: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        gateway: args.gateway,
    }

    return handle.definition.url
            .replace('{gateway}', parsedArgs.gateway.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handle.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: handle.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: handle.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: handle.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handle.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: handle.url(args, options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
const handleForm = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handleForm.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handleForm.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handleForm.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handleForm.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handleForm.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handleForm.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:17
* @route '/api/payments/notification/{gateway}'
*/
handleForm.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

handle.form = handleForm

const PaymentWebhookController = { handle }

export default PaymentWebhookController
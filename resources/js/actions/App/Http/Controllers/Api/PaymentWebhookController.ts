import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
const handle7322e2db38d66c833f3c4c1697a0e31c = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'get',
})

handle7322e2db38d66c833f3c4c1697a0e31c.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/payments/notification/{gateway}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.url = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return handle7322e2db38d66c833f3c4c1697a0e31c.definition.url
            .replace('{gateway}', parsedArgs.gateway.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31c.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
const handle7322e2db38d66c833f3c4c1697a0e31cForm = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31cForm.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31cForm.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31cForm.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31cForm.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31cForm.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31cForm.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
handle7322e2db38d66c833f3c4c1697a0e31cForm.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle7322e2db38d66c833f3c4c1697a0e31c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

handle7322e2db38d66c833f3c4c1697a0e31c.form = handle7322e2db38d66c833f3c4c1697a0e31cForm
/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
const handle4c7a6e426416d72a78a386cf08e1b224 = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'get',
})

handle4c7a6e426416d72a78a386cf08e1b224.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/pays/notification/{gateway}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.url = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return handle4c7a6e426416d72a78a386cf08e1b224.definition.url
            .replace('{gateway}', parsedArgs.gateway.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
const handle4c7a6e426416d72a78a386cf08e1b224Form = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224Form.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224Form.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224Form.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224Form.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224Form.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224Form.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::handle
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
handle4c7a6e426416d72a78a386cf08e1b224Form.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: handle4c7a6e426416d72a78a386cf08e1b224.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

handle4c7a6e426416d72a78a386cf08e1b224.form = handle4c7a6e426416d72a78a386cf08e1b224Form

export const handle = {
    '/api/payments/notification/{gateway}': handle7322e2db38d66c833f3c4c1697a0e31c,
    '/api/pays/notification/{gateway}': handle4c7a6e426416d72a78a386cf08e1b224,
}

const PaymentWebhookController = { handle }

export default PaymentWebhookController
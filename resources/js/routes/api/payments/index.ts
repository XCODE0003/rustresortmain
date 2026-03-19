import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
export const webhook = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webhook.url(args, options),
    method: 'get',
})

webhook.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/payments/notification/{gateway}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.url = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return webhook.definition.url
            .replace('{gateway}', parsedArgs.gateway.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webhook.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: webhook.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: webhook.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: webhook.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: webhook.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhook.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: webhook.url(args, options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
const webhookForm = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: webhook.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhookForm.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: webhook.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhookForm.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: webhook.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhookForm.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhookForm.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhookForm.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhookForm.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: webhook.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::webhook
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/payments/notification/{gateway}'
*/
webhookForm.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: webhook.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

webhook.form = webhookForm

const payments = {
    webhook: Object.assign(webhook, webhook),
}

export default payments
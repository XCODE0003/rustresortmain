import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
export const legacy = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: legacy.url(args, options),
    method: 'get',
})

legacy.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/api/pays/notification/{gateway}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.url = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return legacy.definition.url
            .replace('{gateway}', parsedArgs.gateway.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: legacy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: legacy.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: legacy.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: legacy.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: legacy.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: legacy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacy.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: legacy.url(args, options),
    method: 'options',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
const legacyForm = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legacy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacyForm.get = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legacy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacyForm.head = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legacy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacyForm.post = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: legacy.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacyForm.put = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: legacy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacyForm.patch = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: legacy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacyForm.delete = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: legacy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PaymentWebhookController::legacy
* @see app/Http/Controllers/Api/PaymentWebhookController.php:18
* @route '/api/pays/notification/{gateway}'
*/
legacyForm.options = (args: { gateway: string | number } | [gateway: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: legacy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

legacy.form = legacyForm

const webhook = {
    legacy: Object.assign(legacy, legacy),
}

export default webhook
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
export const transfer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transfer.url(options),
    method: 'get',
})

transfer.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/donate/transfer',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.url = (options?: RouteQueryOptions) => {
    return transfer.definition.url + queryParams(options)
}

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transfer.url(options),
    method: 'get',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transfer.url(options),
    method: 'head',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(options),
    method: 'post',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: transfer.url(options),
    method: 'put',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: transfer.url(options),
    method: 'patch',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: transfer.url(options),
    method: 'delete',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transfer.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: transfer.url(options),
    method: 'options',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
const transferForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transfer.url(options),
    method: 'get',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transferForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transfer.url(options),
    method: 'get',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transferForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transfer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transferForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url(options),
    method: 'post',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transferForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transferForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transferForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:100
* @route '/donate/transfer'
*/
transferForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transfer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

transfer.form = transferForm

const donate = {
    transfer: Object.assign(transfer, transfer),
}

export default donate
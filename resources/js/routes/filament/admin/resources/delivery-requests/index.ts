import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/delivery-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
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
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/delivery-requests/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const deliveryRequests = {
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
}

export default deliveryRequests
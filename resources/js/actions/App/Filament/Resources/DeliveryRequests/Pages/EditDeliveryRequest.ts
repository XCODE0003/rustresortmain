import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
const EditDeliveryRequest = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDeliveryRequest.url(args, options),
    method: 'get',
})

EditDeliveryRequest.definition = {
    methods: ["get","head"],
    url: '/admin/delivery-requests/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
EditDeliveryRequest.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditDeliveryRequest.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
EditDeliveryRequest.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDeliveryRequest.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
EditDeliveryRequest.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDeliveryRequest.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
const EditDeliveryRequestForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDeliveryRequest.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
EditDeliveryRequestForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDeliveryRequest.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/EditDeliveryRequest.php:7
* @route '/admin/delivery-requests/{record}/edit'
*/
EditDeliveryRequestForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditDeliveryRequest.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditDeliveryRequest.form = EditDeliveryRequestForm

export default EditDeliveryRequest
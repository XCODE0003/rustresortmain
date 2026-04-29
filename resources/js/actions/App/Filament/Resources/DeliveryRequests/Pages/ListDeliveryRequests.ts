import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
const ListDeliveryRequests = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDeliveryRequests.url(options),
    method: 'get',
})

ListDeliveryRequests.definition = {
    methods: ["get","head"],
    url: '/admin/delivery-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
ListDeliveryRequests.url = (options?: RouteQueryOptions) => {
    return ListDeliveryRequests.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
ListDeliveryRequests.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDeliveryRequests.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
ListDeliveryRequests.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDeliveryRequests.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
const ListDeliveryRequestsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDeliveryRequests.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
ListDeliveryRequestsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDeliveryRequests.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests::__invoke
* @see app/Filament/Resources/DeliveryRequests/Pages/ListDeliveryRequests.php:7
* @route '/admin/delivery-requests'
*/
ListDeliveryRequestsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDeliveryRequests.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDeliveryRequests.form = ListDeliveryRequestsForm

export default ListDeliveryRequests
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/ListPaymentGateways.php:7
* @route '/admin/payment-gateways'
*/
const ListPaymentGateways = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPaymentGateways.url(options),
    method: 'get',
})

ListPaymentGateways.definition = {
    methods: ["get","head"],
    url: '/admin/payment-gateways',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/ListPaymentGateways.php:7
* @route '/admin/payment-gateways'
*/
ListPaymentGateways.url = (options?: RouteQueryOptions) => {
    return ListPaymentGateways.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/ListPaymentGateways.php:7
* @route '/admin/payment-gateways'
*/
ListPaymentGateways.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPaymentGateways.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/ListPaymentGateways.php:7
* @route '/admin/payment-gateways'
*/
ListPaymentGateways.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPaymentGateways.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/ListPaymentGateways.php:7
* @route '/admin/payment-gateways'
*/
const ListPaymentGatewaysForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPaymentGateways.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/ListPaymentGateways.php:7
* @route '/admin/payment-gateways'
*/
ListPaymentGatewaysForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPaymentGateways.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/ListPaymentGateways.php:7
* @route '/admin/payment-gateways'
*/
ListPaymentGatewaysForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPaymentGateways.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListPaymentGateways.form = ListPaymentGatewaysForm

export default ListPaymentGateways
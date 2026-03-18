import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/CreatePaymentGateway.php:7
* @route '/admin/payment-gateways/create'
*/
const CreatePaymentGateway = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePaymentGateway.url(options),
    method: 'get',
})

CreatePaymentGateway.definition = {
    methods: ["get","head"],
    url: '/admin/payment-gateways/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/CreatePaymentGateway.php:7
* @route '/admin/payment-gateways/create'
*/
CreatePaymentGateway.url = (options?: RouteQueryOptions) => {
    return CreatePaymentGateway.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/CreatePaymentGateway.php:7
* @route '/admin/payment-gateways/create'
*/
CreatePaymentGateway.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePaymentGateway.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/CreatePaymentGateway.php:7
* @route '/admin/payment-gateways/create'
*/
CreatePaymentGateway.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePaymentGateway.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/CreatePaymentGateway.php:7
* @route '/admin/payment-gateways/create'
*/
const CreatePaymentGatewayForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePaymentGateway.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/CreatePaymentGateway.php:7
* @route '/admin/payment-gateways/create'
*/
CreatePaymentGatewayForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePaymentGateway.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/CreatePaymentGateway.php:7
* @route '/admin/payment-gateways/create'
*/
CreatePaymentGatewayForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePaymentGateway.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreatePaymentGateway.form = CreatePaymentGatewayForm

export default CreatePaymentGateway
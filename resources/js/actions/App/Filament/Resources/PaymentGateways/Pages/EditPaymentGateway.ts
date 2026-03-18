import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/EditPaymentGateway.php:7
* @route '/admin/payment-gateways/{record}/edit'
*/
const EditPaymentGateway = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPaymentGateway.url(args, options),
    method: 'get',
})

EditPaymentGateway.definition = {
    methods: ["get","head"],
    url: '/admin/payment-gateways/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/EditPaymentGateway.php:7
* @route '/admin/payment-gateways/{record}/edit'
*/
EditPaymentGateway.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditPaymentGateway.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/EditPaymentGateway.php:7
* @route '/admin/payment-gateways/{record}/edit'
*/
EditPaymentGateway.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPaymentGateway.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/EditPaymentGateway.php:7
* @route '/admin/payment-gateways/{record}/edit'
*/
EditPaymentGateway.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPaymentGateway.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/EditPaymentGateway.php:7
* @route '/admin/payment-gateways/{record}/edit'
*/
const EditPaymentGatewayForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPaymentGateway.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/EditPaymentGateway.php:7
* @route '/admin/payment-gateways/{record}/edit'
*/
EditPaymentGatewayForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPaymentGateway.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway::__invoke
* @see app/Filament/Resources/PaymentGateways/Pages/EditPaymentGateway.php:7
* @route '/admin/payment-gateways/{record}/edit'
*/
EditPaymentGatewayForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPaymentGateway.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditPaymentGateway.form = EditPaymentGatewayForm

export default EditPaymentGateway
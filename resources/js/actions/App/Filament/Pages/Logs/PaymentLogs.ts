import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
const PaymentLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentLogs.url(options),
    method: 'get',
})

PaymentLogs.definition = {
    methods: ["get","head"],
    url: '/admin/payment-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
PaymentLogs.url = (options?: RouteQueryOptions) => {
    return PaymentLogs.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
PaymentLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
PaymentLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PaymentLogs.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
const PaymentLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
PaymentLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
PaymentLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentLogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PaymentLogs.form = PaymentLogsForm

export default PaymentLogs
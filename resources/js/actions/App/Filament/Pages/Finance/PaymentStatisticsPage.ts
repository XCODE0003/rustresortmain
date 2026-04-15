import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Finance\PaymentStatisticsPage::__invoke
* @see app/Filament/Pages/Finance/PaymentStatisticsPage.php:7
* @route '/admin/statistics'
*/
const PaymentStatisticsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentStatisticsPage.url(options),
    method: 'get',
})

PaymentStatisticsPage.definition = {
    methods: ["get","head"],
    url: '/admin/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Finance\PaymentStatisticsPage::__invoke
* @see app/Filament/Pages/Finance/PaymentStatisticsPage.php:7
* @route '/admin/statistics'
*/
PaymentStatisticsPage.url = (options?: RouteQueryOptions) => {
    return PaymentStatisticsPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Finance\PaymentStatisticsPage::__invoke
* @see app/Filament/Pages/Finance/PaymentStatisticsPage.php:7
* @route '/admin/statistics'
*/
PaymentStatisticsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PaymentStatisticsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Finance\PaymentStatisticsPage::__invoke
* @see app/Filament/Pages/Finance/PaymentStatisticsPage.php:7
* @route '/admin/statistics'
*/
PaymentStatisticsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PaymentStatisticsPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Finance\PaymentStatisticsPage::__invoke
* @see app/Filament/Pages/Finance/PaymentStatisticsPage.php:7
* @route '/admin/statistics'
*/
const PaymentStatisticsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentStatisticsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Finance\PaymentStatisticsPage::__invoke
* @see app/Filament/Pages/Finance/PaymentStatisticsPage.php:7
* @route '/admin/statistics'
*/
PaymentStatisticsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentStatisticsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Finance\PaymentStatisticsPage::__invoke
* @see app/Filament/Pages/Finance/PaymentStatisticsPage.php:7
* @route '/admin/statistics'
*/
PaymentStatisticsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PaymentStatisticsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PaymentStatisticsPage.form = PaymentStatisticsPageForm

export default PaymentStatisticsPage
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
const ListShopStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopStatistics.url(options),
    method: 'get',
})

ListShopStatistics.definition = {
    methods: ["get","head"],
    url: '/admin/shop-statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
ListShopStatistics.url = (options?: RouteQueryOptions) => {
    return ListShopStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
ListShopStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
ListShopStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListShopStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
const ListShopStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
ListShopStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
ListShopStatisticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListShopStatistics.form = ListShopStatisticsForm

export default ListShopStatistics
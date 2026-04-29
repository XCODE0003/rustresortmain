import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/shop-statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics::__invoke
* @see app/Filament/Resources/ShopStatistics/Pages/ListShopStatistics.php:7
* @route '/admin/shop-statistics'
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

const shopStatistics = {
    index: Object.assign(index, index),
}

export default shopStatistics
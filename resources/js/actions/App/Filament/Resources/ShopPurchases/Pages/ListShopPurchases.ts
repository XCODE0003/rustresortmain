import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/ListShopPurchases.php:7
* @route '/admin/shop-purchases'
*/
const ListShopPurchases = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopPurchases.url(options),
    method: 'get',
})

ListShopPurchases.definition = {
    methods: ["get","head"],
    url: '/admin/shop-purchases',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/ListShopPurchases.php:7
* @route '/admin/shop-purchases'
*/
ListShopPurchases.url = (options?: RouteQueryOptions) => {
    return ListShopPurchases.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/ListShopPurchases.php:7
* @route '/admin/shop-purchases'
*/
ListShopPurchases.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopPurchases.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/ListShopPurchases.php:7
* @route '/admin/shop-purchases'
*/
ListShopPurchases.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListShopPurchases.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/ListShopPurchases.php:7
* @route '/admin/shop-purchases'
*/
const ListShopPurchasesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopPurchases.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/ListShopPurchases.php:7
* @route '/admin/shop-purchases'
*/
ListShopPurchasesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopPurchases.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/ListShopPurchases.php:7
* @route '/admin/shop-purchases'
*/
ListShopPurchasesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopPurchases.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListShopPurchases.form = ListShopPurchasesForm

export default ListShopPurchases
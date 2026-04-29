import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/ListShopCoupons.php:7
* @route '/admin/shop-coupons'
*/
const ListShopCoupons = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopCoupons.url(options),
    method: 'get',
})

ListShopCoupons.definition = {
    methods: ["get","head"],
    url: '/admin/shop-coupons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/ListShopCoupons.php:7
* @route '/admin/shop-coupons'
*/
ListShopCoupons.url = (options?: RouteQueryOptions) => {
    return ListShopCoupons.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/ListShopCoupons.php:7
* @route '/admin/shop-coupons'
*/
ListShopCoupons.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopCoupons.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/ListShopCoupons.php:7
* @route '/admin/shop-coupons'
*/
ListShopCoupons.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListShopCoupons.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/ListShopCoupons.php:7
* @route '/admin/shop-coupons'
*/
const ListShopCouponsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopCoupons.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/ListShopCoupons.php:7
* @route '/admin/shop-coupons'
*/
ListShopCouponsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopCoupons.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/ListShopCoupons.php:7
* @route '/admin/shop-coupons'
*/
ListShopCouponsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopCoupons.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListShopCoupons.form = ListShopCouponsForm

export default ListShopCoupons
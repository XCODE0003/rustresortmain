import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/CreateShopCoupon.php:7
* @route '/admin/shop-coupons/create'
*/
const CreateShopCoupon = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopCoupon.url(options),
    method: 'get',
})

CreateShopCoupon.definition = {
    methods: ["get","head"],
    url: '/admin/shop-coupons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/CreateShopCoupon.php:7
* @route '/admin/shop-coupons/create'
*/
CreateShopCoupon.url = (options?: RouteQueryOptions) => {
    return CreateShopCoupon.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/CreateShopCoupon.php:7
* @route '/admin/shop-coupons/create'
*/
CreateShopCoupon.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopCoupon.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/CreateShopCoupon.php:7
* @route '/admin/shop-coupons/create'
*/
CreateShopCoupon.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateShopCoupon.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/CreateShopCoupon.php:7
* @route '/admin/shop-coupons/create'
*/
const CreateShopCouponForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopCoupon.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/CreateShopCoupon.php:7
* @route '/admin/shop-coupons/create'
*/
CreateShopCouponForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopCoupon.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/CreateShopCoupon.php:7
* @route '/admin/shop-coupons/create'
*/
CreateShopCouponForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopCoupon.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateShopCoupon.form = CreateShopCouponForm

export default CreateShopCoupon
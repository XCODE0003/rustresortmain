import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/EditShopCoupon.php:7
* @route '/admin/shop-coupons/{record}/edit'
*/
const EditShopCoupon = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopCoupon.url(args, options),
    method: 'get',
})

EditShopCoupon.definition = {
    methods: ["get","head"],
    url: '/admin/shop-coupons/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/EditShopCoupon.php:7
* @route '/admin/shop-coupons/{record}/edit'
*/
EditShopCoupon.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditShopCoupon.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/EditShopCoupon.php:7
* @route '/admin/shop-coupons/{record}/edit'
*/
EditShopCoupon.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopCoupon.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/EditShopCoupon.php:7
* @route '/admin/shop-coupons/{record}/edit'
*/
EditShopCoupon.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditShopCoupon.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/EditShopCoupon.php:7
* @route '/admin/shop-coupons/{record}/edit'
*/
const EditShopCouponForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopCoupon.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/EditShopCoupon.php:7
* @route '/admin/shop-coupons/{record}/edit'
*/
EditShopCouponForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopCoupon.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon::__invoke
* @see app/Filament/Resources/ShopCoupons/Pages/EditShopCoupon.php:7
* @route '/admin/shop-coupons/{record}/edit'
*/
EditShopCouponForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopCoupon.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditShopCoupon.form = EditShopCouponForm

export default EditShopCoupon
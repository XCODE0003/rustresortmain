import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/EditShopPurchase.php:7
* @route '/admin/shop-purchases/{record}/edit'
*/
const EditShopPurchase = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopPurchase.url(args, options),
    method: 'get',
})

EditShopPurchase.definition = {
    methods: ["get","head"],
    url: '/admin/shop-purchases/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/EditShopPurchase.php:7
* @route '/admin/shop-purchases/{record}/edit'
*/
EditShopPurchase.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditShopPurchase.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/EditShopPurchase.php:7
* @route '/admin/shop-purchases/{record}/edit'
*/
EditShopPurchase.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopPurchase.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/EditShopPurchase.php:7
* @route '/admin/shop-purchases/{record}/edit'
*/
EditShopPurchase.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditShopPurchase.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/EditShopPurchase.php:7
* @route '/admin/shop-purchases/{record}/edit'
*/
const EditShopPurchaseForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopPurchase.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/EditShopPurchase.php:7
* @route '/admin/shop-purchases/{record}/edit'
*/
EditShopPurchaseForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopPurchase.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/EditShopPurchase.php:7
* @route '/admin/shop-purchases/{record}/edit'
*/
EditShopPurchaseForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopPurchase.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditShopPurchase.form = EditShopPurchaseForm

export default EditShopPurchase
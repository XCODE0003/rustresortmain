import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopItems\Pages\EditShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/EditShopItem.php:7
* @route '/admin/shop-items/{record}/edit'
*/
const EditShopItem = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopItem.url(args, options),
    method: 'get',
})

EditShopItem.definition = {
    methods: ["get","head"],
    url: '/admin/shop-items/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopItems\Pages\EditShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/EditShopItem.php:7
* @route '/admin/shop-items/{record}/edit'
*/
EditShopItem.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditShopItem.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopItems\Pages\EditShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/EditShopItem.php:7
* @route '/admin/shop-items/{record}/edit'
*/
EditShopItem.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopItem.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\EditShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/EditShopItem.php:7
* @route '/admin/shop-items/{record}/edit'
*/
EditShopItem.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditShopItem.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\EditShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/EditShopItem.php:7
* @route '/admin/shop-items/{record}/edit'
*/
const EditShopItemForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopItem.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\EditShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/EditShopItem.php:7
* @route '/admin/shop-items/{record}/edit'
*/
EditShopItemForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopItem.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\EditShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/EditShopItem.php:7
* @route '/admin/shop-items/{record}/edit'
*/
EditShopItemForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditShopItem.form = EditShopItemForm

export default EditShopItem
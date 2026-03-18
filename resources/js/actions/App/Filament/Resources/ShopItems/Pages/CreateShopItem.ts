import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopItems\Pages\CreateShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/CreateShopItem.php:7
* @route '/admin/shop-items/create'
*/
const CreateShopItem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopItem.url(options),
    method: 'get',
})

CreateShopItem.definition = {
    methods: ["get","head"],
    url: '/admin/shop-items/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopItems\Pages\CreateShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/CreateShopItem.php:7
* @route '/admin/shop-items/create'
*/
CreateShopItem.url = (options?: RouteQueryOptions) => {
    return CreateShopItem.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopItems\Pages\CreateShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/CreateShopItem.php:7
* @route '/admin/shop-items/create'
*/
CreateShopItem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopItem.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\CreateShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/CreateShopItem.php:7
* @route '/admin/shop-items/create'
*/
CreateShopItem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateShopItem.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\CreateShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/CreateShopItem.php:7
* @route '/admin/shop-items/create'
*/
const CreateShopItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopItem.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\CreateShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/CreateShopItem.php:7
* @route '/admin/shop-items/create'
*/
CreateShopItemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopItem.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\CreateShopItem::__invoke
* @see app/Filament/Resources/ShopItems/Pages/CreateShopItem.php:7
* @route '/admin/shop-items/create'
*/
CreateShopItemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopItem.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateShopItem.form = CreateShopItemForm

export default CreateShopItem
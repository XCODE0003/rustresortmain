import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopItems\Pages\ListShopItems::__invoke
* @see app/Filament/Resources/ShopItems/Pages/ListShopItems.php:7
* @route '/admin/shop-items'
*/
const ListShopItems = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopItems.url(options),
    method: 'get',
})

ListShopItems.definition = {
    methods: ["get","head"],
    url: '/admin/shop-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopItems\Pages\ListShopItems::__invoke
* @see app/Filament/Resources/ShopItems/Pages/ListShopItems.php:7
* @route '/admin/shop-items'
*/
ListShopItems.url = (options?: RouteQueryOptions) => {
    return ListShopItems.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopItems\Pages\ListShopItems::__invoke
* @see app/Filament/Resources/ShopItems/Pages/ListShopItems.php:7
* @route '/admin/shop-items'
*/
ListShopItems.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\ListShopItems::__invoke
* @see app/Filament/Resources/ShopItems/Pages/ListShopItems.php:7
* @route '/admin/shop-items'
*/
ListShopItems.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListShopItems.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\ListShopItems::__invoke
* @see app/Filament/Resources/ShopItems/Pages/ListShopItems.php:7
* @route '/admin/shop-items'
*/
const ListShopItemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\ListShopItems::__invoke
* @see app/Filament/Resources/ShopItems/Pages/ListShopItems.php:7
* @route '/admin/shop-items'
*/
ListShopItemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopItems\Pages\ListShopItems::__invoke
* @see app/Filament/Resources/ShopItems/Pages/ListShopItems.php:7
* @route '/admin/shop-items'
*/
ListShopItemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopItems.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListShopItems.form = ListShopItemsForm

export default ListShopItems
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/CreateShopPurchase.php:7
* @route '/admin/shop-purchases/create'
*/
const CreateShopPurchase = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopPurchase.url(options),
    method: 'get',
})

CreateShopPurchase.definition = {
    methods: ["get","head"],
    url: '/admin/shop-purchases/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/CreateShopPurchase.php:7
* @route '/admin/shop-purchases/create'
*/
CreateShopPurchase.url = (options?: RouteQueryOptions) => {
    return CreateShopPurchase.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/CreateShopPurchase.php:7
* @route '/admin/shop-purchases/create'
*/
CreateShopPurchase.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopPurchase.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/CreateShopPurchase.php:7
* @route '/admin/shop-purchases/create'
*/
CreateShopPurchase.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateShopPurchase.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/CreateShopPurchase.php:7
* @route '/admin/shop-purchases/create'
*/
const CreateShopPurchaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopPurchase.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/CreateShopPurchase.php:7
* @route '/admin/shop-purchases/create'
*/
CreateShopPurchaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopPurchase.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase::__invoke
* @see app/Filament/Resources/ShopPurchases/Pages/CreateShopPurchase.php:7
* @route '/admin/shop-purchases/create'
*/
CreateShopPurchaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopPurchase.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateShopPurchase.form = CreateShopPurchaseForm

export default CreateShopPurchase
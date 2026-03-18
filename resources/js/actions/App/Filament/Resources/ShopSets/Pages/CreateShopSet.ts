import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopSets\Pages\CreateShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/CreateShopSet.php:7
* @route '/admin/shop-sets/create'
*/
const CreateShopSet = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopSet.url(options),
    method: 'get',
})

CreateShopSet.definition = {
    methods: ["get","head"],
    url: '/admin/shop-sets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopSets\Pages\CreateShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/CreateShopSet.php:7
* @route '/admin/shop-sets/create'
*/
CreateShopSet.url = (options?: RouteQueryOptions) => {
    return CreateShopSet.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopSets\Pages\CreateShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/CreateShopSet.php:7
* @route '/admin/shop-sets/create'
*/
CreateShopSet.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopSet.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\CreateShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/CreateShopSet.php:7
* @route '/admin/shop-sets/create'
*/
CreateShopSet.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateShopSet.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\CreateShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/CreateShopSet.php:7
* @route '/admin/shop-sets/create'
*/
const CreateShopSetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopSet.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\CreateShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/CreateShopSet.php:7
* @route '/admin/shop-sets/create'
*/
CreateShopSetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopSet.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\CreateShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/CreateShopSet.php:7
* @route '/admin/shop-sets/create'
*/
CreateShopSetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopSet.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateShopSet.form = CreateShopSetForm

export default CreateShopSet
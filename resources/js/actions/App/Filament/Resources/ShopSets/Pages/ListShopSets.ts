import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopSets\Pages\ListShopSets::__invoke
* @see app/Filament/Resources/ShopSets/Pages/ListShopSets.php:7
* @route '/admin/shop-sets'
*/
const ListShopSets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopSets.url(options),
    method: 'get',
})

ListShopSets.definition = {
    methods: ["get","head"],
    url: '/admin/shop-sets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopSets\Pages\ListShopSets::__invoke
* @see app/Filament/Resources/ShopSets/Pages/ListShopSets.php:7
* @route '/admin/shop-sets'
*/
ListShopSets.url = (options?: RouteQueryOptions) => {
    return ListShopSets.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopSets\Pages\ListShopSets::__invoke
* @see app/Filament/Resources/ShopSets/Pages/ListShopSets.php:7
* @route '/admin/shop-sets'
*/
ListShopSets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopSets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\ListShopSets::__invoke
* @see app/Filament/Resources/ShopSets/Pages/ListShopSets.php:7
* @route '/admin/shop-sets'
*/
ListShopSets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListShopSets.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\ListShopSets::__invoke
* @see app/Filament/Resources/ShopSets/Pages/ListShopSets.php:7
* @route '/admin/shop-sets'
*/
const ListShopSetsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopSets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\ListShopSets::__invoke
* @see app/Filament/Resources/ShopSets/Pages/ListShopSets.php:7
* @route '/admin/shop-sets'
*/
ListShopSetsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopSets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\ListShopSets::__invoke
* @see app/Filament/Resources/ShopSets/Pages/ListShopSets.php:7
* @route '/admin/shop-sets'
*/
ListShopSetsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopSets.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListShopSets.form = ListShopSetsForm

export default ListShopSets
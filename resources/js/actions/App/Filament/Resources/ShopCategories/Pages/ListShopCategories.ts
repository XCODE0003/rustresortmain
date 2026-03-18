import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopCategories\Pages\ListShopCategories::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/ListShopCategories.php:7
* @route '/admin/shop-categories'
*/
const ListShopCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopCategories.url(options),
    method: 'get',
})

ListShopCategories.definition = {
    methods: ["get","head"],
    url: '/admin/shop-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopCategories\Pages\ListShopCategories::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/ListShopCategories.php:7
* @route '/admin/shop-categories'
*/
ListShopCategories.url = (options?: RouteQueryOptions) => {
    return ListShopCategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopCategories\Pages\ListShopCategories::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/ListShopCategories.php:7
* @route '/admin/shop-categories'
*/
ListShopCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListShopCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\ListShopCategories::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/ListShopCategories.php:7
* @route '/admin/shop-categories'
*/
ListShopCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListShopCategories.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\ListShopCategories::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/ListShopCategories.php:7
* @route '/admin/shop-categories'
*/
const ListShopCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\ListShopCategories::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/ListShopCategories.php:7
* @route '/admin/shop-categories'
*/
ListShopCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\ListShopCategories::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/ListShopCategories.php:7
* @route '/admin/shop-categories'
*/
ListShopCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListShopCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListShopCategories.form = ListShopCategoriesForm

export default ListShopCategories
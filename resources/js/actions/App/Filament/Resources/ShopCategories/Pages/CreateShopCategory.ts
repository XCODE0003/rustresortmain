import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopCategories\Pages\CreateShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/CreateShopCategory.php:7
* @route '/admin/shop-categories/create'
*/
const CreateShopCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopCategory.url(options),
    method: 'get',
})

CreateShopCategory.definition = {
    methods: ["get","head"],
    url: '/admin/shop-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopCategories\Pages\CreateShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/CreateShopCategory.php:7
* @route '/admin/shop-categories/create'
*/
CreateShopCategory.url = (options?: RouteQueryOptions) => {
    return CreateShopCategory.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopCategories\Pages\CreateShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/CreateShopCategory.php:7
* @route '/admin/shop-categories/create'
*/
CreateShopCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateShopCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\CreateShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/CreateShopCategory.php:7
* @route '/admin/shop-categories/create'
*/
CreateShopCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateShopCategory.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\CreateShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/CreateShopCategory.php:7
* @route '/admin/shop-categories/create'
*/
const CreateShopCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\CreateShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/CreateShopCategory.php:7
* @route '/admin/shop-categories/create'
*/
CreateShopCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\CreateShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/CreateShopCategory.php:7
* @route '/admin/shop-categories/create'
*/
CreateShopCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateShopCategory.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateShopCategory.form = CreateShopCategoryForm

export default CreateShopCategory
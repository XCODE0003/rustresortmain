import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopCategories\Pages\EditShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/EditShopCategory.php:7
* @route '/admin/shop-categories/{record}/edit'
*/
const EditShopCategory = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopCategory.url(args, options),
    method: 'get',
})

EditShopCategory.definition = {
    methods: ["get","head"],
    url: '/admin/shop-categories/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopCategories\Pages\EditShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/EditShopCategory.php:7
* @route '/admin/shop-categories/{record}/edit'
*/
EditShopCategory.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditShopCategory.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopCategories\Pages\EditShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/EditShopCategory.php:7
* @route '/admin/shop-categories/{record}/edit'
*/
EditShopCategory.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\EditShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/EditShopCategory.php:7
* @route '/admin/shop-categories/{record}/edit'
*/
EditShopCategory.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditShopCategory.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\EditShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/EditShopCategory.php:7
* @route '/admin/shop-categories/{record}/edit'
*/
const EditShopCategoryForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\EditShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/EditShopCategory.php:7
* @route '/admin/shop-categories/{record}/edit'
*/
EditShopCategoryForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopCategories\Pages\EditShopCategory::__invoke
* @see app/Filament/Resources/ShopCategories/Pages/EditShopCategory.php:7
* @route '/admin/shop-categories/{record}/edit'
*/
EditShopCategoryForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditShopCategory.form = EditShopCategoryForm

export default EditShopCategory
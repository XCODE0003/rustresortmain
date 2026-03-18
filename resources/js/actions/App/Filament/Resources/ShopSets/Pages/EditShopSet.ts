import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ShopSets\Pages\EditShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/EditShopSet.php:7
* @route '/admin/shop-sets/{record}/edit'
*/
const EditShopSet = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopSet.url(args, options),
    method: 'get',
})

EditShopSet.definition = {
    methods: ["get","head"],
    url: '/admin/shop-sets/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ShopSets\Pages\EditShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/EditShopSet.php:7
* @route '/admin/shop-sets/{record}/edit'
*/
EditShopSet.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditShopSet.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\ShopSets\Pages\EditShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/EditShopSet.php:7
* @route '/admin/shop-sets/{record}/edit'
*/
EditShopSet.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditShopSet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\EditShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/EditShopSet.php:7
* @route '/admin/shop-sets/{record}/edit'
*/
EditShopSet.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditShopSet.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\EditShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/EditShopSet.php:7
* @route '/admin/shop-sets/{record}/edit'
*/
const EditShopSetForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopSet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\EditShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/EditShopSet.php:7
* @route '/admin/shop-sets/{record}/edit'
*/
EditShopSetForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopSet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ShopSets\Pages\EditShopSet::__invoke
* @see app/Filament/Resources/ShopSets/Pages/EditShopSet.php:7
* @route '/admin/shop-sets/{record}/edit'
*/
EditShopSetForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditShopSet.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditShopSet.form = EditShopSetForm

export default EditShopSet
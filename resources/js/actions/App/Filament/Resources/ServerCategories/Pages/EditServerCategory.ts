import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ServerCategories\Pages\EditServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/EditServerCategory.php:7
* @route '/admin/server-categories/{record}/edit'
*/
const EditServerCategory = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditServerCategory.url(args, options),
    method: 'get',
})

EditServerCategory.definition = {
    methods: ["get","head"],
    url: '/admin/server-categories/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ServerCategories\Pages\EditServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/EditServerCategory.php:7
* @route '/admin/server-categories/{record}/edit'
*/
EditServerCategory.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditServerCategory.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\ServerCategories\Pages\EditServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/EditServerCategory.php:7
* @route '/admin/server-categories/{record}/edit'
*/
EditServerCategory.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditServerCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\EditServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/EditServerCategory.php:7
* @route '/admin/server-categories/{record}/edit'
*/
EditServerCategory.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditServerCategory.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\EditServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/EditServerCategory.php:7
* @route '/admin/server-categories/{record}/edit'
*/
const EditServerCategoryForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditServerCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\EditServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/EditServerCategory.php:7
* @route '/admin/server-categories/{record}/edit'
*/
EditServerCategoryForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditServerCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\EditServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/EditServerCategory.php:7
* @route '/admin/server-categories/{record}/edit'
*/
EditServerCategoryForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditServerCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditServerCategory.form = EditServerCategoryForm

export default EditServerCategory
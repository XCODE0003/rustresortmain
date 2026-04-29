import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\GuideCategories\Pages\EditGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/EditGuideCategory.php:7
* @route '/admin/guide-categories/{record}/edit'
*/
const EditGuideCategory = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditGuideCategory.url(args, options),
    method: 'get',
})

EditGuideCategory.definition = {
    methods: ["get","head"],
    url: '/admin/guide-categories/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\GuideCategories\Pages\EditGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/EditGuideCategory.php:7
* @route '/admin/guide-categories/{record}/edit'
*/
EditGuideCategory.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditGuideCategory.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\GuideCategories\Pages\EditGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/EditGuideCategory.php:7
* @route '/admin/guide-categories/{record}/edit'
*/
EditGuideCategory.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditGuideCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\EditGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/EditGuideCategory.php:7
* @route '/admin/guide-categories/{record}/edit'
*/
EditGuideCategory.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditGuideCategory.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\EditGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/EditGuideCategory.php:7
* @route '/admin/guide-categories/{record}/edit'
*/
const EditGuideCategoryForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditGuideCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\EditGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/EditGuideCategory.php:7
* @route '/admin/guide-categories/{record}/edit'
*/
EditGuideCategoryForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditGuideCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\EditGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/EditGuideCategory.php:7
* @route '/admin/guide-categories/{record}/edit'
*/
EditGuideCategoryForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditGuideCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditGuideCategory.form = EditGuideCategoryForm

export default EditGuideCategory
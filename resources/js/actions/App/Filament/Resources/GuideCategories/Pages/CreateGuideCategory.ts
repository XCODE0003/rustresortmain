import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/CreateGuideCategory.php:7
* @route '/admin/guide-categories/create'
*/
const CreateGuideCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateGuideCategory.url(options),
    method: 'get',
})

CreateGuideCategory.definition = {
    methods: ["get","head"],
    url: '/admin/guide-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/CreateGuideCategory.php:7
* @route '/admin/guide-categories/create'
*/
CreateGuideCategory.url = (options?: RouteQueryOptions) => {
    return CreateGuideCategory.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/CreateGuideCategory.php:7
* @route '/admin/guide-categories/create'
*/
CreateGuideCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateGuideCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/CreateGuideCategory.php:7
* @route '/admin/guide-categories/create'
*/
CreateGuideCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateGuideCategory.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/CreateGuideCategory.php:7
* @route '/admin/guide-categories/create'
*/
const CreateGuideCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateGuideCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/CreateGuideCategory.php:7
* @route '/admin/guide-categories/create'
*/
CreateGuideCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateGuideCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/CreateGuideCategory.php:7
* @route '/admin/guide-categories/create'
*/
CreateGuideCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateGuideCategory.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateGuideCategory.form = CreateGuideCategoryForm

export default CreateGuideCategory
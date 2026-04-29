import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\GuideCategories\Pages\ListGuideCategories::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/ListGuideCategories.php:7
* @route '/admin/guide-categories'
*/
const ListGuideCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListGuideCategories.url(options),
    method: 'get',
})

ListGuideCategories.definition = {
    methods: ["get","head"],
    url: '/admin/guide-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\GuideCategories\Pages\ListGuideCategories::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/ListGuideCategories.php:7
* @route '/admin/guide-categories'
*/
ListGuideCategories.url = (options?: RouteQueryOptions) => {
    return ListGuideCategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\GuideCategories\Pages\ListGuideCategories::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/ListGuideCategories.php:7
* @route '/admin/guide-categories'
*/
ListGuideCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListGuideCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\ListGuideCategories::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/ListGuideCategories.php:7
* @route '/admin/guide-categories'
*/
ListGuideCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListGuideCategories.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\ListGuideCategories::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/ListGuideCategories.php:7
* @route '/admin/guide-categories'
*/
const ListGuideCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListGuideCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\ListGuideCategories::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/ListGuideCategories.php:7
* @route '/admin/guide-categories'
*/
ListGuideCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListGuideCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\GuideCategories\Pages\ListGuideCategories::__invoke
* @see app/Filament/Resources/GuideCategories/Pages/ListGuideCategories.php:7
* @route '/admin/guide-categories'
*/
ListGuideCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListGuideCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListGuideCategories.form = ListGuideCategoriesForm

export default ListGuideCategories
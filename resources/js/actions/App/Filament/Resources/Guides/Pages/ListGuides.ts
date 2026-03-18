import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Guides\Pages\ListGuides::__invoke
* @see app/Filament/Resources/Guides/Pages/ListGuides.php:7
* @route '/admin/guides'
*/
const ListGuides = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListGuides.url(options),
    method: 'get',
})

ListGuides.definition = {
    methods: ["get","head"],
    url: '/admin/guides',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Guides\Pages\ListGuides::__invoke
* @see app/Filament/Resources/Guides/Pages/ListGuides.php:7
* @route '/admin/guides'
*/
ListGuides.url = (options?: RouteQueryOptions) => {
    return ListGuides.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Guides\Pages\ListGuides::__invoke
* @see app/Filament/Resources/Guides/Pages/ListGuides.php:7
* @route '/admin/guides'
*/
ListGuides.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListGuides.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\ListGuides::__invoke
* @see app/Filament/Resources/Guides/Pages/ListGuides.php:7
* @route '/admin/guides'
*/
ListGuides.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListGuides.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Guides\Pages\ListGuides::__invoke
* @see app/Filament/Resources/Guides/Pages/ListGuides.php:7
* @route '/admin/guides'
*/
const ListGuidesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListGuides.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\ListGuides::__invoke
* @see app/Filament/Resources/Guides/Pages/ListGuides.php:7
* @route '/admin/guides'
*/
ListGuidesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListGuides.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\ListGuides::__invoke
* @see app/Filament/Resources/Guides/Pages/ListGuides.php:7
* @route '/admin/guides'
*/
ListGuidesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListGuides.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListGuides.form = ListGuidesForm

export default ListGuides
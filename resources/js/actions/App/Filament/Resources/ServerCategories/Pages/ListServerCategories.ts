import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ServerCategories\Pages\ListServerCategories::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/ListServerCategories.php:7
* @route '/admin/server-categories'
*/
const ListServerCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListServerCategories.url(options),
    method: 'get',
})

ListServerCategories.definition = {
    methods: ["get","head"],
    url: '/admin/server-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ServerCategories\Pages\ListServerCategories::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/ListServerCategories.php:7
* @route '/admin/server-categories'
*/
ListServerCategories.url = (options?: RouteQueryOptions) => {
    return ListServerCategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ServerCategories\Pages\ListServerCategories::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/ListServerCategories.php:7
* @route '/admin/server-categories'
*/
ListServerCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListServerCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\ListServerCategories::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/ListServerCategories.php:7
* @route '/admin/server-categories'
*/
ListServerCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListServerCategories.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\ListServerCategories::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/ListServerCategories.php:7
* @route '/admin/server-categories'
*/
const ListServerCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServerCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\ListServerCategories::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/ListServerCategories.php:7
* @route '/admin/server-categories'
*/
ListServerCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServerCategories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\ListServerCategories::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/ListServerCategories.php:7
* @route '/admin/server-categories'
*/
ListServerCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListServerCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListServerCategories.form = ListServerCategoriesForm

export default ListServerCategories
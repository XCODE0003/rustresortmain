import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\ServerCategories\Pages\CreateServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/CreateServerCategory.php:7
* @route '/admin/server-categories/create'
*/
const CreateServerCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateServerCategory.url(options),
    method: 'get',
})

CreateServerCategory.definition = {
    methods: ["get","head"],
    url: '/admin/server-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\ServerCategories\Pages\CreateServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/CreateServerCategory.php:7
* @route '/admin/server-categories/create'
*/
CreateServerCategory.url = (options?: RouteQueryOptions) => {
    return CreateServerCategory.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\ServerCategories\Pages\CreateServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/CreateServerCategory.php:7
* @route '/admin/server-categories/create'
*/
CreateServerCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateServerCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\CreateServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/CreateServerCategory.php:7
* @route '/admin/server-categories/create'
*/
CreateServerCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateServerCategory.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\CreateServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/CreateServerCategory.php:7
* @route '/admin/server-categories/create'
*/
const CreateServerCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateServerCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\CreateServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/CreateServerCategory.php:7
* @route '/admin/server-categories/create'
*/
CreateServerCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateServerCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\ServerCategories\Pages\CreateServerCategory::__invoke
* @see app/Filament/Resources/ServerCategories/Pages/CreateServerCategory.php:7
* @route '/admin/server-categories/create'
*/
CreateServerCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateServerCategory.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateServerCategory.form = CreateServerCategoryForm

export default CreateServerCategory
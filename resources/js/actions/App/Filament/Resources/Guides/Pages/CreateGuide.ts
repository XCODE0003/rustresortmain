import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Guides\Pages\CreateGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/CreateGuide.php:7
* @route '/admin/guides/create'
*/
const CreateGuide = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateGuide.url(options),
    method: 'get',
})

CreateGuide.definition = {
    methods: ["get","head"],
    url: '/admin/guides/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Guides\Pages\CreateGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/CreateGuide.php:7
* @route '/admin/guides/create'
*/
CreateGuide.url = (options?: RouteQueryOptions) => {
    return CreateGuide.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Guides\Pages\CreateGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/CreateGuide.php:7
* @route '/admin/guides/create'
*/
CreateGuide.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateGuide.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\CreateGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/CreateGuide.php:7
* @route '/admin/guides/create'
*/
CreateGuide.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateGuide.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Guides\Pages\CreateGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/CreateGuide.php:7
* @route '/admin/guides/create'
*/
const CreateGuideForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateGuide.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\CreateGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/CreateGuide.php:7
* @route '/admin/guides/create'
*/
CreateGuideForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateGuide.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\CreateGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/CreateGuide.php:7
* @route '/admin/guides/create'
*/
CreateGuideForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateGuide.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateGuide.form = CreateGuideForm

export default CreateGuide
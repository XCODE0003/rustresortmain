import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\CasesItems\Pages\CreateCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/CreateCasesItem.php:7
* @route '/admin/cases-items/create'
*/
const CreateCasesItem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCasesItem.url(options),
    method: 'get',
})

CreateCasesItem.definition = {
    methods: ["get","head"],
    url: '/admin/cases-items/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\CasesItems\Pages\CreateCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/CreateCasesItem.php:7
* @route '/admin/cases-items/create'
*/
CreateCasesItem.url = (options?: RouteQueryOptions) => {
    return CreateCasesItem.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\CasesItems\Pages\CreateCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/CreateCasesItem.php:7
* @route '/admin/cases-items/create'
*/
CreateCasesItem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCasesItem.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\CreateCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/CreateCasesItem.php:7
* @route '/admin/cases-items/create'
*/
CreateCasesItem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCasesItem.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\CreateCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/CreateCasesItem.php:7
* @route '/admin/cases-items/create'
*/
const CreateCasesItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCasesItem.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\CreateCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/CreateCasesItem.php:7
* @route '/admin/cases-items/create'
*/
CreateCasesItemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCasesItem.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\CreateCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/CreateCasesItem.php:7
* @route '/admin/cases-items/create'
*/
CreateCasesItemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCasesItem.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCasesItem.form = CreateCasesItemForm

export default CreateCasesItem
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\CasesItems\Pages\ListCasesItems::__invoke
* @see app/Filament/Resources/CasesItems/Pages/ListCasesItems.php:7
* @route '/admin/cases-items'
*/
const ListCasesItems = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCasesItems.url(options),
    method: 'get',
})

ListCasesItems.definition = {
    methods: ["get","head"],
    url: '/admin/cases-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\CasesItems\Pages\ListCasesItems::__invoke
* @see app/Filament/Resources/CasesItems/Pages/ListCasesItems.php:7
* @route '/admin/cases-items'
*/
ListCasesItems.url = (options?: RouteQueryOptions) => {
    return ListCasesItems.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\CasesItems\Pages\ListCasesItems::__invoke
* @see app/Filament/Resources/CasesItems/Pages/ListCasesItems.php:7
* @route '/admin/cases-items'
*/
ListCasesItems.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCasesItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\ListCasesItems::__invoke
* @see app/Filament/Resources/CasesItems/Pages/ListCasesItems.php:7
* @route '/admin/cases-items'
*/
ListCasesItems.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCasesItems.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\ListCasesItems::__invoke
* @see app/Filament/Resources/CasesItems/Pages/ListCasesItems.php:7
* @route '/admin/cases-items'
*/
const ListCasesItemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCasesItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\ListCasesItems::__invoke
* @see app/Filament/Resources/CasesItems/Pages/ListCasesItems.php:7
* @route '/admin/cases-items'
*/
ListCasesItemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCasesItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\ListCasesItems::__invoke
* @see app/Filament/Resources/CasesItems/Pages/ListCasesItems.php:7
* @route '/admin/cases-items'
*/
ListCasesItemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCasesItems.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCasesItems.form = ListCasesItemsForm

export default ListCasesItems
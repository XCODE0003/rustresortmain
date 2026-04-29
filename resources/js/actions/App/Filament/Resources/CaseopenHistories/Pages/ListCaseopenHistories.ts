import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
const ListCaseopenHistories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCaseopenHistories.url(options),
    method: 'get',
})

ListCaseopenHistories.definition = {
    methods: ["get","head"],
    url: '/admin/caseopen-histories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
ListCaseopenHistories.url = (options?: RouteQueryOptions) => {
    return ListCaseopenHistories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
ListCaseopenHistories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCaseopenHistories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
ListCaseopenHistories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCaseopenHistories.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
const ListCaseopenHistoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCaseopenHistories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
ListCaseopenHistoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCaseopenHistories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
ListCaseopenHistoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCaseopenHistories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCaseopenHistories.form = ListCaseopenHistoriesForm

export default ListCaseopenHistories
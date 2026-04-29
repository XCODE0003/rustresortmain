import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/caseopen-histories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories::__invoke
* @see app/Filament/Resources/CaseopenHistories/Pages/ListCaseopenHistories.php:7
* @route '/admin/caseopen-histories'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const caseopenHistories = {
    index: Object.assign(index, index),
}

export default caseopenHistories
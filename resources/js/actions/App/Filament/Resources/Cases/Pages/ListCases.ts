import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Cases\Pages\ListCases::__invoke
* @see app/Filament/Resources/Cases/Pages/ListCases.php:7
* @route '/admin/cases'
*/
const ListCases = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCases.url(options),
    method: 'get',
})

ListCases.definition = {
    methods: ["get","head"],
    url: '/admin/cases',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Cases\Pages\ListCases::__invoke
* @see app/Filament/Resources/Cases/Pages/ListCases.php:7
* @route '/admin/cases'
*/
ListCases.url = (options?: RouteQueryOptions) => {
    return ListCases.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Cases\Pages\ListCases::__invoke
* @see app/Filament/Resources/Cases/Pages/ListCases.php:7
* @route '/admin/cases'
*/
ListCases.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCases.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\ListCases::__invoke
* @see app/Filament/Resources/Cases/Pages/ListCases.php:7
* @route '/admin/cases'
*/
ListCases.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCases.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Cases\Pages\ListCases::__invoke
* @see app/Filament/Resources/Cases/Pages/ListCases.php:7
* @route '/admin/cases'
*/
const ListCasesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCases.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\ListCases::__invoke
* @see app/Filament/Resources/Cases/Pages/ListCases.php:7
* @route '/admin/cases'
*/
ListCasesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCases.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\ListCases::__invoke
* @see app/Filament/Resources/Cases/Pages/ListCases.php:7
* @route '/admin/cases'
*/
ListCasesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCases.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCases.form = ListCasesForm

export default ListCases
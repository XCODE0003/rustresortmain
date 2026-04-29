import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
const ListVisits = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListVisits.url(options),
    method: 'get',
})

ListVisits.definition = {
    methods: ["get","head"],
    url: '/admin/visits',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
ListVisits.url = (options?: RouteQueryOptions) => {
    return ListVisits.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
ListVisits.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListVisits.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
ListVisits.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListVisits.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
const ListVisitsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListVisits.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
ListVisitsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListVisits.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
ListVisitsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListVisits.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListVisits.form = ListVisitsForm

export default ListVisits
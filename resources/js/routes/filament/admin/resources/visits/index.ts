import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/visits',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Visits\Pages\ListVisits::__invoke
* @see app/Filament/Resources/Visits/Pages/ListVisits.php:7
* @route '/admin/visits'
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

const visits = {
    index: Object.assign(index, index),
}

export default visits
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Donates\Pages\ListDonates::__invoke
* @see app/Filament/Resources/Donates/Pages/ListDonates.php:7
* @route '/admin/donates'
*/
const ListDonates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDonates.url(options),
    method: 'get',
})

ListDonates.definition = {
    methods: ["get","head"],
    url: '/admin/donates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Donates\Pages\ListDonates::__invoke
* @see app/Filament/Resources/Donates/Pages/ListDonates.php:7
* @route '/admin/donates'
*/
ListDonates.url = (options?: RouteQueryOptions) => {
    return ListDonates.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Donates\Pages\ListDonates::__invoke
* @see app/Filament/Resources/Donates/Pages/ListDonates.php:7
* @route '/admin/donates'
*/
ListDonates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDonates.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Donates\Pages\ListDonates::__invoke
* @see app/Filament/Resources/Donates/Pages/ListDonates.php:7
* @route '/admin/donates'
*/
ListDonates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDonates.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Donates\Pages\ListDonates::__invoke
* @see app/Filament/Resources/Donates/Pages/ListDonates.php:7
* @route '/admin/donates'
*/
const ListDonatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDonates.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Donates\Pages\ListDonates::__invoke
* @see app/Filament/Resources/Donates/Pages/ListDonates.php:7
* @route '/admin/donates'
*/
ListDonatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDonates.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Donates\Pages\ListDonates::__invoke
* @see app/Filament/Resources/Donates/Pages/ListDonates.php:7
* @route '/admin/donates'
*/
ListDonatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListDonates.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListDonates.form = ListDonatesForm

export default ListDonates
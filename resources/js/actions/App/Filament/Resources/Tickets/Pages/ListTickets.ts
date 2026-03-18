import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see app/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/admin/tickets'
*/
const ListTickets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTickets.url(options),
    method: 'get',
})

ListTickets.definition = {
    methods: ["get","head"],
    url: '/admin/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see app/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/admin/tickets'
*/
ListTickets.url = (options?: RouteQueryOptions) => {
    return ListTickets.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see app/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/admin/tickets'
*/
ListTickets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTickets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see app/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/admin/tickets'
*/
ListTickets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTickets.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see app/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/admin/tickets'
*/
const ListTicketsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTickets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see app/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/admin/tickets'
*/
ListTicketsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTickets.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\ListTickets::__invoke
* @see app/Filament/Resources/Tickets/Pages/ListTickets.php:7
* @route '/admin/tickets'
*/
ListTicketsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTickets.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTickets.form = ListTicketsForm

export default ListTickets
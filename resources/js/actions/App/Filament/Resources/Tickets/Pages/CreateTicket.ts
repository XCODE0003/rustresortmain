import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/admin/tickets/create'
*/
const CreateTicket = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTicket.url(options),
    method: 'get',
})

CreateTicket.definition = {
    methods: ["get","head"],
    url: '/admin/tickets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/admin/tickets/create'
*/
CreateTicket.url = (options?: RouteQueryOptions) => {
    return CreateTicket.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/admin/tickets/create'
*/
CreateTicket.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateTicket.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/admin/tickets/create'
*/
CreateTicket.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateTicket.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/admin/tickets/create'
*/
const CreateTicketForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicket.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/admin/tickets/create'
*/
CreateTicketForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicket.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\CreateTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/CreateTicket.php:7
* @route '/admin/tickets/create'
*/
CreateTicketForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateTicket.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateTicket.form = CreateTicketForm

export default CreateTicket
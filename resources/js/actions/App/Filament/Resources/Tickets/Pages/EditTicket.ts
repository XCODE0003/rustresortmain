import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Tickets\Pages\EditTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/EditTicket.php:7
* @route '/admin/tickets/{record}/edit'
*/
const EditTicket = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTicket.url(args, options),
    method: 'get',
})

EditTicket.definition = {
    methods: ["get","head"],
    url: '/admin/tickets/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Tickets\Pages\EditTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/EditTicket.php:7
* @route '/admin/tickets/{record}/edit'
*/
EditTicket.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditTicket.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Tickets\Pages\EditTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/EditTicket.php:7
* @route '/admin/tickets/{record}/edit'
*/
EditTicket.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTicket.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\EditTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/EditTicket.php:7
* @route '/admin/tickets/{record}/edit'
*/
EditTicket.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTicket.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\EditTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/EditTicket.php:7
* @route '/admin/tickets/{record}/edit'
*/
const EditTicketForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTicket.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\EditTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/EditTicket.php:7
* @route '/admin/tickets/{record}/edit'
*/
EditTicketForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTicket.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Tickets\Pages\EditTicket::__invoke
* @see app/Filament/Resources/Tickets/Pages/EditTicket.php:7
* @route '/admin/tickets/{record}/edit'
*/
EditTicketForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTicket.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTicket.form = EditTicketForm

export default EditTicket
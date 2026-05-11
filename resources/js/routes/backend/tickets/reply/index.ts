import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
export const update = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
update.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { ticket: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { ticket: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            ticket: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        ticket: typeof args.ticket === 'object'
        ? args.ticket.id
        : args.ticket,
    }

    return update.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
update.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
const updateForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
updateForm.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

const reply = {
    update: Object.assign(update, update),
}

export default reply
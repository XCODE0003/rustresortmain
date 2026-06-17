import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
export const update = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
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
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
update.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
const updateForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
updateForm.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

const question = {
    update: Object.assign(update, update),
}

export default question
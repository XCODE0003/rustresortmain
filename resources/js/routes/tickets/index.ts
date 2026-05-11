import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see routes/web.php:74
* @route '/tickets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/tickets',
} satisfies RouteDefinition<["post"]>

/**
* @see routes/web.php:74
* @route '/tickets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see routes/web.php:74
* @route '/tickets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see routes/web.php:74
* @route '/tickets'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see routes/web.php:74
* @route '/tickets'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\TicketController::all
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
export const all = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

all.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::all
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
all.url = (options?: RouteQueryOptions) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::all
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
all.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::all
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
all.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: all.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::all
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
const allForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::all
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
allForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::all
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
allForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: all.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

all.form = allForm

/**
* @see \App\Http\Controllers\Backend\TicketController::deleteMethod
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
export const deleteMethod = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::deleteMethod
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
deleteMethod.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::deleteMethod
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
deleteMethod.get = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::deleteMethod
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
deleteMethod.head = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::deleteMethod
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
const deleteMethodForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::deleteMethod
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
deleteMethodForm.get = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::deleteMethod
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
deleteMethodForm.head = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleteMethod.form = deleteMethodForm

const tickets = {
    store: Object.assign(store, store),
    all: Object.assign(all, all),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default tickets
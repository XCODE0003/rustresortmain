import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\TicketController::support
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
export const support = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: support.url(options),
    method: 'get',
})

support.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::support
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
support.url = (options?: RouteQueryOptions) => {
    return support.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::support
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
support.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: support.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::support
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
support.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: support.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::support
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
const supportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: support.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::support
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
supportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: support.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::support
* @see app/Http/Controllers/Backend/TicketController.php:17
* @route '/backend_uc7BgHFmw32FDIEp/tickets'
*/
supportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: support.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

support.form = supportForm

/**
* @see \App\Http\Controllers\Backend\TicketController::show
* @see app/Http/Controllers/Backend/TicketController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}'
*/
export const show = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::show
* @see app/Http/Controllers/Backend/TicketController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}'
*/
show.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::show
* @see app/Http/Controllers/Backend/TicketController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}'
*/
show.get = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::show
* @see app/Http/Controllers/Backend/TicketController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}'
*/
show.head = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::show
* @see app/Http/Controllers/Backend/TicketController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}'
*/
const showForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::show
* @see app/Http/Controllers/Backend/TicketController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}'
*/
showForm.get = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::show
* @see app/Http/Controllers/Backend/TicketController.php:36
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}'
*/
showForm.head = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/answer'
*/
export const update = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/answer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/answer'
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
* @see app/Http/Controllers/Backend/TicketController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/answer'
*/
update.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/answer'
*/
const updateForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::update
* @see app/Http/Controllers/Backend/TicketController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/answer'
*/
updateForm.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Backend\TicketController::isread
* @see app/Http/Controllers/Backend/TicketController.php:73
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/isread'
*/
export const isread = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: isread.url(args, options),
    method: 'post',
})

isread.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/isread',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::isread
* @see app/Http/Controllers/Backend/TicketController.php:73
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/isread'
*/
isread.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return isread.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::isread
* @see app/Http/Controllers/Backend/TicketController.php:73
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/isread'
*/
isread.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: isread.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::isread
* @see app/Http/Controllers/Backend/TicketController.php:73
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/isread'
*/
const isreadForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: isread.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::isread
* @see app/Http/Controllers/Backend/TicketController.php:73
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/isread'
*/
isreadForm.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: isread.url(args, options),
    method: 'post',
})

isread.form = isreadForm

/**
* @see \App\Http\Controllers\Backend\TicketController::close
* @see app/Http/Controllers/Backend/TicketController.php:81
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/close'
*/
export const close = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/close',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::close
* @see app/Http/Controllers/Backend/TicketController.php:81
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/close'
*/
close.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return close.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::close
* @see app/Http/Controllers/Backend/TicketController.php:81
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/close'
*/
close.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::close
* @see app/Http/Controllers/Backend/TicketController.php:81
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/close'
*/
const closeForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: close.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::close
* @see app/Http/Controllers/Backend/TicketController.php:81
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/close'
*/
closeForm.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: close.url(args, options),
    method: 'post',
})

close.form = closeForm

/**
* @see \App\Http\Controllers\Backend\TicketController::updateReply
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
export const updateReply = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateReply.url(args, options),
    method: 'post',
})

updateReply.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::updateReply
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
updateReply.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateReply.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::updateReply
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
updateReply.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateReply.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::updateReply
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
const updateReplyForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateReply.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::updateReply
* @see app/Http/Controllers/Backend/TicketController.php:89
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_reply'
*/
updateReplyForm.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateReply.url(args, options),
    method: 'post',
})

updateReply.form = updateReplyForm

/**
* @see \App\Http\Controllers\Backend\TicketController::updateQuestion
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
export const updateQuestion = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateQuestion.url(args, options),
    method: 'post',
})

updateQuestion.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::updateQuestion
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
updateQuestion.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateQuestion.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::updateQuestion
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
updateQuestion.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateQuestion.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::updateQuestion
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
const updateQuestionForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateQuestion.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::updateQuestion
* @see app/Http/Controllers/Backend/TicketController.php:111
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/update_question'
*/
updateQuestionForm.post = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateQuestion.url(args, options),
    method: 'post',
})

updateQuestion.form = updateQuestionForm

/**
* @see \App\Http\Controllers\Backend\TicketController::destroy
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
export const destroy = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(args, options),
    method: 'get',
})

destroy.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\TicketController::destroy
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
destroy.url = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{ticket}', parsedArgs.ticket.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\TicketController::destroy
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
destroy.get = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::destroy
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
destroy.head = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: destroy.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::destroy
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
const destroyForm = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::destroy
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
destroyForm.get = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\TicketController::destroy
* @see app/Http/Controllers/Backend/TicketController.php:121
* @route '/backend_uc7BgHFmw32FDIEp/tickets/{ticket}/delete'
*/
destroyForm.head = (args: { ticket: string | number | { id: string | number } } | [ticket: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

destroy.form = destroyForm

const TicketController = { support, show, update, isread, close, updateReply, updateQuestion, destroy }

export default TicketController
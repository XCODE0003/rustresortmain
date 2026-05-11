import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
export const details = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: details.url(args, options),
    method: 'get',
})

details.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/users/details/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
details.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return details.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
details.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: details.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
details.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: details.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
const detailsForm = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: details.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
detailsForm.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: details.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
detailsForm.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: details.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

details.form = detailsForm

const user = {
    details: Object.assign(details, details),
}

export default user
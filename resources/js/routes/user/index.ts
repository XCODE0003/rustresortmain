import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import role from './role'
import balance from './balance'
/**
* @see \App\Http\Controllers\Backend\UserController::mute
* @see app/Http/Controllers/Backend/UserController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/users/mute'
*/
export const mute = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mute.url(options),
    method: 'post',
})

mute.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/users/mute',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\UserController::mute
* @see app/Http/Controllers/Backend/UserController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/users/mute'
*/
mute.url = (options?: RouteQueryOptions) => {
    return mute.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::mute
* @see app/Http/Controllers/Backend/UserController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/users/mute'
*/
mute.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mute.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::mute
* @see app/Http/Controllers/Backend/UserController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/users/mute'
*/
const muteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mute.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::mute
* @see app/Http/Controllers/Backend/UserController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/users/mute'
*/
muteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mute.url(options),
    method: 'post',
})

mute.form = muteForm

/**
* @see \App\Http\Controllers\Backend\UserController::unmute
* @see app/Http/Controllers/Backend/UserController.php:142
* @route '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}'
*/
export const unmute = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unmute.url(args, options),
    method: 'get',
})

unmute.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserController::unmute
* @see app/Http/Controllers/Backend/UserController.php:142
* @route '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}'
*/
unmute.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return unmute.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::unmute
* @see app/Http/Controllers/Backend/UserController.php:142
* @route '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}'
*/
unmute.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unmute.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::unmute
* @see app/Http/Controllers/Backend/UserController.php:142
* @route '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}'
*/
unmute.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unmute.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::unmute
* @see app/Http/Controllers/Backend/UserController.php:142
* @route '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}'
*/
const unmuteForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unmute.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::unmute
* @see app/Http/Controllers/Backend/UserController.php:142
* @route '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}'
*/
unmuteForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unmute.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::unmute
* @see app/Http/Controllers/Backend/UserController.php:142
* @route '/backend_uc7BgHFmw32FDIEp/users/unmute/{user}'
*/
unmuteForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: unmute.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

unmute.form = unmuteForm

const user = {
    role: Object.assign(role, role),
    balance: Object.assign(balance, balance),
    mute: Object.assign(mute, mute),
    unmute: Object.assign(unmute, unmute),
}

export default user
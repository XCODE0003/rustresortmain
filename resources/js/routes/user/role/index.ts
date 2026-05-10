import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UserController::admin
* @see app/Http/Controllers/Backend/UserController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/users/admin/{user}'
*/
export const admin = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(args, options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/users/admin/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserController::admin
* @see app/Http/Controllers/Backend/UserController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/users/admin/{user}'
*/
admin.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return admin.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::admin
* @see app/Http/Controllers/Backend/UserController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/users/admin/{user}'
*/
admin.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::admin
* @see app/Http/Controllers/Backend/UserController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/users/admin/{user}'
*/
admin.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::admin
* @see app/Http/Controllers/Backend/UserController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/users/admin/{user}'
*/
const adminForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::admin
* @see app/Http/Controllers/Backend/UserController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/users/admin/{user}'
*/
adminForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::admin
* @see app/Http/Controllers/Backend/UserController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/users/admin/{user}'
*/
adminForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: admin.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

admin.form = adminForm

/**
* @see \App\Http\Controllers\Backend\UserController::support
* @see app/Http/Controllers/Backend/UserController.php:65
* @route '/backend_uc7BgHFmw32FDIEp/users/support/{user}'
*/
export const support = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: support.url(args, options),
    method: 'get',
})

support.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/users/support/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserController::support
* @see app/Http/Controllers/Backend/UserController.php:65
* @route '/backend_uc7BgHFmw32FDIEp/users/support/{user}'
*/
support.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return support.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::support
* @see app/Http/Controllers/Backend/UserController.php:65
* @route '/backend_uc7BgHFmw32FDIEp/users/support/{user}'
*/
support.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: support.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::support
* @see app/Http/Controllers/Backend/UserController.php:65
* @route '/backend_uc7BgHFmw32FDIEp/users/support/{user}'
*/
support.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: support.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::support
* @see app/Http/Controllers/Backend/UserController.php:65
* @route '/backend_uc7BgHFmw32FDIEp/users/support/{user}'
*/
const supportForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: support.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::support
* @see app/Http/Controllers/Backend/UserController.php:65
* @route '/backend_uc7BgHFmw32FDIEp/users/support/{user}'
*/
supportForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: support.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::support
* @see app/Http/Controllers/Backend/UserController.php:65
* @route '/backend_uc7BgHFmw32FDIEp/users/support/{user}'
*/
supportForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: support.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

support.form = supportForm

/**
* @see \App\Http\Controllers\Backend\UserController::user
* @see app/Http/Controllers/Backend/UserController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/users/user/{user}'
*/
export const user = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(args, options),
    method: 'get',
})

user.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/users/user/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserController::user
* @see app/Http/Controllers/Backend/UserController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/users/user/{user}'
*/
user.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return user.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::user
* @see app/Http/Controllers/Backend/UserController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/users/user/{user}'
*/
user.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::user
* @see app/Http/Controllers/Backend/UserController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/users/user/{user}'
*/
user.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: user.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::user
* @see app/Http/Controllers/Backend/UserController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/users/user/{user}'
*/
const userForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::user
* @see app/Http/Controllers/Backend/UserController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/users/user/{user}'
*/
userForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::user
* @see app/Http/Controllers/Backend/UserController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/users/user/{user}'
*/
userForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

user.form = userForm

/**
* @see \App\Http\Controllers\Backend\UserController::investor
* @see app/Http/Controllers/Backend/UserController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/users/investor/{user}'
*/
export const investor = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: investor.url(args, options),
    method: 'get',
})

investor.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/users/investor/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserController::investor
* @see app/Http/Controllers/Backend/UserController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/users/investor/{user}'
*/
investor.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return investor.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::investor
* @see app/Http/Controllers/Backend/UserController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/users/investor/{user}'
*/
investor.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: investor.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::investor
* @see app/Http/Controllers/Backend/UserController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/users/investor/{user}'
*/
investor.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: investor.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::investor
* @see app/Http/Controllers/Backend/UserController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/users/investor/{user}'
*/
const investorForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: investor.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::investor
* @see app/Http/Controllers/Backend/UserController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/users/investor/{user}'
*/
investorForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: investor.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::investor
* @see app/Http/Controllers/Backend/UserController.php:75
* @route '/backend_uc7BgHFmw32FDIEp/users/investor/{user}'
*/
investorForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: investor.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

investor.form = investorForm

const role = {
    admin: Object.assign(admin, admin),
    support: Object.assign(support, support),
    user: Object.assign(user, user),
    investor: Object.assign(investor, investor),
}

export default role
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UserController::index
* @see app/Http/Controllers/Backend/UserController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/users'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserController::index
* @see app/Http/Controllers/Backend/UserController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/users'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::index
* @see app/Http/Controllers/Backend/UserController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/users'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::index
* @see app/Http/Controllers/Backend/UserController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/users'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::index
* @see app/Http/Controllers/Backend/UserController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/users'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::index
* @see app/Http/Controllers/Backend/UserController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/users'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::index
* @see app/Http/Controllers/Backend/UserController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/users'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

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

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
export const details = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
details.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
details.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: details.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
details.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: details.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
const detailsForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: details.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
detailsForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: details.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserController::details
* @see app/Http/Controllers/Backend/UserController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/users/details/{user}'
*/
detailsForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: details.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

details.form = detailsForm

/**
* @see \App\Http\Controllers\Backend\UserController::setBalance
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
export const setBalance = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setBalance.url(options),
    method: 'post',
})

setBalance.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/users/setbalance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\UserController::setBalance
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
setBalance.url = (options?: RouteQueryOptions) => {
    return setBalance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::setBalance
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
setBalance.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: setBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::setBalance
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
const setBalanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::setBalance
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
setBalanceForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setBalance.url(options),
    method: 'post',
})

setBalance.form = setBalanceForm

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

/**
* @see \App\Http\Controllers\Backend\UserController::getUserByName
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
export const getUserByName = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getUserByName.url(options),
    method: 'post',
})

getUserByName.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/users/getUserByName',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\UserController::getUserByName
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
getUserByName.url = (options?: RouteQueryOptions) => {
    return getUserByName.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::getUserByName
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
getUserByName.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getUserByName.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::getUserByName
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
const getUserByNameForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getUserByName.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::getUserByName
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
getUserByNameForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getUserByName.url(options),
    method: 'post',
})

getUserByName.form = getUserByNameForm

const UserController = { index, admin, support, user, investor, details, setBalance, mute, unmute, getUserByName }

export default UserController
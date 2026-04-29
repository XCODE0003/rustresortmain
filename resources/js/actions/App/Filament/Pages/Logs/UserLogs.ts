import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
const UserLogs = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserLogs.url(args, options),
    method: 'get',
})

UserLogs.definition = {
    methods: ["get","head"],
    url: '/admin/user-logs/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
UserLogs.url = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: args?.user,
    }

    return UserLogs.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
UserLogs.get = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UserLogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
UserLogs.head = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UserLogs.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
const UserLogsForm = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserLogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
UserLogsForm.get = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserLogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
UserLogsForm.head = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UserLogs.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

UserLogs.form = UserLogsForm

export default UserLogs
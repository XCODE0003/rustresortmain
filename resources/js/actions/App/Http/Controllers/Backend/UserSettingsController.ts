import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security
* @see app/Http/Controllers/Backend/UserSettingsController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
export const security = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: security.url(options),
    method: 'get',
})

security.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/security',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security
* @see app/Http/Controllers/Backend/UserSettingsController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
security.url = (options?: RouteQueryOptions) => {
    return security.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security
* @see app/Http/Controllers/Backend/UserSettingsController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
security.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: security.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security
* @see app/Http/Controllers/Backend/UserSettingsController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
security.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: security.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security
* @see app/Http/Controllers/Backend/UserSettingsController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
const securityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: security.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security
* @see app/Http/Controllers/Backend/UserSettingsController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
securityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: security.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security
* @see app/Http/Controllers/Backend/UserSettingsController.php:18
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
securityForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: security.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

security.form = securityForm

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:22
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
export const security_store = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: security_store.url(options),
    method: 'patch',
})

security_store.definition = {
    methods: ["patch"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/security',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:22
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
security_store.url = (options?: RouteQueryOptions) => {
    return security_store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:22
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
security_store.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: security_store.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:22
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
const security_storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: security_store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::security_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:22
* @route '/backend_uc7BgHFmw32FDIEp/settings/security'
*/
security_storeForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: security_store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

security_store.form = security_storeForm

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile
* @see app/Http/Controllers/Backend/UserSettingsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile
* @see app/Http/Controllers/Backend/UserSettingsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile
* @see app/Http/Controllers/Backend/UserSettingsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile
* @see app/Http/Controllers/Backend/UserSettingsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile
* @see app/Http/Controllers/Backend/UserSettingsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile
* @see app/Http/Controllers/Backend/UserSettingsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile
* @see app/Http/Controllers/Backend/UserSettingsController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

profile.form = profileForm

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:33
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
export const profile_store = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: profile_store.url(options),
    method: 'patch',
})

profile_store.definition = {
    methods: ["patch"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/profile',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:33
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profile_store.url = (options?: RouteQueryOptions) => {
    return profile_store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:33
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profile_store.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: profile_store.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:33
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
const profile_storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: profile_store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::profile_store
* @see app/Http/Controllers/Backend/UserSettingsController.php:33
* @route '/backend_uc7BgHFmw32FDIEp/settings/profile'
*/
profile_storeForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: profile_store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

profile_store.form = profile_storeForm

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity
* @see app/Http/Controllers/Backend/UserSettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity'
*/
export const activity = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity.url(options),
    method: 'get',
})

activity.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/activity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity
* @see app/Http/Controllers/Backend/UserSettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity'
*/
activity.url = (options?: RouteQueryOptions) => {
    return activity.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity
* @see app/Http/Controllers/Backend/UserSettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity'
*/
activity.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity
* @see app/Http/Controllers/Backend/UserSettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity'
*/
activity.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activity.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity
* @see app/Http/Controllers/Backend/UserSettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity'
*/
const activityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity
* @see app/Http/Controllers/Backend/UserSettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity'
*/
activityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity
* @see app/Http/Controllers/Backend/UserSettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity'
*/
activityForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

activity.form = activityForm

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity_destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
export const activity_destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity_destroy.url(args, options),
    method: 'get',
})

activity_destroy.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity_destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
activity_destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return activity_destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity_destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
activity_destroy.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activity_destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity_destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
activity_destroy.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activity_destroy.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity_destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
const activity_destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity_destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity_destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
activity_destroyForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity_destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::activity_destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
activity_destroyForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activity_destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

activity_destroy.form = activity_destroyForm

const UserSettingsController = { security, security_store, profile, profile_store, activity, activity_destroy }

export default UserSettingsController
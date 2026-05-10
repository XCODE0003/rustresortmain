import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
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

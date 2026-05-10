import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UserSettingsController::destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(args, options),
    method: 'get',
})

destroy.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
destroy.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
destroy.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: destroy.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
destroyForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\UserSettingsController::destroy
* @see app/Http/Controllers/Backend/UserSettingsController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/settings/activity/{id}'
*/
destroyForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

destroy.form = destroyForm

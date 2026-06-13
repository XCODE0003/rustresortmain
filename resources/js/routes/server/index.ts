import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ServerController::settings
* @see app/Http/Controllers/Backend/ServerController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings'
*/
export const settings = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ServerController::settings
* @see app/Http/Controllers/Backend/ServerController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings'
*/
settings.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return settings.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ServerController::settings
* @see app/Http/Controllers/Backend/ServerController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings'
*/
settings.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::settings
* @see app/Http/Controllers/Backend/ServerController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings'
*/
settings.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::settings
* @see app/Http/Controllers/Backend/ServerController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings'
*/
const settingsForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::settings
* @see app/Http/Controllers/Backend/ServerController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings'
*/
settingsForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::settings
* @see app/Http/Controllers/Backend/ServerController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/servers/{id}/settings'
*/
settingsForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: settings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

settings.form = settingsForm

const server = {
    settings: Object.assign(settings, settings),
}

export default server
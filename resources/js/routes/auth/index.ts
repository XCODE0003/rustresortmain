import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import steam87c916 from './steam'
/**
* @see \App\Http\Controllers\Auth\SteamAuthController::steam
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
export const steam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: steam.url(options),
    method: 'get',
})

steam.definition = {
    methods: ["get","head"],
    url: '/auth/steam',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::steam
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
steam.url = (options?: RouteQueryOptions) => {
    return steam.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::steam
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
steam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: steam.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::steam
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
steam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: steam.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::steam
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
const steamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: steam.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::steam
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
steamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: steam.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::steam
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
steamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: steam.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

steam.form = steamForm

const auth = {
    steam: Object.assign(steam, steam87c916),
}

export default auth
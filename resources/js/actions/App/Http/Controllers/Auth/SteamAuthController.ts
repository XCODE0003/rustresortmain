import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
const redirectb6041c76e8e1cd791f8f89d035d48611 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

redirectb6041c76e8e1cd791f8f89d035d48611.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
redirectb6041c76e8e1cd791f8f89d035d48611.url = (options?: RouteQueryOptions) => {
    return redirectb6041c76e8e1cd791f8f89d035d48611.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
redirectb6041c76e8e1cd791f8f89d035d48611.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirectb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
redirectb6041c76e8e1cd791f8f89d035d48611.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirectb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
const redirectb6041c76e8e1cd791f8f89d035d48611Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirectb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
redirectb6041c76e8e1cd791f8f89d035d48611Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirectb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
redirectb6041c76e8e1cd791f8f89d035d48611Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirectb6041c76e8e1cd791f8f89d035d48611.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirectb6041c76e8e1cd791f8f89d035d48611.form = redirectb6041c76e8e1cd791f8f89d035d48611Form
/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
const redirect20c7444052be4bb73eab4da779724205 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect20c7444052be4bb73eab4da779724205.url(options),
    method: 'get',
})

redirect20c7444052be4bb73eab4da779724205.definition = {
    methods: ["get","head"],
    url: '/auth/steam',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
redirect20c7444052be4bb73eab4da779724205.url = (options?: RouteQueryOptions) => {
    return redirect20c7444052be4bb73eab4da779724205.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
redirect20c7444052be4bb73eab4da779724205.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect20c7444052be4bb73eab4da779724205.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
redirect20c7444052be4bb73eab4da779724205.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect20c7444052be4bb73eab4da779724205.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
const redirect20c7444052be4bb73eab4da779724205Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect20c7444052be4bb73eab4da779724205.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
redirect20c7444052be4bb73eab4da779724205Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect20c7444052be4bb73eab4da779724205.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::redirect
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/auth/steam'
*/
redirect20c7444052be4bb73eab4da779724205Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect20c7444052be4bb73eab4da779724205.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirect20c7444052be4bb73eab4da779724205.form = redirect20c7444052be4bb73eab4da779724205Form

export const redirect = {
    '/login': redirectb6041c76e8e1cd791f8f89d035d48611,
    '/auth/steam': redirect20c7444052be4bb73eab4da779724205,
}

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::logout
* @see app/Http/Controllers/Auth/SteamAuthController.php:80
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::logout
* @see app/Http/Controllers/Auth/SteamAuthController.php:80
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::logout
* @see app/Http/Controllers/Auth/SteamAuthController.php:80
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::logout
* @see app/Http/Controllers/Auth/SteamAuthController.php:80
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::logout
* @see app/Http/Controllers/Auth/SteamAuthController.php:80
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::callback
* @see app/Http/Controllers/Auth/SteamAuthController.php:39
* @route '/auth/steam/callback'
*/
export const callback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

callback.definition = {
    methods: ["get","head"],
    url: '/auth/steam/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::callback
* @see app/Http/Controllers/Auth/SteamAuthController.php:39
* @route '/auth/steam/callback'
*/
callback.url = (options?: RouteQueryOptions) => {
    return callback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::callback
* @see app/Http/Controllers/Auth/SteamAuthController.php:39
* @route '/auth/steam/callback'
*/
callback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::callback
* @see app/Http/Controllers/Auth/SteamAuthController.php:39
* @route '/auth/steam/callback'
*/
callback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: callback.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::callback
* @see app/Http/Controllers/Auth/SteamAuthController.php:39
* @route '/auth/steam/callback'
*/
const callbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::callback
* @see app/Http/Controllers/Auth/SteamAuthController.php:39
* @route '/auth/steam/callback'
*/
callbackForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::callback
* @see app/Http/Controllers/Auth/SteamAuthController.php:39
* @route '/auth/steam/callback'
*/
callbackForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

callback.form = callbackForm

const SteamAuthController = { redirect, logout, callback }

export default SteamAuthController
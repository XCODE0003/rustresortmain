import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\Auth\SteamAuthController::login
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::login
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::login
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::login
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::login
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::login
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\SteamAuthController::login
* @see app/Http/Controllers/Auth/SteamAuthController.php:18
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

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
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/info'
*/
export const info = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: info.url(options),
    method: 'get',
})

info.definition = {
    methods: ["get","head"],
    url: '/info',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/info'
*/
info.url = (options?: RouteQueryOptions) => {
    return info.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/info'
*/
info.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: info.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/info'
*/
info.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: info.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/info'
*/
const infoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: info.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/info'
*/
infoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: info.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/info'
*/
infoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: info.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

info.form = infoForm

/**
* @see \App\Http\Controllers\ServerController::servers
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
export const servers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servers.url(options),
    method: 'get',
})

servers.definition = {
    methods: ["get","head"],
    url: '/servers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServerController::servers
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
servers.url = (options?: RouteQueryOptions) => {
    return servers.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServerController::servers
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
servers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::servers
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
servers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: servers.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServerController::servers
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
const serversForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: servers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::servers
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
serversForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: servers.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServerController::servers
* @see app/Http/Controllers/ServerController.php:14
* @route '/servers'
*/
serversForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: servers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

servers.form = serversForm

/**
* @see \App\Http\Controllers\BalanceController::payment
* @see app/Http/Controllers/BalanceController.php:21
* @route '/payment'
*/
export const payment = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payment.url(options),
    method: 'get',
})

payment.definition = {
    methods: ["get","head"],
    url: '/payment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BalanceController::payment
* @see app/Http/Controllers/BalanceController.php:21
* @route '/payment'
*/
payment.url = (options?: RouteQueryOptions) => {
    return payment.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BalanceController::payment
* @see app/Http/Controllers/BalanceController.php:21
* @route '/payment'
*/
payment.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payment.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::payment
* @see app/Http/Controllers/BalanceController.php:21
* @route '/payment'
*/
payment.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payment.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BalanceController::payment
* @see app/Http/Controllers/BalanceController.php:21
* @route '/payment'
*/
const paymentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payment.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::payment
* @see app/Http/Controllers/BalanceController.php:21
* @route '/payment'
*/
paymentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payment.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BalanceController::payment
* @see app/Http/Controllers/BalanceController.php:21
* @route '/payment'
*/
paymentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payment.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

payment.form = paymentForm

/**
* @see \App\Http\Controllers\ProfileController::profile
* @see app/Http/Controllers/ProfileController.php:12
* @route '/profile'
*/
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::profile
* @see app/Http/Controllers/ProfileController.php:12
* @route '/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::profile
* @see app/Http/Controllers/ProfileController.php:12
* @route '/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::profile
* @see app/Http/Controllers/ProfileController.php:12
* @route '/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProfileController::profile
* @see app/Http/Controllers/ProfileController.php:12
* @route '/profile'
*/
const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::profile
* @see app/Http/Controllers/ProfileController.php:12
* @route '/profile'
*/
profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::profile
* @see app/Http/Controllers/ProfileController.php:12
* @route '/profile'
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
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/faq'
*/
export const faq = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faq.url(options),
    method: 'get',
})

faq.definition = {
    methods: ["get","head"],
    url: '/faq',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/faq'
*/
faq.url = (options?: RouteQueryOptions) => {
    return faq.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/faq'
*/
faq.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faq.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/faq'
*/
faq.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: faq.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/faq'
*/
const faqForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: faq.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/faq'
*/
faqForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: faq.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/faq'
*/
faqForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: faq.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

faq.form = faqForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
export const tickets = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tickets.url(options),
    method: 'get',
})

tickets.definition = {
    methods: ["get","head"],
    url: '/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
tickets.url = (options?: RouteQueryOptions) => {
    return tickets.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
tickets.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tickets.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
tickets.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tickets.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
const ticketsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tickets.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
ticketsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tickets.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
ticketsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tickets.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tickets.form = ticketsForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
export const rating = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rating.url(options),
    method: 'get',
})

rating.definition = {
    methods: ["get","head"],
    url: '/rating',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
rating.url = (options?: RouteQueryOptions) => {
    return rating.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
rating.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rating.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
rating.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rating.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
const ratingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rating.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
ratingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rating.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
ratingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rating.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rating.form = ratingForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
export const clan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clan.url(options),
    method: 'get',
})

clan.definition = {
    methods: ["get","head"],
    url: '/clan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
clan.url = (options?: RouteQueryOptions) => {
    return clan.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
clan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clan.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
clan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clan.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
const clanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clan.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
clanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clan.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
clanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clan.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

clan.form = clanForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
export const contacts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})

contacts.definition = {
    methods: ["get","head"],
    url: '/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
contacts.url = (options?: RouteQueryOptions) => {
    return contacts.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
contacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
contacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contacts.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
const contactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contacts.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
contactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contacts.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
contactsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contacts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

contacts.form = contactsForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
export const compedium = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compedium.url(options),
    method: 'get',
})

compedium.definition = {
    methods: ["get","head"],
    url: '/compedium',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
compedium.url = (options?: RouteQueryOptions) => {
    return compedium.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
compedium.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compedium.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
compedium.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: compedium.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
const compediumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: compedium.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
compediumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: compedium.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
compediumForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: compedium.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

compedium.form = compediumForm

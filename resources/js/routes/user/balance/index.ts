import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UserController::set
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
export const set = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: set.url(options),
    method: 'post',
})

set.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/users/setbalance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\UserController::set
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
set.url = (options?: RouteQueryOptions) => {
    return set.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::set
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
set.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: set.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::set
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
const setForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: set.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::set
* @see app/Http/Controllers/Backend/UserController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/users/setbalance'
*/
setForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: set.url(options),
    method: 'post',
})

set.form = setForm

const balance = {
    set: Object.assign(set, set),
}

export default balance
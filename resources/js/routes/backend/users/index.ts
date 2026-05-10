import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UserController::getuserbyname
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
export const getuserbyname = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getuserbyname.url(options),
    method: 'post',
})

getuserbyname.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/users/getUserByName',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\UserController::getuserbyname
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
getuserbyname.url = (options?: RouteQueryOptions) => {
    return getuserbyname.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UserController::getuserbyname
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
getuserbyname.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getuserbyname.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::getuserbyname
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
const getuserbynameForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getuserbyname.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\UserController::getuserbyname
* @see app/Http/Controllers/Backend/UserController.php:155
* @route '/backend_uc7BgHFmw32FDIEp/users/getUserByName'
*/
getuserbynameForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getuserbyname.url(options),
    method: 'post',
})

getuserbyname.form = getuserbynameForm

const users = {
    getuserbyname: Object.assign(getuserbyname, getuserbyname),
}

export default users
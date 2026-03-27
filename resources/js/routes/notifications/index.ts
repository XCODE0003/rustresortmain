import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\NotificationController::readAll
* @see app/Http/Controllers/NotificationController.php:9
* @route '/notifications/read-all'
*/
export const readAll = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: readAll.url(options),
    method: 'post',
})

readAll.definition = {
    methods: ["post"],
    url: '/notifications/read-all',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::readAll
* @see app/Http/Controllers/NotificationController.php:9
* @route '/notifications/read-all'
*/
readAll.url = (options?: RouteQueryOptions) => {
    return readAll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::readAll
* @see app/Http/Controllers/NotificationController.php:9
* @route '/notifications/read-all'
*/
readAll.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: readAll.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::readAll
* @see app/Http/Controllers/NotificationController.php:9
* @route '/notifications/read-all'
*/
const readAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: readAll.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::readAll
* @see app/Http/Controllers/NotificationController.php:9
* @route '/notifications/read-all'
*/
readAllForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: readAll.url(options),
    method: 'post',
})

readAll.form = readAllForm

/**
* @see \App\Http\Controllers\NotificationController::read
* @see app/Http/Controllers/NotificationController.php:16
* @route '/notifications/{id}/read'
*/
export const read = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: read.url(args, options),
    method: 'post',
})

read.definition = {
    methods: ["post"],
    url: '/notifications/{id}/read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::read
* @see app/Http/Controllers/NotificationController.php:16
* @route '/notifications/{id}/read'
*/
read.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return read.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::read
* @see app/Http/Controllers/NotificationController.php:16
* @route '/notifications/{id}/read'
*/
read.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: read.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::read
* @see app/Http/Controllers/NotificationController.php:16
* @route '/notifications/{id}/read'
*/
const readForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: read.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::read
* @see app/Http/Controllers/NotificationController.php:16
* @route '/notifications/{id}/read'
*/
readForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: read.url(args, options),
    method: 'post',
})

read.form = readForm

const notifications = {
    readAll: Object.assign(readAll, readAll),
    read: Object.assign(read, read),
}

export default notifications
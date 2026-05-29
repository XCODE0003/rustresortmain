import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ServerController::index
* @see app/Http/Controllers/Backend/ServerController.php:25
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/servers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ServerController::index
* @see app/Http/Controllers/Backend/ServerController.php:25
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ServerController::index
* @see app/Http/Controllers/Backend/ServerController.php:25
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::index
* @see app/Http/Controllers/Backend/ServerController.php:25
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::index
* @see app/Http/Controllers/Backend/ServerController.php:25
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::index
* @see app/Http/Controllers/Backend/ServerController.php:25
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::index
* @see app/Http/Controllers/Backend/ServerController.php:25
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Backend\ServerController::create
* @see app/Http/Controllers/Backend/ServerController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/servers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/servers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ServerController::create
* @see app/Http/Controllers/Backend/ServerController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/servers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ServerController::create
* @see app/Http/Controllers/Backend/ServerController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/servers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::create
* @see app/Http/Controllers/Backend/ServerController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/servers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::create
* @see app/Http/Controllers/Backend/ServerController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/servers/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::create
* @see app/Http/Controllers/Backend/ServerController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/servers/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::create
* @see app/Http/Controllers/Backend/ServerController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/servers/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Backend\ServerController::store
* @see app/Http/Controllers/Backend/ServerController.php:50
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/servers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ServerController::store
* @see app/Http/Controllers/Backend/ServerController.php:50
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ServerController::store
* @see app/Http/Controllers/Backend/ServerController.php:50
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::store
* @see app/Http/Controllers/Backend/ServerController.php:50
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::store
* @see app/Http/Controllers/Backend/ServerController.php:50
* @route '/backend_uc7BgHFmw32FDIEp/servers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\ServerController::edit
* @see app/Http/Controllers/Backend/ServerController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit'
*/
export const edit = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ServerController::edit
* @see app/Http/Controllers/Backend/ServerController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit'
*/
edit.url = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { server: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: typeof args.server === 'object'
        ? args.server.id
        : args.server,
    }

    return edit.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ServerController::edit
* @see app/Http/Controllers/Backend/ServerController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit'
*/
edit.get = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::edit
* @see app/Http/Controllers/Backend/ServerController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit'
*/
edit.head = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::edit
* @see app/Http/Controllers/Backend/ServerController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit'
*/
const editForm = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::edit
* @see app/Http/Controllers/Backend/ServerController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit'
*/
editForm.get = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::edit
* @see app/Http/Controllers/Backend/ServerController.php:86
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}/edit'
*/
editForm.head = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Backend\ServerController::update
* @see app/Http/Controllers/Backend/ServerController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
export const update = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/servers/{server}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ServerController::update
* @see app/Http/Controllers/Backend/ServerController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
update.url = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { server: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: typeof args.server === 'object'
        ? args.server.id
        : args.server,
    }

    return update.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ServerController::update
* @see app/Http/Controllers/Backend/ServerController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
update.put = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::update
* @see app/Http/Controllers/Backend/ServerController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
update.patch = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::update
* @see app/Http/Controllers/Backend/ServerController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
const updateForm = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::update
* @see app/Http/Controllers/Backend/ServerController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
updateForm.put = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::update
* @see app/Http/Controllers/Backend/ServerController.php:101
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
updateForm.patch = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Backend\ServerController::destroy
* @see app/Http/Controllers/Backend/ServerController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
export const destroy = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/servers/{server}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ServerController::destroy
* @see app/Http/Controllers/Backend/ServerController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
destroy.url = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { server: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { server: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            server: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        server: typeof args.server === 'object'
        ? args.server.id
        : args.server,
    }

    return destroy.definition.url
            .replace('{server}', parsedArgs.server.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ServerController::destroy
* @see app/Http/Controllers/Backend/ServerController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
destroy.delete = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::destroy
* @see app/Http/Controllers/Backend/ServerController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
const destroyForm = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ServerController::destroy
* @see app/Http/Controllers/Backend/ServerController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/servers/{server}'
*/
destroyForm.delete = (args: { server: number | { id: number } } | [server: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const servers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default servers
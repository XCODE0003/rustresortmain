import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ShopSetController::index
* @see app/Http/Controllers/Backend/ShopSetController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopsets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopSetController::index
* @see app/Http/Controllers/Backend/ShopSetController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopSetController::index
* @see app/Http/Controllers/Backend/ShopSetController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::index
* @see app/Http/Controllers/Backend/ShopSetController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::index
* @see app/Http/Controllers/Backend/ShopSetController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::index
* @see app/Http/Controllers/Backend/ShopSetController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::index
* @see app/Http/Controllers/Backend/ShopSetController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
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
* @see \App\Http\Controllers\Backend\ShopSetController::create
* @see app/Http/Controllers/Backend/ShopSetController.php:45
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopsets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopSetController::create
* @see app/Http/Controllers/Backend/ShopSetController.php:45
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopSetController::create
* @see app/Http/Controllers/Backend/ShopSetController.php:45
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::create
* @see app/Http/Controllers/Backend/ShopSetController.php:45
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::create
* @see app/Http/Controllers/Backend/ShopSetController.php:45
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::create
* @see app/Http/Controllers/Backend/ShopSetController.php:45
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::create
* @see app/Http/Controllers/Backend/ShopSetController.php:45
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/create'
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
* @see \App\Http\Controllers\Backend\ShopSetController::store
* @see app/Http/Controllers/Backend/ShopSetController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/shopsets',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ShopSetController::store
* @see app/Http/Controllers/Backend/ShopSetController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopSetController::store
* @see app/Http/Controllers/Backend/ShopSetController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::store
* @see app/Http/Controllers/Backend/ShopSetController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::store
* @see app/Http/Controllers/Backend/ShopSetController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/shopsets'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\ShopSetController::edit
* @see app/Http/Controllers/Backend/ShopSetController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit'
*/
export const edit = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopSetController::edit
* @see app/Http/Controllers/Backend/ShopSetController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit'
*/
edit.url = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopset: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopset: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopset: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopset: typeof args.shopset === 'object'
        ? args.shopset.id
        : args.shopset,
    }

    return edit.definition.url
            .replace('{shopset}', parsedArgs.shopset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopSetController::edit
* @see app/Http/Controllers/Backend/ShopSetController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit'
*/
edit.get = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::edit
* @see app/Http/Controllers/Backend/ShopSetController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit'
*/
edit.head = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::edit
* @see app/Http/Controllers/Backend/ShopSetController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit'
*/
const editForm = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::edit
* @see app/Http/Controllers/Backend/ShopSetController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit'
*/
editForm.get = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::edit
* @see app/Http/Controllers/Backend/ShopSetController.php:93
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}/edit'
*/
editForm.head = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ShopSetController::update
* @see app/Http/Controllers/Backend/ShopSetController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
export const update = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ShopSetController::update
* @see app/Http/Controllers/Backend/ShopSetController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
update.url = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopset: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopset: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopset: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopset: typeof args.shopset === 'object'
        ? args.shopset.id
        : args.shopset,
    }

    return update.definition.url
            .replace('{shopset}', parsedArgs.shopset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopSetController::update
* @see app/Http/Controllers/Backend/ShopSetController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
update.put = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::update
* @see app/Http/Controllers/Backend/ShopSetController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
update.patch = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::update
* @see app/Http/Controllers/Backend/ShopSetController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
const updateForm = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::update
* @see app/Http/Controllers/Backend/ShopSetController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
updateForm.put = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::update
* @see app/Http/Controllers/Backend/ShopSetController.php:106
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
updateForm.patch = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ShopSetController::destroy
* @see app/Http/Controllers/Backend/ShopSetController.php:146
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
export const destroy = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ShopSetController::destroy
* @see app/Http/Controllers/Backend/ShopSetController.php:146
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
destroy.url = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopset: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopset: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopset: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopset: typeof args.shopset === 'object'
        ? args.shopset.id
        : args.shopset,
    }

    return destroy.definition.url
            .replace('{shopset}', parsedArgs.shopset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopSetController::destroy
* @see app/Http/Controllers/Backend/ShopSetController.php:146
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
destroy.delete = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::destroy
* @see app/Http/Controllers/Backend/ShopSetController.php:146
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
const destroyForm = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopSetController::destroy
* @see app/Http/Controllers/Backend/ShopSetController.php:146
* @route '/backend_uc7BgHFmw32FDIEp/shopsets/{shopset}'
*/
destroyForm.delete = (args: { shopset: string | number | { id: string | number } } | [shopset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ShopSetController = { index, create, store, edit, update, destroy }

export default ShopSetController
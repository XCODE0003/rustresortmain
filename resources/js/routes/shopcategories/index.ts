import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::index
* @see app/Http/Controllers/Backend/ShopCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcategories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::index
* @see app/Http/Controllers/Backend/ShopCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::index
* @see app/Http/Controllers/Backend/ShopCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::index
* @see app/Http/Controllers/Backend/ShopCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::index
* @see app/Http/Controllers/Backend/ShopCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::index
* @see app/Http/Controllers/Backend/ShopCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::index
* @see app/Http/Controllers/Backend/ShopCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
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
* @see \App\Http\Controllers\Backend\ShopCategoryController::create
* @see app/Http/Controllers/Backend/ShopCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcategories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::create
* @see app/Http/Controllers/Backend/ShopCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::create
* @see app/Http/Controllers/Backend/ShopCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::create
* @see app/Http/Controllers/Backend/ShopCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::create
* @see app/Http/Controllers/Backend/ShopCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::create
* @see app/Http/Controllers/Backend/ShopCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::create
* @see app/Http/Controllers/Backend/ShopCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/create'
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
* @see \App\Http\Controllers\Backend\ShopCategoryController::store
* @see app/Http/Controllers/Backend/ShopCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcategories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::store
* @see app/Http/Controllers/Backend/ShopCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::store
* @see app/Http/Controllers/Backend/ShopCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::store
* @see app/Http/Controllers/Backend/ShopCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::store
* @see app/Http/Controllers/Backend/ShopCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::edit
* @see app/Http/Controllers/Backend/ShopCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit'
*/
export const edit = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::edit
* @see app/Http/Controllers/Backend/ShopCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit'
*/
edit.url = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopcategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopcategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopcategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopcategory: typeof args.shopcategory === 'object'
        ? args.shopcategory.id
        : args.shopcategory,
    }

    return edit.definition.url
            .replace('{shopcategory}', parsedArgs.shopcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::edit
* @see app/Http/Controllers/Backend/ShopCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit'
*/
edit.get = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::edit
* @see app/Http/Controllers/Backend/ShopCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit'
*/
edit.head = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::edit
* @see app/Http/Controllers/Backend/ShopCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit'
*/
const editForm = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::edit
* @see app/Http/Controllers/Backend/ShopCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit'
*/
editForm.get = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::edit
* @see app/Http/Controllers/Backend/ShopCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}/edit'
*/
editForm.head = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ShopCategoryController::update
* @see app/Http/Controllers/Backend/ShopCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
export const update = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::update
* @see app/Http/Controllers/Backend/ShopCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
update.url = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopcategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopcategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopcategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopcategory: typeof args.shopcategory === 'object'
        ? args.shopcategory.id
        : args.shopcategory,
    }

    return update.definition.url
            .replace('{shopcategory}', parsedArgs.shopcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::update
* @see app/Http/Controllers/Backend/ShopCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
update.put = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::update
* @see app/Http/Controllers/Backend/ShopCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
update.patch = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::update
* @see app/Http/Controllers/Backend/ShopCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
const updateForm = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::update
* @see app/Http/Controllers/Backend/ShopCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
updateForm.put = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::update
* @see app/Http/Controllers/Backend/ShopCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
updateForm.patch = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ShopCategoryController::destroy
* @see app/Http/Controllers/Backend/ShopCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
export const destroy = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::destroy
* @see app/Http/Controllers/Backend/ShopCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
destroy.url = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopcategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopcategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopcategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopcategory: typeof args.shopcategory === 'object'
        ? args.shopcategory.id
        : args.shopcategory,
    }

    return destroy.definition.url
            .replace('{shopcategory}', parsedArgs.shopcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::destroy
* @see app/Http/Controllers/Backend/ShopCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
destroy.delete = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::destroy
* @see app/Http/Controllers/Backend/ShopCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
const destroyForm = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCategoryController::destroy
* @see app/Http/Controllers/Backend/ShopCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/shopcategories/{shopcategory}'
*/
destroyForm.delete = (args: { shopcategory: number | { id: number } } | [shopcategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const shopcategories = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default shopcategories
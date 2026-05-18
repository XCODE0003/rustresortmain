import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::index
* @see app/Http/Controllers/Backend/GuideCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/guidecategories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::index
* @see app/Http/Controllers/Backend/GuideCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::index
* @see app/Http/Controllers/Backend/GuideCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::index
* @see app/Http/Controllers/Backend/GuideCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::index
* @see app/Http/Controllers/Backend/GuideCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::index
* @see app/Http/Controllers/Backend/GuideCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::index
* @see app/Http/Controllers/Backend/GuideCategoryController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
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
* @see \App\Http\Controllers\Backend\GuideCategoryController::create
* @see app/Http/Controllers/Backend/GuideCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/guidecategories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::create
* @see app/Http/Controllers/Backend/GuideCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::create
* @see app/Http/Controllers/Backend/GuideCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::create
* @see app/Http/Controllers/Backend/GuideCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::create
* @see app/Http/Controllers/Backend/GuideCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::create
* @see app/Http/Controllers/Backend/GuideCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::create
* @see app/Http/Controllers/Backend/GuideCategoryController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/create'
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
* @see \App\Http\Controllers\Backend\GuideCategoryController::store
* @see app/Http/Controllers/Backend/GuideCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/guidecategories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::store
* @see app/Http/Controllers/Backend/GuideCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::store
* @see app/Http/Controllers/Backend/GuideCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::store
* @see app/Http/Controllers/Backend/GuideCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::store
* @see app/Http/Controllers/Backend/GuideCategoryController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::edit
* @see app/Http/Controllers/Backend/GuideCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit'
*/
export const edit = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::edit
* @see app/Http/Controllers/Backend/GuideCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit'
*/
edit.url = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guidecategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guidecategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guidecategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guidecategory: typeof args.guidecategory === 'object'
        ? args.guidecategory.id
        : args.guidecategory,
    }

    return edit.definition.url
            .replace('{guidecategory}', parsedArgs.guidecategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::edit
* @see app/Http/Controllers/Backend/GuideCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit'
*/
edit.get = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::edit
* @see app/Http/Controllers/Backend/GuideCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit'
*/
edit.head = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::edit
* @see app/Http/Controllers/Backend/GuideCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit'
*/
const editForm = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::edit
* @see app/Http/Controllers/Backend/GuideCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit'
*/
editForm.get = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::edit
* @see app/Http/Controllers/Backend/GuideCategoryController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}/edit'
*/
editForm.head = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\GuideCategoryController::update
* @see app/Http/Controllers/Backend/GuideCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
export const update = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::update
* @see app/Http/Controllers/Backend/GuideCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
update.url = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guidecategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guidecategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guidecategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guidecategory: typeof args.guidecategory === 'object'
        ? args.guidecategory.id
        : args.guidecategory,
    }

    return update.definition.url
            .replace('{guidecategory}', parsedArgs.guidecategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::update
* @see app/Http/Controllers/Backend/GuideCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
update.put = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::update
* @see app/Http/Controllers/Backend/GuideCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
update.patch = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::update
* @see app/Http/Controllers/Backend/GuideCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
const updateForm = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::update
* @see app/Http/Controllers/Backend/GuideCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
updateForm.put = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::update
* @see app/Http/Controllers/Backend/GuideCategoryController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
updateForm.patch = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\GuideCategoryController::destroy
* @see app/Http/Controllers/Backend/GuideCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
export const destroy = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::destroy
* @see app/Http/Controllers/Backend/GuideCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
destroy.url = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guidecategory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guidecategory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guidecategory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guidecategory: typeof args.guidecategory === 'object'
        ? args.guidecategory.id
        : args.guidecategory,
    }

    return destroy.definition.url
            .replace('{guidecategory}', parsedArgs.guidecategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::destroy
* @see app/Http/Controllers/Backend/GuideCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
destroy.delete = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::destroy
* @see app/Http/Controllers/Backend/GuideCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
const destroyForm = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideCategoryController::destroy
* @see app/Http/Controllers/Backend/GuideCategoryController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/guidecategories/{guidecategory}'
*/
destroyForm.delete = (args: { guidecategory: number | { id: number } } | [guidecategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const GuideCategoryController = { index, create, store, edit, update, destroy }

export default GuideCategoryController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\GuideController::index
* @see app/Http/Controllers/Backend/GuideController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/guides',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GuideController::index
* @see app/Http/Controllers/Backend/GuideController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideController::index
* @see app/Http/Controllers/Backend/GuideController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::index
* @see app/Http/Controllers/Backend/GuideController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::index
* @see app/Http/Controllers/Backend/GuideController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::index
* @see app/Http/Controllers/Backend/GuideController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::index
* @see app/Http/Controllers/Backend/GuideController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/guides'
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
* @see \App\Http\Controllers\Backend\GuideController::create
* @see app/Http/Controllers/Backend/GuideController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/guides/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/guides/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GuideController::create
* @see app/Http/Controllers/Backend/GuideController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/guides/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideController::create
* @see app/Http/Controllers/Backend/GuideController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/guides/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::create
* @see app/Http/Controllers/Backend/GuideController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/guides/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::create
* @see app/Http/Controllers/Backend/GuideController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/guides/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::create
* @see app/Http/Controllers/Backend/GuideController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/guides/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::create
* @see app/Http/Controllers/Backend/GuideController.php:53
* @route '/backend_uc7BgHFmw32FDIEp/guides/create'
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
* @see \App\Http\Controllers\Backend\GuideController::store
* @see app/Http/Controllers/Backend/GuideController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/guides',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\GuideController::store
* @see app/Http/Controllers/Backend/GuideController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideController::store
* @see app/Http/Controllers/Backend/GuideController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::store
* @see app/Http/Controllers/Backend/GuideController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::store
* @see app/Http/Controllers/Backend/GuideController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/guides'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\GuideController::edit
* @see app/Http/Controllers/Backend/GuideController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit'
*/
export const edit = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\GuideController::edit
* @see app/Http/Controllers/Backend/GuideController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit'
*/
edit.url = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guide: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guide: typeof args.guide === 'object'
        ? args.guide.id
        : args.guide,
    }

    return edit.definition.url
            .replace('{guide}', parsedArgs.guide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideController::edit
* @see app/Http/Controllers/Backend/GuideController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit'
*/
edit.get = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::edit
* @see app/Http/Controllers/Backend/GuideController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit'
*/
edit.head = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::edit
* @see app/Http/Controllers/Backend/GuideController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit'
*/
const editForm = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::edit
* @see app/Http/Controllers/Backend/GuideController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit'
*/
editForm.get = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::edit
* @see app/Http/Controllers/Backend/GuideController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}/edit'
*/
editForm.head = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\GuideController::update
* @see app/Http/Controllers/Backend/GuideController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
export const update = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/guides/{guide}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\GuideController::update
* @see app/Http/Controllers/Backend/GuideController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
update.url = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guide: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guide: typeof args.guide === 'object'
        ? args.guide.id
        : args.guide,
    }

    return update.definition.url
            .replace('{guide}', parsedArgs.guide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideController::update
* @see app/Http/Controllers/Backend/GuideController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
update.put = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::update
* @see app/Http/Controllers/Backend/GuideController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
update.patch = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::update
* @see app/Http/Controllers/Backend/GuideController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
const updateForm = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::update
* @see app/Http/Controllers/Backend/GuideController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
updateForm.put = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::update
* @see app/Http/Controllers/Backend/GuideController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
updateForm.patch = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\GuideController::destroy
* @see app/Http/Controllers/Backend/GuideController.php:125
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
export const destroy = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/guides/{guide}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\GuideController::destroy
* @see app/Http/Controllers/Backend/GuideController.php:125
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
destroy.url = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { guide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { guide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            guide: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        guide: typeof args.guide === 'object'
        ? args.guide.id
        : args.guide,
    }

    return destroy.definition.url
            .replace('{guide}', parsedArgs.guide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\GuideController::destroy
* @see app/Http/Controllers/Backend/GuideController.php:125
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
destroy.delete = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::destroy
* @see app/Http/Controllers/Backend/GuideController.php:125
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
const destroyForm = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\GuideController::destroy
* @see app/Http/Controllers/Backend/GuideController.php:125
* @route '/backend_uc7BgHFmw32FDIEp/guides/{guide}'
*/
destroyForm.delete = (args: { guide: number | { id: number } } | [guide: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const guides = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default guides
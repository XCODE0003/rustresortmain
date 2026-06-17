import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\FaqController::index
* @see app/Http/Controllers/Backend/FaqController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/faqs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FaqController::index
* @see app/Http/Controllers/Backend/FaqController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FaqController::index
* @see app/Http/Controllers/Backend/FaqController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::index
* @see app/Http/Controllers/Backend/FaqController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::index
* @see app/Http/Controllers/Backend/FaqController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::index
* @see app/Http/Controllers/Backend/FaqController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::index
* @see app/Http/Controllers/Backend/FaqController.php:26
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
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
* @see \App\Http\Controllers\Backend\FaqController::create
* @see app/Http/Controllers/Backend/FaqController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/faqs/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/faqs/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FaqController::create
* @see app/Http/Controllers/Backend/FaqController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/faqs/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FaqController::create
* @see app/Http/Controllers/Backend/FaqController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/faqs/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::create
* @see app/Http/Controllers/Backend/FaqController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/faqs/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::create
* @see app/Http/Controllers/Backend/FaqController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/faqs/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::create
* @see app/Http/Controllers/Backend/FaqController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/faqs/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::create
* @see app/Http/Controllers/Backend/FaqController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/faqs/create'
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
* @see \App\Http\Controllers\Backend\FaqController::store
* @see app/Http/Controllers/Backend/FaqController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/faqs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\FaqController::store
* @see app/Http/Controllers/Backend/FaqController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FaqController::store
* @see app/Http/Controllers/Backend/FaqController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::store
* @see app/Http/Controllers/Backend/FaqController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::store
* @see app/Http/Controllers/Backend/FaqController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/faqs'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\FaqController::edit
* @see app/Http/Controllers/Backend/FaqController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit'
*/
export const edit = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\FaqController::edit
* @see app/Http/Controllers/Backend/FaqController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit'
*/
edit.url = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { faq: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            faq: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        faq: typeof args.faq === 'object'
        ? args.faq.id
        : args.faq,
    }

    return edit.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FaqController::edit
* @see app/Http/Controllers/Backend/FaqController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit'
*/
edit.get = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::edit
* @see app/Http/Controllers/Backend/FaqController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit'
*/
edit.head = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::edit
* @see app/Http/Controllers/Backend/FaqController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit'
*/
const editForm = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::edit
* @see app/Http/Controllers/Backend/FaqController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit'
*/
editForm.get = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::edit
* @see app/Http/Controllers/Backend/FaqController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}/edit'
*/
editForm.head = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\FaqController::update
* @see app/Http/Controllers/Backend/FaqController.php:72
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
export const update = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/faqs/{faq}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\FaqController::update
* @see app/Http/Controllers/Backend/FaqController.php:72
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
update.url = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { faq: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            faq: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        faq: typeof args.faq === 'object'
        ? args.faq.id
        : args.faq,
    }

    return update.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FaqController::update
* @see app/Http/Controllers/Backend/FaqController.php:72
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
update.put = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::update
* @see app/Http/Controllers/Backend/FaqController.php:72
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
update.patch = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::update
* @see app/Http/Controllers/Backend/FaqController.php:72
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
const updateForm = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::update
* @see app/Http/Controllers/Backend/FaqController.php:72
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
updateForm.put = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::update
* @see app/Http/Controllers/Backend/FaqController.php:72
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
updateForm.patch = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\FaqController::destroy
* @see app/Http/Controllers/Backend/FaqController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
export const destroy = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/faqs/{faq}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\FaqController::destroy
* @see app/Http/Controllers/Backend/FaqController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
destroy.url = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { faq: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            faq: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        faq: typeof args.faq === 'object'
        ? args.faq.id
        : args.faq,
    }

    return destroy.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\FaqController::destroy
* @see app/Http/Controllers/Backend/FaqController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
destroy.delete = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::destroy
* @see app/Http/Controllers/Backend/FaqController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
const destroyForm = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\FaqController::destroy
* @see app/Http/Controllers/Backend/FaqController.php:85
* @route '/backend_uc7BgHFmw32FDIEp/faqs/{faq}'
*/
destroyForm.delete = (args: { faq: string | number | { id: string | number } } | [faq: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const faqs = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default faqs
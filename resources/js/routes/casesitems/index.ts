import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\CasesItemController::index
* @see app/Http/Controllers/Backend/CasesItemController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/casesitems',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesItemController::index
* @see app/Http/Controllers/Backend/CasesItemController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesItemController::index
* @see app/Http/Controllers/Backend/CasesItemController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::index
* @see app/Http/Controllers/Backend/CasesItemController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::index
* @see app/Http/Controllers/Backend/CasesItemController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::index
* @see app/Http/Controllers/Backend/CasesItemController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::index
* @see app/Http/Controllers/Backend/CasesItemController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
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
* @see \App\Http\Controllers\Backend\CasesItemController::create
* @see app/Http/Controllers/Backend/CasesItemController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/casesitems/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesItemController::create
* @see app/Http/Controllers/Backend/CasesItemController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesItemController::create
* @see app/Http/Controllers/Backend/CasesItemController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::create
* @see app/Http/Controllers/Backend/CasesItemController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::create
* @see app/Http/Controllers/Backend/CasesItemController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::create
* @see app/Http/Controllers/Backend/CasesItemController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::create
* @see app/Http/Controllers/Backend/CasesItemController.php:61
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/create'
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
* @see \App\Http\Controllers\Backend\CasesItemController::store
* @see app/Http/Controllers/Backend/CasesItemController.php:69
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/casesitems',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CasesItemController::store
* @see app/Http/Controllers/Backend/CasesItemController.php:69
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesItemController::store
* @see app/Http/Controllers/Backend/CasesItemController.php:69
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::store
* @see app/Http/Controllers/Backend/CasesItemController.php:69
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::store
* @see app/Http/Controllers/Backend/CasesItemController.php:69
* @route '/backend_uc7BgHFmw32FDIEp/casesitems'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\CasesItemController::edit
* @see app/Http/Controllers/Backend/CasesItemController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit'
*/
export const edit = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesItemController::edit
* @see app/Http/Controllers/Backend/CasesItemController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit'
*/
edit.url = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { casesitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { casesitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            casesitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        casesitem: typeof args.casesitem === 'object'
        ? args.casesitem.id
        : args.casesitem,
    }

    return edit.definition.url
            .replace('{casesitem}', parsedArgs.casesitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesItemController::edit
* @see app/Http/Controllers/Backend/CasesItemController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit'
*/
edit.get = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::edit
* @see app/Http/Controllers/Backend/CasesItemController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit'
*/
edit.head = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::edit
* @see app/Http/Controllers/Backend/CasesItemController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit'
*/
const editForm = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::edit
* @see app/Http/Controllers/Backend/CasesItemController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit'
*/
editForm.get = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::edit
* @see app/Http/Controllers/Backend/CasesItemController.php:83
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}/edit'
*/
editForm.head = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\CasesItemController::update
* @see app/Http/Controllers/Backend/CasesItemController.php:91
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
export const update = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\CasesItemController::update
* @see app/Http/Controllers/Backend/CasesItemController.php:91
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
update.url = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { casesitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { casesitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            casesitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        casesitem: typeof args.casesitem === 'object'
        ? args.casesitem.id
        : args.casesitem,
    }

    return update.definition.url
            .replace('{casesitem}', parsedArgs.casesitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesItemController::update
* @see app/Http/Controllers/Backend/CasesItemController.php:91
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
update.put = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::update
* @see app/Http/Controllers/Backend/CasesItemController.php:91
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
update.patch = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::update
* @see app/Http/Controllers/Backend/CasesItemController.php:91
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
const updateForm = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::update
* @see app/Http/Controllers/Backend/CasesItemController.php:91
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
updateForm.put = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::update
* @see app/Http/Controllers/Backend/CasesItemController.php:91
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
updateForm.patch = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\CasesItemController::destroy
* @see app/Http/Controllers/Backend/CasesItemController.php:109
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
export const destroy = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CasesItemController::destroy
* @see app/Http/Controllers/Backend/CasesItemController.php:109
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
destroy.url = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { casesitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { casesitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            casesitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        casesitem: typeof args.casesitem === 'object'
        ? args.casesitem.id
        : args.casesitem,
    }

    return destroy.definition.url
            .replace('{casesitem}', parsedArgs.casesitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesItemController::destroy
* @see app/Http/Controllers/Backend/CasesItemController.php:109
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
destroy.delete = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::destroy
* @see app/Http/Controllers/Backend/CasesItemController.php:109
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
const destroyForm = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesItemController::destroy
* @see app/Http/Controllers/Backend/CasesItemController.php:109
* @route '/backend_uc7BgHFmw32FDIEp/casesitems/{casesitem}'
*/
destroyForm.delete = (args: { casesitem: string | number | { id: string | number } } | [casesitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const casesitems = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default casesitems
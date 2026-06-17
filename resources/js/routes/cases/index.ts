import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\CasesController::duplicate
* @see app/Http/Controllers/Backend/CasesController.php:179
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate'
*/
export const duplicate = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: duplicate.url(args, options),
    method: 'get',
})

duplicate.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::duplicate
* @see app/Http/Controllers/Backend/CasesController.php:179
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate'
*/
duplicate.url = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { case: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { case: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            case: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        case: typeof args.case === 'object'
        ? args.case.id
        : args.case,
    }

    return duplicate.definition.url
            .replace('{case}', parsedArgs.case.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::duplicate
* @see app/Http/Controllers/Backend/CasesController.php:179
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate'
*/
duplicate.get = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: duplicate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::duplicate
* @see app/Http/Controllers/Backend/CasesController.php:179
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate'
*/
duplicate.head = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: duplicate.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::duplicate
* @see app/Http/Controllers/Backend/CasesController.php:179
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate'
*/
const duplicateForm = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: duplicate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::duplicate
* @see app/Http/Controllers/Backend/CasesController.php:179
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate'
*/
duplicateForm.get = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: duplicate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::duplicate
* @see app/Http/Controllers/Backend/CasesController.php:179
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/duplicate'
*/
duplicateForm.head = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: duplicate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

duplicate.form = duplicateForm

/**
* @see \App\Http\Controllers\Backend\CasesController::shop_list
* @see app/Http/Controllers/Backend/CasesController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/shop/cases'
*/
export const shop_list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shop_list.url(options),
    method: 'get',
})

shop_list.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shop/cases',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::shop_list
* @see app/Http/Controllers/Backend/CasesController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/shop/cases'
*/
shop_list.url = (options?: RouteQueryOptions) => {
    return shop_list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::shop_list
* @see app/Http/Controllers/Backend/CasesController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/shop/cases'
*/
shop_list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shop_list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::shop_list
* @see app/Http/Controllers/Backend/CasesController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/shop/cases'
*/
shop_list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shop_list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::shop_list
* @see app/Http/Controllers/Backend/CasesController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/shop/cases'
*/
const shop_listForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shop_list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::shop_list
* @see app/Http/Controllers/Backend/CasesController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/shop/cases'
*/
shop_listForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shop_list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::shop_list
* @see app/Http/Controllers/Backend/CasesController.php:42
* @route '/backend_uc7BgHFmw32FDIEp/shop/cases'
*/
shop_listForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: shop_list.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

shop_list.form = shop_listForm

/**
* @see \App\Http\Controllers\Backend\CasesController::index
* @see app/Http/Controllers/Backend/CasesController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/cases',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::index
* @see app/Http/Controllers/Backend/CasesController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::index
* @see app/Http/Controllers/Backend/CasesController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::index
* @see app/Http/Controllers/Backend/CasesController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::index
* @see app/Http/Controllers/Backend/CasesController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::index
* @see app/Http/Controllers/Backend/CasesController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::index
* @see app/Http/Controllers/Backend/CasesController.php:28
* @route '/backend_uc7BgHFmw32FDIEp/cases'
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
* @see \App\Http\Controllers\Backend\CasesController::create
* @see app/Http/Controllers/Backend/CasesController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/cases/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/cases/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::create
* @see app/Http/Controllers/Backend/CasesController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/cases/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::create
* @see app/Http/Controllers/Backend/CasesController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/cases/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::create
* @see app/Http/Controllers/Backend/CasesController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/cases/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::create
* @see app/Http/Controllers/Backend/CasesController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/cases/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::create
* @see app/Http/Controllers/Backend/CasesController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/cases/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::create
* @see app/Http/Controllers/Backend/CasesController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/cases/create'
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
* @see \App\Http\Controllers\Backend\CasesController::store
* @see app/Http/Controllers/Backend/CasesController.php:70
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/cases',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::store
* @see app/Http/Controllers/Backend/CasesController.php:70
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::store
* @see app/Http/Controllers/Backend/CasesController.php:70
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::store
* @see app/Http/Controllers/Backend/CasesController.php:70
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::store
* @see app/Http/Controllers/Backend/CasesController.php:70
* @route '/backend_uc7BgHFmw32FDIEp/cases'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\CasesController::edit
* @see app/Http/Controllers/Backend/CasesController.php:166
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit'
*/
export const edit = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::edit
* @see app/Http/Controllers/Backend/CasesController.php:166
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit'
*/
edit.url = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { case: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { case: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            case: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        case: typeof args.case === 'object'
        ? args.case.id
        : args.case,
    }

    return edit.definition.url
            .replace('{case}', parsedArgs.case.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::edit
* @see app/Http/Controllers/Backend/CasesController.php:166
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit'
*/
edit.get = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::edit
* @see app/Http/Controllers/Backend/CasesController.php:166
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit'
*/
edit.head = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::edit
* @see app/Http/Controllers/Backend/CasesController.php:166
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit'
*/
const editForm = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::edit
* @see app/Http/Controllers/Backend/CasesController.php:166
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit'
*/
editForm.get = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::edit
* @see app/Http/Controllers/Backend/CasesController.php:166
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}/edit'
*/
editForm.head = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\CasesController::update
* @see app/Http/Controllers/Backend/CasesController.php:199
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
export const update = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/cases/{case}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::update
* @see app/Http/Controllers/Backend/CasesController.php:199
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
update.url = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { case: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { case: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            case: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        case: typeof args.case === 'object'
        ? args.case.id
        : args.case,
    }

    return update.definition.url
            .replace('{case}', parsedArgs.case.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::update
* @see app/Http/Controllers/Backend/CasesController.php:199
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
update.put = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::update
* @see app/Http/Controllers/Backend/CasesController.php:199
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
update.patch = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::update
* @see app/Http/Controllers/Backend/CasesController.php:199
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
const updateForm = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::update
* @see app/Http/Controllers/Backend/CasesController.php:199
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
updateForm.put = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::update
* @see app/Http/Controllers/Backend/CasesController.php:199
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
updateForm.patch = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\CasesController::destroy
* @see app/Http/Controllers/Backend/CasesController.php:301
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
export const destroy = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/cases/{case}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\CasesController::destroy
* @see app/Http/Controllers/Backend/CasesController.php:301
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
destroy.url = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { case: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { case: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            case: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        case: typeof args.case === 'object'
        ? args.case.id
        : args.case,
    }

    return destroy.definition.url
            .replace('{case}', parsedArgs.case.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\CasesController::destroy
* @see app/Http/Controllers/Backend/CasesController.php:301
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
destroy.delete = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::destroy
* @see app/Http/Controllers/Backend/CasesController.php:301
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
const destroyForm = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\CasesController::destroy
* @see app/Http/Controllers/Backend/CasesController.php:301
* @route '/backend_uc7BgHFmw32FDIEp/cases/{case}'
*/
destroyForm.delete = (args: { case: string | number | { id: string | number } } | [caseParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const cases = {
    duplicate: Object.assign(duplicate, duplicate),
    shop_list: Object.assign(shop_list, shop_list),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default cases
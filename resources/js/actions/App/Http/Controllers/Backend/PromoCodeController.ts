import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate
* @see app/Http/Controllers/Backend/PromoCodeController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
export const generate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate.url(options),
    method: 'get',
})

generate.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes/generate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate
* @see app/Http/Controllers/Backend/PromoCodeController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generate.url = (options?: RouteQueryOptions) => {
    return generate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate
* @see app/Http/Controllers/Backend/PromoCodeController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate
* @see app/Http/Controllers/Backend/PromoCodeController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate
* @see app/Http/Controllers/Backend/PromoCodeController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
const generateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate
* @see app/Http/Controllers/Backend/PromoCodeController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate
* @see app/Http/Controllers/Backend/PromoCodeController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generate.form = generateForm

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate_store
* @see app/Http/Controllers/Backend/PromoCodeController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
export const generate_store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate_store.url(options),
    method: 'post',
})

generate_store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes/generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate_store
* @see app/Http/Controllers/Backend/PromoCodeController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generate_store.url = (options?: RouteQueryOptions) => {
    return generate_store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate_store
* @see app/Http/Controllers/Backend/PromoCodeController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generate_store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generate_store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate_store
* @see app/Http/Controllers/Backend/PromoCodeController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
const generate_storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate_store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::generate_store
* @see app/Http/Controllers/Backend/PromoCodeController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/generate'
*/
generate_storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: generate_store.url(options),
    method: 'post',
})

generate_store.form = generate_storeForm

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::index
* @see app/Http/Controllers/Backend/PromoCodeController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::index
* @see app/Http/Controllers/Backend/PromoCodeController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::index
* @see app/Http/Controllers/Backend/PromoCodeController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::index
* @see app/Http/Controllers/Backend/PromoCodeController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::index
* @see app/Http/Controllers/Backend/PromoCodeController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::index
* @see app/Http/Controllers/Backend/PromoCodeController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::index
* @see app/Http/Controllers/Backend/PromoCodeController.php:32
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
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
* @see \App\Http\Controllers\Backend\PromoCodeController::create
* @see app/Http/Controllers/Backend/PromoCodeController.php:78
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::create
* @see app/Http/Controllers/Backend/PromoCodeController.php:78
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::create
* @see app/Http/Controllers/Backend/PromoCodeController.php:78
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::create
* @see app/Http/Controllers/Backend/PromoCodeController.php:78
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::create
* @see app/Http/Controllers/Backend/PromoCodeController.php:78
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::create
* @see app/Http/Controllers/Backend/PromoCodeController.php:78
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::create
* @see app/Http/Controllers/Backend/PromoCodeController.php:78
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/create'
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
* @see \App\Http\Controllers\Backend\PromoCodeController::store
* @see app/Http/Controllers/Backend/PromoCodeController.php:90
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::store
* @see app/Http/Controllers/Backend/PromoCodeController.php:90
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::store
* @see app/Http/Controllers/Backend/PromoCodeController.php:90
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::store
* @see app/Http/Controllers/Backend/PromoCodeController.php:90
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::store
* @see app/Http/Controllers/Backend/PromoCodeController.php:90
* @route '/backend_uc7BgHFmw32FDIEp/promocodes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::show
* @see app/Http/Controllers/Backend/PromoCodeController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
export const show = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::show
* @see app/Http/Controllers/Backend/PromoCodeController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
show.url = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promocode: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { promocode: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            promocode: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        promocode: typeof args.promocode === 'object'
        ? args.promocode.id
        : args.promocode,
    }

    return show.definition.url
            .replace('{promocode}', parsedArgs.promocode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::show
* @see app/Http/Controllers/Backend/PromoCodeController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
show.get = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::show
* @see app/Http/Controllers/Backend/PromoCodeController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
show.head = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::show
* @see app/Http/Controllers/Backend/PromoCodeController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
const showForm = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::show
* @see app/Http/Controllers/Backend/PromoCodeController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
showForm.get = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::show
* @see app/Http/Controllers/Backend/PromoCodeController.php:64
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
showForm.head = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::edit
* @see app/Http/Controllers/Backend/PromoCodeController.php:226
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit'
*/
export const edit = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::edit
* @see app/Http/Controllers/Backend/PromoCodeController.php:226
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit'
*/
edit.url = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promocode: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { promocode: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            promocode: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        promocode: typeof args.promocode === 'object'
        ? args.promocode.id
        : args.promocode,
    }

    return edit.definition.url
            .replace('{promocode}', parsedArgs.promocode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::edit
* @see app/Http/Controllers/Backend/PromoCodeController.php:226
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit'
*/
edit.get = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::edit
* @see app/Http/Controllers/Backend/PromoCodeController.php:226
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit'
*/
edit.head = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::edit
* @see app/Http/Controllers/Backend/PromoCodeController.php:226
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit'
*/
const editForm = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::edit
* @see app/Http/Controllers/Backend/PromoCodeController.php:226
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit'
*/
editForm.get = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::edit
* @see app/Http/Controllers/Backend/PromoCodeController.php:226
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}/edit'
*/
editForm.head = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\PromoCodeController::update
* @see app/Http/Controllers/Backend/PromoCodeController.php:238
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
export const update = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::update
* @see app/Http/Controllers/Backend/PromoCodeController.php:238
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
update.url = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promocode: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { promocode: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            promocode: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        promocode: typeof args.promocode === 'object'
        ? args.promocode.id
        : args.promocode,
    }

    return update.definition.url
            .replace('{promocode}', parsedArgs.promocode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::update
* @see app/Http/Controllers/Backend/PromoCodeController.php:238
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
update.put = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::update
* @see app/Http/Controllers/Backend/PromoCodeController.php:238
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
update.patch = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::update
* @see app/Http/Controllers/Backend/PromoCodeController.php:238
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
const updateForm = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::update
* @see app/Http/Controllers/Backend/PromoCodeController.php:238
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
updateForm.put = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::update
* @see app/Http/Controllers/Backend/PromoCodeController.php:238
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
updateForm.patch = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\PromoCodeController::destroy
* @see app/Http/Controllers/Backend/PromoCodeController.php:253
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
export const destroy = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::destroy
* @see app/Http/Controllers/Backend/PromoCodeController.php:253
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
destroy.url = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { promocode: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { promocode: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            promocode: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        promocode: typeof args.promocode === 'object'
        ? args.promocode.id
        : args.promocode,
    }

    return destroy.definition.url
            .replace('{promocode}', parsedArgs.promocode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::destroy
* @see app/Http/Controllers/Backend/PromoCodeController.php:253
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
destroy.delete = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::destroy
* @see app/Http/Controllers/Backend/PromoCodeController.php:253
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
const destroyForm = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\PromoCodeController::destroy
* @see app/Http/Controllers/Backend/PromoCodeController.php:253
* @route '/backend_uc7BgHFmw32FDIEp/promocodes/{promocode}'
*/
destroyForm.delete = (args: { promocode: number | { id: number } } | [promocode: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PromoCodeController = { generate, generate_store, index, create, store, show, edit, update, destroy }

export default PromoCodeController
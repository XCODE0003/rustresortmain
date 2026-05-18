import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ShopItemController::duplicate
* @see app/Http/Controllers/Backend/ShopItemController.php:122
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate'
*/
export const duplicate = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: duplicate.url(args, options),
    method: 'get',
})

duplicate.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::duplicate
* @see app/Http/Controllers/Backend/ShopItemController.php:122
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate'
*/
duplicate.url = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopitem: typeof args.shopitem === 'object'
        ? args.shopitem.id
        : args.shopitem,
    }

    return duplicate.definition.url
            .replace('{shopitem}', parsedArgs.shopitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::duplicate
* @see app/Http/Controllers/Backend/ShopItemController.php:122
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate'
*/
duplicate.get = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: duplicate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::duplicate
* @see app/Http/Controllers/Backend/ShopItemController.php:122
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate'
*/
duplicate.head = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: duplicate.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::duplicate
* @see app/Http/Controllers/Backend/ShopItemController.php:122
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate'
*/
const duplicateForm = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: duplicate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::duplicate
* @see app/Http/Controllers/Backend/ShopItemController.php:122
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate'
*/
duplicateForm.get = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: duplicate.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::duplicate
* @see app/Http/Controllers/Backend/ShopItemController.php:122
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/duplicate'
*/
duplicateForm.head = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ShopItemController::getVariations
* @see app/Http/Controllers/Backend/ShopItemController.php:220
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/getVariations'
*/
export const getVariations = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getVariations.url(options),
    method: 'post',
})

getVariations.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems/getVariations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::getVariations
* @see app/Http/Controllers/Backend/ShopItemController.php:220
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/getVariations'
*/
getVariations.url = (options?: RouteQueryOptions) => {
    return getVariations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::getVariations
* @see app/Http/Controllers/Backend/ShopItemController.php:220
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/getVariations'
*/
getVariations.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getVariations.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::getVariations
* @see app/Http/Controllers/Backend/ShopItemController.php:220
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/getVariations'
*/
const getVariationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getVariations.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::getVariations
* @see app/Http/Controllers/Backend/ShopItemController.php:220
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/getVariations'
*/
getVariationsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getVariations.url(options),
    method: 'post',
})

getVariations.form = getVariationsForm

/**
* @see \App\Http\Controllers\Backend\ShopItemController::resetCache
* @see app/Http/Controllers/Backend/ShopItemController.php:240
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache'
*/
export const resetCache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resetCache.url(options),
    method: 'get',
})

resetCache.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::resetCache
* @see app/Http/Controllers/Backend/ShopItemController.php:240
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache'
*/
resetCache.url = (options?: RouteQueryOptions) => {
    return resetCache.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::resetCache
* @see app/Http/Controllers/Backend/ShopItemController.php:240
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache'
*/
resetCache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resetCache.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::resetCache
* @see app/Http/Controllers/Backend/ShopItemController.php:240
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache'
*/
resetCache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: resetCache.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::resetCache
* @see app/Http/Controllers/Backend/ShopItemController.php:240
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache'
*/
const resetCacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resetCache.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::resetCache
* @see app/Http/Controllers/Backend/ShopItemController.php:240
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache'
*/
resetCacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resetCache.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::resetCache
* @see app/Http/Controllers/Backend/ShopItemController.php:240
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/resetCache'
*/
resetCacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: resetCache.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

resetCache.form = resetCacheForm

/**
* @see \App\Http\Controllers\Backend\ShopItemController::index
* @see app/Http/Controllers/Backend/ShopItemController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::index
* @see app/Http/Controllers/Backend/ShopItemController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::index
* @see app/Http/Controllers/Backend/ShopItemController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::index
* @see app/Http/Controllers/Backend/ShopItemController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::index
* @see app/Http/Controllers/Backend/ShopItemController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::index
* @see app/Http/Controllers/Backend/ShopItemController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::index
* @see app/Http/Controllers/Backend/ShopItemController.php:29
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
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
* @see \App\Http\Controllers\Backend\ShopItemController::create
* @see app/Http/Controllers/Backend/ShopItemController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::create
* @see app/Http/Controllers/Backend/ShopItemController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::create
* @see app/Http/Controllers/Backend/ShopItemController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::create
* @see app/Http/Controllers/Backend/ShopItemController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::create
* @see app/Http/Controllers/Backend/ShopItemController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::create
* @see app/Http/Controllers/Backend/ShopItemController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::create
* @see app/Http/Controllers/Backend/ShopItemController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/create'
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
* @see \App\Http\Controllers\Backend\ShopItemController::store
* @see app/Http/Controllers/Backend/ShopItemController.php:60
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::store
* @see app/Http/Controllers/Backend/ShopItemController.php:60
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::store
* @see app/Http/Controllers/Backend/ShopItemController.php:60
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::store
* @see app/Http/Controllers/Backend/ShopItemController.php:60
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::store
* @see app/Http/Controllers/Backend/ShopItemController.php:60
* @route '/backend_uc7BgHFmw32FDIEp/shopitems'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\ShopItemController::edit
* @see app/Http/Controllers/Backend/ShopItemController.php:134
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit'
*/
export const edit = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::edit
* @see app/Http/Controllers/Backend/ShopItemController.php:134
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit'
*/
edit.url = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopitem: typeof args.shopitem === 'object'
        ? args.shopitem.id
        : args.shopitem,
    }

    return edit.definition.url
            .replace('{shopitem}', parsedArgs.shopitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::edit
* @see app/Http/Controllers/Backend/ShopItemController.php:134
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit'
*/
edit.get = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::edit
* @see app/Http/Controllers/Backend/ShopItemController.php:134
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit'
*/
edit.head = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::edit
* @see app/Http/Controllers/Backend/ShopItemController.php:134
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit'
*/
const editForm = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::edit
* @see app/Http/Controllers/Backend/ShopItemController.php:134
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit'
*/
editForm.get = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::edit
* @see app/Http/Controllers/Backend/ShopItemController.php:134
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}/edit'
*/
editForm.head = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ShopItemController::update
* @see app/Http/Controllers/Backend/ShopItemController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
export const update = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::update
* @see app/Http/Controllers/Backend/ShopItemController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
update.url = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopitem: typeof args.shopitem === 'object'
        ? args.shopitem.id
        : args.shopitem,
    }

    return update.definition.url
            .replace('{shopitem}', parsedArgs.shopitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::update
* @see app/Http/Controllers/Backend/ShopItemController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
update.put = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::update
* @see app/Http/Controllers/Backend/ShopItemController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
update.patch = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::update
* @see app/Http/Controllers/Backend/ShopItemController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
const updateForm = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::update
* @see app/Http/Controllers/Backend/ShopItemController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
updateForm.put = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::update
* @see app/Http/Controllers/Backend/ShopItemController.php:144
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
updateForm.patch = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ShopItemController::destroy
* @see app/Http/Controllers/Backend/ShopItemController.php:210
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
export const destroy = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ShopItemController::destroy
* @see app/Http/Controllers/Backend/ShopItemController.php:210
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
destroy.url = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopitem: typeof args.shopitem === 'object'
        ? args.shopitem.id
        : args.shopitem,
    }

    return destroy.definition.url
            .replace('{shopitem}', parsedArgs.shopitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopItemController::destroy
* @see app/Http/Controllers/Backend/ShopItemController.php:210
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
destroy.delete = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::destroy
* @see app/Http/Controllers/Backend/ShopItemController.php:210
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
const destroyForm = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopItemController::destroy
* @see app/Http/Controllers/Backend/ShopItemController.php:210
* @route '/backend_uc7BgHFmw32FDIEp/shopitems/{shopitem}'
*/
destroyForm.delete = (args: { shopitem: number | { id: number } } | [shopitem: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const shopitems = {
    duplicate: Object.assign(duplicate, duplicate),
    getVariations: Object.assign(getVariations, getVariations),
    resetCache: Object.assign(resetCache, resetCache),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default shopitems
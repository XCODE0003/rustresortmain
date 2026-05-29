import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ShopCouponController::index
* @see app/Http/Controllers/Backend/ShopCouponController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcoupons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::index
* @see app/Http/Controllers/Backend/ShopCouponController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::index
* @see app/Http/Controllers/Backend/ShopCouponController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::index
* @see app/Http/Controllers/Backend/ShopCouponController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::index
* @see app/Http/Controllers/Backend/ShopCouponController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::index
* @see app/Http/Controllers/Backend/ShopCouponController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::index
* @see app/Http/Controllers/Backend/ShopCouponController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
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
* @see \App\Http\Controllers\Backend\ShopCouponController::create
* @see app/Http/Controllers/Backend/ShopCouponController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcoupons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::create
* @see app/Http/Controllers/Backend/ShopCouponController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::create
* @see app/Http/Controllers/Backend/ShopCouponController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::create
* @see app/Http/Controllers/Backend/ShopCouponController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::create
* @see app/Http/Controllers/Backend/ShopCouponController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::create
* @see app/Http/Controllers/Backend/ShopCouponController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::create
* @see app/Http/Controllers/Backend/ShopCouponController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/create'
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
* @see \App\Http\Controllers\Backend\ShopCouponController::store
* @see app/Http/Controllers/Backend/ShopCouponController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcoupons',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::store
* @see app/Http/Controllers/Backend/ShopCouponController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::store
* @see app/Http/Controllers/Backend/ShopCouponController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::store
* @see app/Http/Controllers/Backend/ShopCouponController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::store
* @see app/Http/Controllers/Backend/ShopCouponController.php:52
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::edit
* @see app/Http/Controllers/Backend/ShopCouponController.php:79
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit'
*/
export const edit = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::edit
* @see app/Http/Controllers/Backend/ShopCouponController.php:79
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit'
*/
edit.url = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopcoupon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopcoupon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopcoupon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopcoupon: typeof args.shopcoupon === 'object'
        ? args.shopcoupon.id
        : args.shopcoupon,
    }

    return edit.definition.url
            .replace('{shopcoupon}', parsedArgs.shopcoupon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::edit
* @see app/Http/Controllers/Backend/ShopCouponController.php:79
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit'
*/
edit.get = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::edit
* @see app/Http/Controllers/Backend/ShopCouponController.php:79
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit'
*/
edit.head = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::edit
* @see app/Http/Controllers/Backend/ShopCouponController.php:79
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit'
*/
const editForm = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::edit
* @see app/Http/Controllers/Backend/ShopCouponController.php:79
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit'
*/
editForm.get = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::edit
* @see app/Http/Controllers/Backend/ShopCouponController.php:79
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}/edit'
*/
editForm.head = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ShopCouponController::update
* @see app/Http/Controllers/Backend/ShopCouponController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
export const update = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::update
* @see app/Http/Controllers/Backend/ShopCouponController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
update.url = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopcoupon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopcoupon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopcoupon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopcoupon: typeof args.shopcoupon === 'object'
        ? args.shopcoupon.id
        : args.shopcoupon,
    }

    return update.definition.url
            .replace('{shopcoupon}', parsedArgs.shopcoupon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::update
* @see app/Http/Controllers/Backend/ShopCouponController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
update.put = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::update
* @see app/Http/Controllers/Backend/ShopCouponController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
update.patch = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::update
* @see app/Http/Controllers/Backend/ShopCouponController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
const updateForm = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::update
* @see app/Http/Controllers/Backend/ShopCouponController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
updateForm.put = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::update
* @see app/Http/Controllers/Backend/ShopCouponController.php:87
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
updateForm.patch = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ShopCouponController::destroy
* @see app/Http/Controllers/Backend/ShopCouponController.php:113
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
export const destroy = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::destroy
* @see app/Http/Controllers/Backend/ShopCouponController.php:113
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
destroy.url = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shopcoupon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shopcoupon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shopcoupon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shopcoupon: typeof args.shopcoupon === 'object'
        ? args.shopcoupon.id
        : args.shopcoupon,
    }

    return destroy.definition.url
            .replace('{shopcoupon}', parsedArgs.shopcoupon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::destroy
* @see app/Http/Controllers/Backend/ShopCouponController.php:113
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
destroy.delete = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::destroy
* @see app/Http/Controllers/Backend/ShopCouponController.php:113
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
const destroyForm = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ShopCouponController::destroy
* @see app/Http/Controllers/Backend/ShopCouponController.php:113
* @route '/backend_uc7BgHFmw32FDIEp/shopcoupons/{shopcoupon}'
*/
destroyForm.delete = (args: { shopcoupon: number | { id: number } } | [shopcoupon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ShopCouponController = { index, create, store, edit, update, destroy }

export default ShopCouponController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/shop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::index
* @see app/Http/Controllers/ShopController.php:17
* @route '/shop'
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
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
export const category = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

category.definition = {
    methods: ["get","head"],
    url: '/shop/category/{path}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
category.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    if (Array.isArray(args)) {
        args = {
            path: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        path: args.path,
    }

    return category.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
category.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
category.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: category.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
const categoryForm = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
categoryForm.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::category
* @see app/Http/Controllers/ShopController.php:49
* @route '/shop/category/{path}'
*/
categoryForm.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: category.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

category.form = categoryForm

/**
* @see \App\Http\Controllers\ShopController::show
* @see app/Http/Controllers/ShopController.php:62
* @route '/shop/item/{item}'
*/
export const show = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/shop/item/{item}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShopController::show
* @see app/Http/Controllers/ShopController.php:62
* @route '/shop/item/{item}'
*/
show.url = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { item: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            item: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        item: typeof args.item === 'object'
        ? args.item.id
        : args.item,
    }

    return show.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::show
* @see app/Http/Controllers/ShopController.php:62
* @route '/shop/item/{item}'
*/
show.get = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::show
* @see app/Http/Controllers/ShopController.php:62
* @route '/shop/item/{item}'
*/
show.head = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ShopController::show
* @see app/Http/Controllers/ShopController.php:62
* @route '/shop/item/{item}'
*/
const showForm = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::show
* @see app/Http/Controllers/ShopController.php:62
* @route '/shop/item/{item}'
*/
showForm.get = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ShopController::show
* @see app/Http/Controllers/ShopController.php:62
* @route '/shop/item/{item}'
*/
showForm.head = (args: { item: number | { id: number } } | [item: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
export const buyWithBalance = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: buyWithBalance.url(options),
    method: 'post',
})

buyWithBalance.definition = {
    methods: ["post"],
    url: '/shop/buy-balance',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
buyWithBalance.url = (options?: RouteQueryOptions) => {
    return buyWithBalance.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
buyWithBalance.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: buyWithBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
const buyWithBalanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyWithBalance.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ShopController::buyWithBalance
* @see app/Http/Controllers/ShopController.php:71
* @route '/shop/buy-balance'
*/
buyWithBalanceForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: buyWithBalance.url(options),
    method: 'post',
})

buyWithBalance.form = buyWithBalanceForm

const ShopController = { index, category, show, buyWithBalance }

export default ShopController
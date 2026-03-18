import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:13
* @route '/shop/basket'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/shop/basket',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:13
* @route '/shop/basket'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:13
* @route '/shop/basket'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:13
* @route '/shop/basket'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:13
* @route '/shop/basket'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:13
* @route '/shop/basket'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CartController::index
* @see app/Http/Controllers/CartController.php:13
* @route '/shop/basket'
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
* @see \App\Http\Controllers\CartController::add
* @see app/Http/Controllers/CartController.php:29
* @route '/shop/cart'
*/
export const add = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

add.definition = {
    methods: ["post"],
    url: '/shop/cart',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CartController::add
* @see app/Http/Controllers/CartController.php:29
* @route '/shop/cart'
*/
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::add
* @see app/Http/Controllers/CartController.php:29
* @route '/shop/cart'
*/
add.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CartController::add
* @see app/Http/Controllers/CartController.php:29
* @route '/shop/cart'
*/
const addForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: add.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CartController::add
* @see app/Http/Controllers/CartController.php:29
* @route '/shop/cart'
*/
addForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: add.url(options),
    method: 'post',
})

add.form = addForm

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:53
* @route '/shop/cart/{cart}'
*/
export const update = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/shop/cart/{cart}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:53
* @route '/shop/cart/{cart}'
*/
update.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return update.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:53
* @route '/shop/cart/{cart}'
*/
update.patch = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:53
* @route '/shop/cart/{cart}'
*/
const updateForm = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CartController::update
* @see app/Http/Controllers/CartController.php:53
* @route '/shop/cart/{cart}'
*/
updateForm.patch = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CartController::remove
* @see app/Http/Controllers/CartController.php:66
* @route '/shop/cart/{cart}'
*/
export const remove = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

remove.definition = {
    methods: ["delete"],
    url: '/shop/cart/{cart}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CartController::remove
* @see app/Http/Controllers/CartController.php:66
* @route '/shop/cart/{cart}'
*/
remove.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return remove.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::remove
* @see app/Http/Controllers/CartController.php:66
* @route '/shop/cart/{cart}'
*/
remove.delete = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\CartController::remove
* @see app/Http/Controllers/CartController.php:66
* @route '/shop/cart/{cart}'
*/
const removeForm = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: remove.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CartController::remove
* @see app/Http/Controllers/CartController.php:66
* @route '/shop/cart/{cart}'
*/
removeForm.delete = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: remove.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

remove.form = removeForm

/**
* @see \App\Http\Controllers\CartController::clear
* @see app/Http/Controllers/CartController.php:75
* @route '/shop/cart'
*/
export const clear = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clear.url(options),
    method: 'delete',
})

clear.definition = {
    methods: ["delete"],
    url: '/shop/cart',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CartController::clear
* @see app/Http/Controllers/CartController.php:75
* @route '/shop/cart'
*/
clear.url = (options?: RouteQueryOptions) => {
    return clear.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CartController::clear
* @see app/Http/Controllers/CartController.php:75
* @route '/shop/cart'
*/
clear.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clear.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\CartController::clear
* @see app/Http/Controllers/CartController.php:75
* @route '/shop/cart'
*/
const clearForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clear.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CartController::clear
* @see app/Http/Controllers/CartController.php:75
* @route '/shop/cart'
*/
clearForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clear.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

clear.form = clearForm

const CartController = { index, add, update, remove, clear }

export default CartController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
const RedirectController3061d1e453eae72af66960c6525ad9ee = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'get',
})

RedirectController3061d1e453eae72af66960c6525ad9ee.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/store',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.url = (options?: RouteQueryOptions) => {
    return RedirectController3061d1e453eae72af66960c6525ad9ee.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9ee.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
const RedirectController3061d1e453eae72af66960c6525ad9eeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9eeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9eeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9eeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9eeForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9eeForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9eeForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/store'
*/
RedirectController3061d1e453eae72af66960c6525ad9eeForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController3061d1e453eae72af66960c6525ad9ee.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController3061d1e453eae72af66960c6525ad9ee.form = RedirectController3061d1e453eae72af66960c6525ad9eeForm
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
const RedirectControllerc09e08e68a47222344f5c1adc200c42c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'get',
})

RedirectControllerc09e08e68a47222344f5c1adc200c42c.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/news',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.url = (options?: RouteQueryOptions) => {
    return RedirectControllerc09e08e68a47222344f5c1adc200c42c.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42c.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
const RedirectControllerc09e08e68a47222344f5c1adc200c42cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42cForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42cForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42cForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/news'
*/
RedirectControllerc09e08e68a47222344f5c1adc200c42cForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectControllerc09e08e68a47222344f5c1adc200c42c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectControllerc09e08e68a47222344f5c1adc200c42c.form = RedirectControllerc09e08e68a47222344f5c1adc200c42cForm
/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
const RedirectController5d12892da997f6d93277a9b17df5c880 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'get',
})

RedirectController5d12892da997f6d93277a9b17df5c880.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/shop',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.url = (options?: RouteQueryOptions) => {
    return RedirectController5d12892da997f6d93277a9b17df5c880.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'put',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'patch',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'delete',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'options',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
const RedirectController5d12892da997f6d93277a9b17df5c880Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url(options),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Illuminate\Routing\RedirectController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
* @route '/shop'
*/
RedirectController5d12892da997f6d93277a9b17df5c880Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectController5d12892da997f6d93277a9b17df5c880.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectController5d12892da997f6d93277a9b17df5c880.form = RedirectController5d12892da997f6d93277a9b17df5c880Form

const RedirectController = {
    '/store': RedirectController3061d1e453eae72af66960c6525ad9ee,
    '/news': RedirectControllerc09e08e68a47222344f5c1adc200c42c,
    '/shop': RedirectController5d12892da997f6d93277a9b17df5c880,
}

export default RedirectController
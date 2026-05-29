import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
const Controller25b0687c03e255db8622da24c2e9ac8c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller25b0687c03e255db8622da24c2e9ac8c.url(options),
    method: 'get',
})

Controller25b0687c03e255db8622da24c2e9ac8c.definition = {
    methods: ["get","head"],
    url: '/shop/other',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
Controller25b0687c03e255db8622da24c2e9ac8c.url = (options?: RouteQueryOptions) => {
    return Controller25b0687c03e255db8622da24c2e9ac8c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
Controller25b0687c03e255db8622da24c2e9ac8c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller25b0687c03e255db8622da24c2e9ac8c.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
Controller25b0687c03e255db8622da24c2e9ac8c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller25b0687c03e255db8622da24c2e9ac8c.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
const Controller25b0687c03e255db8622da24c2e9ac8cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller25b0687c03e255db8622da24c2e9ac8c.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
Controller25b0687c03e255db8622da24c2e9ac8cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller25b0687c03e255db8622da24c2e9ac8c.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/shop/other'
*/
Controller25b0687c03e255db8622da24c2e9ac8cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller25b0687c03e255db8622da24c2e9ac8c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller25b0687c03e255db8622da24c2e9ac8c.form = Controller25b0687c03e255db8622da24c2e9ac8cForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
const Controller3c3bb256dfd739880ce70941d1c79840 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3c3bb256dfd739880ce70941d1c79840.url(options),
    method: 'get',
})

Controller3c3bb256dfd739880ce70941d1c79840.definition = {
    methods: ["get","head"],
    url: '/tickets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
Controller3c3bb256dfd739880ce70941d1c79840.url = (options?: RouteQueryOptions) => {
    return Controller3c3bb256dfd739880ce70941d1c79840.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
Controller3c3bb256dfd739880ce70941d1c79840.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3c3bb256dfd739880ce70941d1c79840.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
Controller3c3bb256dfd739880ce70941d1c79840.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller3c3bb256dfd739880ce70941d1c79840.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
const Controller3c3bb256dfd739880ce70941d1c79840Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller3c3bb256dfd739880ce70941d1c79840.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
Controller3c3bb256dfd739880ce70941d1c79840Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller3c3bb256dfd739880ce70941d1c79840.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/tickets'
*/
Controller3c3bb256dfd739880ce70941d1c79840Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller3c3bb256dfd739880ce70941d1c79840.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller3c3bb256dfd739880ce70941d1c79840.form = Controller3c3bb256dfd739880ce70941d1c79840Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
const Controller6eaed3e951073be10eb58ff42ab6c170 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller6eaed3e951073be10eb58ff42ab6c170.url(options),
    method: 'get',
})

Controller6eaed3e951073be10eb58ff42ab6c170.definition = {
    methods: ["get","head"],
    url: '/rating',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
Controller6eaed3e951073be10eb58ff42ab6c170.url = (options?: RouteQueryOptions) => {
    return Controller6eaed3e951073be10eb58ff42ab6c170.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
Controller6eaed3e951073be10eb58ff42ab6c170.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller6eaed3e951073be10eb58ff42ab6c170.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
Controller6eaed3e951073be10eb58ff42ab6c170.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller6eaed3e951073be10eb58ff42ab6c170.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
const Controller6eaed3e951073be10eb58ff42ab6c170Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller6eaed3e951073be10eb58ff42ab6c170.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
Controller6eaed3e951073be10eb58ff42ab6c170Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller6eaed3e951073be10eb58ff42ab6c170.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/rating'
*/
Controller6eaed3e951073be10eb58ff42ab6c170Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller6eaed3e951073be10eb58ff42ab6c170.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller6eaed3e951073be10eb58ff42ab6c170.form = Controller6eaed3e951073be10eb58ff42ab6c170Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
const Controller16c2c75f6d5c0624ce16978e582f6e46 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller16c2c75f6d5c0624ce16978e582f6e46.url(options),
    method: 'get',
})

Controller16c2c75f6d5c0624ce16978e582f6e46.definition = {
    methods: ["get","head"],
    url: '/clan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
Controller16c2c75f6d5c0624ce16978e582f6e46.url = (options?: RouteQueryOptions) => {
    return Controller16c2c75f6d5c0624ce16978e582f6e46.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
Controller16c2c75f6d5c0624ce16978e582f6e46.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller16c2c75f6d5c0624ce16978e582f6e46.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
Controller16c2c75f6d5c0624ce16978e582f6e46.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller16c2c75f6d5c0624ce16978e582f6e46.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
const Controller16c2c75f6d5c0624ce16978e582f6e46Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller16c2c75f6d5c0624ce16978e582f6e46.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
Controller16c2c75f6d5c0624ce16978e582f6e46Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller16c2c75f6d5c0624ce16978e582f6e46.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/clan'
*/
Controller16c2c75f6d5c0624ce16978e582f6e46Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller16c2c75f6d5c0624ce16978e582f6e46.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller16c2c75f6d5c0624ce16978e582f6e46.form = Controller16c2c75f6d5c0624ce16978e582f6e46Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
const Controller992a2347bc1316e84b2c92be2972d319 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'get',
})

Controller992a2347bc1316e84b2c92be2972d319.definition = {
    methods: ["get","head"],
    url: '/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
Controller992a2347bc1316e84b2c92be2972d319.url = (options?: RouteQueryOptions) => {
    return Controller992a2347bc1316e84b2c92be2972d319.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
Controller992a2347bc1316e84b2c92be2972d319.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
Controller992a2347bc1316e84b2c92be2972d319.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
const Controller992a2347bc1316e84b2c92be2972d319Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
Controller992a2347bc1316e84b2c92be2972d319Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller992a2347bc1316e84b2c92be2972d319.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contacts'
*/
Controller992a2347bc1316e84b2c92be2972d319Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller992a2347bc1316e84b2c92be2972d319.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller992a2347bc1316e84b2c92be2972d319.form = Controller992a2347bc1316e84b2c92be2972d319Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
const Controller30bae1712ffcb11db93b0360b8d7a536 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller30bae1712ffcb11db93b0360b8d7a536.url(options),
    method: 'get',
})

Controller30bae1712ffcb11db93b0360b8d7a536.definition = {
    methods: ["get","head"],
    url: '/compedium',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
Controller30bae1712ffcb11db93b0360b8d7a536.url = (options?: RouteQueryOptions) => {
    return Controller30bae1712ffcb11db93b0360b8d7a536.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
Controller30bae1712ffcb11db93b0360b8d7a536.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller30bae1712ffcb11db93b0360b8d7a536.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
Controller30bae1712ffcb11db93b0360b8d7a536.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller30bae1712ffcb11db93b0360b8d7a536.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
const Controller30bae1712ffcb11db93b0360b8d7a536Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller30bae1712ffcb11db93b0360b8d7a536.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
Controller30bae1712ffcb11db93b0360b8d7a536Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller30bae1712ffcb11db93b0360b8d7a536.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/compedium'
*/
Controller30bae1712ffcb11db93b0360b8d7a536Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller30bae1712ffcb11db93b0360b8d7a536.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller30bae1712ffcb11db93b0360b8d7a536.form = Controller30bae1712ffcb11db93b0360b8d7a536Form

const Controller = {
    '/shop/other': Controller25b0687c03e255db8622da24c2e9ac8c,
    '/tickets': Controller3c3bb256dfd739880ce70941d1c79840,
    '/rating': Controller6eaed3e951073be10eb58ff42ab6c170,
    '/clan': Controller16c2c75f6d5c0624ce16978e582f6e46,
    '/contacts': Controller992a2347bc1316e84b2c92be2972d319,
    '/compedium': Controller30bae1712ffcb11db93b0360b8d7a536,
}

export default Controller
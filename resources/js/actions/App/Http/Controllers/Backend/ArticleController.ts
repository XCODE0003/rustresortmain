import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\ArticleController::index
* @see app/Http/Controllers/Backend/ArticleController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ArticleController::index
* @see app/Http/Controllers/Backend/ArticleController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ArticleController::index
* @see app/Http/Controllers/Backend/ArticleController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::index
* @see app/Http/Controllers/Backend/ArticleController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::index
* @see app/Http/Controllers/Backend/ArticleController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::index
* @see app/Http/Controllers/Backend/ArticleController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::index
* @see app/Http/Controllers/Backend/ArticleController.php:27
* @route '/backend_uc7BgHFmw32FDIEp/articles'
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
* @see \App\Http\Controllers\Backend\ArticleController::create
* @see app/Http/Controllers/Backend/ArticleController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/articles/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/articles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ArticleController::create
* @see app/Http/Controllers/Backend/ArticleController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/articles/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ArticleController::create
* @see app/Http/Controllers/Backend/ArticleController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/articles/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::create
* @see app/Http/Controllers/Backend/ArticleController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/articles/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::create
* @see app/Http/Controllers/Backend/ArticleController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/articles/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::create
* @see app/Http/Controllers/Backend/ArticleController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/articles/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::create
* @see app/Http/Controllers/Backend/ArticleController.php:48
* @route '/backend_uc7BgHFmw32FDIEp/articles/create'
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
* @see \App\Http\Controllers\Backend\ArticleController::store
* @see app/Http/Controllers/Backend/ArticleController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\ArticleController::store
* @see app/Http/Controllers/Backend/ArticleController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ArticleController::store
* @see app/Http/Controllers/Backend/ArticleController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::store
* @see app/Http/Controllers/Backend/ArticleController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::store
* @see app/Http/Controllers/Backend/ArticleController.php:56
* @route '/backend_uc7BgHFmw32FDIEp/articles'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Backend\ArticleController::edit
* @see app/Http/Controllers/Backend/ArticleController.php:74
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit'
*/
export const edit = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\ArticleController::edit
* @see app/Http/Controllers/Backend/ArticleController.php:74
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit'
*/
edit.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return edit.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ArticleController::edit
* @see app/Http/Controllers/Backend/ArticleController.php:74
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit'
*/
edit.get = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::edit
* @see app/Http/Controllers/Backend/ArticleController.php:74
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit'
*/
edit.head = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::edit
* @see app/Http/Controllers/Backend/ArticleController.php:74
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit'
*/
const editForm = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::edit
* @see app/Http/Controllers/Backend/ArticleController.php:74
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit'
*/
editForm.get = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::edit
* @see app/Http/Controllers/Backend/ArticleController.php:74
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}/edit'
*/
editForm.head = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Backend\ArticleController::update
* @see app/Http/Controllers/Backend/ArticleController.php:82
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
export const update = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/backend_uc7BgHFmw32FDIEp/articles/{article}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\ArticleController::update
* @see app/Http/Controllers/Backend/ArticleController.php:82
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
update.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return update.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ArticleController::update
* @see app/Http/Controllers/Backend/ArticleController.php:82
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
update.put = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::update
* @see app/Http/Controllers/Backend/ArticleController.php:82
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
update.patch = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::update
* @see app/Http/Controllers/Backend/ArticleController.php:82
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
const updateForm = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::update
* @see app/Http/Controllers/Backend/ArticleController.php:82
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
updateForm.put = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::update
* @see app/Http/Controllers/Backend/ArticleController.php:82
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
updateForm.patch = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\ArticleController::destroy
* @see app/Http/Controllers/Backend/ArticleController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
export const destroy = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backend_uc7BgHFmw32FDIEp/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\ArticleController::destroy
* @see app/Http/Controllers/Backend/ArticleController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
destroy.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return destroy.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\ArticleController::destroy
* @see app/Http/Controllers/Backend/ArticleController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
destroy.delete = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::destroy
* @see app/Http/Controllers/Backend/ArticleController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
const destroyForm = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\ArticleController::destroy
* @see app/Http/Controllers/Backend/ArticleController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/articles/{article}'
*/
destroyForm.delete = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ArticleController = { index, create, store, edit, update, destroy }

export default ArticleController
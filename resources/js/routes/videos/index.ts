import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see routes/web.php:102
* @route '/videos'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: store.url(options),
    method: 'get',
})

store.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/videos',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: store.url(options),
    method: 'get',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: store.url(options),
    method: 'head',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: store.url(options),
    method: 'put',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: store.url(options),
    method: 'patch',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: store.url(options),
    method: 'delete',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
store.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: store.url(options),
    method: 'options',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: store.url(options),
    method: 'get',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
storeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: store.url(options),
    method: 'get',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
storeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
storeForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
storeForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
storeForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:102
* @route '/videos'
*/
storeForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: store.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

store.form = storeForm

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/videos/create',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: create.url(options),
    method: 'put',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: create.url(options),
    method: 'patch',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: create.url(options),
    method: 'delete',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
create.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: create.url(options),
    method: 'options',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
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

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
createForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url(options),
    method: 'post',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
createForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
createForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
createForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:103
* @route '/videos/create'
*/
createForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
export const update = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(args, options),
    method: 'get',
})

update.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/videos/{video}',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.url = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video: args }
    }

    if (Array.isArray(args)) {
        args = {
            video: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video: args.video,
    }

    return update.definition.url
            .replace('{video}', parsedArgs.video.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.get = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.head = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: update.url(args, options),
    method: 'head',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.post = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.put = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.patch = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.delete = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: update.url(args, options),
    method: 'delete',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
update.options = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: update.url(args, options),
    method: 'options',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
const updateForm = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
updateForm.get = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
updateForm.head = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
updateForm.post = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
updateForm.put = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
updateForm.patch = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
updateForm.delete = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:104
* @route '/videos/{video}'
*/
updateForm.options = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

update.form = updateForm

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
export const edit = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/videos/{video}/edit',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.url = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video: args }
    }

    if (Array.isArray(args)) {
        args = {
            video: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video: args.video,
    }

    return edit.definition.url
            .replace('{video}', parsedArgs.video.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.get = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.head = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.post = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(args, options),
    method: 'post',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.put = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: edit.url(args, options),
    method: 'put',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.patch = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: edit.url(args, options),
    method: 'patch',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.delete = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: edit.url(args, options),
    method: 'delete',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
edit.options = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: edit.url(args, options),
    method: 'options',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
const editForm = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
editForm.get = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
editForm.head = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
editForm.post = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(args, options),
    method: 'post',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
editForm.put = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
editForm.patch = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
editForm.delete = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:105
* @route '/videos/{video}/edit'
*/
editForm.options = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
export const destroy = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(args, options),
    method: 'get',
})

destroy.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/videos/{video}/destroy',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.url = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { video: args }
    }

    if (Array.isArray(args)) {
        args = {
            video: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        video: args.video,
    }

    return destroy.definition.url
            .replace('{video}', parsedArgs.video.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.get = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: destroy.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.head = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: destroy.url(args, options),
    method: 'head',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.post = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(args, options),
    method: 'post',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.put = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: destroy.url(args, options),
    method: 'put',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.patch = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: destroy.url(args, options),
    method: 'patch',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.delete = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroy.options = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: destroy.url(args, options),
    method: 'options',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
const destroyForm = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroyForm.get = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, options),
    method: 'get',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroyForm.head = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroyForm.post = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, options),
    method: 'post',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroyForm.put = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroyForm.patch = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroyForm.delete = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see routes/web.php:106
* @route '/videos/{video}/destroy'
*/
destroyForm.options = (args: { video: string | number } | [video: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

destroy.form = destroyForm

const videos = {
    store: Object.assign(store, store),
    create: Object.assign(create, create),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    destroy: Object.assign(destroy, destroy),
}

export default videos
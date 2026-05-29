import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ShopController::getUser
* @see app/Http/Controllers/Api/ShopController.php:29
* @route '/api/shop/getUser'
*/
export const getUser = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUser.url(options),
    method: 'get',
})

getUser.definition = {
    methods: ["get","head"],
    url: '/api/shop/getUser',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ShopController::getUser
* @see app/Http/Controllers/Api/ShopController.php:29
* @route '/api/shop/getUser'
*/
getUser.url = (options?: RouteQueryOptions) => {
    return getUser.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ShopController::getUser
* @see app/Http/Controllers/Api/ShopController.php:29
* @route '/api/shop/getUser'
*/
getUser.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUser.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getUser
* @see app/Http/Controllers/Api/ShopController.php:29
* @route '/api/shop/getUser'
*/
getUser.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getUser.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getUser
* @see app/Http/Controllers/Api/ShopController.php:29
* @route '/api/shop/getUser'
*/
const getUserForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getUser.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getUser
* @see app/Http/Controllers/Api/ShopController.php:29
* @route '/api/shop/getUser'
*/
getUserForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getUser.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getUser
* @see app/Http/Controllers/Api/ShopController.php:29
* @route '/api/shop/getUser'
*/
getUserForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getUser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getUser.form = getUserForm

/**
* @see \App\Http\Controllers\Api\ShopController::deleteItem
* @see app/Http/Controllers/Api/ShopController.php:65
* @route '/api/shop/deleteItem'
*/
export const deleteItem = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteItem.url(options),
    method: 'post',
})

deleteItem.definition = {
    methods: ["post"],
    url: '/api/shop/deleteItem',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ShopController::deleteItem
* @see app/Http/Controllers/Api/ShopController.php:65
* @route '/api/shop/deleteItem'
*/
deleteItem.url = (options?: RouteQueryOptions) => {
    return deleteItem.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ShopController::deleteItem
* @see app/Http/Controllers/Api/ShopController.php:65
* @route '/api/shop/deleteItem'
*/
deleteItem.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deleteItem.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::deleteItem
* @see app/Http/Controllers/Api/ShopController.php:65
* @route '/api/shop/deleteItem'
*/
const deleteItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteItem.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::deleteItem
* @see app/Http/Controllers/Api/ShopController.php:65
* @route '/api/shop/deleteItem'
*/
deleteItemForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteItem.url(options),
    method: 'post',
})

deleteItem.form = deleteItemForm

/**
* @see \App\Http\Controllers\Api\ShopController::hasItem
* @see app/Http/Controllers/Api/ShopController.php:105
* @route '/api/shop/hasItem'
*/
export const hasItem = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: hasItem.url(options),
    method: 'post',
})

hasItem.definition = {
    methods: ["post"],
    url: '/api/shop/hasItem',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ShopController::hasItem
* @see app/Http/Controllers/Api/ShopController.php:105
* @route '/api/shop/hasItem'
*/
hasItem.url = (options?: RouteQueryOptions) => {
    return hasItem.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ShopController::hasItem
* @see app/Http/Controllers/Api/ShopController.php:105
* @route '/api/shop/hasItem'
*/
hasItem.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: hasItem.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::hasItem
* @see app/Http/Controllers/Api/ShopController.php:105
* @route '/api/shop/hasItem'
*/
const hasItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: hasItem.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::hasItem
* @see app/Http/Controllers/Api/ShopController.php:105
* @route '/api/shop/hasItem'
*/
hasItemForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: hasItem.url(options),
    method: 'post',
})

hasItem.form = hasItemForm

/**
* @see \App\Http\Controllers\Api\ShopController::reportService
* @see app/Http/Controllers/Api/ShopController.php:144
* @route '/api/shop/reportService'
*/
export const reportService = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reportService.url(options),
    method: 'post',
})

reportService.definition = {
    methods: ["post"],
    url: '/api/shop/reportService',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ShopController::reportService
* @see app/Http/Controllers/Api/ShopController.php:144
* @route '/api/shop/reportService'
*/
reportService.url = (options?: RouteQueryOptions) => {
    return reportService.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ShopController::reportService
* @see app/Http/Controllers/Api/ShopController.php:144
* @route '/api/shop/reportService'
*/
reportService.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reportService.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::reportService
* @see app/Http/Controllers/Api/ShopController.php:144
* @route '/api/shop/reportService'
*/
const reportServiceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reportService.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::reportService
* @see app/Http/Controllers/Api/ShopController.php:144
* @route '/api/shop/reportService'
*/
reportServiceForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reportService.url(options),
    method: 'post',
})

reportService.form = reportServiceForm

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrls
* @see app/Http/Controllers/Api/ShopController.php:181
* @route '/api/shop/getImageUrls'
*/
export const getImageUrls = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getImageUrls.url(options),
    method: 'post',
})

getImageUrls.definition = {
    methods: ["post"],
    url: '/api/shop/getImageUrls',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrls
* @see app/Http/Controllers/Api/ShopController.php:181
* @route '/api/shop/getImageUrls'
*/
getImageUrls.url = (options?: RouteQueryOptions) => {
    return getImageUrls.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrls
* @see app/Http/Controllers/Api/ShopController.php:181
* @route '/api/shop/getImageUrls'
*/
getImageUrls.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getImageUrls.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrls
* @see app/Http/Controllers/Api/ShopController.php:181
* @route '/api/shop/getImageUrls'
*/
const getImageUrlsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getImageUrls.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrls
* @see app/Http/Controllers/Api/ShopController.php:181
* @route '/api/shop/getImageUrls'
*/
getImageUrlsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getImageUrls.url(options),
    method: 'post',
})

getImageUrls.form = getImageUrlsForm

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrlsV2
* @see app/Http/Controllers/Api/ShopController.php:199
* @route '/api/v2/shop/getImageUrls'
*/
export const getImageUrlsV2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getImageUrlsV2.url(options),
    method: 'get',
})

getImageUrlsV2.definition = {
    methods: ["get","head"],
    url: '/api/v2/shop/getImageUrls',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrlsV2
* @see app/Http/Controllers/Api/ShopController.php:199
* @route '/api/v2/shop/getImageUrls'
*/
getImageUrlsV2.url = (options?: RouteQueryOptions) => {
    return getImageUrlsV2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrlsV2
* @see app/Http/Controllers/Api/ShopController.php:199
* @route '/api/v2/shop/getImageUrls'
*/
getImageUrlsV2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getImageUrlsV2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrlsV2
* @see app/Http/Controllers/Api/ShopController.php:199
* @route '/api/v2/shop/getImageUrls'
*/
getImageUrlsV2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getImageUrlsV2.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrlsV2
* @see app/Http/Controllers/Api/ShopController.php:199
* @route '/api/v2/shop/getImageUrls'
*/
const getImageUrlsV2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getImageUrlsV2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrlsV2
* @see app/Http/Controllers/Api/ShopController.php:199
* @route '/api/v2/shop/getImageUrls'
*/
getImageUrlsV2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getImageUrlsV2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\ShopController::getImageUrlsV2
* @see app/Http/Controllers/Api/ShopController.php:199
* @route '/api/v2/shop/getImageUrls'
*/
getImageUrlsV2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getImageUrlsV2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getImageUrlsV2.form = getImageUrlsV2Form

const ShopController = { getUser, deleteItem, hasItem, reportService, getImageUrls, getImageUrlsV2 }

export default ShopController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::set
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
export const set = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: set.url(args, options),
    method: 'post',
})

set.definition = {
    methods: ["post"],
    url: '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::set
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
set.url = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { deliveryrequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { deliveryrequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            deliveryrequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        deliveryrequest: typeof args.deliveryrequest === 'object'
        ? args.deliveryrequest.id
        : args.deliveryrequest,
    }

    return set.definition.url
            .replace('{deliveryrequest}', parsedArgs.deliveryrequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::set
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
set.post = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: set.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::set
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
const setForm = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: set.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Backend\DeliveryRequestsController::set
* @see app/Http/Controllers/Backend/DeliveryRequestsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/delivery_requests/set_pricecap/{deliveryrequest}'
*/
setForm.post = (args: { deliveryrequest: string | number | { id: string | number } } | [deliveryrequest: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: set.url(args, options),
    method: 'post',
})

set.form = setForm

const pricecap = {
    set: Object.assign(set, set),
}

export default pricecap
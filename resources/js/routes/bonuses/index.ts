import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\BonusesController::issued
* @see app/Http/Controllers/Backend/BonusesController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued'
*/
export const issued = (args: { wonitem: string | number | { id: string | number } } | [wonitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: issued.url(args, options),
    method: 'get',
})

issued.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\BonusesController::issued
* @see app/Http/Controllers/Backend/BonusesController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued'
*/
issued.url = (args: { wonitem: string | number | { id: string | number } } | [wonitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wonitem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wonitem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wonitem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wonitem: typeof args.wonitem === 'object'
        ? args.wonitem.id
        : args.wonitem,
    }

    return issued.definition.url
            .replace('{wonitem}', parsedArgs.wonitem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\BonusesController::issued
* @see app/Http/Controllers/Backend/BonusesController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued'
*/
issued.get = (args: { wonitem: string | number | { id: string | number } } | [wonitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: issued.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\BonusesController::issued
* @see app/Http/Controllers/Backend/BonusesController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued'
*/
issued.head = (args: { wonitem: string | number | { id: string | number } } | [wonitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: issued.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\BonusesController::issued
* @see app/Http/Controllers/Backend/BonusesController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued'
*/
const issuedForm = (args: { wonitem: string | number | { id: string | number } } | [wonitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: issued.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\BonusesController::issued
* @see app/Http/Controllers/Backend/BonusesController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued'
*/
issuedForm.get = (args: { wonitem: string | number | { id: string | number } } | [wonitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: issued.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\BonusesController::issued
* @see app/Http/Controllers/Backend/BonusesController.php:44
* @route '/backend_uc7BgHFmw32FDIEp/bonuses/{wonitem}/issued'
*/
issuedForm.head = (args: { wonitem: string | number | { id: string | number } } | [wonitem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: issued.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

issued.form = issuedForm

const bonuses = {
    issued: Object.assign(issued, issued),
}

export default bonuses
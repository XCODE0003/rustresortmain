import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\PromoCodes\Pages\ListPromoCodes::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/ListPromoCodes.php:7
* @route '/admin/promo-codes'
*/
const ListPromoCodes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPromoCodes.url(options),
    method: 'get',
})

ListPromoCodes.definition = {
    methods: ["get","head"],
    url: '/admin/promo-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\PromoCodes\Pages\ListPromoCodes::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/ListPromoCodes.php:7
* @route '/admin/promo-codes'
*/
ListPromoCodes.url = (options?: RouteQueryOptions) => {
    return ListPromoCodes.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\PromoCodes\Pages\ListPromoCodes::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/ListPromoCodes.php:7
* @route '/admin/promo-codes'
*/
ListPromoCodes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPromoCodes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\ListPromoCodes::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/ListPromoCodes.php:7
* @route '/admin/promo-codes'
*/
ListPromoCodes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPromoCodes.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\ListPromoCodes::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/ListPromoCodes.php:7
* @route '/admin/promo-codes'
*/
const ListPromoCodesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPromoCodes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\ListPromoCodes::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/ListPromoCodes.php:7
* @route '/admin/promo-codes'
*/
ListPromoCodesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPromoCodes.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\ListPromoCodes::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/ListPromoCodes.php:7
* @route '/admin/promo-codes'
*/
ListPromoCodesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPromoCodes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListPromoCodes.form = ListPromoCodesForm

export default ListPromoCodes
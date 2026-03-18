import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\PromoCodes\Pages\CreatePromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/CreatePromoCode.php:7
* @route '/admin/promo-codes/create'
*/
const CreatePromoCode = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePromoCode.url(options),
    method: 'get',
})

CreatePromoCode.definition = {
    methods: ["get","head"],
    url: '/admin/promo-codes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\PromoCodes\Pages\CreatePromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/CreatePromoCode.php:7
* @route '/admin/promo-codes/create'
*/
CreatePromoCode.url = (options?: RouteQueryOptions) => {
    return CreatePromoCode.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\PromoCodes\Pages\CreatePromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/CreatePromoCode.php:7
* @route '/admin/promo-codes/create'
*/
CreatePromoCode.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePromoCode.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\CreatePromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/CreatePromoCode.php:7
* @route '/admin/promo-codes/create'
*/
CreatePromoCode.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePromoCode.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\CreatePromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/CreatePromoCode.php:7
* @route '/admin/promo-codes/create'
*/
const CreatePromoCodeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePromoCode.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\CreatePromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/CreatePromoCode.php:7
* @route '/admin/promo-codes/create'
*/
CreatePromoCodeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePromoCode.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\CreatePromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/CreatePromoCode.php:7
* @route '/admin/promo-codes/create'
*/
CreatePromoCodeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePromoCode.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreatePromoCode.form = CreatePromoCodeForm

export default CreatePromoCode
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\PromoCodes\Pages\EditPromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/EditPromoCode.php:7
* @route '/admin/promo-codes/{record}/edit'
*/
const EditPromoCode = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPromoCode.url(args, options),
    method: 'get',
})

EditPromoCode.definition = {
    methods: ["get","head"],
    url: '/admin/promo-codes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\PromoCodes\Pages\EditPromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/EditPromoCode.php:7
* @route '/admin/promo-codes/{record}/edit'
*/
EditPromoCode.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditPromoCode.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\PromoCodes\Pages\EditPromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/EditPromoCode.php:7
* @route '/admin/promo-codes/{record}/edit'
*/
EditPromoCode.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPromoCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\EditPromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/EditPromoCode.php:7
* @route '/admin/promo-codes/{record}/edit'
*/
EditPromoCode.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPromoCode.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\EditPromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/EditPromoCode.php:7
* @route '/admin/promo-codes/{record}/edit'
*/
const EditPromoCodeForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPromoCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\EditPromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/EditPromoCode.php:7
* @route '/admin/promo-codes/{record}/edit'
*/
EditPromoCodeForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPromoCode.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\PromoCodes\Pages\EditPromoCode::__invoke
* @see app/Filament/Resources/PromoCodes/Pages/EditPromoCode.php:7
* @route '/admin/promo-codes/{record}/edit'
*/
EditPromoCodeForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPromoCode.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditPromoCode.form = EditPromoCodeForm

export default EditPromoCode
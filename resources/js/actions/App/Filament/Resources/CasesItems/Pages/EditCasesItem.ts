import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\CasesItems\Pages\EditCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/EditCasesItem.php:7
* @route '/admin/cases-items/{record}/edit'
*/
const EditCasesItem = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCasesItem.url(args, options),
    method: 'get',
})

EditCasesItem.definition = {
    methods: ["get","head"],
    url: '/admin/cases-items/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\CasesItems\Pages\EditCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/EditCasesItem.php:7
* @route '/admin/cases-items/{record}/edit'
*/
EditCasesItem.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCasesItem.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\CasesItems\Pages\EditCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/EditCasesItem.php:7
* @route '/admin/cases-items/{record}/edit'
*/
EditCasesItem.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCasesItem.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\EditCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/EditCasesItem.php:7
* @route '/admin/cases-items/{record}/edit'
*/
EditCasesItem.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCasesItem.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\EditCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/EditCasesItem.php:7
* @route '/admin/cases-items/{record}/edit'
*/
const EditCasesItemForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCasesItem.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\EditCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/EditCasesItem.php:7
* @route '/admin/cases-items/{record}/edit'
*/
EditCasesItemForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCasesItem.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\CasesItems\Pages\EditCasesItem::__invoke
* @see app/Filament/Resources/CasesItems/Pages/EditCasesItem.php:7
* @route '/admin/cases-items/{record}/edit'
*/
EditCasesItemForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCasesItem.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCasesItem.form = EditCasesItemForm

export default EditCasesItem
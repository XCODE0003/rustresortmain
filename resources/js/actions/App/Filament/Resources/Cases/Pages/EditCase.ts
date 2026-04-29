import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Cases\Pages\EditCase::__invoke
* @see app/Filament/Resources/Cases/Pages/EditCase.php:7
* @route '/admin/cases/{record}/edit'
*/
const EditCase = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCase.url(args, options),
    method: 'get',
})

EditCase.definition = {
    methods: ["get","head"],
    url: '/admin/cases/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Cases\Pages\EditCase::__invoke
* @see app/Filament/Resources/Cases/Pages/EditCase.php:7
* @route '/admin/cases/{record}/edit'
*/
EditCase.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCase.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Cases\Pages\EditCase::__invoke
* @see app/Filament/Resources/Cases/Pages/EditCase.php:7
* @route '/admin/cases/{record}/edit'
*/
EditCase.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCase.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\EditCase::__invoke
* @see app/Filament/Resources/Cases/Pages/EditCase.php:7
* @route '/admin/cases/{record}/edit'
*/
EditCase.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCase.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Cases\Pages\EditCase::__invoke
* @see app/Filament/Resources/Cases/Pages/EditCase.php:7
* @route '/admin/cases/{record}/edit'
*/
const EditCaseForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCase.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\EditCase::__invoke
* @see app/Filament/Resources/Cases/Pages/EditCase.php:7
* @route '/admin/cases/{record}/edit'
*/
EditCaseForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCase.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\EditCase::__invoke
* @see app/Filament/Resources/Cases/Pages/EditCase.php:7
* @route '/admin/cases/{record}/edit'
*/
EditCaseForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCase.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCase.form = EditCaseForm

export default EditCase
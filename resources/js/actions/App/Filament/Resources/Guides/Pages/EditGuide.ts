import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Guides\Pages\EditGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/EditGuide.php:7
* @route '/admin/guides/{record}/edit'
*/
const EditGuide = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditGuide.url(args, options),
    method: 'get',
})

EditGuide.definition = {
    methods: ["get","head"],
    url: '/admin/guides/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Guides\Pages\EditGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/EditGuide.php:7
* @route '/admin/guides/{record}/edit'
*/
EditGuide.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditGuide.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Guides\Pages\EditGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/EditGuide.php:7
* @route '/admin/guides/{record}/edit'
*/
EditGuide.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditGuide.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\EditGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/EditGuide.php:7
* @route '/admin/guides/{record}/edit'
*/
EditGuide.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditGuide.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Guides\Pages\EditGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/EditGuide.php:7
* @route '/admin/guides/{record}/edit'
*/
const EditGuideForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditGuide.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\EditGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/EditGuide.php:7
* @route '/admin/guides/{record}/edit'
*/
EditGuideForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditGuide.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Guides\Pages\EditGuide::__invoke
* @see app/Filament/Resources/Guides/Pages/EditGuide.php:7
* @route '/admin/guides/{record}/edit'
*/
EditGuideForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditGuide.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditGuide.form = EditGuideForm

export default EditGuide
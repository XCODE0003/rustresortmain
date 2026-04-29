import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Streams\Pages\EditStream::__invoke
* @see app/Filament/Resources/Streams/Pages/EditStream.php:7
* @route '/admin/streams/{record}/edit'
*/
const EditStream = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditStream.url(args, options),
    method: 'get',
})

EditStream.definition = {
    methods: ["get","head"],
    url: '/admin/streams/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Streams\Pages\EditStream::__invoke
* @see app/Filament/Resources/Streams/Pages/EditStream.php:7
* @route '/admin/streams/{record}/edit'
*/
EditStream.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditStream.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Streams\Pages\EditStream::__invoke
* @see app/Filament/Resources/Streams/Pages/EditStream.php:7
* @route '/admin/streams/{record}/edit'
*/
EditStream.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditStream.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\EditStream::__invoke
* @see app/Filament/Resources/Streams/Pages/EditStream.php:7
* @route '/admin/streams/{record}/edit'
*/
EditStream.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditStream.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Streams\Pages\EditStream::__invoke
* @see app/Filament/Resources/Streams/Pages/EditStream.php:7
* @route '/admin/streams/{record}/edit'
*/
const EditStreamForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditStream.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\EditStream::__invoke
* @see app/Filament/Resources/Streams/Pages/EditStream.php:7
* @route '/admin/streams/{record}/edit'
*/
EditStreamForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditStream.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\EditStream::__invoke
* @see app/Filament/Resources/Streams/Pages/EditStream.php:7
* @route '/admin/streams/{record}/edit'
*/
EditStreamForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditStream.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditStream.form = EditStreamForm

export default EditStream
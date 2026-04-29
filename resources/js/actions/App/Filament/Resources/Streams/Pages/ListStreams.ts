import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Streams\Pages\ListStreams::__invoke
* @see app/Filament/Resources/Streams/Pages/ListStreams.php:7
* @route '/admin/streams'
*/
const ListStreams = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListStreams.url(options),
    method: 'get',
})

ListStreams.definition = {
    methods: ["get","head"],
    url: '/admin/streams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Streams\Pages\ListStreams::__invoke
* @see app/Filament/Resources/Streams/Pages/ListStreams.php:7
* @route '/admin/streams'
*/
ListStreams.url = (options?: RouteQueryOptions) => {
    return ListStreams.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Streams\Pages\ListStreams::__invoke
* @see app/Filament/Resources/Streams/Pages/ListStreams.php:7
* @route '/admin/streams'
*/
ListStreams.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListStreams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\ListStreams::__invoke
* @see app/Filament/Resources/Streams/Pages/ListStreams.php:7
* @route '/admin/streams'
*/
ListStreams.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListStreams.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Streams\Pages\ListStreams::__invoke
* @see app/Filament/Resources/Streams/Pages/ListStreams.php:7
* @route '/admin/streams'
*/
const ListStreamsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListStreams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\ListStreams::__invoke
* @see app/Filament/Resources/Streams/Pages/ListStreams.php:7
* @route '/admin/streams'
*/
ListStreamsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListStreams.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\ListStreams::__invoke
* @see app/Filament/Resources/Streams/Pages/ListStreams.php:7
* @route '/admin/streams'
*/
ListStreamsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListStreams.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListStreams.form = ListStreamsForm

export default ListStreams
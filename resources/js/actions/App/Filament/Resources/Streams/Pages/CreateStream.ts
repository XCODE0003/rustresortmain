import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Streams\Pages\CreateStream::__invoke
* @see app/Filament/Resources/Streams/Pages/CreateStream.php:7
* @route '/admin/streams/create'
*/
const CreateStream = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateStream.url(options),
    method: 'get',
})

CreateStream.definition = {
    methods: ["get","head"],
    url: '/admin/streams/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Streams\Pages\CreateStream::__invoke
* @see app/Filament/Resources/Streams/Pages/CreateStream.php:7
* @route '/admin/streams/create'
*/
CreateStream.url = (options?: RouteQueryOptions) => {
    return CreateStream.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Streams\Pages\CreateStream::__invoke
* @see app/Filament/Resources/Streams/Pages/CreateStream.php:7
* @route '/admin/streams/create'
*/
CreateStream.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateStream.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\CreateStream::__invoke
* @see app/Filament/Resources/Streams/Pages/CreateStream.php:7
* @route '/admin/streams/create'
*/
CreateStream.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateStream.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Streams\Pages\CreateStream::__invoke
* @see app/Filament/Resources/Streams/Pages/CreateStream.php:7
* @route '/admin/streams/create'
*/
const CreateStreamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateStream.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\CreateStream::__invoke
* @see app/Filament/Resources/Streams/Pages/CreateStream.php:7
* @route '/admin/streams/create'
*/
CreateStreamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateStream.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Streams\Pages\CreateStream::__invoke
* @see app/Filament/Resources/Streams/Pages/CreateStream.php:7
* @route '/admin/streams/create'
*/
CreateStreamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateStream.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateStream.form = CreateStreamForm

export default CreateStream
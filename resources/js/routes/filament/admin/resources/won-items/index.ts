import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/won-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const wonItems = {
    index: Object.assign(index, index),
}

export default wonItems
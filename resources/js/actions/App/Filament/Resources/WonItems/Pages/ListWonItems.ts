import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
const ListWonItems = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWonItems.url(options),
    method: 'get',
})

ListWonItems.definition = {
    methods: ["get","head"],
    url: '/admin/won-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
ListWonItems.url = (options?: RouteQueryOptions) => {
    return ListWonItems.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
ListWonItems.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListWonItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
ListWonItems.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListWonItems.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
const ListWonItemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWonItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
ListWonItemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWonItems.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\WonItems\Pages\ListWonItems::__invoke
* @see app/Filament/Resources/WonItems/Pages/ListWonItems.php:7
* @route '/admin/won-items'
*/
ListWonItemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListWonItems.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListWonItems.form = ListWonItemsForm

export default ListWonItems
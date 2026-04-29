import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Inventories\Pages\ListInventories::__invoke
* @see app/Filament/Resources/Inventories/Pages/ListInventories.php:7
* @route '/admin/inventories'
*/
const ListInventories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListInventories.url(options),
    method: 'get',
})

ListInventories.definition = {
    methods: ["get","head"],
    url: '/admin/inventories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Inventories\Pages\ListInventories::__invoke
* @see app/Filament/Resources/Inventories/Pages/ListInventories.php:7
* @route '/admin/inventories'
*/
ListInventories.url = (options?: RouteQueryOptions) => {
    return ListInventories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Inventories\Pages\ListInventories::__invoke
* @see app/Filament/Resources/Inventories/Pages/ListInventories.php:7
* @route '/admin/inventories'
*/
ListInventories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListInventories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Inventories\Pages\ListInventories::__invoke
* @see app/Filament/Resources/Inventories/Pages/ListInventories.php:7
* @route '/admin/inventories'
*/
ListInventories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListInventories.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Inventories\Pages\ListInventories::__invoke
* @see app/Filament/Resources/Inventories/Pages/ListInventories.php:7
* @route '/admin/inventories'
*/
const ListInventoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListInventories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Inventories\Pages\ListInventories::__invoke
* @see app/Filament/Resources/Inventories/Pages/ListInventories.php:7
* @route '/admin/inventories'
*/
ListInventoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListInventories.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Inventories\Pages\ListInventories::__invoke
* @see app/Filament/Resources/Inventories/Pages/ListInventories.php:7
* @route '/admin/inventories'
*/
ListInventoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListInventories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListInventories.form = ListInventoriesForm

export default ListInventories
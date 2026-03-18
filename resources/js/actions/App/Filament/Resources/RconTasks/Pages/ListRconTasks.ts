import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\RconTasks\Pages\ListRconTasks::__invoke
* @see app/Filament/Resources/RconTasks/Pages/ListRconTasks.php:7
* @route '/admin/rcon-tasks'
*/
const ListRconTasks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRconTasks.url(options),
    method: 'get',
})

ListRconTasks.definition = {
    methods: ["get","head"],
    url: '/admin/rcon-tasks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\RconTasks\Pages\ListRconTasks::__invoke
* @see app/Filament/Resources/RconTasks/Pages/ListRconTasks.php:7
* @route '/admin/rcon-tasks'
*/
ListRconTasks.url = (options?: RouteQueryOptions) => {
    return ListRconTasks.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\RconTasks\Pages\ListRconTasks::__invoke
* @see app/Filament/Resources/RconTasks/Pages/ListRconTasks.php:7
* @route '/admin/rcon-tasks'
*/
ListRconTasks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRconTasks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\ListRconTasks::__invoke
* @see app/Filament/Resources/RconTasks/Pages/ListRconTasks.php:7
* @route '/admin/rcon-tasks'
*/
ListRconTasks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRconTasks.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\ListRconTasks::__invoke
* @see app/Filament/Resources/RconTasks/Pages/ListRconTasks.php:7
* @route '/admin/rcon-tasks'
*/
const ListRconTasksForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRconTasks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\ListRconTasks::__invoke
* @see app/Filament/Resources/RconTasks/Pages/ListRconTasks.php:7
* @route '/admin/rcon-tasks'
*/
ListRconTasksForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRconTasks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\ListRconTasks::__invoke
* @see app/Filament/Resources/RconTasks/Pages/ListRconTasks.php:7
* @route '/admin/rcon-tasks'
*/
ListRconTasksForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRconTasks.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRconTasks.form = ListRconTasksForm

export default ListRconTasks
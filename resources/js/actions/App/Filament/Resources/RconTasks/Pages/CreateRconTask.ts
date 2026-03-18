import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\RconTasks\Pages\CreateRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/CreateRconTask.php:7
* @route '/admin/rcon-tasks/create'
*/
const CreateRconTask = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRconTask.url(options),
    method: 'get',
})

CreateRconTask.definition = {
    methods: ["get","head"],
    url: '/admin/rcon-tasks/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\RconTasks\Pages\CreateRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/CreateRconTask.php:7
* @route '/admin/rcon-tasks/create'
*/
CreateRconTask.url = (options?: RouteQueryOptions) => {
    return CreateRconTask.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\RconTasks\Pages\CreateRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/CreateRconTask.php:7
* @route '/admin/rcon-tasks/create'
*/
CreateRconTask.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRconTask.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\CreateRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/CreateRconTask.php:7
* @route '/admin/rcon-tasks/create'
*/
CreateRconTask.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRconTask.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\CreateRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/CreateRconTask.php:7
* @route '/admin/rcon-tasks/create'
*/
const CreateRconTaskForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRconTask.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\CreateRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/CreateRconTask.php:7
* @route '/admin/rcon-tasks/create'
*/
CreateRconTaskForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRconTask.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\CreateRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/CreateRconTask.php:7
* @route '/admin/rcon-tasks/create'
*/
CreateRconTaskForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRconTask.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRconTask.form = CreateRconTaskForm

export default CreateRconTask
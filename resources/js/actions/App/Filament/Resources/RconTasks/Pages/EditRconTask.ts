import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\RconTasks\Pages\EditRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/EditRconTask.php:7
* @route '/admin/rcon-tasks/{record}/edit'
*/
const EditRconTask = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRconTask.url(args, options),
    method: 'get',
})

EditRconTask.definition = {
    methods: ["get","head"],
    url: '/admin/rcon-tasks/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\RconTasks\Pages\EditRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/EditRconTask.php:7
* @route '/admin/rcon-tasks/{record}/edit'
*/
EditRconTask.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRconTask.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\RconTasks\Pages\EditRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/EditRconTask.php:7
* @route '/admin/rcon-tasks/{record}/edit'
*/
EditRconTask.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRconTask.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\EditRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/EditRconTask.php:7
* @route '/admin/rcon-tasks/{record}/edit'
*/
EditRconTask.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRconTask.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\EditRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/EditRconTask.php:7
* @route '/admin/rcon-tasks/{record}/edit'
*/
const EditRconTaskForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRconTask.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\EditRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/EditRconTask.php:7
* @route '/admin/rcon-tasks/{record}/edit'
*/
EditRconTaskForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRconTask.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\RconTasks\Pages\EditRconTask::__invoke
* @see app/Filament/Resources/RconTasks/Pages/EditRconTask.php:7
* @route '/admin/rcon-tasks/{record}/edit'
*/
EditRconTaskForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRconTask.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRconTask.form = EditRconTaskForm

export default EditRconTask
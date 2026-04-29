import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
const AdminLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminLogs.url(options),
    method: 'get',
})

AdminLogs.definition = {
    methods: ["get","head"],
    url: '/admin/admin-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
AdminLogs.url = (options?: RouteQueryOptions) => {
    return AdminLogs.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
AdminLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AdminLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
AdminLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AdminLogs.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
const AdminLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AdminLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
AdminLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AdminLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
AdminLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AdminLogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AdminLogs.form = AdminLogsForm

export default AdminLogs
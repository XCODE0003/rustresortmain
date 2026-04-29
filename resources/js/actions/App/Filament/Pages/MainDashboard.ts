import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
const MainDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MainDashboard.url(options),
    method: 'get',
})

MainDashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
MainDashboard.url = (options?: RouteQueryOptions) => {
    return MainDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
MainDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MainDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
MainDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MainDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
const MainDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MainDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
MainDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MainDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
MainDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MainDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

MainDashboard.form = MainDashboardForm

export default MainDashboard
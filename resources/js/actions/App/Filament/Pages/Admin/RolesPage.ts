import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
const RolesPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RolesPage.url(options),
    method: 'get',
})

RolesPage.definition = {
    methods: ["get","head"],
    url: '/admin/roles-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
RolesPage.url = (options?: RouteQueryOptions) => {
    return RolesPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
RolesPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RolesPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
RolesPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RolesPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
const RolesPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RolesPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
RolesPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RolesPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
RolesPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RolesPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RolesPage.form = RolesPageForm

export default RolesPage
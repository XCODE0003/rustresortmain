import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
const UpdateItemsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UpdateItemsPage.url(options),
    method: 'get',
})

UpdateItemsPage.definition = {
    methods: ["get","head"],
    url: '/admin/update-items-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
UpdateItemsPage.url = (options?: RouteQueryOptions) => {
    return UpdateItemsPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
UpdateItemsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UpdateItemsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
UpdateItemsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UpdateItemsPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
const UpdateItemsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UpdateItemsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
UpdateItemsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UpdateItemsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
UpdateItemsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: UpdateItemsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

UpdateItemsPage.form = UpdateItemsPageForm

export default UpdateItemsPage
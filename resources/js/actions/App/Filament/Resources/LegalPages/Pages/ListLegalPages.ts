import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\LegalPages\Pages\ListLegalPages::__invoke
* @see app/Filament/Resources/LegalPages/Pages/ListLegalPages.php:7
* @route '/admin/legal-pages'
*/
const ListLegalPages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListLegalPages.url(options),
    method: 'get',
})

ListLegalPages.definition = {
    methods: ["get","head"],
    url: '/admin/legal-pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\LegalPages\Pages\ListLegalPages::__invoke
* @see app/Filament/Resources/LegalPages/Pages/ListLegalPages.php:7
* @route '/admin/legal-pages'
*/
ListLegalPages.url = (options?: RouteQueryOptions) => {
    return ListLegalPages.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\LegalPages\Pages\ListLegalPages::__invoke
* @see app/Filament/Resources/LegalPages/Pages/ListLegalPages.php:7
* @route '/admin/legal-pages'
*/
ListLegalPages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListLegalPages.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\ListLegalPages::__invoke
* @see app/Filament/Resources/LegalPages/Pages/ListLegalPages.php:7
* @route '/admin/legal-pages'
*/
ListLegalPages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListLegalPages.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\ListLegalPages::__invoke
* @see app/Filament/Resources/LegalPages/Pages/ListLegalPages.php:7
* @route '/admin/legal-pages'
*/
const ListLegalPagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListLegalPages.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\ListLegalPages::__invoke
* @see app/Filament/Resources/LegalPages/Pages/ListLegalPages.php:7
* @route '/admin/legal-pages'
*/
ListLegalPagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListLegalPages.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\ListLegalPages::__invoke
* @see app/Filament/Resources/LegalPages/Pages/ListLegalPages.php:7
* @route '/admin/legal-pages'
*/
ListLegalPagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListLegalPages.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListLegalPages.form = ListLegalPagesForm

export default ListLegalPages
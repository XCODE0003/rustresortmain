import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
const BansPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BansPage.url(options),
    method: 'get',
})

BansPage.definition = {
    methods: ["get","head"],
    url: '/admin/bans-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
BansPage.url = (options?: RouteQueryOptions) => {
    return BansPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
BansPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BansPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
BansPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BansPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
const BansPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BansPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
BansPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BansPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
BansPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BansPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BansPage.form = BansPageForm

export default BansPage
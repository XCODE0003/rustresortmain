import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Banners\Pages\ListBanners::__invoke
* @see app/Filament/Resources/Banners/Pages/ListBanners.php:7
* @route '/admin/banners'
*/
const ListBanners = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBanners.url(options),
    method: 'get',
})

ListBanners.definition = {
    methods: ["get","head"],
    url: '/admin/banners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Banners\Pages\ListBanners::__invoke
* @see app/Filament/Resources/Banners/Pages/ListBanners.php:7
* @route '/admin/banners'
*/
ListBanners.url = (options?: RouteQueryOptions) => {
    return ListBanners.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Banners\Pages\ListBanners::__invoke
* @see app/Filament/Resources/Banners/Pages/ListBanners.php:7
* @route '/admin/banners'
*/
ListBanners.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBanners.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\ListBanners::__invoke
* @see app/Filament/Resources/Banners/Pages/ListBanners.php:7
* @route '/admin/banners'
*/
ListBanners.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBanners.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Banners\Pages\ListBanners::__invoke
* @see app/Filament/Resources/Banners/Pages/ListBanners.php:7
* @route '/admin/banners'
*/
const ListBannersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBanners.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\ListBanners::__invoke
* @see app/Filament/Resources/Banners/Pages/ListBanners.php:7
* @route '/admin/banners'
*/
ListBannersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBanners.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\ListBanners::__invoke
* @see app/Filament/Resources/Banners/Pages/ListBanners.php:7
* @route '/admin/banners'
*/
ListBannersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListBanners.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListBanners.form = ListBannersForm

export default ListBanners
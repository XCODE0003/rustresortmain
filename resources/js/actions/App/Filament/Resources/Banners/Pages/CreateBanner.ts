import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Banners\Pages\CreateBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/CreateBanner.php:7
* @route '/admin/banners/create'
*/
const CreateBanner = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBanner.url(options),
    method: 'get',
})

CreateBanner.definition = {
    methods: ["get","head"],
    url: '/admin/banners/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Banners\Pages\CreateBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/CreateBanner.php:7
* @route '/admin/banners/create'
*/
CreateBanner.url = (options?: RouteQueryOptions) => {
    return CreateBanner.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Banners\Pages\CreateBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/CreateBanner.php:7
* @route '/admin/banners/create'
*/
CreateBanner.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBanner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\CreateBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/CreateBanner.php:7
* @route '/admin/banners/create'
*/
CreateBanner.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBanner.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Banners\Pages\CreateBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/CreateBanner.php:7
* @route '/admin/banners/create'
*/
const CreateBannerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBanner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\CreateBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/CreateBanner.php:7
* @route '/admin/banners/create'
*/
CreateBannerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBanner.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\CreateBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/CreateBanner.php:7
* @route '/admin/banners/create'
*/
CreateBannerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateBanner.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateBanner.form = CreateBannerForm

export default CreateBanner
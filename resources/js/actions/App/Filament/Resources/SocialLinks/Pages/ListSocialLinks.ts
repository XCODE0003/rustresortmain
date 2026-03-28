import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\SocialLinks\Pages\ListSocialLinks::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/ListSocialLinks.php:7
* @route '/admin/social-links'
*/
const ListSocialLinks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSocialLinks.url(options),
    method: 'get',
})

ListSocialLinks.definition = {
    methods: ["get","head"],
    url: '/admin/social-links',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\SocialLinks\Pages\ListSocialLinks::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/ListSocialLinks.php:7
* @route '/admin/social-links'
*/
ListSocialLinks.url = (options?: RouteQueryOptions) => {
    return ListSocialLinks.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\SocialLinks\Pages\ListSocialLinks::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/ListSocialLinks.php:7
* @route '/admin/social-links'
*/
ListSocialLinks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSocialLinks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\ListSocialLinks::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/ListSocialLinks.php:7
* @route '/admin/social-links'
*/
ListSocialLinks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSocialLinks.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\ListSocialLinks::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/ListSocialLinks.php:7
* @route '/admin/social-links'
*/
const ListSocialLinksForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSocialLinks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\ListSocialLinks::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/ListSocialLinks.php:7
* @route '/admin/social-links'
*/
ListSocialLinksForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSocialLinks.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\ListSocialLinks::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/ListSocialLinks.php:7
* @route '/admin/social-links'
*/
ListSocialLinksForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSocialLinks.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSocialLinks.form = ListSocialLinksForm

export default ListSocialLinks
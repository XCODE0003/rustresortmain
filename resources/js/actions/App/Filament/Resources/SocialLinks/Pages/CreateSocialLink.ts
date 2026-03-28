import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\SocialLinks\Pages\CreateSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/CreateSocialLink.php:7
* @route '/admin/social-links/create'
*/
const CreateSocialLink = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSocialLink.url(options),
    method: 'get',
})

CreateSocialLink.definition = {
    methods: ["get","head"],
    url: '/admin/social-links/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\SocialLinks\Pages\CreateSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/CreateSocialLink.php:7
* @route '/admin/social-links/create'
*/
CreateSocialLink.url = (options?: RouteQueryOptions) => {
    return CreateSocialLink.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\SocialLinks\Pages\CreateSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/CreateSocialLink.php:7
* @route '/admin/social-links/create'
*/
CreateSocialLink.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSocialLink.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\CreateSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/CreateSocialLink.php:7
* @route '/admin/social-links/create'
*/
CreateSocialLink.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSocialLink.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\CreateSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/CreateSocialLink.php:7
* @route '/admin/social-links/create'
*/
const CreateSocialLinkForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSocialLink.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\CreateSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/CreateSocialLink.php:7
* @route '/admin/social-links/create'
*/
CreateSocialLinkForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSocialLink.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\CreateSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/CreateSocialLink.php:7
* @route '/admin/social-links/create'
*/
CreateSocialLinkForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSocialLink.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSocialLink.form = CreateSocialLinkForm

export default CreateSocialLink
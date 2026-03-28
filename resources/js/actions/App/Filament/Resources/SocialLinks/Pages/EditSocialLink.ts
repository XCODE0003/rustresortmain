import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\SocialLinks\Pages\EditSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/EditSocialLink.php:7
* @route '/admin/social-links/{record}/edit'
*/
const EditSocialLink = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSocialLink.url(args, options),
    method: 'get',
})

EditSocialLink.definition = {
    methods: ["get","head"],
    url: '/admin/social-links/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\SocialLinks\Pages\EditSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/EditSocialLink.php:7
* @route '/admin/social-links/{record}/edit'
*/
EditSocialLink.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return EditSocialLink.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\SocialLinks\Pages\EditSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/EditSocialLink.php:7
* @route '/admin/social-links/{record}/edit'
*/
EditSocialLink.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSocialLink.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\EditSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/EditSocialLink.php:7
* @route '/admin/social-links/{record}/edit'
*/
EditSocialLink.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSocialLink.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\EditSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/EditSocialLink.php:7
* @route '/admin/social-links/{record}/edit'
*/
const EditSocialLinkForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSocialLink.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\EditSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/EditSocialLink.php:7
* @route '/admin/social-links/{record}/edit'
*/
EditSocialLinkForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSocialLink.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\SocialLinks\Pages\EditSocialLink::__invoke
* @see app/Filament/Resources/SocialLinks/Pages/EditSocialLink.php:7
* @route '/admin/social-links/{record}/edit'
*/
EditSocialLinkForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSocialLink.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSocialLink.form = EditSocialLinkForm

export default EditSocialLink
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Banners\Pages\EditBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/EditBanner.php:7
* @route '/admin/banners/{record}/edit'
*/
const EditBanner = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBanner.url(args, options),
    method: 'get',
})

EditBanner.definition = {
    methods: ["get","head"],
    url: '/admin/banners/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Banners\Pages\EditBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/EditBanner.php:7
* @route '/admin/banners/{record}/edit'
*/
EditBanner.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBanner.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Banners\Pages\EditBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/EditBanner.php:7
* @route '/admin/banners/{record}/edit'
*/
EditBanner.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBanner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\EditBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/EditBanner.php:7
* @route '/admin/banners/{record}/edit'
*/
EditBanner.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBanner.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Banners\Pages\EditBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/EditBanner.php:7
* @route '/admin/banners/{record}/edit'
*/
const EditBannerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBanner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\EditBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/EditBanner.php:7
* @route '/admin/banners/{record}/edit'
*/
EditBannerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBanner.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Banners\Pages\EditBanner::__invoke
* @see app/Filament/Resources/Banners/Pages/EditBanner.php:7
* @route '/admin/banners/{record}/edit'
*/
EditBannerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditBanner.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditBanner.form = EditBannerForm

export default EditBanner
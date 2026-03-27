import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\LegalPages\Pages\EditLegalPage::__invoke
* @see app/Filament/Resources/LegalPages/Pages/EditLegalPage.php:7
* @route '/admin/legal-pages/{record}/edit'
*/
const EditLegalPage = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditLegalPage.url(args, options),
    method: 'get',
})

EditLegalPage.definition = {
    methods: ["get","head"],
    url: '/admin/legal-pages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\LegalPages\Pages\EditLegalPage::__invoke
* @see app/Filament/Resources/LegalPages/Pages/EditLegalPage.php:7
* @route '/admin/legal-pages/{record}/edit'
*/
EditLegalPage.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditLegalPage.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\LegalPages\Pages\EditLegalPage::__invoke
* @see app/Filament/Resources/LegalPages/Pages/EditLegalPage.php:7
* @route '/admin/legal-pages/{record}/edit'
*/
EditLegalPage.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditLegalPage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\EditLegalPage::__invoke
* @see app/Filament/Resources/LegalPages/Pages/EditLegalPage.php:7
* @route '/admin/legal-pages/{record}/edit'
*/
EditLegalPage.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditLegalPage.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\EditLegalPage::__invoke
* @see app/Filament/Resources/LegalPages/Pages/EditLegalPage.php:7
* @route '/admin/legal-pages/{record}/edit'
*/
const EditLegalPageForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditLegalPage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\EditLegalPage::__invoke
* @see app/Filament/Resources/LegalPages/Pages/EditLegalPage.php:7
* @route '/admin/legal-pages/{record}/edit'
*/
EditLegalPageForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditLegalPage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\LegalPages\Pages\EditLegalPage::__invoke
* @see app/Filament/Resources/LegalPages/Pages/EditLegalPage.php:7
* @route '/admin/legal-pages/{record}/edit'
*/
EditLegalPageForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditLegalPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditLegalPage.form = EditLegalPageForm

export default EditLegalPage
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Cases\Pages\CreateCase::__invoke
* @see app/Filament/Resources/Cases/Pages/CreateCase.php:7
* @route '/admin/cases/create'
*/
const CreateCase = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCase.url(options),
    method: 'get',
})

CreateCase.definition = {
    methods: ["get","head"],
    url: '/admin/cases/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Cases\Pages\CreateCase::__invoke
* @see app/Filament/Resources/Cases/Pages/CreateCase.php:7
* @route '/admin/cases/create'
*/
CreateCase.url = (options?: RouteQueryOptions) => {
    return CreateCase.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Cases\Pages\CreateCase::__invoke
* @see app/Filament/Resources/Cases/Pages/CreateCase.php:7
* @route '/admin/cases/create'
*/
CreateCase.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCase.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\CreateCase::__invoke
* @see app/Filament/Resources/Cases/Pages/CreateCase.php:7
* @route '/admin/cases/create'
*/
CreateCase.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCase.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Cases\Pages\CreateCase::__invoke
* @see app/Filament/Resources/Cases/Pages/CreateCase.php:7
* @route '/admin/cases/create'
*/
const CreateCaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCase.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\CreateCase::__invoke
* @see app/Filament/Resources/Cases/Pages/CreateCase.php:7
* @route '/admin/cases/create'
*/
CreateCaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCase.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Cases\Pages\CreateCase::__invoke
* @see app/Filament/Resources/Cases/Pages/CreateCase.php:7
* @route '/admin/cases/create'
*/
CreateCaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCase.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCase.form = CreateCaseForm

export default CreateCase
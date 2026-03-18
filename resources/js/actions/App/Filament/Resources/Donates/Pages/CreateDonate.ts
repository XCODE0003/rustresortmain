import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Donates\Pages\CreateDonate::__invoke
* @see app/Filament/Resources/Donates/Pages/CreateDonate.php:7
* @route '/admin/donates/create'
*/
const CreateDonate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDonate.url(options),
    method: 'get',
})

CreateDonate.definition = {
    methods: ["get","head"],
    url: '/admin/donates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Donates\Pages\CreateDonate::__invoke
* @see app/Filament/Resources/Donates/Pages/CreateDonate.php:7
* @route '/admin/donates/create'
*/
CreateDonate.url = (options?: RouteQueryOptions) => {
    return CreateDonate.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Donates\Pages\CreateDonate::__invoke
* @see app/Filament/Resources/Donates/Pages/CreateDonate.php:7
* @route '/admin/donates/create'
*/
CreateDonate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDonate.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Donates\Pages\CreateDonate::__invoke
* @see app/Filament/Resources/Donates/Pages/CreateDonate.php:7
* @route '/admin/donates/create'
*/
CreateDonate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDonate.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Resources\Donates\Pages\CreateDonate::__invoke
* @see app/Filament/Resources/Donates/Pages/CreateDonate.php:7
* @route '/admin/donates/create'
*/
const CreateDonateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDonate.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Donates\Pages\CreateDonate::__invoke
* @see app/Filament/Resources/Donates/Pages/CreateDonate.php:7
* @route '/admin/donates/create'
*/
CreateDonateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDonate.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Resources\Donates\Pages\CreateDonate::__invoke
* @see app/Filament/Resources/Donates/Pages/CreateDonate.php:7
* @route '/admin/donates/create'
*/
CreateDonateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateDonate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateDonate.form = CreateDonateForm

export default CreateDonate
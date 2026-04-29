import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
const GameItemsStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GameItemsStatistics.url(options),
    method: 'get',
})

GameItemsStatistics.definition = {
    methods: ["get","head"],
    url: '/admin/game-items-statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
GameItemsStatistics.url = (options?: RouteQueryOptions) => {
    return GameItemsStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
GameItemsStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GameItemsStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
GameItemsStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GameItemsStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
const GameItemsStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GameItemsStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
GameItemsStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GameItemsStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
GameItemsStatisticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GameItemsStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GameItemsStatistics.form = GameItemsStatisticsForm

export default GameItemsStatistics
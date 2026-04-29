import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
export const mainDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mainDashboard.url(options),
    method: 'get',
})

mainDashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
mainDashboard.url = (options?: RouteQueryOptions) => {
    return mainDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
mainDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mainDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
mainDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: mainDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
const mainDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
mainDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\MainDashboard::__invoke
* @see app/Filament/Pages/MainDashboard.php:7
* @route '/admin'
*/
mainDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: mainDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

mainDashboard.form = mainDashboardForm

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
export const rolesPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rolesPage.url(options),
    method: 'get',
})

rolesPage.definition = {
    methods: ["get","head"],
    url: '/admin/roles-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
rolesPage.url = (options?: RouteQueryOptions) => {
    return rolesPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
rolesPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rolesPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
rolesPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rolesPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
const rolesPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rolesPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
rolesPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rolesPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Admin\RolesPage::__invoke
* @see app/Filament/Pages/Admin/RolesPage.php:7
* @route '/admin/roles-page'
*/
rolesPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rolesPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rolesPage.form = rolesPageForm

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
export const bansPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bansPage.url(options),
    method: 'get',
})

bansPage.definition = {
    methods: ["get","head"],
    url: '/admin/bans-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
bansPage.url = (options?: RouteQueryOptions) => {
    return bansPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
bansPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bansPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
bansPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bansPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
const bansPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bansPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
bansPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bansPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Bans\BansPage::__invoke
* @see app/Filament/Pages/Bans/BansPage.php:7
* @route '/admin/bans-page'
*/
bansPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bansPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bansPage.form = bansPageForm

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
export const adminLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminLogs.url(options),
    method: 'get',
})

adminLogs.definition = {
    methods: ["get","head"],
    url: '/admin/admin-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
adminLogs.url = (options?: RouteQueryOptions) => {
    return adminLogs.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
adminLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
adminLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminLogs.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
const adminLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adminLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
adminLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adminLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\AdminLogs::__invoke
* @see app/Filament/Pages/Logs/AdminLogs.php:7
* @route '/admin/admin-logs'
*/
adminLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adminLogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

adminLogs.form = adminLogsForm

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
export const gameItemsStatistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gameItemsStatistics.url(options),
    method: 'get',
})

gameItemsStatistics.definition = {
    methods: ["get","head"],
    url: '/admin/game-items-statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
gameItemsStatistics.url = (options?: RouteQueryOptions) => {
    return gameItemsStatistics.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
gameItemsStatistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gameItemsStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
gameItemsStatistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: gameItemsStatistics.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
const gameItemsStatisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gameItemsStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
gameItemsStatisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gameItemsStatistics.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\GameItemsStatistics::__invoke
* @see app/Filament/Pages/Logs/GameItemsStatistics.php:7
* @route '/admin/game-items-statistics'
*/
gameItemsStatisticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gameItemsStatistics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

gameItemsStatistics.form = gameItemsStatisticsForm

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
export const paymentLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paymentLogs.url(options),
    method: 'get',
})

paymentLogs.definition = {
    methods: ["get","head"],
    url: '/admin/payment-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
paymentLogs.url = (options?: RouteQueryOptions) => {
    return paymentLogs.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
paymentLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paymentLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
paymentLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: paymentLogs.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
const paymentLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
paymentLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentLogs.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\PaymentLogs::__invoke
* @see app/Filament/Pages/Logs/PaymentLogs.php:7
* @route '/admin/payment-logs'
*/
paymentLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentLogs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

paymentLogs.form = paymentLogsForm

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
export const registrationsLog = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registrationsLog.url(options),
    method: 'get',
})

registrationsLog.definition = {
    methods: ["get","head"],
    url: '/admin/registrations-log',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
registrationsLog.url = (options?: RouteQueryOptions) => {
    return registrationsLog.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
registrationsLog.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registrationsLog.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
registrationsLog.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registrationsLog.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
const registrationsLogForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registrationsLog.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
registrationsLogForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registrationsLog.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\RegistrationsLog::__invoke
* @see app/Filament/Pages/Logs/RegistrationsLog.php:7
* @route '/admin/registrations-log'
*/
registrationsLogForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registrationsLog.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

registrationsLog.form = registrationsLogForm

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
export const serverErrors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serverErrors.url(options),
    method: 'get',
})

serverErrors.definition = {
    methods: ["get","head"],
    url: '/admin/server-errors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
serverErrors.url = (options?: RouteQueryOptions) => {
    return serverErrors.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
serverErrors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serverErrors.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
serverErrors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: serverErrors.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
const serverErrorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serverErrors.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
serverErrorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serverErrors.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\ServerErrors::__invoke
* @see app/Filament/Pages/Logs/ServerErrors.php:7
* @route '/admin/server-errors'
*/
serverErrorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serverErrors.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

serverErrors.form = serverErrorsForm

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
export const userLogs = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userLogs.url(args, options),
    method: 'get',
})

userLogs.definition = {
    methods: ["get","head"],
    url: '/admin/user-logs/{user?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
userLogs.url = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "user",
    ])

    const parsedArgs = {
        user: args?.user,
    }

    return userLogs.definition.url
            .replace('{user?}', parsedArgs.user?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
userLogs.get = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: userLogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
userLogs.head = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: userLogs.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
const userLogsForm = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userLogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
userLogsForm.get = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userLogs.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Logs\UserLogs::__invoke
* @see app/Filament/Pages/Logs/UserLogs.php:7
* @route '/admin/user-logs/{user?}'
*/
userLogsForm.head = (args?: { user?: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: userLogs.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

userLogs.form = userLogsForm

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
export const serverStatusPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serverStatusPage.url(options),
    method: 'get',
})

serverStatusPage.definition = {
    methods: ["get","head"],
    url: '/admin/server-status-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
serverStatusPage.url = (options?: RouteQueryOptions) => {
    return serverStatusPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
serverStatusPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serverStatusPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
serverStatusPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: serverStatusPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
const serverStatusPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serverStatusPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
serverStatusPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serverStatusPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\ServerStatusPage::__invoke
* @see app/Filament/Pages/ServerStatusPage.php:7
* @route '/admin/server-status-page'
*/
serverStatusPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: serverStatusPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

serverStatusPage.form = serverStatusPageForm

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
export const authSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authSettings.url(options),
    method: 'get',
})

authSettings.definition = {
    methods: ["get","head"],
    url: '/admin/auth-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
authSettings.url = (options?: RouteQueryOptions) => {
    return authSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
authSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
authSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: authSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
const authSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
authSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\AuthSettings::__invoke
* @see app/Filament/Pages/Settings/AuthSettings.php:7
* @route '/admin/auth-settings'
*/
authSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: authSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

authSettings.form = authSettingsForm

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
export const currencyRatesSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: currencyRatesSettings.url(options),
    method: 'get',
})

currencyRatesSettings.definition = {
    methods: ["get","head"],
    url: '/admin/currency-rates-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
currencyRatesSettings.url = (options?: RouteQueryOptions) => {
    return currencyRatesSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
currencyRatesSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: currencyRatesSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
currencyRatesSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: currencyRatesSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
const currencyRatesSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: currencyRatesSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
currencyRatesSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: currencyRatesSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\CurrencyRatesSettings::__invoke
* @see app/Filament/Pages/Settings/CurrencyRatesSettings.php:7
* @route '/admin/currency-rates-settings'
*/
currencyRatesSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: currencyRatesSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

currencyRatesSettings.form = currencyRatesSettingsForm

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
export const gameApiSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gameApiSettings.url(options),
    method: 'get',
})

gameApiSettings.definition = {
    methods: ["get","head"],
    url: '/admin/game-api-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
gameApiSettings.url = (options?: RouteQueryOptions) => {
    return gameApiSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
gameApiSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gameApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
gameApiSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: gameApiSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
const gameApiSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gameApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
gameApiSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gameApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GameApiSettings::__invoke
* @see app/Filament/Pages/Settings/GameApiSettings.php:7
* @route '/admin/game-api-settings'
*/
gameApiSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gameApiSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

gameApiSettings.form = gameApiSettingsForm

/**
* @see \App\Filament\Pages\Settings\GeneralSettings::__invoke
* @see app/Filament/Pages/Settings/GeneralSettings.php:7
* @route '/admin/general-settings'
*/
export const generalSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettings.url(options),
    method: 'get',
})

generalSettings.definition = {
    methods: ["get","head"],
    url: '/admin/general-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\GeneralSettings::__invoke
* @see app/Filament/Pages/Settings/GeneralSettings.php:7
* @route '/admin/general-settings'
*/
generalSettings.url = (options?: RouteQueryOptions) => {
    return generalSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\GeneralSettings::__invoke
* @see app/Filament/Pages/Settings/GeneralSettings.php:7
* @route '/admin/general-settings'
*/
generalSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GeneralSettings::__invoke
* @see app/Filament/Pages/Settings/GeneralSettings.php:7
* @route '/admin/general-settings'
*/
generalSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generalSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\GeneralSettings::__invoke
* @see app/Filament/Pages/Settings/GeneralSettings.php:7
* @route '/admin/general-settings'
*/
const generalSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GeneralSettings::__invoke
* @see app/Filament/Pages/Settings/GeneralSettings.php:7
* @route '/admin/general-settings'
*/
generalSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\GeneralSettings::__invoke
* @see app/Filament/Pages/Settings/GeneralSettings.php:7
* @route '/admin/general-settings'
*/
generalSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generalSettings.form = generalSettingsForm

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
export const paymentSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paymentSettings.url(options),
    method: 'get',
})

paymentSettings.definition = {
    methods: ["get","head"],
    url: '/admin/payment-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
paymentSettings.url = (options?: RouteQueryOptions) => {
    return paymentSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
paymentSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: paymentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
paymentSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: paymentSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
const paymentSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
paymentSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\PaymentSettings::__invoke
* @see app/Filament/Pages/Settings/PaymentSettings.php:7
* @route '/admin/payment-settings'
*/
paymentSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: paymentSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

paymentSettings.form = paymentSettingsForm

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
export const recaptchaSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recaptchaSettings.url(options),
    method: 'get',
})

recaptchaSettings.definition = {
    methods: ["get","head"],
    url: '/admin/recaptcha-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
recaptchaSettings.url = (options?: RouteQueryOptions) => {
    return recaptchaSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
recaptchaSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recaptchaSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
recaptchaSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recaptchaSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
const recaptchaSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recaptchaSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
recaptchaSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recaptchaSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\RecaptchaSettings::__invoke
* @see app/Filament/Pages/Settings/RecaptchaSettings.php:7
* @route '/admin/recaptcha-settings'
*/
recaptchaSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recaptchaSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

recaptchaSettings.form = recaptchaSettingsForm

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
export const siteContentSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: siteContentSettings.url(options),
    method: 'get',
})

siteContentSettings.definition = {
    methods: ["get","head"],
    url: '/admin/site-content-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
siteContentSettings.url = (options?: RouteQueryOptions) => {
    return siteContentSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
siteContentSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: siteContentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
siteContentSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: siteContentSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
const siteContentSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: siteContentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
siteContentSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: siteContentSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SiteContentSettings::__invoke
* @see app/Filament/Pages/Settings/SiteContentSettings.php:7
* @route '/admin/site-content-settings'
*/
siteContentSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: siteContentSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

siteContentSettings.form = siteContentSettingsForm

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
export const skinsbackApiSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skinsbackApiSettings.url(options),
    method: 'get',
})

skinsbackApiSettings.definition = {
    methods: ["get","head"],
    url: '/admin/skinsback-api-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
skinsbackApiSettings.url = (options?: RouteQueryOptions) => {
    return skinsbackApiSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
skinsbackApiSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skinsbackApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
skinsbackApiSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: skinsbackApiSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
const skinsbackApiSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsbackApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
skinsbackApiSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsbackApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SkinsbackApiSettings::__invoke
* @see app/Filament/Pages/Settings/SkinsbackApiSettings.php:7
* @route '/admin/skinsback-api-settings'
*/
skinsbackApiSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsbackApiSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

skinsbackApiSettings.form = skinsbackApiSettingsForm

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
export const smtpSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: smtpSettings.url(options),
    method: 'get',
})

smtpSettings.definition = {
    methods: ["get","head"],
    url: '/admin/smtp-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
smtpSettings.url = (options?: RouteQueryOptions) => {
    return smtpSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
smtpSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: smtpSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
smtpSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: smtpSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
const smtpSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: smtpSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
smtpSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: smtpSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SmtpSettings::__invoke
* @see app/Filament/Pages/Settings/SmtpSettings.php:7
* @route '/admin/smtp-settings'
*/
smtpSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: smtpSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

smtpSettings.form = smtpSettingsForm

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
export const socialSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: socialSettings.url(options),
    method: 'get',
})

socialSettings.definition = {
    methods: ["get","head"],
    url: '/admin/social-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
socialSettings.url = (options?: RouteQueryOptions) => {
    return socialSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
socialSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: socialSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
socialSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: socialSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
const socialSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: socialSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
socialSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: socialSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SocialSettings::__invoke
* @see app/Filament/Pages/Settings/SocialSettings.php:7
* @route '/admin/social-settings'
*/
socialSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: socialSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

socialSettings.form = socialSettingsForm

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
export const steamSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: steamSettings.url(options),
    method: 'get',
})

steamSettings.definition = {
    methods: ["get","head"],
    url: '/admin/steam-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
steamSettings.url = (options?: RouteQueryOptions) => {
    return steamSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
steamSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: steamSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
steamSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: steamSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
const steamSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: steamSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
steamSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: steamSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\SteamSettings::__invoke
* @see app/Filament/Pages/Settings/SteamSettings.php:7
* @route '/admin/steam-settings'
*/
steamSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: steamSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

steamSettings.form = steamSettingsForm

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
export const waxpeerApiSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: waxpeerApiSettings.url(options),
    method: 'get',
})

waxpeerApiSettings.definition = {
    methods: ["get","head"],
    url: '/admin/waxpeer-api-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
waxpeerApiSettings.url = (options?: RouteQueryOptions) => {
    return waxpeerApiSettings.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
waxpeerApiSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: waxpeerApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
waxpeerApiSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: waxpeerApiSettings.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
const waxpeerApiSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeerApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
waxpeerApiSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeerApiSettings.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\Settings\WaxpeerApiSettings::__invoke
* @see app/Filament/Pages/Settings/WaxpeerApiSettings.php:7
* @route '/admin/waxpeer-api-settings'
*/
waxpeerApiSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeerApiSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

waxpeerApiSettings.form = waxpeerApiSettingsForm

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
export const updateItemsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updateItemsPage.url(options),
    method: 'get',
})

updateItemsPage.definition = {
    methods: ["get","head"],
    url: '/admin/update-items-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
updateItemsPage.url = (options?: RouteQueryOptions) => {
    return updateItemsPage.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
updateItemsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updateItemsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
updateItemsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: updateItemsPage.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
const updateItemsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: updateItemsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
updateItemsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: updateItemsPage.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Pages\UpdateItemsPage::__invoke
* @see app/Filament/Pages/UpdateItemsPage.php:7
* @route '/admin/update-items-page'
*/
updateItemsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: updateItemsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

updateItemsPage.form = updateItemsPageForm

const pages = {
    mainDashboard: Object.assign(mainDashboard, mainDashboard),
    rolesPage: Object.assign(rolesPage, rolesPage),
    bansPage: Object.assign(bansPage, bansPage),
    adminLogs: Object.assign(adminLogs, adminLogs),
    gameItemsStatistics: Object.assign(gameItemsStatistics, gameItemsStatistics),
    paymentLogs: Object.assign(paymentLogs, paymentLogs),
    registrationsLog: Object.assign(registrationsLog, registrationsLog),
    serverErrors: Object.assign(serverErrors, serverErrors),
    userLogs: Object.assign(userLogs, userLogs),
    serverStatusPage: Object.assign(serverStatusPage, serverStatusPage),
    authSettings: Object.assign(authSettings, authSettings),
    currencyRatesSettings: Object.assign(currencyRatesSettings, currencyRatesSettings),
    gameApiSettings: Object.assign(gameApiSettings, gameApiSettings),
    generalSettings: Object.assign(generalSettings, generalSettings),
    paymentSettings: Object.assign(paymentSettings, paymentSettings),
    recaptchaSettings: Object.assign(recaptchaSettings, recaptchaSettings),
    siteContentSettings: Object.assign(siteContentSettings, siteContentSettings),
    skinsbackApiSettings: Object.assign(skinsbackApiSettings, skinsbackApiSettings),
    smtpSettings: Object.assign(smtpSettings, smtpSettings),
    socialSettings: Object.assign(socialSettings, socialSettings),
    steamSettings: Object.assign(steamSettings, steamSettings),
    waxpeerApiSettings: Object.assign(waxpeerApiSettings, waxpeerApiSettings),
    updateItemsPage: Object.assign(updateItemsPage, updateItemsPage),
}

export default pages
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Filament\Pages\Dashboard::__invoke
* @see vendor/filament/filament/src/Pages/Dashboard.php:7
* @route '/admin'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

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

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    authSettings: Object.assign(authSettings, authSettings),
    gameApiSettings: Object.assign(gameApiSettings, gameApiSettings),
    generalSettings: Object.assign(generalSettings, generalSettings),
    paymentSettings: Object.assign(paymentSettings, paymentSettings),
    recaptchaSettings: Object.assign(recaptchaSettings, recaptchaSettings),
    smtpSettings: Object.assign(smtpSettings, smtpSettings),
    socialSettings: Object.assign(socialSettings, socialSettings),
    steamSettings: Object.assign(steamSettings, steamSettings),
}

export default pages
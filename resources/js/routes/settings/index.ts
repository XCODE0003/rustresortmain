import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\SettingsController::site
* @see app/Http/Controllers/Backend/SettingsController.php:35
* @route '/backend_uc7BgHFmw32FDIEp/settings/site'
*/
export const site = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site.url(options),
    method: 'get',
})

site.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/site',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::site
* @see app/Http/Controllers/Backend/SettingsController.php:35
* @route '/backend_uc7BgHFmw32FDIEp/settings/site'
*/
site.url = (options?: RouteQueryOptions) => {
    return site.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::site
* @see app/Http/Controllers/Backend/SettingsController.php:35
* @route '/backend_uc7BgHFmw32FDIEp/settings/site'
*/
site.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::site
* @see app/Http/Controllers/Backend/SettingsController.php:35
* @route '/backend_uc7BgHFmw32FDIEp/settings/site'
*/
site.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: site.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::site
* @see app/Http/Controllers/Backend/SettingsController.php:35
* @route '/backend_uc7BgHFmw32FDIEp/settings/site'
*/
const siteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: site.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::site
* @see app/Http/Controllers/Backend/SettingsController.php:35
* @route '/backend_uc7BgHFmw32FDIEp/settings/site'
*/
siteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: site.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::site
* @see app/Http/Controllers/Backend/SettingsController.php:35
* @route '/backend_uc7BgHFmw32FDIEp/settings/site'
*/
siteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: site.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

site.form = siteForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::project_name
* @see app/Http/Controllers/Backend/SettingsController.php:39
* @route '/backend_uc7BgHFmw32FDIEp/settings/project_name'
*/
export const project_name = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: project_name.url(options),
    method: 'get',
})

project_name.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/project_name',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::project_name
* @see app/Http/Controllers/Backend/SettingsController.php:39
* @route '/backend_uc7BgHFmw32FDIEp/settings/project_name'
*/
project_name.url = (options?: RouteQueryOptions) => {
    return project_name.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::project_name
* @see app/Http/Controllers/Backend/SettingsController.php:39
* @route '/backend_uc7BgHFmw32FDIEp/settings/project_name'
*/
project_name.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: project_name.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::project_name
* @see app/Http/Controllers/Backend/SettingsController.php:39
* @route '/backend_uc7BgHFmw32FDIEp/settings/project_name'
*/
project_name.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: project_name.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::project_name
* @see app/Http/Controllers/Backend/SettingsController.php:39
* @route '/backend_uc7BgHFmw32FDIEp/settings/project_name'
*/
const project_nameForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: project_name.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::project_name
* @see app/Http/Controllers/Backend/SettingsController.php:39
* @route '/backend_uc7BgHFmw32FDIEp/settings/project_name'
*/
project_nameForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: project_name.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::project_name
* @see app/Http/Controllers/Backend/SettingsController.php:39
* @route '/backend_uc7BgHFmw32FDIEp/settings/project_name'
*/
project_nameForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: project_name.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

project_name.form = project_nameForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::robots
* @see app/Http/Controllers/Backend/SettingsController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/settings/robots'
*/
export const robots = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: robots.url(options),
    method: 'get',
})

robots.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/robots',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::robots
* @see app/Http/Controllers/Backend/SettingsController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/settings/robots'
*/
robots.url = (options?: RouteQueryOptions) => {
    return robots.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::robots
* @see app/Http/Controllers/Backend/SettingsController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/settings/robots'
*/
robots.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: robots.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::robots
* @see app/Http/Controllers/Backend/SettingsController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/settings/robots'
*/
robots.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: robots.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::robots
* @see app/Http/Controllers/Backend/SettingsController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/settings/robots'
*/
const robotsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: robots.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::robots
* @see app/Http/Controllers/Backend/SettingsController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/settings/robots'
*/
robotsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: robots.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::robots
* @see app/Http/Controllers/Backend/SettingsController.php:43
* @route '/backend_uc7BgHFmw32FDIEp/settings/robots'
*/
robotsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: robots.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

robots.form = robotsForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::sitemap
* @see app/Http/Controllers/Backend/SettingsController.php:47
* @route '/backend_uc7BgHFmw32FDIEp/settings/sitemap'
*/
export const sitemap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sitemap.url(options),
    method: 'get',
})

sitemap.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/sitemap',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::sitemap
* @see app/Http/Controllers/Backend/SettingsController.php:47
* @route '/backend_uc7BgHFmw32FDIEp/settings/sitemap'
*/
sitemap.url = (options?: RouteQueryOptions) => {
    return sitemap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::sitemap
* @see app/Http/Controllers/Backend/SettingsController.php:47
* @route '/backend_uc7BgHFmw32FDIEp/settings/sitemap'
*/
sitemap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sitemap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sitemap
* @see app/Http/Controllers/Backend/SettingsController.php:47
* @route '/backend_uc7BgHFmw32FDIEp/settings/sitemap'
*/
sitemap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sitemap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sitemap
* @see app/Http/Controllers/Backend/SettingsController.php:47
* @route '/backend_uc7BgHFmw32FDIEp/settings/sitemap'
*/
const sitemapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sitemap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sitemap
* @see app/Http/Controllers/Backend/SettingsController.php:47
* @route '/backend_uc7BgHFmw32FDIEp/settings/sitemap'
*/
sitemapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sitemap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sitemap
* @see app/Http/Controllers/Backend/SettingsController.php:47
* @route '/backend_uc7BgHFmw32FDIEp/settings/sitemap'
*/
sitemapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sitemap.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sitemap.form = sitemapForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::langs
* @see app/Http/Controllers/Backend/SettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/langs'
*/
export const langs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: langs.url(options),
    method: 'get',
})

langs.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/langs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::langs
* @see app/Http/Controllers/Backend/SettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/langs'
*/
langs.url = (options?: RouteQueryOptions) => {
    return langs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::langs
* @see app/Http/Controllers/Backend/SettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/langs'
*/
langs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: langs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::langs
* @see app/Http/Controllers/Backend/SettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/langs'
*/
langs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: langs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::langs
* @see app/Http/Controllers/Backend/SettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/langs'
*/
const langsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: langs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::langs
* @see app/Http/Controllers/Backend/SettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/langs'
*/
langsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: langs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::langs
* @see app/Http/Controllers/Backend/SettingsController.php:51
* @route '/backend_uc7BgHFmw32FDIEp/settings/langs'
*/
langsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: langs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

langs.form = langsForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::analitics
* @see app/Http/Controllers/Backend/SettingsController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/settings/analitics'
*/
export const analitics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analitics.url(options),
    method: 'get',
})

analitics.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/analitics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::analitics
* @see app/Http/Controllers/Backend/SettingsController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/settings/analitics'
*/
analitics.url = (options?: RouteQueryOptions) => {
    return analitics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::analitics
* @see app/Http/Controllers/Backend/SettingsController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/settings/analitics'
*/
analitics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analitics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::analitics
* @see app/Http/Controllers/Backend/SettingsController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/settings/analitics'
*/
analitics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analitics.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::analitics
* @see app/Http/Controllers/Backend/SettingsController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/settings/analitics'
*/
const analiticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: analitics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::analitics
* @see app/Http/Controllers/Backend/SettingsController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/settings/analitics'
*/
analiticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: analitics.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::analitics
* @see app/Http/Controllers/Backend/SettingsController.php:55
* @route '/backend_uc7BgHFmw32FDIEp/settings/analitics'
*/
analiticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: analitics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

analitics.form = analiticsForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::about
* @see app/Http/Controllers/Backend/SettingsController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/settings/about'
*/
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::about
* @see app/Http/Controllers/Backend/SettingsController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/settings/about'
*/
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::about
* @see app/Http/Controllers/Backend/SettingsController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/settings/about'
*/
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::about
* @see app/Http/Controllers/Backend/SettingsController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/settings/about'
*/
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::about
* @see app/Http/Controllers/Backend/SettingsController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/settings/about'
*/
const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::about
* @see app/Http/Controllers/Backend/SettingsController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/settings/about'
*/
aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::about
* @see app/Http/Controllers/Backend/SettingsController.php:59
* @route '/backend_uc7BgHFmw32FDIEp/settings/about'
*/
aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: about.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

about.form = aboutForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::download
* @see app/Http/Controllers/Backend/SettingsController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/settings/download'
*/
export const download = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::download
* @see app/Http/Controllers/Backend/SettingsController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/settings/download'
*/
download.url = (options?: RouteQueryOptions) => {
    return download.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::download
* @see app/Http/Controllers/Backend/SettingsController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/settings/download'
*/
download.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::download
* @see app/Http/Controllers/Backend/SettingsController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/settings/download'
*/
download.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::download
* @see app/Http/Controllers/Backend/SettingsController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/settings/download'
*/
const downloadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::download
* @see app/Http/Controllers/Backend/SettingsController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/settings/download'
*/
downloadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::download
* @see app/Http/Controllers/Backend/SettingsController.php:63
* @route '/backend_uc7BgHFmw32FDIEp/settings/download'
*/
downloadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::login
* @see app/Http/Controllers/Backend/SettingsController.php:67
* @route '/backend_uc7BgHFmw32FDIEp/settings/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::login
* @see app/Http/Controllers/Backend/SettingsController.php:67
* @route '/backend_uc7BgHFmw32FDIEp/settings/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::login
* @see app/Http/Controllers/Backend/SettingsController.php:67
* @route '/backend_uc7BgHFmw32FDIEp/settings/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login
* @see app/Http/Controllers/Backend/SettingsController.php:67
* @route '/backend_uc7BgHFmw32FDIEp/settings/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login
* @see app/Http/Controllers/Backend/SettingsController.php:67
* @route '/backend_uc7BgHFmw32FDIEp/settings/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login
* @see app/Http/Controllers/Backend/SettingsController.php:67
* @route '/backend_uc7BgHFmw32FDIEp/settings/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login
* @see app/Http/Controllers/Backend/SettingsController.php:67
* @route '/backend_uc7BgHFmw32FDIEp/settings/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::login_steam
* @see app/Http/Controllers/Backend/SettingsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/settings/login_steam'
*/
export const login_steam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login_steam.url(options),
    method: 'get',
})

login_steam.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/login_steam',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::login_steam
* @see app/Http/Controllers/Backend/SettingsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/settings/login_steam'
*/
login_steam.url = (options?: RouteQueryOptions) => {
    return login_steam.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::login_steam
* @see app/Http/Controllers/Backend/SettingsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/settings/login_steam'
*/
login_steam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login_steam.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login_steam
* @see app/Http/Controllers/Backend/SettingsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/settings/login_steam'
*/
login_steam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login_steam.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login_steam
* @see app/Http/Controllers/Backend/SettingsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/settings/login_steam'
*/
const login_steamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login_steam.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login_steam
* @see app/Http/Controllers/Backend/SettingsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/settings/login_steam'
*/
login_steamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login_steam.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::login_steam
* @see app/Http/Controllers/Backend/SettingsController.php:71
* @route '/backend_uc7BgHFmw32FDIEp/settings/login_steam'
*/
login_steamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login_steam.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login_steam.form = login_steamForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::policy
* @see app/Http/Controllers/Backend/SettingsController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/settings/policy'
*/
export const policy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: policy.url(options),
    method: 'get',
})

policy.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::policy
* @see app/Http/Controllers/Backend/SettingsController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/settings/policy'
*/
policy.url = (options?: RouteQueryOptions) => {
    return policy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::policy
* @see app/Http/Controllers/Backend/SettingsController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/settings/policy'
*/
policy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: policy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::policy
* @see app/Http/Controllers/Backend/SettingsController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/settings/policy'
*/
policy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: policy.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::policy
* @see app/Http/Controllers/Backend/SettingsController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/settings/policy'
*/
const policyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: policy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::policy
* @see app/Http/Controllers/Backend/SettingsController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/settings/policy'
*/
policyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: policy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::policy
* @see app/Http/Controllers/Backend/SettingsController.php:95
* @route '/backend_uc7BgHFmw32FDIEp/settings/policy'
*/
policyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: policy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

policy.form = policyForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::forum
* @see app/Http/Controllers/Backend/SettingsController.php:99
* @route '/backend_uc7BgHFmw32FDIEp/settings/forum'
*/
export const forum = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forum.url(options),
    method: 'get',
})

forum.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/forum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::forum
* @see app/Http/Controllers/Backend/SettingsController.php:99
* @route '/backend_uc7BgHFmw32FDIEp/settings/forum'
*/
forum.url = (options?: RouteQueryOptions) => {
    return forum.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::forum
* @see app/Http/Controllers/Backend/SettingsController.php:99
* @route '/backend_uc7BgHFmw32FDIEp/settings/forum'
*/
forum.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forum.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::forum
* @see app/Http/Controllers/Backend/SettingsController.php:99
* @route '/backend_uc7BgHFmw32FDIEp/settings/forum'
*/
forum.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forum.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::forum
* @see app/Http/Controllers/Backend/SettingsController.php:99
* @route '/backend_uc7BgHFmw32FDIEp/settings/forum'
*/
const forumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forum.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::forum
* @see app/Http/Controllers/Backend/SettingsController.php:99
* @route '/backend_uc7BgHFmw32FDIEp/settings/forum'
*/
forumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forum.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::forum
* @see app/Http/Controllers/Backend/SettingsController.php:99
* @route '/backend_uc7BgHFmw32FDIEp/settings/forum'
*/
forumForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: forum.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

forum.form = forumForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::social
* @see app/Http/Controllers/Backend/SettingsController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/settings/social'
*/
export const social = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: social.url(options),
    method: 'get',
})

social.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/social',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::social
* @see app/Http/Controllers/Backend/SettingsController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/settings/social'
*/
social.url = (options?: RouteQueryOptions) => {
    return social.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::social
* @see app/Http/Controllers/Backend/SettingsController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/settings/social'
*/
social.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: social.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::social
* @see app/Http/Controllers/Backend/SettingsController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/settings/social'
*/
social.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: social.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::social
* @see app/Http/Controllers/Backend/SettingsController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/settings/social'
*/
const socialForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: social.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::social
* @see app/Http/Controllers/Backend/SettingsController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/settings/social'
*/
socialForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: social.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::social
* @see app/Http/Controllers/Backend/SettingsController.php:103
* @route '/backend_uc7BgHFmw32FDIEp/settings/social'
*/
socialForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: social.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

social.form = socialForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::donat
* @see app/Http/Controllers/Backend/SettingsController.php:107
* @route '/backend_uc7BgHFmw32FDIEp/settings/donat'
*/
export const donat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: donat.url(options),
    method: 'get',
})

donat.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/donat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::donat
* @see app/Http/Controllers/Backend/SettingsController.php:107
* @route '/backend_uc7BgHFmw32FDIEp/settings/donat'
*/
donat.url = (options?: RouteQueryOptions) => {
    return donat.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::donat
* @see app/Http/Controllers/Backend/SettingsController.php:107
* @route '/backend_uc7BgHFmw32FDIEp/settings/donat'
*/
donat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: donat.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::donat
* @see app/Http/Controllers/Backend/SettingsController.php:107
* @route '/backend_uc7BgHFmw32FDIEp/settings/donat'
*/
donat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: donat.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::donat
* @see app/Http/Controllers/Backend/SettingsController.php:107
* @route '/backend_uc7BgHFmw32FDIEp/settings/donat'
*/
const donatForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: donat.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::donat
* @see app/Http/Controllers/Backend/SettingsController.php:107
* @route '/backend_uc7BgHFmw32FDIEp/settings/donat'
*/
donatForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: donat.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::donat
* @see app/Http/Controllers/Backend/SettingsController.php:107
* @route '/backend_uc7BgHFmw32FDIEp/settings/donat'
*/
donatForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: donat.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

donat.form = donatForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::services
* @see app/Http/Controllers/Backend/SettingsController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/settings/services'
*/
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::services
* @see app/Http/Controllers/Backend/SettingsController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/settings/services'
*/
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::services
* @see app/Http/Controllers/Backend/SettingsController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/settings/services'
*/
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::services
* @see app/Http/Controllers/Backend/SettingsController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/settings/services'
*/
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::services
* @see app/Http/Controllers/Backend/SettingsController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/settings/services'
*/
const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::services
* @see app/Http/Controllers/Backend/SettingsController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/settings/services'
*/
servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::services
* @see app/Http/Controllers/Backend/SettingsController.php:112
* @route '/backend_uc7BgHFmw32FDIEp/settings/services'
*/
servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: services.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

services.form = servicesForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::smtp
* @see app/Http/Controllers/Backend/SettingsController.php:124
* @route '/backend_uc7BgHFmw32FDIEp/settings/smtp'
*/
export const smtp = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: smtp.url(options),
    method: 'get',
})

smtp.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/smtp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::smtp
* @see app/Http/Controllers/Backend/SettingsController.php:124
* @route '/backend_uc7BgHFmw32FDIEp/settings/smtp'
*/
smtp.url = (options?: RouteQueryOptions) => {
    return smtp.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::smtp
* @see app/Http/Controllers/Backend/SettingsController.php:124
* @route '/backend_uc7BgHFmw32FDIEp/settings/smtp'
*/
smtp.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: smtp.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::smtp
* @see app/Http/Controllers/Backend/SettingsController.php:124
* @route '/backend_uc7BgHFmw32FDIEp/settings/smtp'
*/
smtp.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: smtp.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::smtp
* @see app/Http/Controllers/Backend/SettingsController.php:124
* @route '/backend_uc7BgHFmw32FDIEp/settings/smtp'
*/
const smtpForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: smtp.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::smtp
* @see app/Http/Controllers/Backend/SettingsController.php:124
* @route '/backend_uc7BgHFmw32FDIEp/settings/smtp'
*/
smtpForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: smtp.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::smtp
* @see app/Http/Controllers/Backend/SettingsController.php:124
* @route '/backend_uc7BgHFmw32FDIEp/settings/smtp'
*/
smtpForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: smtp.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

smtp.form = smtpForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::recaptcha
* @see app/Http/Controllers/Backend/SettingsController.php:128
* @route '/backend_uc7BgHFmw32FDIEp/settings/recaptcha'
*/
export const recaptcha = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recaptcha.url(options),
    method: 'get',
})

recaptcha.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/recaptcha',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::recaptcha
* @see app/Http/Controllers/Backend/SettingsController.php:128
* @route '/backend_uc7BgHFmw32FDIEp/settings/recaptcha'
*/
recaptcha.url = (options?: RouteQueryOptions) => {
    return recaptcha.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::recaptcha
* @see app/Http/Controllers/Backend/SettingsController.php:128
* @route '/backend_uc7BgHFmw32FDIEp/settings/recaptcha'
*/
recaptcha.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recaptcha.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::recaptcha
* @see app/Http/Controllers/Backend/SettingsController.php:128
* @route '/backend_uc7BgHFmw32FDIEp/settings/recaptcha'
*/
recaptcha.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recaptcha.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::recaptcha
* @see app/Http/Controllers/Backend/SettingsController.php:128
* @route '/backend_uc7BgHFmw32FDIEp/settings/recaptcha'
*/
const recaptchaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recaptcha.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::recaptcha
* @see app/Http/Controllers/Backend/SettingsController.php:128
* @route '/backend_uc7BgHFmw32FDIEp/settings/recaptcha'
*/
recaptchaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recaptcha.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::recaptcha
* @see app/Http/Controllers/Backend/SettingsController.php:128
* @route '/backend_uc7BgHFmw32FDIEp/settings/recaptcha'
*/
recaptchaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recaptcha.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

recaptcha.form = recaptchaForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::sms
* @see app/Http/Controllers/Backend/SettingsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/settings/sms'
*/
export const sms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sms.url(options),
    method: 'get',
})

sms.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/sms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::sms
* @see app/Http/Controllers/Backend/SettingsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/settings/sms'
*/
sms.url = (options?: RouteQueryOptions) => {
    return sms.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::sms
* @see app/Http/Controllers/Backend/SettingsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/settings/sms'
*/
sms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sms.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sms
* @see app/Http/Controllers/Backend/SettingsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/settings/sms'
*/
sms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sms.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sms
* @see app/Http/Controllers/Backend/SettingsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/settings/sms'
*/
const smsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sms.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sms
* @see app/Http/Controllers/Backend/SettingsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/settings/sms'
*/
smsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sms.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::sms
* @see app/Http/Controllers/Backend/SettingsController.php:132
* @route '/backend_uc7BgHFmw32FDIEp/settings/sms'
*/
smsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sms.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sms.form = smsForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::payments
* @see app/Http/Controllers/Backend/SettingsController.php:152
* @route '/backend_uc7BgHFmw32FDIEp/settings/payments'
*/
export const payments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payments.url(options),
    method: 'get',
})

payments.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::payments
* @see app/Http/Controllers/Backend/SettingsController.php:152
* @route '/backend_uc7BgHFmw32FDIEp/settings/payments'
*/
payments.url = (options?: RouteQueryOptions) => {
    return payments.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::payments
* @see app/Http/Controllers/Backend/SettingsController.php:152
* @route '/backend_uc7BgHFmw32FDIEp/settings/payments'
*/
payments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payments.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::payments
* @see app/Http/Controllers/Backend/SettingsController.php:152
* @route '/backend_uc7BgHFmw32FDIEp/settings/payments'
*/
payments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payments.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::payments
* @see app/Http/Controllers/Backend/SettingsController.php:152
* @route '/backend_uc7BgHFmw32FDIEp/settings/payments'
*/
const paymentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::payments
* @see app/Http/Controllers/Backend/SettingsController.php:152
* @route '/backend_uc7BgHFmw32FDIEp/settings/payments'
*/
paymentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::payments
* @see app/Http/Controllers/Backend/SettingsController.php:152
* @route '/backend_uc7BgHFmw32FDIEp/settings/payments'
*/
paymentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

payments.form = paymentsForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::streams
* @see app/Http/Controllers/Backend/SettingsController.php:136
* @route '/backend_uc7BgHFmw32FDIEp/settings/streams'
*/
export const streams = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: streams.url(options),
    method: 'get',
})

streams.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/streams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::streams
* @see app/Http/Controllers/Backend/SettingsController.php:136
* @route '/backend_uc7BgHFmw32FDIEp/settings/streams'
*/
streams.url = (options?: RouteQueryOptions) => {
    return streams.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::streams
* @see app/Http/Controllers/Backend/SettingsController.php:136
* @route '/backend_uc7BgHFmw32FDIEp/settings/streams'
*/
streams.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: streams.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::streams
* @see app/Http/Controllers/Backend/SettingsController.php:136
* @route '/backend_uc7BgHFmw32FDIEp/settings/streams'
*/
streams.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: streams.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::streams
* @see app/Http/Controllers/Backend/SettingsController.php:136
* @route '/backend_uc7BgHFmw32FDIEp/settings/streams'
*/
const streamsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: streams.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::streams
* @see app/Http/Controllers/Backend/SettingsController.php:136
* @route '/backend_uc7BgHFmw32FDIEp/settings/streams'
*/
streamsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: streams.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::streams
* @see app/Http/Controllers/Backend/SettingsController.php:136
* @route '/backend_uc7BgHFmw32FDIEp/settings/streams'
*/
streamsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: streams.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

streams.form = streamsForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::game_api
* @see app/Http/Controllers/Backend/SettingsController.php:168
* @route '/backend_uc7BgHFmw32FDIEp/settings/game_api'
*/
export const game_api = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: game_api.url(options),
    method: 'get',
})

game_api.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/game_api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::game_api
* @see app/Http/Controllers/Backend/SettingsController.php:168
* @route '/backend_uc7BgHFmw32FDIEp/settings/game_api'
*/
game_api.url = (options?: RouteQueryOptions) => {
    return game_api.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::game_api
* @see app/Http/Controllers/Backend/SettingsController.php:168
* @route '/backend_uc7BgHFmw32FDIEp/settings/game_api'
*/
game_api.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: game_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::game_api
* @see app/Http/Controllers/Backend/SettingsController.php:168
* @route '/backend_uc7BgHFmw32FDIEp/settings/game_api'
*/
game_api.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: game_api.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::game_api
* @see app/Http/Controllers/Backend/SettingsController.php:168
* @route '/backend_uc7BgHFmw32FDIEp/settings/game_api'
*/
const game_apiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: game_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::game_api
* @see app/Http/Controllers/Backend/SettingsController.php:168
* @route '/backend_uc7BgHFmw32FDIEp/settings/game_api'
*/
game_apiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: game_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::game_api
* @see app/Http/Controllers/Backend/SettingsController.php:168
* @route '/backend_uc7BgHFmw32FDIEp/settings/game_api'
*/
game_apiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: game_api.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

game_api.form = game_apiForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::waxpeer_api
* @see app/Http/Controllers/Backend/SettingsController.php:172
* @route '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api'
*/
export const waxpeer_api = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: waxpeer_api.url(options),
    method: 'get',
})

waxpeer_api.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::waxpeer_api
* @see app/Http/Controllers/Backend/SettingsController.php:172
* @route '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api'
*/
waxpeer_api.url = (options?: RouteQueryOptions) => {
    return waxpeer_api.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::waxpeer_api
* @see app/Http/Controllers/Backend/SettingsController.php:172
* @route '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api'
*/
waxpeer_api.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: waxpeer_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::waxpeer_api
* @see app/Http/Controllers/Backend/SettingsController.php:172
* @route '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api'
*/
waxpeer_api.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: waxpeer_api.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::waxpeer_api
* @see app/Http/Controllers/Backend/SettingsController.php:172
* @route '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api'
*/
const waxpeer_apiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeer_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::waxpeer_api
* @see app/Http/Controllers/Backend/SettingsController.php:172
* @route '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api'
*/
waxpeer_apiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeer_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::waxpeer_api
* @see app/Http/Controllers/Backend/SettingsController.php:172
* @route '/backend_uc7BgHFmw32FDIEp/settings/waxpeer_api'
*/
waxpeer_apiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: waxpeer_api.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

waxpeer_api.form = waxpeer_apiForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::skinsback_api
* @see app/Http/Controllers/Backend/SettingsController.php:176
* @route '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api'
*/
export const skinsback_api = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skinsback_api.url(options),
    method: 'get',
})

skinsback_api.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::skinsback_api
* @see app/Http/Controllers/Backend/SettingsController.php:176
* @route '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api'
*/
skinsback_api.url = (options?: RouteQueryOptions) => {
    return skinsback_api.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::skinsback_api
* @see app/Http/Controllers/Backend/SettingsController.php:176
* @route '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api'
*/
skinsback_api.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: skinsback_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::skinsback_api
* @see app/Http/Controllers/Backend/SettingsController.php:176
* @route '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api'
*/
skinsback_api.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: skinsback_api.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::skinsback_api
* @see app/Http/Controllers/Backend/SettingsController.php:176
* @route '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api'
*/
const skinsback_apiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsback_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::skinsback_api
* @see app/Http/Controllers/Backend/SettingsController.php:176
* @route '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api'
*/
skinsback_apiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsback_api.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::skinsback_api
* @see app/Http/Controllers/Backend/SettingsController.php:176
* @route '/backend_uc7BgHFmw32FDIEp/settings/skinsback_api'
*/
skinsback_apiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: skinsback_api.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

skinsback_api.form = skinsback_apiForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::falling_snow
* @see app/Http/Controllers/Backend/SettingsController.php:180
* @route '/backend_uc7BgHFmw32FDIEp/settings/falling_snow'
*/
export const falling_snow = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: falling_snow.url(options),
    method: 'get',
})

falling_snow.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/falling_snow',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::falling_snow
* @see app/Http/Controllers/Backend/SettingsController.php:180
* @route '/backend_uc7BgHFmw32FDIEp/settings/falling_snow'
*/
falling_snow.url = (options?: RouteQueryOptions) => {
    return falling_snow.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::falling_snow
* @see app/Http/Controllers/Backend/SettingsController.php:180
* @route '/backend_uc7BgHFmw32FDIEp/settings/falling_snow'
*/
falling_snow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: falling_snow.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::falling_snow
* @see app/Http/Controllers/Backend/SettingsController.php:180
* @route '/backend_uc7BgHFmw32FDIEp/settings/falling_snow'
*/
falling_snow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: falling_snow.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::falling_snow
* @see app/Http/Controllers/Backend/SettingsController.php:180
* @route '/backend_uc7BgHFmw32FDIEp/settings/falling_snow'
*/
const falling_snowForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: falling_snow.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::falling_snow
* @see app/Http/Controllers/Backend/SettingsController.php:180
* @route '/backend_uc7BgHFmw32FDIEp/settings/falling_snow'
*/
falling_snowForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: falling_snow.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::falling_snow
* @see app/Http/Controllers/Backend/SettingsController.php:180
* @route '/backend_uc7BgHFmw32FDIEp/settings/falling_snow'
*/
falling_snowForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: falling_snow.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

falling_snow.form = falling_snowForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses
* @see app/Http/Controllers/Backend/SettingsController.php:184
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses'
*/
export const bonuses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bonuses.url(options),
    method: 'get',
})

bonuses.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/bonuses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses
* @see app/Http/Controllers/Backend/SettingsController.php:184
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses'
*/
bonuses.url = (options?: RouteQueryOptions) => {
    return bonuses.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses
* @see app/Http/Controllers/Backend/SettingsController.php:184
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses'
*/
bonuses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bonuses.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses
* @see app/Http/Controllers/Backend/SettingsController.php:184
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses'
*/
bonuses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bonuses.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses
* @see app/Http/Controllers/Backend/SettingsController.php:184
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses'
*/
const bonusesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses
* @see app/Http/Controllers/Backend/SettingsController.php:184
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses'
*/
bonusesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses
* @see app/Http/Controllers/Backend/SettingsController.php:184
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses'
*/
bonusesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bonuses.form = bonusesForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_monday
* @see app/Http/Controllers/Backend/SettingsController.php:188
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday'
*/
export const bonuses_monday = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bonuses_monday.url(options),
    method: 'get',
})

bonuses_monday.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_monday
* @see app/Http/Controllers/Backend/SettingsController.php:188
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday'
*/
bonuses_monday.url = (options?: RouteQueryOptions) => {
    return bonuses_monday.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_monday
* @see app/Http/Controllers/Backend/SettingsController.php:188
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday'
*/
bonuses_monday.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bonuses_monday.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_monday
* @see app/Http/Controllers/Backend/SettingsController.php:188
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday'
*/
bonuses_monday.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bonuses_monday.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_monday
* @see app/Http/Controllers/Backend/SettingsController.php:188
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday'
*/
const bonuses_mondayForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses_monday.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_monday
* @see app/Http/Controllers/Backend/SettingsController.php:188
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday'
*/
bonuses_mondayForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses_monday.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_monday
* @see app/Http/Controllers/Backend/SettingsController.php:188
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_monday'
*/
bonuses_mondayForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses_monday.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bonuses_monday.form = bonuses_mondayForm

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_thursday
* @see app/Http/Controllers/Backend/SettingsController.php:192
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday'
*/
export const bonuses_thursday = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bonuses_thursday.url(options),
    method: 'get',
})

bonuses_thursday.definition = {
    methods: ["get","head"],
    url: '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_thursday
* @see app/Http/Controllers/Backend/SettingsController.php:192
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday'
*/
bonuses_thursday.url = (options?: RouteQueryOptions) => {
    return bonuses_thursday.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_thursday
* @see app/Http/Controllers/Backend/SettingsController.php:192
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday'
*/
bonuses_thursday.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bonuses_thursday.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_thursday
* @see app/Http/Controllers/Backend/SettingsController.php:192
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday'
*/
bonuses_thursday.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bonuses_thursday.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_thursday
* @see app/Http/Controllers/Backend/SettingsController.php:192
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday'
*/
const bonuses_thursdayForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses_thursday.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_thursday
* @see app/Http/Controllers/Backend/SettingsController.php:192
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday'
*/
bonuses_thursdayForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses_thursday.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Backend\SettingsController::bonuses_thursday
* @see app/Http/Controllers/Backend/SettingsController.php:192
* @route '/backend_uc7BgHFmw32FDIEp/settings/bonuses_thursday'
*/
bonuses_thursdayForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bonuses_thursday.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bonuses_thursday.form = bonuses_thursdayForm

const settings = {
    site: Object.assign(site, site),
    project_name: Object.assign(project_name, project_name),
    robots: Object.assign(robots, robots),
    sitemap: Object.assign(sitemap, sitemap),
    langs: Object.assign(langs, langs),
    analitics: Object.assign(analitics, analitics),
    about: Object.assign(about, about),
    download: Object.assign(download, download),
    login: Object.assign(login, login),
    login_steam: Object.assign(login_steam, login_steam),
    policy: Object.assign(policy, policy),
    forum: Object.assign(forum, forum),
    social: Object.assign(social, social),
    donat: Object.assign(donat, donat),
    services: Object.assign(services, services),
    smtp: Object.assign(smtp, smtp),
    recaptcha: Object.assign(recaptcha, recaptcha),
    sms: Object.assign(sms, sms),
    payments: Object.assign(payments, payments),
    streams: Object.assign(streams, streams),
    game_api: Object.assign(game_api, game_api),
    waxpeer_api: Object.assign(waxpeer_api, waxpeer_api),
    skinsback_api: Object.assign(skinsback_api, skinsback_api),
    falling_snow: Object.assign(falling_snow, falling_snow),
    bonuses: Object.assign(bonuses, bonuses),
    bonuses_monday: Object.assign(bonuses_monday, bonuses_monday),
    bonuses_thursday: Object.assign(bonuses_thursday, bonuses_thursday),
}

export default settings
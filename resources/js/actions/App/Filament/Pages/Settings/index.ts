import AuthSettings from './AuthSettings'
import CurrencyRatesSettings from './CurrencyRatesSettings'
import GameApiSettings from './GameApiSettings'
import GeneralSettings from './GeneralSettings'
import PaymentSettings from './PaymentSettings'
import RecaptchaSettings from './RecaptchaSettings'
import SiteContentSettings from './SiteContentSettings'
import SkinsbackApiSettings from './SkinsbackApiSettings'
import SmtpSettings from './SmtpSettings'
import SocialSettings from './SocialSettings'
import SteamSettings from './SteamSettings'
import WaxpeerApiSettings from './WaxpeerApiSettings'

const Settings = {
    AuthSettings: Object.assign(AuthSettings, AuthSettings),
    CurrencyRatesSettings: Object.assign(CurrencyRatesSettings, CurrencyRatesSettings),
    GameApiSettings: Object.assign(GameApiSettings, GameApiSettings),
    GeneralSettings: Object.assign(GeneralSettings, GeneralSettings),
    PaymentSettings: Object.assign(PaymentSettings, PaymentSettings),
    RecaptchaSettings: Object.assign(RecaptchaSettings, RecaptchaSettings),
    SiteContentSettings: Object.assign(SiteContentSettings, SiteContentSettings),
    SkinsbackApiSettings: Object.assign(SkinsbackApiSettings, SkinsbackApiSettings),
    SmtpSettings: Object.assign(SmtpSettings, SmtpSettings),
    SocialSettings: Object.assign(SocialSettings, SocialSettings),
    SteamSettings: Object.assign(SteamSettings, SteamSettings),
    WaxpeerApiSettings: Object.assign(WaxpeerApiSettings, WaxpeerApiSettings),
}

export default Settings
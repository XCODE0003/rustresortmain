import AuthSettings from './AuthSettings'
import GameApiSettings from './GameApiSettings'
import GeneralSettings from './GeneralSettings'
import PaymentSettings from './PaymentSettings'
import RecaptchaSettings from './RecaptchaSettings'
import SmtpSettings from './SmtpSettings'
import SocialSettings from './SocialSettings'
import SteamSettings from './SteamSettings'

const Settings = {
    AuthSettings: Object.assign(AuthSettings, AuthSettings),
    GameApiSettings: Object.assign(GameApiSettings, GameApiSettings),
    GeneralSettings: Object.assign(GeneralSettings, GeneralSettings),
    PaymentSettings: Object.assign(PaymentSettings, PaymentSettings),
    RecaptchaSettings: Object.assign(RecaptchaSettings, RecaptchaSettings),
    SmtpSettings: Object.assign(SmtpSettings, SmtpSettings),
    SocialSettings: Object.assign(SocialSettings, SocialSettings),
    SteamSettings: Object.assign(SteamSettings, SteamSettings),
}

export default Settings
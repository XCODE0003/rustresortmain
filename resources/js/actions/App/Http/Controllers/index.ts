import Auth from './Auth'
import Api from './Api'
import HomeController from './HomeController'
import LocaleController from './LocaleController'
import ArticleController from './ArticleController'
import ServerController from './ServerController'
import BansController from './BansController'
import ShopController from './ShopController'
import PaymentController from './PaymentController'
import BalanceController from './BalanceController'
import NotificationController from './NotificationController'
import PurchaseController from './PurchaseController'
import ProfileController from './ProfileController'
import FaqController from './FaqController'
import LegalPageController from './LegalPageController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    Api: Object.assign(Api, Api),
    HomeController: Object.assign(HomeController, HomeController),
    LocaleController: Object.assign(LocaleController, LocaleController),
    ArticleController: Object.assign(ArticleController, ArticleController),
    ServerController: Object.assign(ServerController, ServerController),
    BansController: Object.assign(BansController, BansController),
    ShopController: Object.assign(ShopController, ShopController),
    PaymentController: Object.assign(PaymentController, PaymentController),
    BalanceController: Object.assign(BalanceController, BalanceController),
    NotificationController: Object.assign(NotificationController, NotificationController),
    PurchaseController: Object.assign(PurchaseController, PurchaseController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    FaqController: Object.assign(FaqController, FaqController),
    LegalPageController: Object.assign(LegalPageController, LegalPageController),
}

export default Controllers
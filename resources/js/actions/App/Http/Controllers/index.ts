import Auth from './Auth'
import Api from './Api'
import HomeController from './HomeController'
import LocaleController from './LocaleController'
import ServerController from './ServerController'
import ShopController from './ShopController'
import CartController from './CartController'
import BalanceController from './BalanceController'
import PaymentController from './PaymentController'
import PurchaseController from './PurchaseController'
import ProfileController from './ProfileController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    Api: Object.assign(Api, Api),
    HomeController: Object.assign(HomeController, HomeController),
    LocaleController: Object.assign(LocaleController, LocaleController),
    ServerController: Object.assign(ServerController, ServerController),
    ShopController: Object.assign(ShopController, ShopController),
    CartController: Object.assign(CartController, CartController),
    BalanceController: Object.assign(BalanceController, BalanceController),
    PaymentController: Object.assign(PaymentController, PaymentController),
    PurchaseController: Object.assign(PurchaseController, PurchaseController),
    ProfileController: Object.assign(ProfileController, ProfileController),
}

export default Controllers
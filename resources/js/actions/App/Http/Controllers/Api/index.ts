import PaymentWebhookController from './PaymentWebhookController'
import ShopController from './ShopController'
import ServersStatisticsController from './ServersStatisticsController'
import ClearStatisticsController from './ClearStatisticsController'
import ServersWipeController from './ServersWipeController'
import PromoApiController from './PromoApiController'

const Api = {
    PaymentWebhookController: Object.assign(PaymentWebhookController, PaymentWebhookController),
    ShopController: Object.assign(ShopController, ShopController),
    ServersStatisticsController: Object.assign(ServersStatisticsController, ServersStatisticsController),
    ClearStatisticsController: Object.assign(ClearStatisticsController, ClearStatisticsController),
    ServersWipeController: Object.assign(ServersWipeController, ServersWipeController),
    PromoApiController: Object.assign(PromoApiController, PromoApiController),
}

export default Api
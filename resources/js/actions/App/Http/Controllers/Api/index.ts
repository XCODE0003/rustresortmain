import PaymentWebhookController from './PaymentWebhookController'
import ShopController from './ShopController'

const Api = {
    PaymentWebhookController: Object.assign(PaymentWebhookController, PaymentWebhookController),
    ShopController: Object.assign(ShopController, ShopController),
}

export default Api
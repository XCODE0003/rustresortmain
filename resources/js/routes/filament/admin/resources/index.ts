import articles from './articles'
import donates from './donates'
import faqs from './faqs'
import guides from './guides'
import legalPages from './legal-pages'
import paymentGateways from './payment-gateways'
import promoCodes from './promo-codes'
import rconTasks from './rcon-tasks'
import servers from './servers'
import shopCategories from './shop-categories'
import shopItems from './shop-items'
import shopPurchases from './shop-purchases'
import shopSets from './shop-sets'
import tickets from './tickets'
import users from './users'

const resources = {
    articles: Object.assign(articles, articles),
    donates: Object.assign(donates, donates),
    faqs: Object.assign(faqs, faqs),
    guides: Object.assign(guides, guides),
    legalPages: Object.assign(legalPages, legalPages),
    paymentGateways: Object.assign(paymentGateways, paymentGateways),
    promoCodes: Object.assign(promoCodes, promoCodes),
    rconTasks: Object.assign(rconTasks, rconTasks),
    servers: Object.assign(servers, servers),
    shopCategories: Object.assign(shopCategories, shopCategories),
    shopItems: Object.assign(shopItems, shopItems),
    shopPurchases: Object.assign(shopPurchases, shopPurchases),
    shopSets: Object.assign(shopSets, shopSets),
    tickets: Object.assign(tickets, tickets),
    users: Object.assign(users, users),
}

export default resources
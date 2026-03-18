import ListShopItems from './ListShopItems'
import CreateShopItem from './CreateShopItem'
import EditShopItem from './EditShopItem'

const Pages = {
    ListShopItems: Object.assign(ListShopItems, ListShopItems),
    CreateShopItem: Object.assign(CreateShopItem, CreateShopItem),
    EditShopItem: Object.assign(EditShopItem, EditShopItem),
}

export default Pages
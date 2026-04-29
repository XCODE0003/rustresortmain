import ListServerCategories from './ListServerCategories'
import CreateServerCategory from './CreateServerCategory'
import EditServerCategory from './EditServerCategory'

const Pages = {
    ListServerCategories: Object.assign(ListServerCategories, ListServerCategories),
    CreateServerCategory: Object.assign(CreateServerCategory, CreateServerCategory),
    EditServerCategory: Object.assign(EditServerCategory, EditServerCategory),
}

export default Pages
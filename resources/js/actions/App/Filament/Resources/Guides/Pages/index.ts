import ListGuides from './ListGuides'
import CreateGuide from './CreateGuide'
import EditGuide from './EditGuide'

const Pages = {
    ListGuides: Object.assign(ListGuides, ListGuides),
    CreateGuide: Object.assign(CreateGuide, CreateGuide),
    EditGuide: Object.assign(EditGuide, EditGuide),
}

export default Pages
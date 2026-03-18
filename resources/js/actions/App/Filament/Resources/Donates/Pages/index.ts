import ListDonates from './ListDonates'
import CreateDonate from './CreateDonate'
import EditDonate from './EditDonate'

const Pages = {
    ListDonates: Object.assign(ListDonates, ListDonates),
    CreateDonate: Object.assign(CreateDonate, CreateDonate),
    EditDonate: Object.assign(EditDonate, EditDonate),
}

export default Pages
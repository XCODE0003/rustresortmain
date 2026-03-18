import ListTickets from './ListTickets'
import CreateTicket from './CreateTicket'
import EditTicket from './EditTicket'

const Pages = {
    ListTickets: Object.assign(ListTickets, ListTickets),
    CreateTicket: Object.assign(CreateTicket, CreateTicket),
    EditTicket: Object.assign(EditTicket, EditTicket),
}

export default Pages
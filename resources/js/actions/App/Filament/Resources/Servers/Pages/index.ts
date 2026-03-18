import ListServers from './ListServers'
import CreateServer from './CreateServer'
import EditServer from './EditServer'

const Pages = {
    ListServers: Object.assign(ListServers, ListServers),
    CreateServer: Object.assign(CreateServer, CreateServer),
    EditServer: Object.assign(EditServer, EditServer),
}

export default Pages
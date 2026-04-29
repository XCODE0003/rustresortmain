import ListStreams from './ListStreams'
import CreateStream from './CreateStream'
import EditStream from './EditStream'

const Pages = {
    ListStreams: Object.assign(ListStreams, ListStreams),
    CreateStream: Object.assign(CreateStream, CreateStream),
    EditStream: Object.assign(EditStream, EditStream),
}

export default Pages
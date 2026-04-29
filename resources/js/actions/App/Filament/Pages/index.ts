import MainDashboard from './MainDashboard'
import Admin from './Admin'
import Bans from './Bans'
import Logs from './Logs'
import ServerStatusPage from './ServerStatusPage'
import Settings from './Settings'
import UpdateItemsPage from './UpdateItemsPage'

const Pages = {
    MainDashboard: Object.assign(MainDashboard, MainDashboard),
    Admin: Object.assign(Admin, Admin),
    Bans: Object.assign(Bans, Bans),
    Logs: Object.assign(Logs, Logs),
    ServerStatusPage: Object.assign(ServerStatusPage, ServerStatusPage),
    Settings: Object.assign(Settings, Settings),
    UpdateItemsPage: Object.assign(UpdateItemsPage, UpdateItemsPage),
}

export default Pages
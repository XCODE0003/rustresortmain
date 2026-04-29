import AdminLogs from './AdminLogs'
import GameItemsStatistics from './GameItemsStatistics'
import PaymentLogs from './PaymentLogs'
import RegistrationsLog from './RegistrationsLog'
import ServerErrors from './ServerErrors'
import UserLogs from './UserLogs'

const Logs = {
    AdminLogs: Object.assign(AdminLogs, AdminLogs),
    GameItemsStatistics: Object.assign(GameItemsStatistics, GameItemsStatistics),
    PaymentLogs: Object.assign(PaymentLogs, PaymentLogs),
    RegistrationsLog: Object.assign(RegistrationsLog, RegistrationsLog),
    ServerErrors: Object.assign(ServerErrors, ServerErrors),
    UserLogs: Object.assign(UserLogs, UserLogs),
}

export default Logs
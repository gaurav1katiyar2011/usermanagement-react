import { combineReducers } from 'redux';
import users from './Users';
import userupdates from './UserUpdates';
import usermodal from './UserModal';
import groups from './Groups';
import group from './Group';
import groupupdates from './GroupUpdates';
import clients from './Clients';
import clientupdates from './ClientUpdates';
import clientmodal from './ClientModel';
import bills from './Bills';
import billupdates from './BillUpdates';
import leftbar from './LeftBar';
import home from './Home';
import loginuser from './Login'

export default combineReducers({
    loginuser,
    users,
    userupdates,
    usermodal,
    clients,
    clientupdates,
    clientmodal,
    bills,
    billupdates,
    groups,
    group,
    groupupdates,
    leftbar,
    home
});
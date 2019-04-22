import { ADD_BILL } from '../Actions/Create';
import { DELETE_BILL, UPDATE_BILL } from '../Actions/Update';

export default (state = null, action) => {
    switch (action.type) {
        case ADD_BILL:
            return action.payload;
        case DELETE_BILL:
            return action.payload;
        case UPDATE_BILL:
            return action.payload;
        default:
            return state;
    }
};
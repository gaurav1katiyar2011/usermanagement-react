import { ADD_CLIENT } from '../Actions/Create';
import { DELETE_CLIENT, UPDATE_CLIENT } from '../Actions/Update';

export default (state = null, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return action.payload;
        case DELETE_CLIENT:
            return action.payload;
        case UPDATE_CLIENT:
            return action.payload;
        default:
            return state;
    }
};
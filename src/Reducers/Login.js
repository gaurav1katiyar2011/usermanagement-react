import { HANDLE_LOGIN} from '../Actions/Global';

export default (state = [], action) => {
    switch (action.type) {
        case HANDLE_LOGIN:
            return action.payload.data;
        default:
            return state;
    }
};
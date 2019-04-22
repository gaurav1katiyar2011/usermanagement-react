import { FETCH_BILL } from '../Actions/Detail';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_BILL:
            return action.payload;
        default:
            return state;
    }
};
import { FETCH_CLIENTS, MORE_CLIENTS, SEARCH_CLIENT } from '../Actions/List';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CLIENTS:
            return action.payload.data;
        case MORE_CLIENTS:
            return state.concat(action.payload.data);
        case SEARCH_CLIENT:
            return action.payload.data;
        default:
            return state;
    }
};
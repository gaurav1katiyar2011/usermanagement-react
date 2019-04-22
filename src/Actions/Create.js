//Add new group action
export const ADD_GROUP = 'ADD_GROUP';
export const addGroup = (data) => async (dispatch, getState, api) => {
    const res = await api.post('/group', data)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: ADD_GROUP,
        payload: res.data
    });
};

//Add New user action
export const ADD_USER = 'ADD_USER';
export const addUser = (data) => async (dispatch, getState, api) => {
    const res = await api.post('/user', data)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: ADD_USER,
        payload: res.data
    });
};


// Add new client action
export const ADD_CLIENT = 'ADD_CLIENT';
export const addClient = (data) => async (dispatch, getState, api) => {
    const res = await api.post('/user', data)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: ADD_CLIENT,
        payload: res.data
    });
};


export const ADD_BILL = 'ADD_BILL';
export const addBill = (data) => async (dispatch, getState, api) => {
    const res = await api.post('/user', data)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: ADD_BILL,
        payload: res.data
    });
};
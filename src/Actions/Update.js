// Delete group actions
export const DELETE_GROUP = 'DELETE_GROUP';
export const deleteGroup = (id) => async (dispatch, getState, api) => {
    const res = await api.delete('/group/' + id, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: DELETE_GROUP,
        payload: res.data
    });
};

// Delete user actions
export const DELETE_USER = 'DELETE_USER';
export const deleteUser = (id) => async (dispatch, getState, api) => {
    const res = await api.delete('/user/' + id, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: DELETE_USER,
        payload: res.data
    });
};


//Edit group action
export const UPDATE_GROUP = 'UPDATE_GROUP';
export const updateGroup = (name, id) => async (dispatch, getState, api) => {
    const data = {
        name
    }
    const res = await api.put('/group/' + id, data)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: UPDATE_GROUP,
        payload: res.data
    });
};

//Edit user action
export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (id, ...data) => async (dispatch, getState, api) => {
    const res = await api.put('/user/' + id, data[0])
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: UPDATE_USER,
        payload: res.data
    });
};



//Edit client action
export const UPDATE_CLIENT = 'UPDATE_CLIENT';
export const updateClient = (name, id) => async (dispatch, getState, api) => {
    const data = {
        name
    }
    const res = await api.put('/group/' + id, data)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: UPDATE_CLIENT,
        payload: res.data
    });
};

// delete client action
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const deleteClient = (id, ...data) => async (dispatch, getState, api) => {
    const res = await api.put('/user/' + id, data[0])
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: DELETE_CLIENT,
        payload: res.data
    });
};



//Edit client action
export const UPDATE_BILL = 'UPDATE_BILL';
export const updateBill = (name, id) => async (dispatch, getState, api) => {
    const data = {
        name
    }
    const res = await api.put('/group/' + id, data)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: UPDATE_BILL,
        payload: res.data
    });
};

// delete client action
export const DELETE_BILL = 'DELETE_BILL';
export const deleteBill = (id, ...data) => async (dispatch, getState, api) => {
    const res = await api.put('/user/' + id, data[0])
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: DELETE_BILL,
        payload: res.data
    });
};
// Get group data with group id
export const FETCH_GROUP = 'FETCH_GROUP';
export const fetchGroup = (id) => async (dispatch, getState, api) => {
    const res = await api.get('/group/' + id, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: FETCH_GROUP,
        payload: res.data
    });
};


export const FETCH_BILL = 'FETCH_BILL';
export const fetchBill = (id) => async (dispatch, getState, api) => {
    const res = await api.get('/group/' + id, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: FETCH_BILL,
        payload: res.data
    });
};
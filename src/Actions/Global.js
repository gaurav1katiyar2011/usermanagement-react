import history from '../Helper/history'
//open/close left bar
export const HANDLE_LEFT = 'HANDLE_LEFT';
export const handleLeft = (value) => async (dispatch) => {
    dispatch({
        type: HANDLE_LEFT,
        payload: value
    });
};

//open/close modal
export const HANDLE_MODAL = 'HANDLE_MODAL';
export const handleModal = (value) => async (dispatch) => {
    dispatch({
        type: HANDLE_MODAL,
        payload: value
    });
};

//open/close modal
export const HANDLE_CUSTOMER_MODAL = 'CUSTOMER_HANDLE_MODAL';
export const handleCustomerModal = (value) => async (dispatch) => {
    dispatch({
        type: HANDLE_CUSTOMER_MODAL,
        payload: value
    });
};


// Get content stats
export const CONTENT_STATS = 'CONTENT_STATS';
export const contentStats = () => async (dispatch, getState, api) => {
    const res = await api.get('/stats')
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: CONTENT_STATS,
        payload: res.data
    });
};

export const HANDLE_LOGIN='HANDLE_LOGIN';
export const handleLoginSubmit = (credentials)=> async (dispatch,getState,api) => {
    const res= await api.post('/auth',credentials)
    .then(res=>{
        localStorage.setItem('user',JSON.stringify(res.data));
        dispatch({
        type: HANDLE_LOGIN,
        payload: res.data
     })
     history.push('/')
    })
    
    .catch(err=>{
        console.log("error while login",err)
    })
    
}
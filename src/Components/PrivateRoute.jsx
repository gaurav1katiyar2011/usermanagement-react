import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import Login from '../Pages/Login';
export const PrivateRoute=({component:Component, ...rest})=>{
    let isLoggedIn =localStorage.getItem('user');
    let currentPath= rest['path'];
    if (!isLoggedIn ){
        return <Route {...rest}
                    render={props=>(<Login  />)} />
    }else  {
       return (<Route {...rest} 
        render={props => { 
            return isLoggedIn && currentPath==='/login' ? (
                <Redirect to={{pathname:'/'  }} />
                ):(
                    <Component {...props} />
                    )
        }}/>)
    }
}

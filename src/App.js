import React, { Component } from 'react';
import {  Router, Route, Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import {PrivateRoute} from './Components/PrivateRoute';

// Pages

import NotFoundPage from './Pages/NotFound';
import Login from './Pages/Login'
import history from './Helper/history'
import MainPage from './MainPage'


class App extends Component {
  render() {
    return (
      <Router history={history}>
            <div>
                    <Switch>
                        <PrivateRoute  path="/" component={MainPage} />
                        <PrivateRoute exact path="/login" component={Login} />
                        <Route path="/logout" render={() => {
                                localStorage.removeItem('user');
                                return (<Redirect to="/login" />);}}
                            />
                        <PrivateRoute component={NotFoundPage} />
                    </Switch>
               </div>
        </Router>
    );
  }
}
function mapStateToProps(globalState) {
    return {
        leftbar: globalState.leftbar
    };
}
export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import {  Router, Route, Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from './Components/Header';
import Left from './Components/Left';
import {PrivateRoute} from './Components/PrivateRoute';

// Pages
import Home from './Pages/Home';
import Users from './Pages/Users';
import Groups from './Pages/Groups';
import GroupDetails from './Pages/GroupDetails';
import NotFoundPage from './Pages/NotFound';
import Clients  from './Pages/Clients';
import Descriptions from './Pages/Descriptions'
import Login from './Pages/Login'
import history from './Helper/history'


class MainPage extends Component {
  render() {
      
      let loginUserData = JSON.parse(localStorage.getItem('user'));
      const tabsData=loginUserData.data[0].group.tabs;
      var arrNames = [];
      Object.keys(tabsData).forEach(function(key) {
        var val = tabsData[key]["name"];
        arrNames.push(val);
      });
      console.log(arrNames);
    return (
      <Router history={history}>
            <div>
                <Header />
                <div className="app-body">
                    <Left tabs={arrNames} />
                    <div className={this.props.leftbar ? 'main' : 'main left-closed'}>
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            {arrNames.indexOf('Users')>=0 &&
                                <PrivateRoute exact path="/users" component={Users} />
                            }
                            {arrNames.indexOf('Clients')>=0 &&
                                <PrivateRoute exact path="/clients" component={Clients} />
                            }
                            {arrNames.indexOf('Bills')>=0 &&
                                <PrivateRoute exact path="/bills" component={Users} />
                            }
                            {arrNames.indexOf('Groups')>=0 &&
                                <PrivateRoute exact path="/groups" component={Groups} />
                            }
                            {arrNames.indexOf('Groups')>=0 &&
                                <PrivateRoute exact path="/group/:groupid" component={GroupDetails} />
                            }
                            {arrNames.indexOf('Description')>=0 &&
                                <PrivateRoute exact path="/description" component={Descriptions} />
                            }
                            <PrivateRoute exact path="/login" component={Login} />
                            
                            <Route path="/logout" render={() => {
                                localStorage.removeItem('user');
                                return (<Redirect to="/login" />);}}
                            />
                            <PrivateRoute component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
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
export default connect(mapStateToProps)(MainPage);

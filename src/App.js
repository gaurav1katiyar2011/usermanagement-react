import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from './Components/Header';
import Left from './Components/Left';

// Pages
import Home from './Pages/Home';
import Users from './Pages/Users';
import Groups from './Pages/Groups';
import GroupDetails from './Pages/GroupDetails';
import NotFoundPage from './Pages/NotFound';
import Clients  from './Pages/Clients';
import Descriptions from './Pages/Descriptions'
import Login from './Pages/Login'

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <Header />
                <div className="app-body">
                    <Left />
                    <div className={this.props.leftbar ? 'main' : 'main left-closed'}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/clients" component={Clients} />
                        <Route exact path="/bills" component={Users} />
                        <Route exact path="/groups" component={Groups} />
                        <Route exact path="/group/:groupid" component={GroupDetails} />
                        <Route exact path="/description" component={Descriptions} />
                        <Route component={NotFoundPage} />
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
export default connect(mapStateToProps)(App);

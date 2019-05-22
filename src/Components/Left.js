import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Left extends Component{
    
    render(){
        return(
            <aside className={this.props.leftbar ? 'left-bar open hide-sm' : 'left-bar closed hide-sm'}>
                <div className="content">
                    <ul className="side-nav">
                        <li>
                            <Link to="/">
                                <i className="fa fa-tachometer-alt"></i>
                                Dashboard
                            </Link>
                        </li>
                        {this.props.tabs.indexOf('Users')>=0 &&
                        <li>
                            <Link to="/users">
                                <i className="fa fa-user"></i>
                                Users
                            </Link>
                        </li>
                        }
                        {this.props.tabs.indexOf('Groups')>=0 &&
                        <li>
                            <Link to="/groups">
                                <i className="fa fa-users"></i>
                                Groups
                            </Link>
                        </li>
                        }
                        {this.props.tabs.indexOf('Clients')>=0 &&
                        <li>
                            <Link to="/clients">
                            <i className="far fa-address-book"></i>
                                 Customers Info
                            </Link>
                        </li>
                        }
                        {this.props.tabs.indexOf('Bills')>=0 &&
                        <li>
                            <Link to="/bills">
                            <i className="far fa-money-bill-alt"></i>
                                 Bills Info
                            </Link>
                        </li>
                        }
                        {this.props.tabs.indexOf('Description')>=0 &&
                        <li>
                            <Link to="/description">
                            <i className="fas fa-info"></i>
                                 Description
                            </Link>
                        </li>
                        }
                    </ul>
                </div>
            </aside>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        leftbar: globalState.leftbar
    };
}

export default connect(mapStateToProps)(Left);
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
                        <li>
                            <Link to="/users">
                                <i className="fa fa-user"></i>
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link to="/groups">
                                <i className="fa fa-users"></i>
                                Groups
                            </Link>
                        </li>
                        <li>
                            <Link to="/clients">
                            <i class="far fa-address-book"></i>
                                 Customers Info
                            </Link>
                        </li>
                        <li>
                            <Link to="/bills">
                            <i class="far fa-money-bill-alt"></i>
                                 Bills Info
                            </Link>
                        </li>
                        <li>
                            <Link to="/description">
                            <i className="fas fa-info"></i>
                                 Description
                            </Link>
                        </li>
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
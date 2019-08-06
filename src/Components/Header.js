import React, {Component} from 'react';
import { connect } from 'react-redux';
import {handleLeft} from '../Actions/Global'
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
        this.handleBar = this.handleBar.bind(this);
    }
    handleBar(){
        this.props.handleLeft(!this.props.leftbar)
    }
    render(){
        return(
            <header >
                <div className="brand-w-button">
                        <img className="brand" alt="logotype" src="/images/logo1.png" />
                        <i className="fa fa-bars" onClick={this.handleBar}></i>
                </div>
                <nav className="user-nav">
                    <div className="user-nav__user">
                        <span className="user-nav__user-name">Gaurav</span>
                    </div>
                    <div className="user-nav__user">
                        <Link to="/logout">
                            <div className="user-nav__logout">Logout</div>
                        </Link>
                    </div>
                </nav>
                
            </header>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        leftbar: globalState.leftbar
    };
}
export default connect(mapStateToProps, {handleLeft})(Header);
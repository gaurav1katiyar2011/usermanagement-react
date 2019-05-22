import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {handleLoginSubmit} from '../Actions/Global'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            password:''
        }
    }

    handleChange= e=>{
        const {name,value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.handleLoginSubmit(this.state);
    }
    render(){
        return (
            <div className="login">
                <div className="login-container">
                    <div className="logo">Agent Login</div>
                    <div className="login-item">
                    <form action="" method="post" onSubmit={(e)=>{this.handleSubmit(e)}} className="form form-login">
                        <div className="form-field">
                            <label className="user"  htmlFor="login-username"><i className="fas fa-user"></i><span className="hidden">Username</span></label>
                            <input id="login-username"  value={this.state.userId} onChange={this.handleChange} name="userId" type="text" className="form-input" placeholder="Username" required />
                        </div>

                        <div className="form-field">
                            <label className="lock" htmlFor="login-password"><i className="fas fa-lock"></i><span className="hidden">Password</span></label>
                            <input id="login-password" type="password" value={this.state.password} onChange={this.handleChange} name="password" className="form-input" placeholder="Password" required />
                        </div>

                        <div className="form-field">
                            <input type="submit" value="Log in" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, {handleLoginSubmit})(Login);
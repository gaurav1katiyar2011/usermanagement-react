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
            <div className="login-page">
                <div className="login">
                    <div className="login__items">
                        <div className="logo" >
                            <img src="images/logo1.png" alt="logo" className="logo__img" />
                        </div>
                        <div className="login-text">
                            <h1> SignIn</h1>
                        </div>
                        <form action="#"  onSubmit={this.handleSubmit} className="form">
                            <div className="form-group">
                                <div className="input-group-text1">User Id</div>
                                <div className="input-group">    
                                    <input 
                                        onChange={this.handleChange} 
                                        value={this.state.userId} 
                                        name="userId" 
                                        className="form-control form-control-lg" 
                                        placeholder="User Id" 
                                        type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group-text1">Password</div>
                                <div className="input-group">
                                    
                                    <input 
                                        onChange={this.handleChange} 
                                        value={this.state.password} 
                                        name="password" 
                                        className="form-control form-control-lg" 
                                        placeholder="Password" 
                                        type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success"><i className="far fa-dot-circle"></i> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}
export default connect(null, {handleLoginSubmit})(Login);
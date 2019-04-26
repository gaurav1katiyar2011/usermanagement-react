import React ,{Component} from 'react'
export default class Login extends Component{
    render(){
        return (
            <div className="login">
                <div class="login-container">
                    <div class="logo">Agent Login</div>
                    <div class="login-item">
                    <form action="" method="post" class="form form-login">
                        <div class="form-field">
                        <label class="user" for="login-username"><i class="fas fa-user"></i><span class="hidden">Username</span></label>
                        <input id="login-username" type="text" class="form-input" placeholder="Username" required />
                        </div>

                        <div class="form-field">
                        <label class="lock" for="login-password"><i class="fas fa-lock"></i><span class="hidden">Password</span></label>
                        <input id="login-password" type="password" class="form-input" placeholder="Password" required />
                        </div>

                        <div class="form-field">
                        <input type="submit" value="Log in" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        )
    }
}
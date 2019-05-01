
import React, { Component } from 'react';
import {loginUser} from '../actions/LoginUserAction';
import {currentUser as CheckUser} from '../actions/CurrentUserAction';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import CryptoJS from 'crypto-js';
// import { Redirect } from 'react-router';
import {ENCRYPT_SECRET_KEY,LOGIN_COOKIE_NAME} from '../config/Config';

class Login extends Component {

    constructor(props) {
        super(props);
        this.loginUser = this.loginUser.bind(this);
      }

    async componentWillMount() {
        await this.props.onCheckUser(); 
        if(this.props.userFetched && this.props.userLoggedIn)
        {
            this.props.history.push('/');
        }
    }

    async loginUser(event) {    
        event.preventDefault();
        const cookies = new Cookies(); 
        cookies.remove(LOGIN_COOKIE_NAME);
        var userObj = {
            username: event.target.inputEmail.value,
            password: event.target.inputPassword.value
        }
        await this.props.onLoginUser(userObj);
      
        if(this.props.userFetched && this.props.userLoggedIn)
        {
            this.props.history.push('/login');
            let encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(this.props.user), ENCRYPT_SECRET_KEY).toString();   
            let tomorrow = new Date();
            tomorrow.setMinutes(tomorrow.getMinutes()+60);
            cookies.set(LOGIN_COOKIE_NAME, encryptedUser, { path: '/', expires: tomorrow });  
            this.props.history.push('/');  
        }
    }

  render() {

    document.body.className="page-top";
    
    return (         
      <section id="signup" className="signup-section">
          <div className="container">
              <div className="row">
                  <div className="mx-auto text-center mb-5">
                  <Link to="/"><img src="/assets/img/logo.png" className="img-fluid" alt="" /></Link>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-lg-4 mx-auto text-center">
                      <form className="mb-3" onSubmit={this.loginUser}>
                          <div className="form-group d-flex">
                              <input type="text" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail"
                                     placeholder="Username..."/>
                          </div>
                          <div className="form-group d-flex">
      
                              <input type="password" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                                     id="inputPassword" placeholder="Password..." />
                          </div>
                          <div className="login-social">
                              <Link to="#"><img src="/assets/img/icon-login-facebook.png" className="img-fluid" alt="" /></Link><Link to="#">
                              <img src="/assets/img/icon-login-google.png" className="img-fluid" alt=""/></Link>
                          </div>
                          <button type="submit" className="btn btn-primary mx-auto">Login</button>
                      </form>
                      <span>Don’t have an account? <Link to="/signup">Sign Up</Link></span>
                  </div>
              </div>
      
          </div>
      </section>
    )
  }
}

const mapStateToProps = ({user}) =>{
  return {
    fetched : user.fetched,
    user : user.userInfo == null ? null : user.userInfo,
    userFetched:user.fetched,
    userLoggedIn : user.userInfo==null ? false : true,
    error:user.error
    };
}

const mapDispatchToProps = {
    onLoginUser: loginUser,
    onCheckUser: CheckUser
  };

export default connect(mapStateToProps,mapDispatchToProps)(Login);
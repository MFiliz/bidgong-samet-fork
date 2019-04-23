import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import {Link} from 'react-router-dom';
import Cognito  from './Cognito';

class Login extends Component {

  loginUser = (event) => {        
    event.preventDefault();
    var userObj = {
      username: event.target.inputEmail.value,
      password: event.target.inputPassword.value
  }

  var cognito = new Cognito();
  cognito.loginEt(userObj);
};

  render() {
    document.body.className="page-top";
    return (         
      <section id="signup" className="signup-section">
          <div className="container">
              <div className="row">
                  <div className="mx-auto text-center mb-5">
                      <img src="/assets/img/logo.png" className="img-fluid" alt="" />
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
                      <span>Don’t have an account? <Link to="#">Sign Up</Link></span>
                  </div>
              </div>
      
          </div>
      </section>
    )
  }
}

// const mapStateToProps = (state) =>{
//   return {
//       ...state,
//       fetched:true,
//       bodyclassName : 'page-top',
//       sender :"leagues"
//     };
// }

export default connect()(Login);
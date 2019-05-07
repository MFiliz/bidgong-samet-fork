import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerUser} from '../actions/RegisterUserAction';
import {currentUser as CheckUser} from '../actions/CurrentUserAction';
import {Link} from 'react-router-dom';
import {ToastsContainer, ToastsStore} from 'react-toasts';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
      }

    async componentWillMount() {
        await this.props.onCheckUser(); 
        if(this.props.userFetched && this.props.userLoggedIn)
        {
            this.props.history.push('/');
        }
    }

    // componentDidUpdate() {  
    //     if(typeof(this.props.registerUser) !== "undefined" && typeof(this.props.registerUser.error) !== "undefined"  && !this.props.registerUser.fetched)
    //     {
    //         ToastsStore.error(this.props.registerUser.error.message);
    //     }
    //   }

    async registerUser(event) {
        event.preventDefault();
        const validated = this.validatePass(event.target.inputPassword,event.target.inputConfirmPassword);
        if(validated)
        {
            var userObj = {
                username: event.target.inputUserName.value,
                password: event.target.inputPassword.value,
                attributes: {
                    email: event.target.inputEmail.value
                }
            }
            try{
                await this.props.onRegisterUser(userObj);
                if(!this.props.registerUser.fetched)
                {
                    ToastsStore.error(this.props.registerUser.error.message);
                }
                else
                {
                    this.props.history.push('/signupsuccess');
                }
            }
            catch
            {
                ToastsStore.error(this.props.registerUser.error.message);
            }
        }
    }

    validatePass = (password,confirm_password) => {   
        let result;  
        if(password.value !== confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
            result = false;
          } else {
            confirm_password.setCustomValidity('');
            result = true;
          }
        return result;
    };

   
    render() {
    document.body.className="page-top";
    return (         
      <section id="signup" className="signup-section">
          <div className="container">
              <div className="row">
                  <div className="mx-auto text-center mb-5">
                  <Link to="/"><img src="/assets/img/logo.png" className="img-fluid" alt="" /> </Link>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-lg-4 mx-auto text-center">
                      <form className="mb-3" onSubmit={this.registerUser}>
                          <div className="form-group d-flex">
                              <input type="text" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputUserName"
                                     placeholder="Username..."/>
                          </div>
                          <div className="form-group d-flex">
                              <input type="email" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail"
                                     placeholder="User email..."/>
                          </div>
                          <div className="form-group d-flex">      
                              <input type="password" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                                     id="inputPassword" placeholder="Password..." />
                          </div>
                          <div className="form-group d-flex">      
                            <input type="password" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                                    id="inputConfirmPassword" placeholder="Confirm Password..." />
                        </div>
                          <div className="login-social">
                              <Link to="#"><img src="/assets/img/icon-login-facebook.png" className="img-fluid" alt="" /></Link><Link to="#">
                              <img src="/assets/img/icon-login-google.png" className="img-fluid" alt=""/></Link>
                          </div>
                          <button type="submit" className="btn btn-primary mx-auto">Register</button>
                      </form>
                  </div>
              </div>
      
          </div>
          <ToastsContainer store={ToastsStore}/>
      </section>
    )
  }
}

const mapStateToProps = ({user,registerUser}) =>{
  return {
        registerUser,
        fetched : user.fetched,
        user : user.userInfo == null ? null : user.userInfo,
        userFetched:user.fetched,
        userLoggedIn : user.userInfo==null ? false : true,
        error:user.error,
        bodyclassName : 'page-top',
        sender :"leagues"
    };
}

const mapDispatchToProps = {
    onRegisterUser: registerUser,
    onCheckUser: CheckUser
  };

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
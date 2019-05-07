import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';


class PaymentSuccess extends Component {
  
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
                <div className="col-lg-12 col-md-12 pay-success">
                    <i className="far fa-check-circle"></i>
                    <h2>SUCCESS</h2>
                    <p>Check the email address to verify your registration...</p>
                        <Link to="/login"><button type="submit" className="btn btn-primary mx-auto">Login</button></Link>
                </div>
            </div>
          </div>
      </section>
    )
  }
}

const mapStateToProps = ({paymentSuccess,gotoError}) =>{
  return {
    paymentSuccess,
    gotoError,
    fetched : true,
    bodyClass : 'pay'
  };
}

export default connect(mapStateToProps)(PaymentSuccess);
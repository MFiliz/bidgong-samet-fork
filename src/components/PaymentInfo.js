import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import {Link} from 'react-router-dom';


class PaymentInfo extends Component { 
  render() {

    return (
      <Layout {...this.props}>
       <div className="row">
            <div className="col-lg-12 col-md-12 pay-steps">
                <ul class="pay-steps">
                    <li className="visited"><Link to="/player">REVIEW YOUR</Link></li>
                    <li className="current">ORDER PAYMENT</li>
                    <li className="future">FINISH</li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4 mx-auto text-center">
                <form className="mb-3">
                    <div className="form-group d-flex">
                        <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail"
                               placeholder="Username..." />
                    </div>
                    <div className="form-group d-flex">

                        <input type="password" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                               id="inputPassword" placeholder="Password..." />
                    </div>
                    <div className="login-social">
                        <Link to="#"><img src="img/icon-login-facebook.png" className="img-fluid" alt="" /></Link><Link to="#"><img src="img/icon-login-google.png" 
                        className="img-fluid" alt=""/></Link>
                    </div>
                    <Link to="/paymentsuccess"><button type="submit" className="btn btn-primary mx-auto">PAY NOW</button></Link>
                </form>
            </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = ({paymentInfo}) =>{
  return {
    paymentInfo,
    fetched : true,
    bodyClass : 'pay'
  };
}

export default connect(mapStateToProps)(PaymentInfo);
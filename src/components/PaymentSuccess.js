import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';


class PaymentSuccess extends Component {
  
  render() {

    return (
      <div >
       <div className="row">
            <div className="col-lg-12 col-md-12 pay-steps">
                <ul className="pay-steps">
                    <li className="future">REVIEW YOUR</li>
                    <li className="future">ORDER PAYMENT</li>
                    <li className="current">FINISH</li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12 pay-success">
                <i className="far fa-check-circle"></i>
                <h2>SUCCESS</h2>
                <p>Check the result in notifications after
                    finish the match</p>
                    <Link to="/notifications"><button type="submit" className="btn btn-primary mx-auto">DONE</button></Link>
            </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(LayoutHOC(PaymentSuccess));
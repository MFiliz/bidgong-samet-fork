import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import {Link} from 'react-router-dom';

class Player extends Component {
  render() {

    return (
      <Layout {...this.props}>
       <div className="row">
            <div className="col-lg-12 col-md-12 pay-steps">
                <ul class="pay-steps">
                    <li className="current">REVIEW YOUR</li>
                    <li className="future">ORDER PAYMENT</li>
                    <li className="future">FINISH</li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12 col-md-12 pay-success">
                <img src="/assets/img/product-sale.png" className="img-fluid" alt=""/>
                <h2>MESSI</h2>
                <p>Check the result in notifications after
                    finish the match</p>
                <Link to="/paymentinfo"><button type="submit" className="btn btn-primary mx-auto">PAY NOW</button></Link>
            </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = ({player}) =>{
  return {
    player,
    fetched : true,
    bodyClass : 'pay'
  };
}

export default connect(mapStateToProps)(Player);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import {Link} from 'react-router-dom';

class BetPlayer extends Component {
  render() {

    return (
      <Layout {...this.props}>
       <div className="row">
            <div className="col-lg-12 col-md-12 pay-steps">                
                <h2>MESSI</h2>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12 col-md-12 pay-success">
                <img src="/assets/img/product-sale.png" className="img-fluid" alt=""/>
                <br/>
                <br/>
                <br/>
                <h3><b>$2650</b></h3>
                <button type="submit" className="btn btn-primary mx-auto">-</button>
                <button type="submit" className="btn btn-primary mx-auto">BID</button>
                <button type="submit" className="btn btn-primary mx-auto">+</button>
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

export default connect(mapStateToProps)(BetPlayer);
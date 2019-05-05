import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';


class PaymentSuccess extends Component {

  componentDidCatch(error, info) {
    this.props.history.push('/error');
  }

  componentWillMount() {
    console.log(this.props.match.params)
    // if(typeof(this.props.match.params.isPayment)!=="undefined")
    // {
    //   // console.log("window.parent")
      
    //   // window.postMessage();

    //   //   window.close();
    // }    
  }
  render() {

    return (
      <div >
       
      </div>
    )
  }
}
export default PaymentSuccess;
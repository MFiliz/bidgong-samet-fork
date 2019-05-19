import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

class Player extends Component {
  
  render() {

    return (
      !this.props.fetched ?
       <Redirect to="/"/>
      :
      <div>
       <div className="row">
            <div className="col-lg-12 col-md-12 pay-steps">
                <ul className="pay-steps">
                    <li className="current">REVIEW YOUR</li>
                    <li className="future">ORDER PAYMENT</li>
                    <li className="future">FINISH</li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12 col-md-12 pay-success">
                <img src={this.props.winner.result.playerImg } className="img-fluid" alt={this.props.winner.result.PlayerName }/>
                <h2>{this.props.winner.result.playerName }</h2>
                <h2>{this.props.winner.result.betPrice }$</h2>
                <p>Check the result in notifications after
                    finish the match</p>
                <Link to="/paymentinfo"><button type="submit" className="btn btn-primary mx-auto">PAY NOW</button></Link>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({player,winner}) =>{
  return {
    player,
    winner,
    fetched : winner!=null,
    bodyClass : 'pay'
  };
}

export default connect(mapStateToProps)(LayoutHOC(Player));
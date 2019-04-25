import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';
import {betPlayer} from '../actions/BetPlayerAction';

class BetPlayer extends Component {

  betPlayerNow=()=>{             
    let betVal = {
      "userMail": this.props.email,
      "betPrice": this.props.betvalue+5,
      "matchGuid": this.props.match.params.matchid,
      "playerGuid": this.props.match.params.id
    }

    console.log(betVal);
 };

  render() {
    return (
      <div>
        <div className="row">
            <div className="col-lg-12 col-md-12 pay-success">
            <h5>LIONEL MESSI</h5>
            </div>
        </div>
        <div className="row bid-link">
            <div className="col-lg-5 col-md-5 text-right">
                <Link to="#"><i className="fas fa-minus-circle font-size-40 lh-250"></i></Link></div>
            <div className="col-lg-2 col-md-2 pay-success">
                <img src="/assets/img/football.png" className="img-fluid" width="200" alt=""/>
            </div>
            <div className="col-lg-5 col-md-5 text-left">
                <Link to="#" onClick={this.betPlayerNow}><i className="fas fa-plus-circle font-size-40 lh-250"></i></Link></div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12 pay-success">
                <h2>2345$</h2>
                <button type="submit" className="btn btn-primary mx-auto">BID</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({betPlayer}) =>{
  return {
    betPlayer:betPlayer.result,
    betvalue:0,
    fetched : true,
    bodyClass : 'pay'
  };
}

const mapDispatchToProps = {
  onBetPlayer: betPlayer
};


export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(BetPlayer));
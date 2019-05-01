import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';
import {getPlayer} from '../actions/GetPlayerAction';
import {betPlayer} from '../actions/BetPlayerAction';
import {BET_VALUE} from '../config/Config';
import PubNubReact from 'pubnub-react';
import {ToastsContainer, ToastsStore} from 'react-toasts';

let playerGuid="BEEFFB29-A07E-497B-97CC-6C7A02C67419";

class BetPlayer extends Component {
 
  constructor(props) {
    super(props)
    // playerGuid = this.props.match.params.id;
    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-1ba62178-7b93-4e40-bbcf-39570315b5ee',
      subscribeKey: 'sub-c-7d57f2f4-37bc-11e9-b5cf-1e59042875b2'
    });
    this.pubnub.init(this);
  }

  async componentWillMount() {    
    await this.props.onGetPlayer(playerGuid);
    // console.log(this.props.player)

    this.pubnub.subscribe({
      channels: [playerGuid],
      withPresence: true
    });

    this.pubnub.getMessage(playerGuid, (msg) => {
      // console.log("msg");
      // console.log(msg);
    });
  }
  
  componentDidMount() {
    // console.log(this.props.player);
    
  }
  
  componentWillUnmount() {
    this.pubnub.unsubscribe({
      channels: [playerGuid]
    });
  }

  betPlayerIncrease=()=>{             
    let betVal = {
      "userMail": this.props.user.email,
      "betPrice": this.props.betvalue+BET_VALUE,
      "matchGuid": this.props.match.params.matchid,
      "playerGuid":this.props.match.params.id
      // "playerGuid": this.props.match.params.id
    }
    console.log(betVal);
    // this.props.onBetPlayer(betVal); 
   
 };

 componentDidUpdate() {
  const messages = this.pubnub.getMessage('demo_tutorial');
   if(this.props.betPlayerFetched)
   {
     if(this.props.betPlayer.isError)
        ToastsStore.error(this.props.betPlayer.message)  
   }
   
}

 betPlayerDecrease=()=>{             
  let betVal = {
    "userMail": this.props.user.email,
    "betPrice": this.props.betvalue-BET_VALUE,
    "matchGuid": this.props.match.params.matchid,
    "playerGuid": playerGuid
  }
  // console.log(betVal);
  // console.log(this.props);
};

  render() {
    var documentBody = this.props.fetched ? 
    <div>
      <div className="row">
          <div className="col-lg-12 col-md-12 pay-success">
          <h5>{this.props.player.playerName} </h5>
          </div>
      </div>
      <div className="row bid-link">
          <div className="col-lg-5 col-md-5 text-right">
              <Link to="#" onClick={this.betPlayerDecrease}><i className="fas fa-minus-circle font-size-40 lh-250"></i></Link></div>
          <div className="col-lg-2 col-md-2 pay-success">
              <img src="/assets/img/football.png" className="img-fluid" width="200" alt=""/>
          </div>
          <div className="col-lg-5 col-md-5 text-left">
              <Link to="#" onClick={this.betPlayerIncrease}><i className="fas fa-plus-circle font-size-40 lh-250"></i></Link></div>
      </div>
      <div className="row">
          <div className="col-lg-12 col-md-12 pay-success">
              <h2>2345$</h2>
              <button type="submit" className="btn btn-primary mx-auto">BID</button>
          </div>
      </div>
      <ToastsContainer store={ToastsStore}/>
    </div>
    :
   ""
    return (
      documentBody      
    )
  }
}

const mapStateToProps = ({betPlayer,user,player}) =>{
  return {
    betPlayer:betPlayer.result,
    betPlayerFetched : betPlayer.fetched,
    player : player.result,
    betvalue:0,
    user : user.userInfo == null ? null : user.userInfo,
    userFetched:user.fetched,
    userLoggedIn : user.userInfo==null ? false : true,
    fetched : player.fetched,
    bodyClass : 'pay'
   
  };
}

const mapDispatchToProps = {
  onGetPlayer: getPlayer,
  onBetPlayer: betPlayer
};


export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(BetPlayer));
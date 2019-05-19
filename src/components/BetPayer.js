import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';
import {getPlayer} from '../actions/GetPlayerAction';
import {betPlayer} from '../actions/BetPlayerAction';
import {setPlayerBet} from '../actions/SetPlayerBet';
import {BET_VALUE} from '../config/Config';
import PubNubReact from 'pubnub-react';

let playerGuid="BEEFFB29-A07E-497B-97CC-6C7A02C67419";
let currentBet = 0;
let lastBet = 0;
let isMounted = false;
class BetPlayer extends Component {
 
  constructor(props) {
    super(props)
     playerGuid = this.props.match.params.id;
     this.contentEditable = React.createRef();
     this.state = {html: "selaaaam"};
    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-1ba62178-7b93-4e40-bbcf-39570315b5ee',
      subscribeKey: 'sub-c-7d57f2f4-37bc-11e9-b5cf-1e59042875b2'
    });
    this.pubnub.init(this);
  }

  async componentWillMount() {    
    await this.props.onGetPlayer(this.props.match.params.matchid,playerGuid);
    // console.log(this.props.player)

    // currentBet = this.props.playerBetPrice;
    this.pubnub.subscribe({
      channels: [playerGuid],
      withPresence: true
    });

    this.pubnub.getMessage(playerGuid, (channel) => {
      let player = {
        ...this.props.player,
        betPrice : channel.message
      }
       this.props.onSetPlayerBet(player);
    });
  }
  
  animateElement = (element) => {
    try {
      element.animate(
        [{ color: "red" }, { color: "blue" }, { color: "yellow" }],
        {
          duration: 400,
          iterations: 5
        }
      );
    } catch (error) {
      
    }
   
  }

  componentDidMount() {
    isMounted= true;
  }

  componentDidUpdate(prevProps) {  
    if(isMounted)
    {
      if(this.props.fetched && this.props.betPlayerFetched)
      {
        if(this.props.betPlayer.isError)
        {
          this.props.ToastsStore.error(this.props.betPlayer.message);
        } 
      } 
      
      if(this.props.fetched)
      {
        this.refs.hdnPlayerIncrease.innerHTML = currentBet === 0 ? "" : "+" +currentBet + "$";
        this.changeDislpayHdnPlayerIncrease();
      } 
      if (this.props.playerBetPrice !== prevProps.playerBetPrice && (this.props.playerBetPrice-prevProps.playerBetPrice)-this.props.playerBetPrice !== 0) {
        if(lastBet !== this.props.playerBetPrice)
        {
          this.props.ToastsStore.info(`Player bet increase ${(this.props.playerBetPrice-prevProps.playerBetPrice)}$. New bet : ${this.props.playerBetPrice}`,5000);
          this.animateElement(this.refs[this.props.player.playerGuid]);
        }
        else
        {
          this.props.ToastsStore.success(`Your bet is successfully to ${(this.props.playerBetPrice)}$. `,5000);
        }
      }
    }
  }
  
  
  componentWillUnmount() {
    currentBet = 0;
    lastBet=0;
    isMounted= false;
    this.pubnub.unsubscribe({
      channels: [playerGuid]
    });
  }

  betPlayerIncrease=()=>{      
    currentBet += BET_VALUE;   
    this.refs.hdnPlayerIncrease.innerHTML = "+" +currentBet + "$"; 
    this.changeDislpayHdnPlayerIncrease();
  };

  betPlayerDecrease=()=>{             
    currentBet -= BET_VALUE; 
    if(this.props.playerBetPrice + currentBet <= this.props.playerBetPrice)
    {
      currentBet = 0;
    }

    this.refs.hdnPlayerIncrease.innerHTML = currentBet === 0 ? "" : "+" +currentBet + "$";
    this.changeDislpayHdnPlayerIncrease();
  };

  betPlayer=(event)=>{   
    event.preventDefault(); 
    if(this.props.playerBetPrice + currentBet === this.props.playerBetPrice)
    {
      this.props.ToastsStore.error("Bet verebilmeniz için değeri arttırmalısınız");
    }
    else
    {
      let betVal = {
        "userMail": this.props.user.email,
        "betPrice": this.props.player.betPrice + currentBet,
        "matchGuid": this.props.match.params.matchid,
        "playerGuid":this.props.match.params.id
      }
  
      this.props.onBetPlayer(betVal);  
      lastBet = this.props.player.betPrice + currentBet;
      currentBet = 0;
      
    }    
  };
  changeDislpayHdnPlayerIncrease=()=>{ 
    if(this.refs.hdnPlayerIncrease.innerHTML==="")
    {
      this.refs.hdnPlayerIncrease.style.display = 'none';
    }
    else
    {
      this.refs.hdnPlayerIncrease.style.display = null;
    }
  }

  render() {
    var documentBody = this.props.fetched ? 
    <div className="container mt-5 mb-5">
      <div className="row">
          <div className="col-lg-12 col-md-12 pay-success">
            <h5>{this.props.player.playerName}</h5>
          </div>
      </div>
      <div className="row bid-link">
          <div className="col-lg-5 col-md-5 text-right">
          <Link to="#" onClick={this.betPlayerDecrease}><i className="fas fa-minus-circle font-size-40 lh-250"></i></Link></div>
          <div className="col-lg-2 col-md-2 pay-success">
              <img src={this.props.player.playerImageUrl} className="img-fluid" width="200" alt=""/>
          </div>
          <div className="col-lg-5 col-md-5 text-left">
          <Link to="#" onClick={this.betPlayerIncrease}><i className="fas fa-plus-circle font-size-40 lh-250"></i></Link></div>
      </div>
      <div className="row pay-success">
          <div ref={this.props.player.playerGuid} className="col-lg-12 col-md-12">
              <strong>{this.props.playerBetPrice}$</strong><span ref="hdnPlayerIncrease" className="pay-success-plus">+{this.props.currentBet}</span>
          </div>
          <div className="col-lg-12 col-md-12">
              <button type="submit" onClick={this.betPlayer} className="btn btn-primary mx-auto">BID</button>
          </div>
      </div>
      
</div>
 
    :
   ""
    return (
      documentBody      
    )
  }
}

const mapStateToProps = ({betPlayer,user,player,ToastsStore}) =>{
  return {
    betPlayer:betPlayer.result,
    betPlayerFetched : betPlayer.fetched,
    player : player.result,
    playerBetPrice : player.fetched ? player.result.betPrice : 0,
    user : user.userInfo == null ? null : user.userInfo,
    userFetched:user.fetched,
    userLoggedIn : user.userInfo==null ? false : true,
    fetched : player.fetched,
    ToastsStore,
    bodyClass : 'pay'
   
  };
}

const mapDispatchToProps = {
  onGetPlayer: getPlayer,
  onBetPlayer: betPlayer,
  onSetPlayerBet : setPlayerBet
};


export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(BetPlayer));
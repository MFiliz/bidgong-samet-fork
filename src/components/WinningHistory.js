import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {setWinner} from '../actions/WinnerAction';
import {GetWinningHistory} from '../actions/GetWinningHistoryAction';
import {Link} from 'react-router-dom';
import { greenBright } from 'ansi-colors';

class WinningHistory extends Component {
  
  constructor(props) {
    super(props)
    this.gotoPayment = this.gotoPayment.bind(this);
  }
  
  async gotoPayment(event) {  
    let playerId = event.currentTarget.attributes.getNamedItem('rel').value
    const winningplayer = this.props.winningHistory.result.find(data => data.playerId === playerId );
    await this.props.onSetWinner(winningplayer);
    this.props.history.push(`/winner/${playerId}`);
  }
  
  async componentWillUpdate() {  
    if(this.props.userFetched && this.props.userLoggedIn && (typeof(this.props.winningHistory)==="undefined"|| this.props.winningHistory.length===0) )
    {
       await this.props.onGetWinningHistory(this.props.user.email);
    }
  }

  render() {
    let documentBody = "";

    if(typeof(this.props.winningHistory)!=="undefined" && this.props.winningHistory.fetched)
    {
      documentBody =this.props.winningHistory.result.map((item, i) => {
          return (
            item.isClaimed === "1" ? 
            <div key={i} className="row notification-list">
              <div className="col-lg-12 col-md-12">Player Name : {item.playerName} Team :{item.teamName} , Match Date : {item.matchDate}</div>
            </div>
            :
              <div key={i} className="row notification-list" style={{cursor:"pointer",background:"green",opacity:"0.6",filter:"alpha(opacity=60)"}} onClick={this.gotoPayment} rel={item.playerId}  >
                <div className="col-lg-12 col-md-12">Player Name : {item.playerName} Team :{item.teamName} , Match Date : {item.matchDate}</div>
              </div>
          );
      });
    }
   

    return (
      <div>
      <h1>Winning History</h1>
      {documentBody}
      </div>

    );
    // return (
    //   <div>
    //     <h1>Notifications</h1>
    //     <div className="row notification-list">
    //         <div className="col-lg-12 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    //     </div>
    //     <div className="row notification-list">
    //         <div className="col-lg-12 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    //     </div>
    //     <div className="row notification-list">
    //         <div className="col-lg-12 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    //     </div>
    //   </div>
    // )
  }
}

const mapStateToProps = ({winningHistory,user}) =>{
  return {
    winningHistory,
    user : user.userInfo == null ? null : user.userInfo,
    fetched : winningHistory.fetched,
    bodyClass : 'pages'
  };
}

const mapDispatchToProps = {
  onGetWinningHistory: GetWinningHistory,
  onSetWinner : setWinner
};

export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(WinningHistory));
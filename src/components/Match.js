import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import {getMatch} from '../actions/GetMatchAction';

class SelectedMatch extends Component {

  selectedTeamName = "";
  updateForce = false;

  selectTeamName=(selectedTeamName)=>{
      this.selectedTeamName = selectedTeamName;
      // this.updateForce = true;
      this.forceUpdate();
  };

  getSelectedTeamName=()=>{
      return this.selectedTeamName
  };

  getUpdateForce=()=>{
      return this.updateForce
  };

  async componentWillMount() {
    if(this.props.match.params.id!==undefined && this.props.match.params.id !=="")
    {
       await this.props.onGetMatch(this.props.match.params.id);
       this.selectTeamName(this.props.currentMatch.detail.homeTeam.teamName);
    }
  }

  componentDidMount() {
  }


  render() {
      const selectedTeam = this.props.match.params.teamName!==undefined && this.props.match.params.teamName !=="" ? 
      this.props.match.params.teamName : this.selectedTeamName;
      if(selectedTeam!==this.selectedTeamName)
      {
        this.selectTeamName(this.props.match.params.teamName);
      }
    
    let durationPlayers = "";
    let durationTeams = "";
        if(this.props.fetched === true){
          const teamName = this.getSelectedTeamName();
            const currentTeam = this.props.currentMatch.detail.homeTeam.teamName === teamName ?
            this.props.currentMatch.detail.homeTeam
            :this.props.currentMatch.detail.guestTeam;

            durationPlayers = currentTeam.players.map((item, i) => {
              const footballPlayer = `footballPlayer${i+1}`;
                return (
                    i===0?
                    <Link key={i} to={`/betplayer/${item.playerGuid}`}><div data-tip={item.playerName} className={`football-uniform-keeper ${footballPlayer}`}></div></Link>
                    :
                    <Link key={i} to={`/betplayer/${item.playerGuid}`}><div data-tip={item.playerName} className={`football-uniform ${footballPlayer}`}></div></Link>
                );
            });
            var divStyle = {
              width: '355px',
              height:'188px'
            };
            durationTeams =
              <div className="row team-list-big">
                <div className="col-lg-4 col-md-4">
                  <Link to={`/currentmatch/${this.props.match.params.id}/${this.props.currentMatch.detail.homeTeam.teamName}`}>
                    <img src={this.props.currentMatch.detail.homeTeam.teamFlagUrl} className="img-fluid" alt="" style={divStyle} />
                  </Link>
                  {this.props.currentMatch.detail.homeTeam.teamName}
                </div>
                <div className="col-lg-4 col-md-4 score">1:1</div>
                <div className="col-lg-4 col-md-4">
                  <Link to={`/currentmatch/${this.props.match.params.id}/${this.props.currentMatch.detail.guestTeam.teamName}`}>
                    <img src={this.props.currentMatch.detail.guestTeam.teamFlagUrl} className="img-fluid" alt="" style={divStyle} />
                  </Link>
                  {this.props.currentMatch.detail.guestTeam.teamName}

                </div>
            </div>
        }
    return (
      <div>
        {durationTeams}
        <div className="row">
        <div className="col-lg-12 col-md-12">
        </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="field-football">
                    {durationPlayers}
                    { ReactTooltip.rebuild()}
                </div>
              </div>
        </div>
        <ReactTooltip />
      </div>
    )
  }
}

const mapStateToProps = ({currentMatch}) =>{
  return {
    currentMatch: currentMatch.result,
    fetched: currentMatch.fetched,
    error: currentMatch.error,
    bodyClass : 'pages'
  };
}

const mapDispatchToProps = {
  onGetMatch: getMatch
};

export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(SelectedMatch));
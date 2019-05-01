import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {getLeagues} from '../actions/GetLeaguesAction';
import LeagueSlideTemplate from './Templates/LeagueSlideTemplate';
import {slideLeagues} from '../scripts/LeaguesScripts';
import {selectCurrentLeague} from '../actions/SelectCurrentLeagueAction';
import LayoutHOC from './LayoutHOC';

class Legues extends Component {  

    selectedLeagueId = "";

     selectLeague=(selectedLeagueId)=>{    
        this.selectedLeagueId = selectedLeagueId;
        this.forceUpdate();
     };
 
     async componentWillMount() {    
        await this.props.onGetLeagues(this.props.match.params.id);
        slideLeagues(this.props.fetched,this.selectLeague,this.props.match.params.id); 
    }
    
    render() {
        let documentBody = "";
        let durationBody = "";
        if (this.selectedLeagueId !=="") {
            const redirectUrl = `/matches/${this.selectedLeagueId}`
             return <Redirect to={redirectUrl}/>;            
        }

        
        if(this.props.fetched === true){
            durationBody = this.props.leagues.map((item, i) => {
                return (
                    <LeagueSlideTemplate key={i} item = {item} index={i}/>
                );
            });
        }

        documentBody = this.props.fetched === true ? 
        <div className="container mt-5">
            <h2 className="page-title">CHOOSE YOUR FAVORITE LEAGUE</h2>
            <div id="slider" className="ui-card-slider">
            {durationBody}
            </div>
        </div>   
        :  <div className="container mt-5"></div>

        return (
          documentBody
        )
    }
}

const mapStateToProps = ({leagues}) =>{
    return {
        leagues:leagues.result,
        fetched:leagues.fetched,
        error:leagues.error,
        bodyClass : 'pages',
        sender :"leagues"
      };
}

const mapDispatchToProps = {
    onGetLeagues: getLeagues,
    onSelectCurrentLeague: selectCurrentLeague
  };

export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(Legues));
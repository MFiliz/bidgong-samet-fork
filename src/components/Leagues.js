import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {getLeagues} from '../actions/GetLeaguesAction';
import LeagueSlideTemplate from './Templates/LeagueSlideTemplate';
import {slideLeagues} from '../scripts/LeaguesScripts';
import {selectCurrentLeague} from '../actions/SelectCurrentLeagueAction';


import Layout from './Layout'; 

class Legues extends Component {  

    selectedLeagueId = "";

     selectLeague=(selectedLeagueId)=>{    
        this.selectedLeagueId = selectedLeagueId;
        this.forceUpdate();
     };
 
     async componentWillMount() {    
        await this.props.onGetLeagues(this.props.match.params.id);
        slideLeagues(this.props.leagues,this.selectLeague,this.props.match.params.id); 
        console.log(this.props) 
    }
    
    render() {

        if (this.selectedLeagueId !=="") {
            const redirectUrl = `/matches/${this.selectedLeagueId}`
             return <Redirect to={redirectUrl}/>;            
        }

        let durationBody = "";
        if(this.props.leagues.fetched === true){
            durationBody = this.props.leagues.result.map((item, i) => {
                return (
                    <LeagueSlideTemplate key={i} item = {item} index={i}/>
                );
            });
        }

        return (
            <Layout {...this.props}>
                <div className="container mt-5">
                    <h2 className="page-title">CHOOSE YOUR FAVORITE LEAGUE</h2>
                    <div id="slider" className="ui-card-slider">
                    {durationBody}
                    </div>
                </div>
             </Layout>            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ...state,
        fetched:state.leagues.fetched,
        error:state.leagues.error,
        bodyClass : 'pages',
        sender :"leagues"
      };
}

const mapDispatchToProps = {
    onGetLeagues: getLeagues,
    onSelectCurrentLeague: selectCurrentLeague
  };

export default connect(mapStateToProps,mapDispatchToProps)(Legues);
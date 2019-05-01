import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMatches} from '../actions/GetMatchesAction';
import LayoutHOC from './LayoutHOC';
import MatchesItemTemplate from './Templates/MatchesItemTemplate'



class Matches extends Component {

  async componentWillMount() {     
      if(this.props.match.params.id!==undefined && this.props.match.params.id !=="")
      {
        this.props.onGetMatches(this.props.match.params.id);   
      }   
  }
  render() {
    let documentBody = "";
    let durationBody = "";

    if(this.props.fetched === true){
        durationBody = this.props.matches.map((item, i) => {
            return (
                <MatchesItemTemplate key={i} item = {item} index={i}/>
            );
        });
    }

    documentBody = this.props.fetched ? 
    <div>
        <div className="row team-list-big">
              <div className="col-lg-4 col-md-4"><img src="/assets/img/football/barcelona.png" className="img-fluid" alt=""/>Barcelona</div>
              <div className="col-lg-4 col-md-4 score">1:1</div>
              <div className="col-lg-4 col-md-4"><img src="/assets/img/football/real-madrid.png" className="img-fluid" alt=""/>Real Madrid</div>
        </div>
        {durationBody}
    </div>
    : "";
    return (            
      documentBody
    )
  }
}

const mapStateToProps = ({matches}) =>{
  return {
    matches : matches.result,
    fetched:matches.fetched,
    error:matches.error,
    bodyClass : 'pages'
  };
}

const mapDispatchToProps = {
  onGetMatches: getMatches
};

 export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(Matches));
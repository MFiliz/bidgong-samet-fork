import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMatches} from '../actions/GetMatchesAction';
import Layout from './Layout';
import {Link} from 'react-router-dom';
import MatchesItemTemplate from './Templates/MatchesItemTemplate'



class Matches extends Component {

  async componentWillMount() {     
      if(this.props.match.params.id!==undefined && this.props.match.params.id !=="")
      {
        await this.props.onGetMatches(this.props.match.params.id);   
      }   
  }
  render() {
    // console.log(this.props)
    let durationBody = "";
        if(this.props.matches.fetched === true){
            durationBody = this.props.matches.result.map((item, i) => {
                return (
                    <MatchesItemTemplate key={i} item = {item} index={i}/>
                );
            });
        }
    return (            
      <Layout {...this.props}>
          <div className="row team-list-big">
                <div className="col-lg-4 col-md-4"><img src="/assets/img/football/barcelona.png" className="img-fluid" alt=""/>Barcelona</div>
                <div className="col-lg-4 col-md-4 score">1:1</div>
                <div className="col-lg-4 col-md-4"><img src="/assets/img/football/real-madrid.png" className="img-fluid" alt=""/>Real Madrid</div>
          </div>
          {durationBody}
          {/* <div className="row team-list">            
              <div className="col-lg-1 col-md-1"><img src="/assets/img/football/barcelona.png" className="img-fluid" alt=""/></div>
              <div className="col-lg-3 col-md-3">Barcelona</div>
              <div className="col-lg-4 col-md-4 score"><Link to="/match/1">1:0</Link></div>  
              <div className="col-lg-3 col-md-3 text-right">Real Madrid</div>
              <div className="col-lg-1 col-md-1"><img src="/assets/img/football/real-madrid.png" className="img-fluid" alt=""/></div>                    
          </div>
          <div className="row team-list">
              <div className="col-lg-1 col-md-1"><img src="/assets/img/football/barcelona.png" className="img-fluid" alt=""/></div>
              <div className="col-lg-3 col-md-3">Barcelona</div>
              <div className="col-lg-4 col-md-4 score"><Link to="/match/2">2:0</Link></div>
              <div className="col-lg-3 col-md-3 text-right">Real Madrid</div>
              <div className="col-lg-1 col-md-1"><img src="/assets/img/football/real-madrid.png" className="img-fluid" alt=""/></div>              
          </div>
          <div className="row team-list">
              <div className="col-lg-1 col-md-1"><img src="/assets/img/football/barcelona.png" className="img-fluid" alt=""/></div>
              <div className="col-lg-3 col-md-3">Barcelona</div>
              <div className="col-lg-4 col-md-4 score"><Link to="/match/3">4:3</Link></div>
              <div className="col-lg-3 col-md-3 text-right">Real Madrid</div>
              <div className="col-lg-1 col-md-1"><img src="/assets/img/football/real-madrid.png" className="img-fluid" alt=""/></div>
          </div> */}
          {/* Maçlar {this.props.result.user} */}
      </Layout>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    ...state,
    fetched:state.matches.fetched,
    bodyClass : 'pages'
  };
}

const mapDispatchToProps = {
  onGetMatches: getMatches
};

 export default connect(mapStateToProps,mapDispatchToProps)(Matches);
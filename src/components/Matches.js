import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../actions/GetMatchesAction';
import Layout from './Layout';
import {Link} from 'react-router-dom';


class Matches extends Component {

  componentWillMount = () => {
      this.props.onGetUsers();
  };  

  render() {
    
    return (            
      <Layout {...this.props}>
        <div className="row team-list-big">
                <div className="col-lg-4 col-md-4"><img src="/assets/img/football/barcelona.png" className="img-fluid" alt=""/>Barcelona</div>
                <div className="col-lg-4 col-md-4 score">1:1</div>
                <div className="col-lg-4 col-md-4"><img src="/assets/img/football/real-madrid.png" className="img-fluid" alt=""/>Real Madrid</div>
          </div>
          <div className="row team-list">            
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
          </div>
          {/* Maçlar {this.props.result.user} */}
      </Layout>
    )
  }
}

const mapStateToProps = ({matches}) =>{
  return {
    result: matches,
    fetched:matches.fetched,
    bodyClass : 'pages'
  };
}

const mapDispatchToProps = {
  onGetUsers: getUsers
};

 export default connect(mapStateToProps,mapDispatchToProps)(Matches);
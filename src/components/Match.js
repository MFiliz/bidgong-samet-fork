import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip'

class SelectedMatch extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="row team-list-big">
            <div className="col-lg-4 col-md-4"><img src="/assets/img/football/barcelona.png" className="img-fluid" alt="" />Barcelona
            </div>
            <div className="col-lg-4 col-md-4 score">1:1</div>
            <div className="col-lg-4 col-md-4"><img src="/assets/img/football/real-madrid.png" className="img-fluid" alt="" />Real Madrid
            </div>
        </div>
        <div className="row">
        <div className="col-lg-12 col-md-12">
        </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="field-football">
                    <Link to="/player/1"><div data-tip='kaleci' className="football-uniform-keeper footballPlayer1"></div></Link>
                    <Link to="/player/2"><div data-tip='futbolcu 2' className="football-uniform footballPlayer2"></div></Link>
                    <Link to="/player/3"><div data-tip='futbolcu 3' className="football-uniform footballPlayer3"></div></Link>
                    <Link to="/player/4"><div data-tip='futbolcu 4' className="football-uniform footballPlayer4"></div></Link>
                    <Link to="/player/5"><div data-tip='futbolcu 5' className="football-uniform footballPlayer5"></div></Link>
                    <Link to="/player/6"><div data-tip='futbolcu 6' className="football-uniform footballPlayer6"></div></Link>
                    <Link to="/player/7"><div data-tip='futbolcu 7' className="football-uniform footballPlayer7"></div></Link>
                    <Link to="/player/8"><div data-tip='futbolcu 8' className="football-uniform footballPlayer8"></div></Link>
                    <Link to="/player/9"><div data-tip='futbolcu 9' className="football-uniform footballPlayer9"></div></Link>
                    <Link to="/player/10"><div data-tip='futbolcu 10' className="football-uniform footballPlayer10"></div></Link>
                    <Link to="/player/11"><div data-tip='futbolcu 11' className="football-uniform footballPlayer11"></div></Link>
                </div>
              </div>
        </div>
        <ReactTooltip />
      </Layout>
    )
  }
}

const mapStateToProps = ({selectedMatch}) =>{
  return {
    selectedMatch,
    fetched : true,
    bodyClass : 'pages'
  };
}

export default connect(mapStateToProps)(SelectedMatch);
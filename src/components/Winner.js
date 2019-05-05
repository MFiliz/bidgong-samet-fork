import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';

class Winner extends Component {
  render() {
    const redirectUrl = `/player/${this.props.match.params.id}`;
    console.log(this.props);
    return (
      <div>
        <div className="row">
            <div className="col-lg-12 col-md-12 pay-success">
                <img src="/assets/img/icon-winner.png" className="img-fluid m-5" alt="" />
                <h1 className="font-weight-bold">WINNER</h1>
                <Link to={redirectUrl}><button type="submit" className="btn btn-primary mx-auto">PAY NOW</button></Link>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({player,winner}) =>{
  return {
    player,
    winner,
    fetched : true,
    bodyClass : 'pay'
  };
}

export default connect(mapStateToProps)(LayoutHOC(Winner));
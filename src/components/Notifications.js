import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';
import {Link} from 'react-router-dom';

class Notifications extends Component {
  render() {

    return (
      <div>
        <h1>Notifications</h1>
        <div class="row notification-list">
            <div class="col-lg-12 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div class="row notification-list">
            <div class="col-lg-12 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div class="row notification-list">
            <div class="col-lg-12 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({Notification}) =>{
  return {
    Notification,
    fetched : true,
    bodyClass : 'pages'
  };
}

export default connect(mapStateToProps)(LayoutHOC(Notifications));
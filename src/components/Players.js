import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';

class Players extends Component {
  
  render() {
    return (
      <div>
        Burası Players sayfası
      </div>
    )
  }
}

const mapStateToProps = ({players}) =>{
    return {
      players
    };
}

export default connect(mapStateToProps)(LayoutHOC(Players));
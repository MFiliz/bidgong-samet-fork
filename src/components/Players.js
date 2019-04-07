import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';

class Players extends Component {
  
  render() {
    console.log(this.props);
    return (
      <Layout>
        Burası Players sayfası
      </Layout>
    )
  }
}

const mapStateToProps = ({players}) =>{
    return {
      players
    };
}

export default connect(mapStateToProps)(Players);
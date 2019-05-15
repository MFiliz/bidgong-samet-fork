import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';

class About extends Component {
  render() {
      console.log(this.props)
    return (
        <div className="container mt-5">
            <h2 className="page-title">About PAGE</h2>
        </div>   
    )
  }
}

const mapStateToProps = ({user,registerUser,ToastsStore}) =>{
    return {
          user,
          registerUser,
          ToastsStore,
          fetched : true,
          bodyClass : 'pages'
      };
  }
  
  const mapDispatchToProps = {
    
    };
  
  export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(About));
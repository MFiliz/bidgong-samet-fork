import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from './LayoutHOC';

class Main extends Component {
  render() {
    return (
        <div className="container mt-5">
            <h2 className="page-title">MAIN PAGE</h2>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(Main));
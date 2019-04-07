import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import Layout from '../Layout';
import Slider from './Slider';   
import Leagues from './Leagues'; 
import history from "../History";  

class Categories extends Component {  
    
    // static propTypes = {
    //     categories : PropTypes.array.isRequired
    // }
    
    render() {
        return (
            <Layout {...this.props}>
                <div className="container mt-5">
                    <h2 className="page-title">CHOOSE YOUR FAVORITE SPORTS CATEGORY</h2>
                    <Slider/>
                    {/* <Leagues/> */}
                </div>
            </Layout>            
        )
    }
}

const mapStateToProps = ({categories}) =>{
    return {
        result: categories,
        fetched:true,
        bodyClass : 'pages'
      };
}

export default connect(mapStateToProps)(Categories);
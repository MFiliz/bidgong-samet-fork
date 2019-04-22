import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {getCategories} from '../../actions/GetCategoriesAction';
import CategorySlideTemplate from '../Templates/CategorySlideTemplate'


import Layout from '../Layout'; 
import Leagues from './Leagues'; 

class Categories extends Component {  
    
    // static propTypes = {
    //     categories : PropTypes.array.isRequired
    // }

   
      

     selectCategory=(currentType,currentTypeId)=>{    
        return alert(currentTypeId);
     };
 
     slideCategories=()=>{
         if(this.props.categories.fetched)
         {
             var self = this;
             window.slider = window.$('#slider').cardSlider({
                 slideTag: 'div'
                 , slideClass: 'slide'
                 , current: 1
                 , followingClass: 'slider-content-6'
                 , delay: 300
                 , transition: 'ease'
                 , onBeforeMove: function(slider, onMove) {
                     // console.log('onBeforeMove')
                     onMove()
                 }
                 , onMove: function(slider, onAfterMove) {
                     onAfterMove()
                 }
                 , onAfterMove: function() {
                     // console.log('onAfterMove')
                 }
                 , onAfterTransition: function() {
                     // console.log('onAfterTransition')
                 }
                 , onCurrent: function(slider) {
                     var currentType = window.$(slider.getCurrentSlide()[0]).attr("type");
                     var currentTypeId = window.$(slider.getCurrentSlide()[0]).attr("typeid");
                     self.selectCategory(currentType,currentTypeId);
                 }
             })
         }
     };
 
     async componentDidMount() {     
         await this.props.onGetCategories();
         this.slideCategories();
    }
    
    render() {
        console.log(this.props)
        let durationBody = "";
        if(this.props.categories.fetched === true){
            durationBody = this.props.categories.result.map((item, i) => {
                return (
                    <CategorySlideTemplate key={i} item = {item} index={i}/>
                );
            });
        }

        return (
            <Layout {...this.props}>
                <div className="container mt-5">
                    <h2 className="page-title">CHOOSE YOUR FAVORITE SPORTS CATEGORY</h2>
                    <div id="slider" className="ui-card-slider">
                    {durationBody}
                    </div>
                </div>
             </Layout>            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ...state,
        fetched:state.categories.fetched,
        error:state.categories.error,
        bodyClass : 'pages'
      };
}

const mapDispatchToProps = {
    onGetCategories: getCategories
  };

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
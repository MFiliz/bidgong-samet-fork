import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Slider extends Component {
    
    clicked=(currentType,currentTypeId)=>{

        let config = {
            headers: { 'Content-Type': 'application/json' }
          };
          
        //   axios.post('https://localhost:5001/api/values', currentTypeId, config)
        //        .then((response) => {
        //           console.log(response.data);
        //   });

    
      return alert(currentTypeId);
    };

    componentDidMount() {
        // var self = this;
        // window.slider = window.$('#slider').cardSlider({
        //     slideTag: 'div'
        //     , slideClass: 'slide'
        //     , current: 1
        //     , followingClass: 'slider-content-6'
        //     , delay: 300
        //     , transition: 'ease'
        //     , onBeforeMove: function(slider, onMove) {
        //         // console.log('onBeforeMove')
        //         onMove()
        //     }
        //     , onMove: function(slider, onAfterMove) {
        //         onAfterMove()
        //     }
        //     , onAfterMove: function() {
        //         // console.log('onAfterMove')
        //     }
        //     , onAfterTransition: function() {
        //         // console.log('onAfterTransition')
        //     }
        //     , onCurrent: function(slider) {
        //         var currentType = window.$(slider.getCurrentSlide()[0]).attr("type");
        //         var currentTypeId = window.$(slider.getCurrentSlide()[0]).attr("typeid");
        //         self.clicked(currentType,currentTypeId);
        //     }
        // })
    }
    
  render() {
    return (
        <div id="slider" className="ui-card-slider">
            <div className="slide" type="basketball" typeid="1"  >
                <img src="/assets/img/icon-basketball.png" />
            </div>
            <div className="slide" type="football" typeid="2">
                <img src="/assets/img/icon-football.png"/>
            </div>
            <div className="slide" type="tennis" typeid="3">
                <img src="/assets/img/icon-tennis.png"/>
            </div>
            <div className="slide" type="celebrities" typeid="4">
                <img src="/assets/img/icon-celebrities.png"/>
            </div>
            <div className="slide" type="formula" typeid="5">
                <img src="/assets/img/icon-formula.png"/>
            </div>
        </div>
    )
  }
}

// const mapStateToProps = ({categories}) =>{
//     return {
//         categories
//     };
//   }

export default connect()(Slider);

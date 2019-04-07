import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Leagues extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    state = {
        redirect: ""
    }

    clicked=(selected)=>{
        
        this.setState({ redirect: selected })
        alert(this.state.redirect);
    };
    
    componentDidMount() {
       
        var self = this;
        window.slider = window.$('#sliderLeagues').cardSlider({
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
                self.clicked(currentType);
            }
        })
    }

  render() {
      console.log('selammm')
    // if (this.state.redirect==="1") {
    //     console.log("sayfa değişiyor");
    //     return <Redirect to={"matches/"+this.state.redirect}/>;
    // }
    // else
    // {
        return (
        
            <div id="sliderLeagues" className="ui-card-slider">
                <div className="slide" type="1"  >
                    Lig 1
                </div>
                <div className="slide" type="2"  >
                    Lig 2
                </div>
                <div className="slide" type="3"  >
                    Lig 3
                </div>
                <div className="slide" type="4"  >
                    Lig 4
                </div>
                <div className="slide" type="5"  >
                    Lig 5
                </div>
            </div>
        )
    // }   
  }
}

const mapStateToProps = ({leagues}) =>{
    return {
        leagues
      };
}

export default connect(mapStateToProps)(Leagues);
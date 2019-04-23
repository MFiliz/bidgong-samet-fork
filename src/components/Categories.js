import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {getCategories} from '../actions/GetCategoriesAction';
import CategorySlideTemplate from './Templates/CategorySlideTemplate';
import {slideCategories} from '../scripts/CategoriesScripts';
import {selectCurrentCategory} from '../actions/SelectCurrentCategoryAction';


import Layout from './Layout'; 

class Categories extends Component {  
    
    // static propTypes = {
    //     categories : PropTypes.array.isRequired
    // }

     selectedCategoryId = "";

     selectCategory=(selectedCategoryId)=>{    
         
        this.selectedCategoryId = selectedCategoryId;
        this.forceUpdate();
     };
 
     async componentWillMount() { 
        await this.props.onGetCategories();
        slideCategories(this.props.categories,this.selectCategory);       
    }
    
    render() {
        if (this.selectedCategoryId !=="") {
            const redirectUrl = `/leagues/${this.selectedCategoryId}`;
             return <Redirect to={redirectUrl}/>;            
        }

        let durationBody = "";
        if(this.props.categories.fetched === true){
            durationBody = this.props.categories.result.map((item, i) => {
                return (
                    <CategorySlideTemplate key={i} item = {item} index={i}/>
                );
            });
        }
        console.log(this.props)
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
        bodyClass : 'pages',
        sender :"categories"
      };
}

const mapDispatchToProps = {
    onGetCategories: getCategories,
    onSelectCurrentCategory: selectCurrentCategory
  };

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
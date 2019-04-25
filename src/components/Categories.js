import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
import {getCategories} from '../actions/GetCategoriesAction';
import CategorySlideTemplate from './Templates/CategorySlideTemplate';
import {slideCategories} from '../scripts/CategoriesScripts';
import {selectCurrentCategory} from '../actions/SelectCurrentCategoryAction';
import LayoutHOC from './LayoutHOC';

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
        slideCategories(this.props.fetched,this.selectCategory);       
    }
    
    
    render() {
        if (this.selectedCategoryId !=="") {
            const redirectUrl = `/leagues/${this.selectedCategoryId}`;
             return <Redirect to={redirectUrl}/>;            
        }

        let durationBody = "";
        if(this.props.fetched === true){
            durationBody = this.props.categories.map((item, i) => {
                return (
                    <CategorySlideTemplate key={i} item = {item} index={i}/>
                );
            });
        }

        return (
                <div className="container mt-5">
                    <h2 className="page-title">CHOOSE YOUR FAVORITE SPORTS CATEGORY</h2>
                    <div id="slider" className="ui-card-slider">
                    {durationBody}
                    </div>
                </div>       
        )
    }
}

const mapStateToProps = ({categories,user}) =>{
    return {
        categories : categories.result,
        user : user.userInfo == null ? null : user.userInfo,
        userFetched:user.fetched,
        userLoggedIn : user.userInfo==null ? false : true,
        fetched:categories.fetched,
        error:categories.error,
        bodyClass : 'pages',
        sender :"categories"
      };
}

const mapDispatchToProps = {
    onGetCategories: getCategories,
    onSelectCurrentCategory: selectCurrentCategory
  };

export default connect(mapStateToProps,mapDispatchToProps)(LayoutHOC(Categories));
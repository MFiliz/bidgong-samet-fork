import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {currentUser} from '../actions/CurrentUserAction';

class Layout extends Component {
  
  componentWillMount() {
    this.props.onCurrentUser();
  }

  componentDidMount() {
    //   console.log("layout çalıştı")
  }

  render() {

    var sectionClassName = '';
    var headerCassName = '';
    var dvMainCassName = '';
    var style = {};
    var fetched = this.props.fetched ? true : false;
    var error = this.props.error === undefined ? "" : this.props.error.message;
    if(fetched === false)
    {
        document.body.className="page-top";
        sectionClassName = '';
        headerCassName = 'masthead';
        dvMainCassName = '';
        style = {'display':'none'};
    }
    else
    {
        document.body.className=this.props.bodyClass;
        sectionClassName = 'main-section';
        headerCassName = 'mt-4 bidgong-nav';
        dvMainCassName = 'container mt-5';
        style = {};
    }

    const children = React.Children.map(this.props.children, (child, index) => {
        return React.cloneElement(child, {
            samet:"ilhan"
        });
    });
    
    
    return (
        <section className={sectionClassName}>        
        <header className={headerCassName}> 
        {
            !fetched ?                 
            (
                error !=="" ?
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                    <h3>Bilinmeyen bir hata ile karşılaşıldı : </h3>
                    <br/>
                    <br/>
                    <br/>
                    {error}
                    </div>                        
                </div>
                :
                <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <img src="/assets/img/splash.png" className="img-fluid" alt="" />
                </div>
            </div>
            )
            :
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-md-1 icons">
                        <Link to="#"><i className="fas fa-bars"></i></Link>
                    </div>
                    <div className="col-lg-10 col-md-10 logo">
                        <div className="mx-auto text-center">
                        <Link to="/"><img src="/assets/img/logo.png" className="img-fluid" alt=""/> </Link>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 icons text-right">
                        <Link to="#"><i className="fas fa-bell"></i></Link>
                    </div>
                </div>
            </div> 
        }     
        </header>   
        <div style={style} className={dvMainCassName}>
                {
                    children
                }
        </div>  
    </section>      
    )
  }
}

function removeByKey (myObj, deleteKey) {
    return Object.keys(myObj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = myObj[current];
        return result;
    }, {});
  }

const mapStateToProps = (state) =>{
   removeByKey(state,"children");
  return {
    state
  };
}

const mapDispatchToProps = {
    onCurrentUser: currentUser
};

export default connect(mapStateToProps,mapDispatchToProps)(Layout);
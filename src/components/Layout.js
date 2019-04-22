import React from 'react';
import {Link} from 'react-router-dom';

const Layout = props => {
    var sectionClassName = '';
    var headerCassName = '';
    var dvMainCassName = '';
    var style = {};
    var fetched = props.fetched ? true : false;
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
        document.body.className=props.bodyClass;
        sectionClassName = 'main-section';
        headerCassName = 'mt-4 bidgong-nav';
        dvMainCassName = 'container mt-5';
        style = {};
    }
    return (
        <section className={sectionClassName}>        
            <header className={headerCassName}> 
            {
                !fetched ? 
                
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <img src="/assets/img/splash.png" className="img-fluid" alt="" />
                    </div>
                </div>
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
                    {props.children}
            </div>  
        </section>            
    );
};

export default Layout;
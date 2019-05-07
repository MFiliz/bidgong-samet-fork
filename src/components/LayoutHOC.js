import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {currentUser as CheckUser} from '../actions/CurrentUserAction';
import {setWinner} from '../actions/WinnerAction';
import {logoutUser} from '../actions/LogoutUserAction';
import PubNubReact from 'pubnub-react';

const self = [];

const LayoutHOC = (WrappedComponent,mapStateToProps,mapDispatchToProps) => {    
    const cmp = class extends Component{   

    constructor(props) {
        super(props);
        this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-1ba62178-7b93-4e40-bbcf-39570315b5ee',
            subscribeKey: 'sub-c-7d57f2f4-37bc-11e9-b5cf-1e59042875b2'
          });
        this.pubnub.init(this);
    }

    self = this;

    gotoError=()=>{
        this.props.history.push('/error');
    };

    redirectLoginIfNecessary=()=>{
        if(this.props.userFetched && !this.props.userLoggedIn)
        {
            this.props.history.push('/login');
        }
    };

    asidebarOpen=()=>{
        window.$('.aside').asidebar('open');
    };
    
    async logoutCurrentUser() {
        await this.props.onLogoutUser();
        this.redirectLoginIfNecessary();
    }

    async componentWillMount() {
        await this.props.onCheckUser(); 
        this.redirectLoginIfNecessary();
        if(this.props.userLoggedIn)
        {
            this.pubnub.subscribe({
                channels: [this.props.user.email],
                withPresence: true
            });
    
            this.pubnub.getMessage(this.props.user.email, (channel) => {   
                console.log(channel.message) 
                    this.props.onSetWinner(channel.message);
                    this.props.history.push(`/winner/${channel.message.PlayerId}`);
            });
        }
        
    }
      render() {

        var sectionClassName = '';
        var headerCassName = '';
        var dvMainCassName = '';
        var style = {};
        var style2 = {};
        var fetched = this.props.fetched ? true : false;
        var error = this.props.error === undefined ? "" : this.props.error.message;
        // console.log(typeof(this.props.error.isCustom) === 'undefined')
        var isCustom = false;
        if(typeof(this.props.error)!=="undefined" && typeof(this.props.error.isCustom)!=="undefined")
        {
            isCustom = this.props.error.isCustom;
        }
       
        style2 = {'display':'flex','justifyContent':'center','alignItems':'center','color':'black'}
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
        return (
          <section className={sectionClassName}>        
          <header className={headerCassName}> 
          {
              !fetched ?                 
              (
                  error !=="" ?
                  <div className="container d-flex h-100 align-items-center">
                      <div className="mx-auto text-center">
                      <Link to="/"><img src="/assets/img/logo.png" className="img-fluid" alt=""/> </Link>
                      <br/>
                      <br/>
                      <br/>
                      <h3> {
                          isCustom ? 
                            error
                             : 
                             "Bir hata ile karşılaşıldı"
                          }</h3>                     
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
                          <Link to="#" onClick={this.asidebarOpen}><i className="fas fa-bars"></i></Link>
                      </div>
                      <div className="col-lg-10 col-md-10 logo">
                          <div className="mx-auto text-center">
                          <Link to="/"><img src="/assets/img/logo.png" className="img-fluid" alt=""/> </Link>
                          </div>
                      </div>
                      <div className="col-lg-1 col-md-1 icons text-right">
                          <Link to="/notifications"><i className="fas fa-bell"></i><span className="badge">3</span></Link>
                      </div>
                  </div>
              </div> 
          }     
          </header> 

          <div style={style} className={dvMainCassName}>
            {
                <WrappedComponent {...this.props}/>
            }
          </div>
         
          <div className="aside">
            <div className="aside-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-xs-2">
                        <span className="close" data-dismiss="aside" aria-hidden="true"><i
                                className="fa fa-times-circle"></i></span>
                    </div>
                    <div style={style2} className="col-lg-6 col-md-6 col-xs-6">
                        samet ilhan </div>
                    <div className="col-lg-4 col-md-4 col-xs-4">
                        <img src="/assets/img/icon-user.png" className="img-fluid pull-right" alt="" />
                    </div>
                </div>
            </div>
            <div className="aside-contents">
                <ul className="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-6">
                        <Link to="#" onClick={this.logoutCurrentUser} ><i className="fas fa-sign-out-alt"></i></Link></div>
                    <div className="col-lg-6 col-md-6 col-xs-6">
                        <Link to="#"><i className="fas fa-cog pull-right"></i></Link></div>
                </div>
            </div>
        </div>  
      </section>      
      )
      } 
    };

    mapStateToProps = ({user,winner}) =>{
        return {
            ...mapStateToProps,
            user : user.userInfo==null ? undefined : user.userInfo,
            userLoggedIn : user.userInfo==null ? false : true,
            userFetched : user.fetched,
            winner
          };
    }

    mapDispatchToProps = {
        ...mapDispatchToProps,
        onCheckUser: CheckUser,
        onLogoutUser: logoutUser,
        onSetWinner : setWinner,
        onGotoError : self.gotoError
    };

    return connect(mapStateToProps,mapDispatchToProps)(cmp);
};

export default LayoutHOC;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router,Route,Switch} from 'react-router-dom';
import history from "./components/History";
import Categories from './components/Categories';
import Leagues from './components/Leagues';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignupSuccess from './components/SignupSuccess';
import Error from './components/Error';
import Match from './components/Match';
import Matches from './components/Matches';
import Player from './components/Player';
import BetPayer from './components/BetPayer';
import Players from './components/Players';
import PaymentInfo from './components/PaymentInfo';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentSuccessResult from './components/PaymentSuccessResult';
import Notifications from './components/Notifications';
import Winner from './components/Winner';

class App extends Component {
  render() {
    return (     
          <Router history={history}>
             <Switch>
                <Route path="/" component={Categories} exact strict ></Route>
                <Route path="/categories" component={Categories} exact ></Route>
                <Route path="/login" component={Login} exact ></Route>
                <Route path="/signup" component={SignUp} exact ></Route>
                <Route path="/signupsuccess" component={SignupSuccess} exact ></Route>
                <Route path="/currentmatch/:id/:teamGuid?" component={Match} exact strict ></Route>
                <Route path="/matches/:id?" component={Matches} exact ></Route>   
                <Route path="/leagues/:id?" component={Leagues} exact ></Route>                   
                <Route path="/player/:id?" component={Player} exact ></Route>
                <Route path="/betplayer/:matchid/:id" component={BetPayer} exact ></Route>
                <Route path="/players/:id?" component={Players} exact ></Route>
                <Route path="/paymentinfo" component={PaymentInfo} exact ></Route>
                <Route path="/paymentsuccess" component={PaymentSuccess} exact  ></Route>
                <Route path="/paymentsuccessresult/:id/:isPayment?" component={PaymentSuccessResult} exact  ></Route>
                <Route path="/notifications" component={Notifications} exact ></Route>
                <Route path="/winner/:id" component={Winner} exact ></Route>
                <Route component={Error} exact></Route>
             </Switch>              
          </Router>           
    );
  }
}

export default App;

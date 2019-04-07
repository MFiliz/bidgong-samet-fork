import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router,Route,Switch} from 'react-router-dom';
import history from "./components/History";
import Categories from './components/Categories/Categories';
import Login from './components/Login';
import Error from './components/Error';
import Match from './components/Match';
import Matches from './components/Matches';
import Player from './components/Player';
import Players from './components/Players';
import PaymentInfo from './components/PaymentInfo';
import PaymentSucces from './components/PaymentSucces';

class App extends Component {
  render() {
    return (     
          <Router history={history}>
             <Switch>
                <Route path="/" component={Categories} exact strict ></Route>
                <Route path="/categories" component={Categories} exact ></Route>
                <Route path="/login" component={Login} exact ></Route>
                <Route path="/match/:id" component={Match} exact strict ></Route>
                <Route path="/matches/:id?" component={Matches} exact ></Route>               
                <Route path="/player/:id?" component={Player} exact ></Route>
                <Route path="/players/:id?" component={Players} exact ></Route>
                <Route path="/paymentinfo" component={PaymentInfo} exact ></Route>
                <Route path="/paymentsuccess" component={PaymentSucces} exact ></Route>
                <Route component={Error} exact></Route>
             </Switch>              
          </Router>           
    );
  }
}

export default App;
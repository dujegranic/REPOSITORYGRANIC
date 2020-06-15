import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import {Route,BrowserRouter as Router } from 'react-router-dom';
import Pocetna from './components/Pocetna.js';
import Povijest from './components/Povijest.js';
import Najbolji from './components/Najbolji.js';
import Danas from './components/Danas.js';
import Leaguepass from './components/leaguepass.js';

function App() {
  return (
  <div>
    <Header></Header>

      <Router>
        <Route exact path="/"component={Pocetna}></Route>
        <Route exact path="/povijest"component={Povijest}></Route>
        <Route exact path="/najbolji"component={Najbolji}></Route>
        <Route exact path="/danas"component={Danas}></Route>
        <Route exact path="/leaguepass"component={Leaguepass}></Route>
        
      </Router>
      
      <Footer></Footer>
    </div>
    
  );
}

export default App;

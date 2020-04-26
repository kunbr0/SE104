import React from 'react';
import SLogin from './../Sites/Login/Login';
import SHomepage from './../Sites/Homepage/Homepage';
import LMenu from './../Components/LMenu/LMenu';
import TopBar from './../Components/TopBar/TopBar';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <div id="lmenu"> <LMenu /> </div>
        <div id="main-view">
            <TopBar />

            <Switch>
            <Route exact path="/" component={SHomepage} />
            <Route path="/about">
                <SLogin />
            </Route>
            <Route path="/dashboard">
            <div>Hello zxc</div>
            </Route>
            </Switch>
        </div>
       
       
      </div>
    </Router>
  );
}

export default App;

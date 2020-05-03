import React from 'react';

import LMenu from './../Components/LMenu/LMenu';
import TopBar from './../Components/TopBar/TopBar';
import Loader from './../MainLoader/Loader';

import routes from './../Routes/Routes';

import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";



function showRoutes(routes){
    var result = null;
    if(routes.length > 0){
        result = routes.map((route, index) => {
            return (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
        })
    }
    return result;
}


function App() {

    
    
    return (
        
        
        <Router>
        <div>
            <Loader />
            <div id="lmenu"> <LMenu /> </div>
            <div id="main-view">
            
            
                <TopBar />

                <Switch>
                    {showRoutes(routes)}
                </Switch>
            </div>
        
        
        </div>
        </Router>
        
    );
}

export default App;

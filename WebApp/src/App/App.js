import React from 'react';

// import LMenu from './../Components/LMenu/LMenu';
// import MLMenu from './../Components/LMenu/MLMenu';
// import TopBar from './../Components/TopBar/TopBar';
// import Loader from './../MainLoader/Loader';

import loggedroutes from './../Routes/LoggedRoutes';
import guestroutes from './../Routes/GuestRoutes';

import LoggedRoutes from './LoggedRoutes/LoggedRoutes';
import GuestRoutes from './GuestRoutes/GuestRoutes';
import 'antd/dist/antd.css';

//import SCalendar from './../Components/SmallCalendar/SmallCalendar';
//import StudentScoreTable from '../Components/StudentScoresTable/StudentScoresTable';

import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";






function App() {

    
    
    return (
        
        
        <Router>
            {
                localStorage.getItem('userData') ? 
                <LoggedRoutes routes={loggedroutes}/> :
                <GuestRoutes routes={guestroutes}/>

                //<StudentScoreTable />
                
            }
            
            
        </Router>
        
    );
}

export default App;

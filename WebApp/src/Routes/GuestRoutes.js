import React from 'react';
//import SLogin from './../Sites/Login/Login';
//import LoginPage from './../../src/Sites/Login/Login';
import TestLogin from './../Sites/TestLogin/TestLogin';
const routes = [
    {
        path : '',
        expact : true,
        main : () => <TestLogin/>
    },
    // {
    //     path : '/',
    //     exact : true,
    //     main : () => <LoginPage />
    // },
    
    // {
    //     path : '',
    //     exact : true,
    //     main : () => <LoginPage />
    // },
];

export default routes;
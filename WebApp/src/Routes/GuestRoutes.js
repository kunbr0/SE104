import React from 'react';
//import SLogin from './../Sites/Login/Login';
import LoginPage from './../../src/Sites/Login/Login';
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <LoginPage />
    },
    
    {
        path : '',
        exact : true,
        main : () => <LoginPage />
    },
];

export default routes;
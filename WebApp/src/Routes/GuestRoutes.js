import React from 'react';
//import SLogin from './../Sites/Login/Login';
import LoginPage from '../Containers/Pages/Login/Login';
import TestLogin from '../Containers/Pages/TestLogin/TestLogin';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <TestLogin/>
    },
    // {
    //     path : '',
    //     exact : true,
    //     main : () => <LoginPage />
    // },
];

export default routes;
import React from 'react';
//import SLogin from './../Sites/Login/Login';
import SHomepage from './../Sites/Homepage/Homepage';
// import SNotFound from './../Sites/NotFound_404/NotFound_404';
//import ClassInfo from './../Sites/Class/ClassInfo';
// import History from './../Sites/History/History';
import SSystem from '../Sites/System/System';
//import Login from '../Sites/Login/Login';
import TestLogin from '../Sites/TestLogin/TestLogin'
import ClassDetails from '../Sites/ClassDetails/ClassDetails';
import Schedule from '../Sites/Schedule/Schedule';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <SHomepage />
    },
    {
        path : '/system',
        exact : false,
        main : () => <SSystem />
    },
    {
        path : '/users',
        exact : false,
        main : () => <TestLogin />
    },
    {
        path : '/class/:classCode',
        exact : false,
        main : ({match}) => <ClassDetails match={match} />
    },
    {
        path : '/schedule',
        exact : false,
        main : () => <Schedule />
    },
    // {
    //     path : '',
    //     exact : true,
    //     main : () => <SNotFound />
    // },
];

export default routes;
import React from 'react';
import SLogin from './../Sites/Login/Login';
import SHomepage from './../Sites/Homepage/Homepage';
import SNotFound from './../Sites/NotFound_404/NotFound_404';
import ClassInfo from './../Sites/Class/ClassInfo';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <SHomepage />
    },
    {
        path : '/class',
        exact : false,
        main : () => <ClassInfo />
    },
    {
        path : '/about',
        exact : false,
        main : () => <SLogin />
    },
    {
        path : '',
        exact : true,
        main : () => <SNotFound />
    },
];

export default routes;
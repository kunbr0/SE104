import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './i18n';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './Redux/Reducers/index';

const store = createStore(
    appReducers
);

console.log(store.getState());

ReactDOM.render(
    <Suspense fallback="loading">
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>
    
,
  document.getElementById('root')
);


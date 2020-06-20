import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './i18n';
import {Provider} from 'react-redux';
import store from "./Redux/store";
import ErrorBoundary from "./ErrorBoundary";
import AppProvider from "./AppProvider";

ReactDOM.render(
    <Provider store={store}>
        <AppProvider>
            <ErrorBoundary>
                <Suspense fallback="loading">
                    <App />
                </Suspense>
            </ErrorBoundary>
        </AppProvider>
    </Provider>
    
,
  document.getElementById('root')
);


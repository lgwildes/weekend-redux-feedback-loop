import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feeling = (state=0, action) => {
   switch(action.type) {
    case 'SET_FEELING':
        return action.payload;
    case 'CLEAR_FEEDBACK':
        return 0;
   }

    return state;
}

const understanding = (state=0, action) => {
    switch(action.type) {
    case 'SET_UNDERSTANDING':
        return action.payload;
    case 'CLEAR_FEEDBACK':
        return 0;
   }
    return state;
}

const support = (state=0, action) => {
    switch(action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        case 'CLEAR_FEEDBACK':
            return 0;
       }
    return state;
}

const comments = (state='', action) => {
   switch(action.type) {
    case 'SET_COMMENT':
        return action.payload;
    case 'CLEAR_FEEDBACK':
        return '';
   }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feeling, 
        understanding,
        support,
        comments

    }),
    applyMiddleware(logger)
);



ReactDOM.render(
<Provider store={storeInstance}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();

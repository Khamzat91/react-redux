import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
    <App />
    </Provider>
    )


render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

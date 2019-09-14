import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';
import { applyMiddleware,createStore } from "redux";
import { Provider } from "react-redux"
import multi from "redux-multi";
import thunk from "redux-thunk";
import reducer from "./main/reducers"
import promisse from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
<<<<<<< HEAD
const store = applyMiddleware(thunk, multi, promisse)(createStore)(reducer, devTools)
=======
const store = applyMiddleware(thunk, promisse, multi)(createStore)(reducer, devTools)
>>>>>>> e6294d7204350835ed381127aef0f2dc12c7a220
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('app'));

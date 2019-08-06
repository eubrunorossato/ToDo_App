import React, { Component } from 'react';
import { Router, Route, Redirect, browserHistory, } from 'react-router';
import Todo from '../Components/ToDo'

// const authenticated = () => {
//   console.log("entrou no checkout");

//   const token = localStorage.getItem('token');
//   console.log(`token: ${token}`);
//   const refreshToken = localStorage.getItem('refreshToken');
//   console.log(`refreshToken: ${refreshToken}`);
//   if(!token || !refreshToken) {
//     console.log(`Before Redirect`);
//     <Redirect to='/login' />
//   }

//   return true;
// }


export default props => (
  <Router history={browserHistory}>
    <Route  path='/'  component = {Todo}/>
  </Router>
)

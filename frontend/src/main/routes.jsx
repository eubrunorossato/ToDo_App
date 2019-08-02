import React, { Component } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import decode from 'jwt-decode';
import Todo from '../Components/todo';
import About from '../Components/about';
import login from '../Components/login';

const checkout = () => {
  console.log("entrou no checkout");

  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  if(!token || !refreshToken) {
    return false;
  }

  try {
    const { exp } = decode(refreshToken);
    console.log(exp)
    console.log(new Date().getTime())

    if(exp < new Date().getTime()){
      return false;
    }
  } catch(e){
    return false;
  }
  return true;
}

const AuthRoute = () => (
    checkout() ? Todo : login
)

export default props => (
  <Router history={ hashHistory }>
    <Route path='/todos' component={ AuthRoute() } />
    <Route path='/about' component={ About } />
    <Route path='/login' component={ login } />
    <Redirect from='*' to='/todos' />
  </Router>
)

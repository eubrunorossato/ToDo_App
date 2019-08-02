import React, { Component } from 'react';
import decode from 'jwt-decode';
import Todo from '../Components/todo';
import login from '../Components/login';
import { Router, Route, Redirect, hashHistory } from 'react-router';

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
    checkout() ? (
      false
    ) : (
      true
    )
  )

export default props => {
  <Router history={hashHistory}>
    <Route path={AuthRoute() ? '/todos' : '/login'} component={AuthRoute() ? Todo : login }/>
    <Route path='/login' component = {login}/>
    <Redirect from='*' to='/todos' />
  </Router>
}

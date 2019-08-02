import React, { Component } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import decode from 'jwt-decode';
import Todo from '../todo/todo';
import About from '../about/about';
import login from '../ToDo/login'

const checkout = () => {
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

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component ={props => (
    checkout() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{ pathname: '/about' }}/>
    )
  )} />
)

export default props => (
  <Router history={ hashHistory }>
    <Route path='/todos' component={ Todo } />
    <Route path='/about' component={ About } />
    <AuthRoute path='/auth' component={ login } />
    <Redirect from='*' to='/todos' />
  </Router>
)

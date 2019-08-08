import React from 'react';
import Login from '../template/login';

const Authentication = (props) => {
  if (localStorage.getItem('token') && localStorage.getItem('refreshToken')) {
    return <div>{props.children}</div>
  } else {
    return <Login />
  }
}

export  default Authentication


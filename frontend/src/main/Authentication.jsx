import React from 'react';
import Login from '../Components/login';

const Authentication = (props) => {
  if (!localStorage.getItem('token') && !localStorage.getItem('refreshToken')) {
    return <div>{props.children}</div>
  } else {
    return <Login />
  }
}

export  default Authentication


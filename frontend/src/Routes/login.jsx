import { BrowserRouter, Route, Router } from 'react-router-dom'

import React, { Component } from 'react';
import login from '../Components/login';

export default props => (
  <Router history={browserHistory}>
    <Route path='/login' exact component={ login }/>
    {/* <Route path='/login' component={ login }/> */}
  </Router>
)


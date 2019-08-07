import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../Style/custom.css'

import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Index from '../Components/ToDo';
import Login from '../Components/login';
import Menu from '../template/menu';
import { createHashHistory } from 'history'
const history = createHashHistory()


export default class App extends Component {
  constructor(props) {
    super(props);
    this.Authentication = this.Authentication.bind(this);
  };

  Authentication() {
    if (!localStorage.getItem('token') && localStorage.getItem('refreshToken')) {
      history.push("/homePage")
      return true
    } else {
      history.push("/login")
      return false;
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='container'>
          <Menu register={this.Authentication() ? null : 'Register'} tasks={this.Authentication() ? 'Tasks' : null} />
        </div>
        <HashRouter>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' component={this.Authentication()}>
              <Route path='/homePage' component={Index} />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

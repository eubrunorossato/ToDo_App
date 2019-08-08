import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../Style/custom.css'

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Authentication from './Authentication';
import Index from '../Components/ToDo';

export default class App extends Component {
  render() {
      return (
          <Router>
              <Authentication>
                  <Route exact path="/home" component={Index} />
                  <Route exact path="/" component={Index} />
              </Authentication>
          </Router>
      )
  }
}


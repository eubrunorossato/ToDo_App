import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../Style/custom.css'

import React, { Component } from 'react';
// import login from '../Components/login';
// import Menu from '../Components/menuClass'
// import Index from '../Routes/index';
// import Login from '../Routes/login';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'
import Index from '../Components/ToDo';
import Login from '../Components/login';
import { createHashHistory } from 'history'
const history = createHashHistory()


export default class App extends Component {

  constructor(props) {
    super(props);
    this.Authentication = this.Authentication.bind(this);

  };


//   // exportMenu() {
//   //   return localStorage.getItem('token') && localStorage.getItem('refreshToken') ? <Menu register='' tasks='Tasks' /> : <Menu register='Register' tasks='' />;
//   // };

//   // exportBody() {
//   //   return localStorage.getItem('token') && localStorage.getItem('refreshToken') ? <Index /> : <Login/>;
//   // };

  Authentication (props) {
    if(localStorage.getItem('token') && localStorage.getItem('refreshToken')){
        console.log("index")
    }
    history.push('/homePage')
  }



  render() {
    return (
      <div className='container'>
      <HashRouter>
        <Switch>
            <Route exact path ='/login' component={Login}/>
            <Route path='/' component={this.Authentication()}>
              <Route path='/homePage' component={Index}/>
            </Route>
          </Switch>
      </HashRouter>
      </div>
    )
  }

}

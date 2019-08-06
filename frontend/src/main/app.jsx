// import 'modules/bootstrap/dist/css/bootstrap.min.css'
// import 'modules/font-awesome/css/font-awesome.min.css'
// import '../Style/custom.css'

// import React, { Component } from 'react';
// import login from '../Components/login';
// import Menu from '../Components/menuClass'
// import Index from '../Routes/index';
// import Login from '../Routes/login';


// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.exportMenu = this.exportMenu.bind(this);
//     this.exportBody = this.exportBody.bind(this);
//   };


//   // exportMenu() {
//   //   return localStorage.getItem('token') && localStorage.getItem('refreshToken') ? <Menu register='' tasks='Tasks' /> : <Menu register='Register' tasks='' />;
//   // };

//   // exportBody() {
//   //   return localStorage.getItem('token') && localStorage.getItem('refreshToken') ? <Index /> : <Login/>;
//   // };

//   Authentication = (props) => {
//     if(localStorage.getItem('token') && localStorage.getItem('refreshToken')){
//       <Menu register='' tasks='Tasks' />
//       <Index />
//     }else{}
//   }

//   render() {
//     return (
//       <div className='container'>
//       <Router>
//         <Route exact path ='/login' component={login}/>
//           <Route exact path='/' component={Authentication()}>

//           </Route>
//       </Router>
//       </div>
//     )
//   }

// }

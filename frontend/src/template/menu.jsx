import React from 'react';
import '../Style/menu.css'


export default props => (

<nav className="navbar navbar-inverse bg-inverse">
  <div className="container">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">
        <i className="fa fa-calendar-check-o">ToDoApp</i>
      </a>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-left">
        <li><a href='/'>{props.register}</a></li>
        <li><a href='#/todos'>{props.tasks}</a></li>
      </ul>
    </div>
  </div>
</nav>
)

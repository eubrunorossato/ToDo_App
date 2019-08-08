import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse bg-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <i className="fa fa-calendar-check-o">ToDoApp</i>
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li><Link to="/register">{this.props.register}</Link></li>
                <li><Link to="/tasks">{this.props.tasks}</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

import React, { Component } from 'react';
import Menu from '../template/menu';

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
                <li><a href={'#/' + this.props.register}>{this.props.register}</a></li>
                <li><a href={'#/' + this.props.tasks}>{this.props.tasks}</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

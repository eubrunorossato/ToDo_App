import React from 'react';
import './menu.css'

export default props=> (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-header" href="#">
                <a>
                    <i className="fa fa-calendar-check-o">ToDoApp</i>
                </a>
            </div>

            <div>
                    <ul className="nav">
                        <li><a>Tarefas</a></li>
                        <li><a>Sobre</a></li>
                    </ul>
            </div>

        </div>
    </nav>
)
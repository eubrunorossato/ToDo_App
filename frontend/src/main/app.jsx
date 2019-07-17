import React from 'react';
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import ToDo from '../ToDo/ToDo';
import About from '../about/about';
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu/>
        <ToDo />
        <About />
    </div>
    
)